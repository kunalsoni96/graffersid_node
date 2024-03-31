const mongoose = require('mongoose')
const productModel = new mongoose.Schema({
    name:{
        type:String
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId, ref:'User'
    },
    brand:{
        type:String
    },
    title:{
        type:String
    },
    price:{
        type:String
    }
}, {timestamps:true})

module.exports = mongoose.model('Product', productModel)