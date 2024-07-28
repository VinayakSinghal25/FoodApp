const mongoose = require('mongoose');

const UserModel = mongoose.model("users",{
    //id by defaul present in mongo
    name:{type:String},
    password:{type:String},
    email:{type:String}
    
    
})

module.exports = UserModel;