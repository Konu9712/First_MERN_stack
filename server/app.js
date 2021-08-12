const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
var cookieParser = require('cookie-parser')
const port = process.env.PORT || 5000;

dotenv.config({path: './config.env'});          //Path of config [put this file in .gitignore]
require("./db/conn")                            //Require Database
const User = require("./model/userSechma");     //Require Sechma[Collection-type]

app.use(express.json());                        //Convert Data to json
app.use(cookieParser())

app.use(require("./router/auth"));              //Link Router file




// app.get("/",(req,res)=>{
//     res.send("Hello")
// })

// app.get("/about", middleware,(req,res)=>{
//     res.send("About page")
// })



//Listen Server
app.listen(port,()=>{
    console.log(`listening to port: ${port}`);
});