var express = require('express');
var server = express();
var path = require('path');
var open = require('open');
var livereload = require('express-livereload');

livereload(server, config={});
server.use(express.static(__dirname));
// server.use(multer({dest:'./uploads/'}));
server.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
server.listen(7001,function(){
  console.log('Server started at localhost:7001');
  open('http://localhost:7001');
});