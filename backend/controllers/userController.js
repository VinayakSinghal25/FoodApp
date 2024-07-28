const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/Users");

const registerUser = async (req, res) => {
    let email= req.body.email;
    let name=req.body.name;
    let password=req.body.password;
    //find whether email already exists or not
    const user= await UserModel.findOne({email:email});
    //this 8 will return a true or a false
    if(user){
        return res.send("User already exists");
    }
    //hash the password
    const salt = await bcrypt.genSalt(10);
    //10- how many times rotatae before generating salt, rotations-cryptography
    //encrypt it using the salt
    const hashedPassword = await bcrypt.hash(password,salt);
    //save 
    const newUser  = new UserModel({name:name,email:email,password:hashedPassword});
    const savedUser  = newUser.save();
    //create a json web token and return that
    const token = jwt.sign({userId: savedUser._id}, "55678");
    console.log(req.body);
    return res.json({user: newUser,token});
};

const loginUser = async (req,res) =>{
    let email= req.body.email;
    let password=req.body.password;
    const user = await UserModel.findOne({email:email});
    if(!user){
        return res.send("User Not Found");
    }
    //now compare password
    const match = await bcrypt.compare(password, user.password);
    if(!match){
        return res.send("password does not match")
    }
    const token = jwt.sign({userId: user._id}, "55678")    
    console.log(req.body);
    return res.json({user: user,token});
}


module.exports = { registerUser,loginUser };

//name,email,password
///req.body.email
