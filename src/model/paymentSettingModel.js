const mongoose = require('mongoose');
const dataSchema = mongoose.Schema({
    userID:{type : mongoose.Schema.Types.ObjectId, required : true},
    productID:{type : mongoose.Schema.Types.ObjectId, required : true},
    store_id:{type : String, required : true},
    store_password:{type : Number, required : true},
    currency:{type : String, required : true},
    success_url:{type : Boolean, required : true},
    fail_url:{type : Boolean, required : true},
    cancel_url:{type : String, required : true},
    ipn_url:{type : String, required : true},
    init_url:{type : String, required: true}
}, {timestamps:true, versionKey:false})
const paymentSettingModel = mongoose.model('e-commerceBackend', dataSchema);
module.exports = paymentSettingModel;