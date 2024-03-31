const Product = require('./../models/productModel');

exports.create = async(req, res)=>{
    try{
        const data = await Product(req.body);
        data.userId = req.params.id
        data.save()
        return res.json({message:'success', data:data})
        }
        catch(e){
        return res.json({error:e})
        }
}

exports.list = async(req, res)=>{
        try{
        const data = await Product.find();
        return res.json({message:'success', data:data})
        }
        catch(e){
        return res.json({error:e}) 
        }
}

exports.update = async(req, res)=>{
    try{
        const data = await Product.findOne({_id:req.params.id});
        if(!data){
        return res.json({error:'error', message:'product not exist'}) 
        }
        data.name = req.body.name
        data.brand = req.body.brand
        data.title = req.body.title
        data.save()
        return res.json({message:'success', data:data})
        }
        catch(e){
        return res.json({error:e})
        }
}

exports.delete = async(req, res)=>{
    try{
        const data = await Product.findByIdAndDelete({_id:req.params.id});
        if(!data){
        return res.json({error:'error', message:'product not found'})
        }
        return res.json({message:'success', data:data})
        }
        catch(e){
        return res.json({error:e})
        }
}