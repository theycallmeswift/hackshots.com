var cluster = require('cluster')
  , express = require('express')
  , http = require('http')
  , querystring = require('querystring')
  , util = require('util')
  , app = express()
  , request = require('request')
  , port = process.env.PORT || 3000
  , env = process.env.NODE_ENV || 'development';

if (cluster.isMaster) {
  throw new Error("should only be invoked as cluster worker")
}

app.configure(function() {
  app.use(express.static(__dirname + '/public'));
});

function force_www_and_ssl(req, res, next) {
  if(env === 'production') {
    if (req.headers.host.match(/^www/) !== null && req.protocol === 'https') {
      next();
    } else {
      url = 'https://www.hackshots.com/' + req.headers.host + req.url;
      util.log(url);
      res.redirect(url);
    }
  } else {
    next();
  }
}

app.get('/api/v1/i', [force_www_and_ssl], function(req, res) {
  var qs = querystring.stringify(req.query)
    , api_url = "http://pinkyurl.com/i?" + qs;
  util.log('Worker #' + cluster.worker.uniqueID + ' Requesting: ' + api_url);
  request.get(api_url).pipe(res);
});

http.createServer(app).listen(port);
