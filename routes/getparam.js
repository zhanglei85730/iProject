var express = require('express');
var router = express.Router();
router.post('/',function(req, res, next) {
	
  //res.render('getparam', {title: '获取参数',username:req.body.username});
  var username = req.body.username;
  var age = req.body.username;
  
  if(username!='' && age!=''){
  	res.render('getparam', {title: '获取参数',username:req.body.username});
  }else{
  	res.send('密码不能为空');
  };
  
});

module.exports = router;