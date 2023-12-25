const profileModel = require('../model/profileModel');


//CRUD

//C = Create
exports.InsertsProfile=(req, res)=>{
    let reqBody = req.Body;
    profileModel.create(reqBody, (err, data)=>{
        if(err){
            res.status(400).json({status:"fail", data:err})
        }
        else{
            res.status(200).json({status:"success", data: data})
        }
    })
}

//R = Read
exports.ReadProfile=(req, res)=>{
    let query = {};
    let projection = "userID address city country email name phone ship_postcode ship_state";
    profileModel.find(query, projection, (err, data)=>{
        if(err){
            res.status(400).json({status:"fail", data:err})
        }
        else{
            res.status(200).json({status:"success", data: data})
        }
    })
}

//U = Update
exports.UpdateProfile=(req, res)=>{
    let id = req.params.id;
    let query = {_id: id};
    let reqBody = req.body;
    profileModel.updateOne(query, reqBody, (err, data)=>{
        if(err){
            res.status(400).json({status:"fail", data:err})
        }
        else{
            res.status(200).json({status:"success", data: data})
        }
    })
}

//D = Delete
exports.DeleteProfile=(req, res)=>{
    let id = req.params.id;
    let query = {_id:id};
    profileModel.remove(query, (err, data)=>{
        if(err){
            res.status(400).json({status:"fail", data:err})
        }
        else{
            res.status(200).json({status:"success", data: data})
        }
    })
} 