const mongoose = require('mongoose');
const dataSchema = mongoose.Schema({
    userID:{type : mongoose.Schema.Types.ObjectId, required : true},
    productID:{type : mongoose.Schema.Types.ObjectId, required : true},
    payable:{type : String, required : true},
    customer_details:{type : String, required : true},
    ship_details:{type : String, required : true},
    trans_id:{type : String, required : true},
    val_id:{type : String, required : true},
    payment_status:{type : String, required : true},
    delivery_status:{type : String, required : true},
    total:{type : Number, required : true},
    vat:{type : Number, required : true}
}, {timestamps:true, versionKey:false})
const invoiceModel = mongoose.model('e-commerceBackend', dataSchema);
module.exports = invoiceModel;