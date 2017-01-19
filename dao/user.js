 // 引入Mongoose模块
 var mongoose = require('mongoose');
 mongoose.Promise = global.Promise;
 //获取数据库连接
 //链接数据库
 var connectStr = 'mongodb://localhost/myapp';
 mongoose.connect(connectStr);
 var db = mongoose.connection;
 //测试是否连接成功
 db.on('error', console.error.bind(console, 'connection error:'));
 db.once('open', function() {
     console.log('连接数据库成功')
 });
 //建立集合（数据表）数据结构
 var schema = mongoose.Schema({
     name: String,
     age: Number,
     sexual: String
 });
 //导出数据结构
 module.exports = mongoose.model('User', schema);