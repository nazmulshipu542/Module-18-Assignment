const mongoose = require('mongoose');
const dataSchema = mongoose.Schema({
    productID:{type : mongoose.Schema.Types.ObjectId, required : true},
    title:{type : String, required : true},
    description:{type : String, required : true},
    price:{type : Number, required : true},
    image:{type : Image, required : true}
}, {timestamps:true, versionKey:false})
const productSliderModel = mongoose.model('e-commerceBackend', dataSchema);
module.exports = productSliderModel;