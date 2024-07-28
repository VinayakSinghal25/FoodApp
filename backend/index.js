const express = require('express');
const dishesRoutes = require('./routes/dishesRoutes'); // Importing routes
const userRoutes = require("./routes/userRoutes");


const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/FoodAppDB')
  .then(() => console.log('Connected!'));

console.log("hello");

const app = express();
const port = 5000;

app.use(express.json()); // Correct usage

app.use((req,res,next)=>{
  console.log("Time: ", Date.now());
  next();
});

app.use('/api', dishesRoutes); // Using the routes

app.use("/api", userRoutes);



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

