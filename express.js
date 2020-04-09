var express = require('express');
var app = express();

app.get('/', function(req, res){
   res.send('Hello World!');
})

var port = 3002;
app.listen(port, function(){
   console.log("listening on port :", port);
})