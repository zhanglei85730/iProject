var express = require('express');
var router = express.Router();
// var mongoose = require('mongoose'); //导入mongoose模块

var db = require('../dao/user.js'); //导入user数据模块



/* GET users listing. */
// router.post('/', function(req, res, next) {
//     res.send('respond with a resource');
// });

//查询所有用户数据
// router.post('/users', function(req, res, next) {
//     //向collection增加记录
//     // var u = new Users({name:'domi',age:1})
//     // u.save()

//     Users.fetch(function(err, users) {
//         if (err) {
//             console.log(err);
//         }
//         res.render('users', { title: '用户列表', users: users }) //这里也可以json的格式直接返回数据res.json({data: users});
//     })
// })

//Users.save({ name: 'domi', age: 1.5, sexual: '男' })



// router.post('/', function(req, res, next) {
//     //Users.insert();
//     res.reader('users', { tile: "用户列表", users: users })

// });

// db.find();

db.connect("mongodb://localhost/myapp");
var User = db.model();


// var ss = User.find({ name: 'mimi' }, function(err, result) {
//     console.log(result);
// });

// var mimi = new User({ name: 'mimi', age: 30, sexual: '男' });

// mimi.save(function(err, mimi) {
//     if (err) return console.error(err);
// });







router.post('/', function(req, res, next) {
    //查找所有数据
    User.find(function(err, u) {
        if (err) return console.error(err);
        res.render('users', { tile: "用户列表", uu: u })

    })

});

module.exports = router;