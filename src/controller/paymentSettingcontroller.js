const paymentSettingModel = require('../model/paymentSettingModel');


//CRUD

//C = Create
exports.InsertsPaymentSetting=(req, res)=>{
    let reqBody = req.Body;
    paymentSettingModel.create(reqBody, (err, data)=>{
        if(err){
            res.status(400).json({status:"fail", data:err})
        }
        else{
            res.status(200).json({status:"success", data: data})
        }
    })
}

//R = Read
exports.ReadPaymentSetting=(req, res)=>{
    let query = {};
    let projection = "userID productID store_id store_password currency success_url fail_url cancel_url ipn_url init_url";
    paymentSettingModel.find(query, projection, (err, data)=>{
        if(err){
            res.status(400).json({status:"fail", data:err})
        }
        else{
            res.status(200).json({status:"success", data: data})
        }
    })
}

//U = Update
exports.UpdatePaymentSetting=(req, res)=>{
    let id = req.params.id;
    let query = {_id: id};
    let reqBody = req.body;
    paymentSettingModel.updateOne(query, reqBody, (err, data)=>{
        if(err){
            res.status(400).json({status:"fail", data:err})
        }
        else{
            res.status(200).json({status:"success", data: data})
        }
    })
}

//D = Delete
exports.DeletePaymentSetting=(req, res)=>{
    let id = req.params.id;
    let query = {_id:id};
    paymentSettingModel.remove(query, (err, data)=>{
        if(err){
            res.status(400).json({status:"fail", data:err})
        }
        else{
            res.status(200).json({status:"success", data: data})
        }
    })
} 