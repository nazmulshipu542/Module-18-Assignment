const mongoose = require('mongoose');
const dataSchema = mongoose.Schema({
    productID:{type : mongoose.Schema.Types.ObjectId, required : true},
    title:{type : String, required : true},
    description:{type : String, required : true},
    price:{type : Number, required : true},
    discount:{type : Number, required : true},
    discountPrice:{type : Number, required : true},
    image:{type : Image, required : true},
    star:{type : String, required : true},
    stock:{type : String, required : true},
    remark:{type : String, required : true},
    brandID:{type : mongoose.Schema.Types.ObjectId, required : true}
}, {timestamps:true, versionKey:false})
const productModel = mongoose.model('e-commerceBackend', dataSchema);
module.exports = productModel;