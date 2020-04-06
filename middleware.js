const express = require('express');
const morgan = require('morgan');
const app = express();

function logger(req, res, next){
   console.log('i am logger');
   next(new Error('error ouccerd'));
}

function logger2(err, req, res, next){
   console.log('i am logger2');
   console.log(err.message);
   next();
}

//미들웨어는 함수들의 연속이다.
//클라이언트의 요청이 들어오면 미들웨어의 첫번째 함수가 호출됨
app.use(logger);
app.use(logger2);
app.use(morgan('dev'));

var port = 3002;
app.listen(port, function(){
   console.log("Server is running :", port);
});