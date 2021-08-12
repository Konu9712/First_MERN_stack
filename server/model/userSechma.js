const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv").config();
const jwt = require("jsonwebtoken");

const userSechma  = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    work:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    messages:[
        {
            name:{
                type:String,
                required:true
            },
            name:{
                type:String,
                required:true
            },
            email:{
                type:String,
                required:true
            },
            phone:{
                type:Number,
                required:true
            },
            message:{
                type:String,
                required:true
            },
        }
    ],
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ]
   
});


// ----------------If want to use middle ware to hash password------------------
// userSechma.pre('save', async function (next) {
//     if (this.isModified('password')) {
//         this.password = await bcrypt.hash(this.password,12)
//         this.cpassword = await bcrypt.hash(this.cpassword,12)

//     }
//     next();
// });

//Generate Toke
userSechma.methods.generateAuthToken = async function(){
    try{
        let token = jwt.sign({_id:this._id}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token:token});
        await this.save();
        return token;
    }catch(e){
        console.log(e);
    }
}

//Message Store
userSechma.methods.addMessage = async function(name,email,phone,message){
try{
    this.messages = this.messages.concate({name,email,phone,message});
    await this.save();
    return this.messages;
}catch(e){
    console.log(e)
}
}





const User =  mongoose.model("User",userSechma);
module.exports = User;