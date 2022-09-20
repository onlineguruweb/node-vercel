// Import packages
const express = require("express");
const home = require("./routes/home");
const mongoose = require('mongoose');
require('dotenv').config();

// Middlewares
const app = express();
app.use(express.json());

console.log('testing',process.env.MONGO_URL)

// mongoose.connect('mongodb+srv://onlineguruweb:Guru23052069@cluster0.yalvu.mongodb.net/?retryWrites=true&w=majority',{
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   })
//     .then(() => {
//       console.log('connected to database')
//     })
//     .catch((err) => {
//       console.log(err)
//     }) 

app.use("/", home);
// Routes
app.use("/home", home);

// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
