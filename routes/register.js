var express = require('express');
var router = express.Router();



router.post('/', function(req, res, next) {
    res.send('这只是一个测试');
});

module.exports = router;