const mongoose = require('mongoose');
const dataSchema = mongoose.Schema({
    userID:{type : mongoose.Schema.Types.ObjectId, required : true},
    productID:{type : mongoose.Schema.Types.ObjectId, required : true},
    description:{type : String, required : true},
    rating:{type : Number, required : true}
}, {timestamps:true, versionKey:false})
const reviewModel = mongoose.model('e-commerceBackend', dataSchema);
module.exports = reviewModel;