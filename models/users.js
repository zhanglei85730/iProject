var mongoose = require('mongoose')
var UsersSchema = require('../schemas/users') //拿到导出的数据集模块
var Users = mongoose.model('Users', UsersSchema) // 编译生成Movie 模型,数据表名是users,

module.exports = Users

//数据crud
module.exports = {
  //  通过实例化model，创建一个model实例
  add: function(req, res, next) {
    var _user = new User(req.body.user);//相当于调用了Model.create(req.body)
    _user.save(function (err, user) {
      if (err) {
        //doSomething...
      } else {
        //doSomething...
      }
    })
  },

  delete: function (req, res) {
    var id = req.query._id;
    User.remove({_id: id}, function (err) {
      if (err) {
        //doSomething...
      } else {
        //doSomething...
      }
    })
  },
  update: function (req, res) {

    var id = req.body.id;
    var userParams = req.body;

    User.findById(id, function (err, user) {
      if (err) {
        //doSomething...
      } else {
        _user = _.extend(user, userParams);
        _user.save(function (err, user) {
          if(err) {
            //doSomething...
          } else {
            //doSomething...
          }
        })
      }
    })
  },
  list: function (req, res) {
    User.fetch(function (err, users) {
      var resultUsers=_.map(users, function(user){
      if (err){
        //doSomething...
      } else {
        //doSomething...
      }
    });
  });
 },
};