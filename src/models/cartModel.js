const mongoose = require('mongoose')
const cartModel = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId, ref:'User'
    },
    productId:{
        type:mongoose.Schema.Types.ObjectId, ref:'Product'
    },
   quantity:{
        type:Number
   }
}, {timestamps:true})

module.exports = mongoose.model('Cart', cartModel)