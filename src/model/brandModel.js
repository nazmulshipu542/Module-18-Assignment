const mongoose = require('mongoose');
const dataSchema = mongoose.Schema({
    brandName:{type: String, required: true},
    brandImg:{type: Image, required: true}
}, {timestamps: true, versionKey: false})
const brandModel = mongoose.model('e-commerceBackend', dataSchema);
module.exports = brandModel;