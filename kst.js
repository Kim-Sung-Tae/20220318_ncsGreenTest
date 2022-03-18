var express = require('express')
var app = express();
var time = new Date();



app.get('/',(req,res)=>{
    res.send(' kst server 처음') 
})




app.listen(8080,(req,res)=>{
    console.log(  time + " console 확인 ")
})