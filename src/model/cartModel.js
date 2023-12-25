const mongoose = require('mongoose');
const dataSchema = mongoose.Schema({
    userID:{type : mongoose.Schema.Types.ObjectId, required : true},
    productID:{type : mongoose.Schema.Types.ObjectId, required : true},
    color:{type : String, required : true},
    quantity:{type : Number, required : true},
    size:{type : Number, required : true},
    price:{type : Number, required : true}
}, {timestamps:true, versionKey:false})
const cartModel = mongoose.model('e-commerceBackend', dataSchema);
module.exports = cartModel;