var express = require('express')
var router = express.Router();





router.post('/',(req,res)=>{
    res.send({ "post" : "postsend 의 루트 Page, post key 값 의 valuse"})
})





module.exports = router