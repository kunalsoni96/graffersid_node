const User = require('./../models/userModel');

exports.create = async(req, res)=>{
    try{
    const data = await User(req.body);
    data.save()
    return res.json({message:'success', data:data})
    }
    catch(e){
    return res.json({error:e})
    }
}

exports.list = async(req, res)=>{
    try{
    const data = await User.find();
    return res.json({message:'success', data:data})
    }
    catch(e){
    return res.json({error:e}) 
    }
}

exports.update = async(req, res)=>{
    try{
    const data = await User.findOne({_id:req.params.id});
    if(!data){
    return res.json({error:'error', message:'user not exist'}) 
    }
    data.name = req.body.name
    data.mobile = req.body.mobile
    data.save()
    return res.json({message:'success', data:data})
    }
    catch(e){
    return res.json({error:e})
    }
}

exports.delete = async(req, res)=>{
    try{
    const data = await User.findByIdAndDelete({_id:req.params.id});
    if(!data){
    return res.json({error:'error', message:'user not found'})
    }
    return res.json({message:'success', data:data})
    }
    catch(e){
    return res.json({error:e})
    }
}