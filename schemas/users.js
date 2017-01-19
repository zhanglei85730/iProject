var mongoose = require('mongoose');

//申明一个mongoons对象
var UsersSchema = new mongoose.Schema({
    name: String,
    age: Number,
    meta: {
        createAt: {
            type: Date,
            default: Date.now()
        },
        updateAt: {
            type: Date,
            default: Date.now()
        }
    }
})

//暴露出去的方法
module.exports = UsersSchema