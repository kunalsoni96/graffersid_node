const mongoose = require('mongoose')
const userModel = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    mobile:{
        type:String
    }
}, {timestamps:true})

module.exports = mongoose.model('User', userModel)