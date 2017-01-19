var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
mongoose.Promise = global.Promise;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
    // console.log('连接成功')
});

//建立schema指定新建集合名称为kitten{ collection: 'Kitten' },
// var kittySchema = mongoose.Schema({
//     name: String
// }, { collection: 'Kitten' });
// 实际在数据中默认帮你建立kittens数据文档并自动在文件名后加s, 不需要自己创建，
var kittySchema = mongoose.Schema({
        name: String
    })
    //建立模型
var Kitten = mongoose.model('Kitten', kittySchema);

var silence = new Kitten({ name: 'Silence' });
console.log(silence.name); // 'Silence'



// kittySchema.methods.speak = function() {
//     var greeting = this.name ?
//         "Meow name is " + this.name :
//         "I don't have a name";
//     console.log(greeting);
// }

var fluffy = new Kitten({ name: 'fluffy' });
// fluffy.speak(); // "Meow name is fluffy"
fluffy.save(function(err, fluffy) {
    if (err) return console.error(err);
    // fluffy.speak();
});
var mimi = new Kitten({ name: 'mimi' });


mimi.save(function(err, mimi) {
    if (err) return console.error(err);
    // fluffy.speak();
});
//保存文档（一条数据）


//查找集合（数据表）里所有文档（记录）
Kitten.find(function(err, kittens) {
    if (err) return console.error(err);
    console.log(kittens);
})

//查找以fluff开的文档（记录），回调第一个参数据为错误信息，第二个为返回的arr
// Kitten.find({ name: /^fluff/ }, function(err, ss) {
//     console.log(ss)
// });