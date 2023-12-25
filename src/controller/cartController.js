const cartModel = require('../model/cartModel');


//CRUD

//C = Create
exports.InsertsCart=(req, res)=>{
    let reqBody = req.Body;
    cartModel.create(reqBody, (err, data)=>{
        if(err){
            res.status(400).json({status:"fail", data:err})
        }
        else{
            res.status(200).json({status:"success", data: data})
        }
    })
}

//R = Read
exports.ReadCart=(req, res)=>{
    let query = {};
    let projection = "userID productID color quantity size price";
    cartModel.find(query, projection, (err, data)=>{
        if(err){
            res.status(400).json({status:"fail", data:err})
        }
        else{
            res.status(200).json({status:"success", data: data})
        }
    })
}

//U = Update
exports.UpdateCart=(req, res)=>{
    let id = req.params.id;
    let query = {_id: id};
    let reqBody = req.body;
    cartModel.updateOne(query, reqBody, (err, data)=>{
        if(err){
            res.status(400).json({status:"fail", data:err})
        }
        else{
            res.status(200).json({status:"success", data: data})
        }
    })
}

//D = Delete
exports.DeleteCart=(req, res)=>{
    let id = req.params.id;
    let query = {_id:id};
    cartModel.remove(query, (err, data)=>{
        if(err){
            res.status(400).json({status:"fail", data:err})
        }
        else{
            res.status(200).json({status:"success", data: data})
        }
    })
} 