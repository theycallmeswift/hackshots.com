var express = require('express')
  , http = require('http')
  , app = express()
  , port = process.env.PORT || 3000
  , env = process.env.NODE_ENV || 'development';

app.configure(function() {
  app.use(express.static(__dirname + '/public'));
});

function forcewww(req, res, next) {
  if(env === 'production') {
    if (req.headers.host.match(/^www/) !== null ) {
      next();
    } else {
      res.redirect('https://www.' + req.headers.host + req.url);
    }
  } else {
    next();
  }
}

app.get('/api/v1/i', [forcewww], function(req, res) {
  res.send('hello world');
});

http.createServer(app).listen(port);
