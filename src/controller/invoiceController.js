const invoiceModel = require('../model/invoiceModel');


//CRUD

//C = Create
exports.InsertsInvoice=(req, res)=>{
    let reqBody = req.Body;
    invoiceModel.create(reqBody, (err, data)=>{
        if(err){
            res.status(400).json({status:"fail", data:err})
        }
        else{
            res.status(200).json({status:"success", data: data})
        }
    })
}

//R = Read
exports.ReadInvoice=(req, res)=>{
    let query = {};
    let projection = "userID productID payable customer_details ship_details trans_id val_id payment_status delivery_status total vat";
    brandModel.find(query, projection, (err, data)=>{
        if(err){
            res.status(400).json({status:"fail", data:err})
        }
        else{
            res.status(200).json({status:"success", data: data})
        }
    })
}

//U = Update
exports.UpdateInvoice=(req, res)=>{
    let id = req.params.id;
    let query = {_id: id};
    let reqBody = req.body;
    invoiceModel.updateOne(query, reqBody, (err, data)=>{
        if(err){
            res.status(400).json({status:"fail", data:err})
        }
        else{
            res.status(200).json({status:"success", data: data})
        }
    })
}

//D = Delete
exports.DeleteInvoice=(req, res)=>{
    let id = req.params.id;
    let query = {_id:id};
    invoiceModel.remove(query, (err, data)=>{
        if(err){
            res.status(400).json({status:"fail", data:err})
        }
        else{
            res.status(200).json({status:"success", data: data})
        }
    })
} 