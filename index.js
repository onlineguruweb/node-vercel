// Import packages
const express = require("express");
const home = require("./routes/home");
const mongoose = require('mongoose');

// Middlewares
const app = express();
app.use(express.json());

console.log('testing',process.env.MONGO_URL)

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    .then(() => {
      console.log('connected to database')
    })
    .catch((err) => {
      console.log(err)
    }) 

app.use("/", home);
// Routes
app.use("/home", home);

// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
