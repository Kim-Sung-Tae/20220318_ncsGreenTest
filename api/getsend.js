var express = require('express')
var router = express.Router();





router.get('/',(req,res)=>{
    res.send( ' getsend 의 루트 Page ')
})





module.exports = router