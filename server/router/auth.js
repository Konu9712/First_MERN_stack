const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


require("../db/conn");
const User = require("../model/userSechma");
const authenticate = require("../middleware/authenticate")





router.get("/",(req,res)=>{
    res.send("Hello from Router file")
});


router.post("/register", async (req,res)=>{
    const {name, email, phone, work, password, cpassword } = req.body;          //All Data is been fetched

    //If user forget to enter any field

    if(!name || !email || !phone || !work || !password || !cpassword){
        return res.status(422).json({message:"Enter everything"})
    }else {

        try{
            const userExist = await User.findOne({email:email})                     //Match email with database and fetch everything from DB
    
            if(userExist){
                return res.status(422).json({error:"Email Already Exist"});
            }else if(password  != cpassword){
                return res.status(422).json({error:"Password and confirm password does not match"});
            }
    
            const user = new User({name, email, phone, work, password, cpassword});   //If user is new then submit it to database [ DB-name: FETCHED-name] => name:name => name
            
            user.password = await bcrypt.hash(password,12);                         //Old-school method of Encryption the password and confirm-password bu bcrypt algorithm [12rounds]
            user.cpassword = await bcrypt.hash(cpassword,12);
            
            await user.save();
            res.status(201).json({message:"User registered successful"});                 
        }catch(e){
            console.log(e)
        }

    }

});

router.post("/signin", async (req,res)=>{
    const {email, password} = req.body;
    if(!email || !password){
        return res.status(422).json({error:"Enter everything"});
    }
    try{
        let token;
        const userLogin = await User.findOne({email:email})
        
        if(userLogin){
            const passswordConfirm = await bcrypt.compare(password,userLogin.password);
            token = await userLogin.generateAuthToken();
           

            res.cookie("jwtoken",token, {
                expiresIn: 86400,
                httpOnly:true      
            });
            
            if(passswordConfirm){

                return res.status(200).json({message:"password correct "});
                
            }else{
               
                return res.status(422).json({error:"Wrong password"});
            }
           // return res.status(200).json({message:"correct message"});
        }
        else{
            return res.status(422).json({error:"Wrong email"});
        }
    }catch(e){
        console.log(e)
    }
});

router.get("/about" , authenticate, (req,res)=>{
   
    res.send(req.rootUser);
})

router.get("/getdata", authenticate,(req,res)=>{
    res.send(req.rootUser);
})
router.post("/contact", authenticate, async(req,res)=>{
    try{
        const {name,email,phone,message} = req.body;
        if(!name || !email || !phone || !message){
            console.log("Please fill the contact form")
            return res.json({error:"Please fill the contact form"})
        }

        const userContact = await User.findOne({_id:req.userID});
        if(userContact){
            const userMessage = await userContact.addMessage(name,email,phone,message)
            await userContact.save();
            res.status(201).json({message:"User contact successfully"});
        }

    }catch(e){
        console.log(e)
    }
})


router.get("/signout" , (req,res)=>{
   res.clearCookie("jwtoken",{path:"/"})
    res.status(200).send("UserLogut");
})


module.exports = router;