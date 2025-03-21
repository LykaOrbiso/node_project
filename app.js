//this imports express
const express = require('express');
//calling pages under folder routes
const router = require("./routes/pages");

//use dotenv to expose our environment variables
require('dotenv').config();

//we create a new instance of express as the app object
const app = express();
//PORT assignment
const PORT = process.env.PORT;

//implementing routes
app.use(router);

//start our server
app.listen(PORT, () =>{
    console.log(`Server started on port: ${PORT}`);
});

