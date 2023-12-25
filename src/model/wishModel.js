const mongoose = require('mongoose');
const dataSchema = mongoose.Schema({
    userID:{type : mongoose.Schema.Types.ObjectId, required : true},
    productID:{type : mongoose.Schema.Types.ObjectId, required : true}
}, {timestamps:true, versionKey:false})
const wishModel = mongoose.model('e-commerceBackend', dataSchema);
module.exports = wishModel;