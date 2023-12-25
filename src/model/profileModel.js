const mongoose = require('mongoose');
const dataSchema = mongoose.Schema({
    userID:{type : mongoose.Schema.Types.ObjectId, required : true},
    address:{type : String, required : true},
    city:{type : String, required : true},
    country:{type : String, required : true},
    email:{type : String, required : true},
    name:{type : String, required : true},
    phone:{type : String, required : true},
    ship_postcode:{type : String, required : true},
    ship_state:{type : String, required : true}
}, {timestamps:true, versionKey:false})
const profileModel = mongoose.model('e-commerceBackend', dataSchema);
module.exports = profileModel;