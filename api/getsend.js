var express = require('express')
var router = express.Router();





router.get('/',(req,res)=>{
    res.send( ' getsend 의 루트 Page ')
})


router.get('/getjson',(req,res)=>{
    res.send( { "url":'/getsend/getjson'} );
})




module.exports = router