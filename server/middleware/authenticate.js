const jwt = require('jsonwebtoken')
var cookieParser = require('cookie-parser')
const dotenv = require('dotenv').config();
const User = require("../model/userSechma")






const Authenticate = async (req, res, next)=>{
    try{
        const token =  req.cookies.jwtoken;
       
             if(!token){
                res.status(404).json({error:"Token does not fetched"});  
                 console.log("No token")
             }
                                                                                            
            const verifyToken = jwt.verify(token, process.env.SECRET_KEY);                               
            const rootUser = await User.findOne({ _id:verifyToken._id, "tokens.token":token});     
                                    
                if(!rootUser){
                     res.status(404).json({error:"Token does not match"});  
                                                                        
                }else{                                                                                               
                    req.token = token;
                    req.rootUser = rootUser;
                    req.userID = rootUser._id; 
                     }
        

  next();

    }catch(e){
        res.status(401).send("Unathori Token")
        console.log(e)
    }

}

module.exports = Authenticate;