const mongoose = require('mongoose');
const dataSchema = mongoose.Schema({
    userID:{type : mongoose.Schema.Types.ObjectId, required : true},
    productID:{type : mongoose.Schema.Types.ObjectId, required : true},
    email:{type : String, required : true},
    otp:{type : Number, required : true}
}, {timestamps:true, versionKey:false})
const userModel = mongoose.model('e-commerceBackend', dataSchema);
module.exports = userModel;