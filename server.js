var express = require('express')
  , http = require('http')
  , app = express();

app.configure(function() {
  app.use(express.static(__dirname + '/public'));
});

http.createServer(app).listen(3000);
