const productModel = require('../model/productModel');


//CRUD

//C = Create
exports.InsertsProduct=(req, res)=>{
    let reqBody = req.Body;
    productModel.create(reqBody, (err, data)=>{
        if(err){
            res.status(400).json({status:"fail", data:err})
        }
        else{
            res.status(200).json({status:"success", data: data})
        }
    })
}

//R = Read
exports.ReadProduct=(req, res)=>{
    let query = {};
    let projection = "productID title description price discount discountPrice image star stock remark brandID";
    productModel.find(query, projection, (err, data)=>{
        if(err){
            res.status(400).json({status:"fail", data:err})
        }
        else{
            res.status(200).json({status:"success", data: data})
        }
    })
}

//U = Update
exports.UpdateProduct=(req, res)=>{
    let id = req.params.id;
    let query = {_id: id};
    let reqBody = req.body;
    productModel.updateOne(query, reqBody, (err, data)=>{
        if(err){
            res.status(400).json({status:"fail", data:err})
        }
        else{
            res.status(200).json({status:"success", data: data})
        }
    })
}

//D = Delete
exports.DeleteProduct=(req, res)=>{
    let id = req.params.id;
    let query = {_id:id};
    productModel.remove(query, (err, data)=>{
        if(err){
            res.status(400).json({status:"fail", data:err})
        }
        else{
            res.status(200).json({status:"success", data: data})
        }
    })
} 