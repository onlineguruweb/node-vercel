// Import packages
const express = require("express");
const home = require("./routes/home");
const mongoose = require('mongoose');

// Middlewares
const app = express();
app.use(express.json());

// app.use(process.env.MONGO_URL,{})
// .then(()=>{
//     console.log("mongoose connected")
// })
// .catch((e)=>{
//     console.log(e);
// })

app.use("/", home);
// Routes
app.use("/home", home);

// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
