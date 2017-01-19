 var mongoose = require('mongoose');
 // mongoose.connect('mongodb://localhost/myapp');
 // var db = mongoose.connection;
 // mongoose.Promise = global.Promise;

 // db.on('error', console.error.bind(console, 'connection error:'));
 // db.once('open', function() {
 //     console.log('连接数据库成功')
 // });


 // // 建立数据结构
 // var UserSchema = mongoose.Schema({
 //     name: String,
 //     age: Number,
 //     sexual: String
 // })

 // var User = mongoose.model('User', UserSchema);


 // var dbw = {
 //     find: function() {
 //         User.find({ name: 'zhanglei' }, function(err, users) {
 //             return users;
 //         })
 //     }
 // }

 module.exports = {
     connect: function(uri) {
         mongoose.connect(uri);
         mongoose.Promise = global.Promise;
     },
     model: function() {
         return mongoose.model('User', mongoose.Schema({
             name: String,
             age: Number,
             sexual: String
         }));
     }
 }