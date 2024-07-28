const DishesModel = require("../models/Dishes");

const getDishes = async (req,res)=>{
    console.log("Hello");
     
    const dishes= await DishesModel.find({});
    console.log(dishes);
    return res.send(dishes);

};

module.exports={getDishes};


