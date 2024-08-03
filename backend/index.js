const express = require('express');
const dishesRoutes = require('./routes/dishesRoutes'); // Importing routes
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://vinayaksinghal25:4Hc4sAbJ7watl1UQ@cluster0.dkhtda7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('Connected!'));

console.log("hello");

const app = express();
const port = 5000;
app.use(cors()); 
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
//mongodb username password
// 4Hc4sAbJ7watl1UQ
//vinayaksinghal25