const mongoose = require('mongoose');
const dataSchema = mongoose.Schema({
    categoryName:{type : String, required : true},
    categoryImg:{type : Image, required : true}
}, {timestamps:true, versionKey:false})
const categoryModel = mongoose.model('e-commerceBackend', dataSchema);
module.exports = categoryModel;