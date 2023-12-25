const mongoose = require('mongoose');
const dataSchema = mongoose.Schema({
    name:{type : String, required : true},
    description:{type : String, required : true},
    img:{type : Image, required : true},
}, {timestamps:true, versionKey:false})
const featuresModel = mongoose.model('e-commerceBackend', dataSchema);
module.exports = featuresModel;