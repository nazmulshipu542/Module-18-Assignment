const productDetailsModel = require('../model/productDetailsModel');


//CRUD

//C = Create
exports.InsertsProductDetails=(req, res)=>{
    let reqBody = req.Body;
    productDetailsModel.create(reqBody, (err, data)=>{
        if(err){
            res.status(400).json({status:"fail", data:err})
        }
        else{
            res.status(200).json({status:"success", data: data})
        }
    })
}

//R = Read
exports.ReadProductDetails=(req, res)=>{
    let query = {};
    let projection = "productID img1 img2 img3 img4 description color size";
    productDetailsModel.find(query, projection, (err, data)=>{
        if(err){
            res.status(400).json({status:"fail", data:err})
        }
        else{
            res.status(200).json({status:"success", data: data})
        }
    })
}

//U = Update
exports.UpdateProductDetails=(req, res)=>{
    let id = req.params.id;
    let query = {_id: id};
    let reqBody = req.body;
    productDetailsModel.updateOne(query, reqBody, (err, data)=>{
        if(err){
            res.status(400).json({status:"fail", data:err})
        }
        else{
            res.status(200).json({status:"success", data: data})
        }
    })
}

//D = Delete
exports.DeleteProductDetails=(req, res)=>{
    let id = req.params.id;
    let query = {_id:id};
    productDetailsModel.remove(query, (err, data)=>{
        if(err){
            res.status(400).json({status:"fail", data:err})
        }
        else{
            res.status(200).json({status:"success", data: data})
        }
    })
} 