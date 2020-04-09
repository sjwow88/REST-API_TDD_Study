var express = require('express');
var app = express();
var morgan = require('morgan');
var users = [
   {id: 1, name: 'jang'},
   {id: 2, name: 'kwak'},
   {id: 3, name: 'lee'},
]

app.use(morgan('dev'));

app.get('/users', function(req, res){
   res.json(users);
})

var port = 3002;
app.listen(port, function(){
   console.log('listening on port :',port);
})