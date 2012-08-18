var express = require('express')
  , http = require('http')
  , app = express()
  , port = process.env.PORT || 3000;

app.configure(function() {
  app.use(express.static(__dirname + '/public'));
});

http.createServer(app).listen(port);
