const mongoose=require("mongoose")
const roomSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
        unique:true,

    },
    conversation:{
        type:Array,
        default:[]

    },
    
})