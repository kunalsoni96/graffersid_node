const Cart = require('./../models/cartModel');

exports.create = async(req, res)=>{
    try{
    const data = await Cart(req.body);
    data.userId = req.params.id
    data.productId = req.body.productId
    data.quantity = 1
    data.save()
    return res.json({message:'success', data:data})
    }
    catch(e){
    return res.json({error:e})
    }
}

exports.list = async(req, res)=>{
    try{
    const data = await Cart.find().populate('productId');
    return res.json({message:'success', data:data})
    }
    catch(e){
    return res.json({error:e}) 
    }
}

exports.update = async(req, res)=>{
    try{
        const data = await Cart.findOne({_id:req.params.id});
        if(!data){
        return res.json({error:'error', message:'product not exist'}) 
        }
        data.quantity = req.body.quantity
        data.save()
        return res.json({message:'success', data:data})
        }
        catch(e){
        return res.json({error:e})
        }
}

exports.delete = async(req, res)=>{
        try{
        const data = await Cart.findByIdAndDelete({_id:req.params.id});
        if(!data){
        return res.json({error:'error', message:'cart not found'})
        }
        return res.json({message:'success', data:data})
        }
        catch(e){
        return res.json({error:e})
        }
}