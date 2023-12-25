const mongoose = require('mongoose');
const dataSchema = mongoose.Schema({
    userID:{type : mongoose.Schema.Types.ObjectId, required : true},
    productID:{type : mongoose.Schema.Types.ObjectId, required : true},
    invoiceID:{type : Number, required : true},
    quantity:{type : Number, required : true},
    price:{type : Number, required : true},
    color:{type : String, required : true},
    size:{type : Number, required : true}
}, {timestamps:true, versionKey:false})
const invoiceProductModel = mongoose.model('e-commerceBackend', dataSchema);
module.exports = invoiceProductModel;