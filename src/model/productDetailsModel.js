const mongoose = require('mongoose');
const dataSchema = mongoose.Schema({
    productID:{type : mongoose.Schema.Types.ObjectId, required : true},
    img1:{type : Image, required : true},
    img2:{type : Image, required : true},
    img3:{type : Image, required : true},
    img4:{type : Image, required : true},
    description:{type : String, required : true},
    color:{type : String, required : true},
    size:{type : Number, required : true}
}, {timestamps:true, versionKey:false})
const productDetailsModel = mongoose.model('e-commerceBackend', dataSchema);
module.exports = productDetailsModel;