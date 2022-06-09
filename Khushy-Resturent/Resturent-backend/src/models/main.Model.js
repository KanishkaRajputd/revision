const mongoose =require("mongoose");


const MainSchema=new mongoose.Schema({
image:{type:String,required:true},
title:{type:String,required:true},
tag:{type:String,required:true},
price:{type:Number,required:true},
striked_price:{type:String,required:true},

},{
    timestamps:true,
    versionKey:false
})
const Main=mongoose.model("resto",MainSchema);
module.exports=Main;