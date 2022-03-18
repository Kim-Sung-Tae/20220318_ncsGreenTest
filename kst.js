var express = require('express')
var app = express();
var time = new Date();

var getsend = require('./api/getsend')
var postsend = require('./api/postsend')
var sqlsend = require('./api/sqlsend')


app.get('/',(req,res)=>{
    res.send(' kst server 처음') 
})


app.use('/getsend',getsend)
app.use('/postsend',postsend)
app.use('/sqlsend',sqlsend)



app.listen(8080,(req,res)=>{
    console.log(  time + " console 확인 ")
})