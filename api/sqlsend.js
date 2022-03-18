var express = require('express');
var router = express.Router();

var dbconfig = require('../db/dbconfig')

var mysql= require('mysql');
var connection = mysql.createConnection(dbconfig);




router.get('/sql',(req,res)=>{
    connection.query('SELECT * FROM react_suppose.suppose ',(error,result)=>{
        if(error) throw error;
        console.log('쿼리의 결과값 :', result )
        res.send(result)
        
    })
})



router.get('/',(req,res)=>{
    res.send( 'sqlsend 의 루트 Page ')
})





module.exports = router