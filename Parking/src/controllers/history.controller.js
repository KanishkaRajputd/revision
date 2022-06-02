const express=require("express");
const router=express.Router(); 

const History=require("../models/historymodel")
router.get("/",async(req,res)=>{
    try{
const ticket=await History.find().lean().exec();
 return res.status(200).send(ticket);
    }catch(err){
        console.log(err.message);
       return res.status(500).send(err.message);

    }
})
router.get("/:id",async(req,res)=>{
    try{
const ticket=await History.find({ticketId:req.params.id}).lean().exec();
 return res.status(200).send(ticket);
    }catch(err){
        console.log(err.message);
       return res.status(500).send(err.message);

    }
})
router.get("/user/:id",async(req,res)=>{
    try{
const ticket=await History.find({ticketId:req.params.id}).lean().exec();
 return res.status(200).send(ticket);
    }catch(err){
        console.log(err.message);
       return res.status(500).send(err.message);

    }
})
module.exports=router;