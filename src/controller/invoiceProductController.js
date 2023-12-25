const invoiceProductModel = require('../model/invoiceProductModel');


//CRUD

//C = Create
exports.InsertsInvoiceProduct=(req, res)=>{
    let reqBody = req.Body;
    invoiceProductModel.create(reqBody, (err, data)=>{
        if(err){
            res.status(400).json({status:"fail", data:err})
        }
        else{
            res.status(200).json({status:"success", data: data})
        }
    })
}

//R = Read
exports.ReadInvoiceProduct=(req, res)=>{
    let query = {};
    let projection = "userID productID invoiceID quantity price color size";
    invoiceProductModel.find(query, projection, (err, data)=>{
        if(err){
            res.status(400).json({status:"fail", data:err})
        }
        else{
            res.status(200).json({status:"success", data: data})
        }
    })
}

//U = Update
exports.UpdateInvoiceProduct=(req, res)=>{
    let id = req.params.id;
    let query = {_id: id};
    let reqBody = req.body;
    invoiceProductModel.updateOne(query, reqBody, (err, data)=>{
        if(err){
            res.status(400).json({status:"fail", data:err})
        }
        else{
            res.status(200).json({status:"success", data: data})
        }
    })
}

//D = Delete
exports.DeleteInvoiceProduct=(req, res)=>{
    let id = req.params.id;
    let query = {_id:id};
    invoiceProductModel.remove(query, (err, data)=>{
        if(err){
            res.status(400).json({status:"fail", data:err})
        }
        else{
            res.status(200).json({status:"success", data: data})
        }
    })
} 