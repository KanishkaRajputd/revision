const express=require("express")
const router=express.Router(); 
const Slot=require("../models/slotmodel");
router.get("/",async(req,res)=>{
    try{
const slot=await Slot.find().lean().exec();
res.status(200).send(slot);
    }catch(err){
        res.status(500).send(err.message);
        console.log(err.message);
    }
})

router.post("/",async(req,res)=>{
    try{
const slot=await Slot.create(req.body);
res.status(201).send(slot);
    }catch(err){
        res.status(500).send(err.message);
        console.log(err.message);
    }
});
router.patch("/:id",async(req,res)=>{
    try{
const slot=await Slot.findByIdAndUpdate(_id=req.params.id,req.body,{
    new:true
});
res.status(201).send(slot);
    }catch(err){
        res.status(500).send(err.message);
        console.log(err.message);
    }
})
router.get("/:no",async(req,res)=>{
    try{
const slot=await Slot.find({floorNo:req.params.no}).lean().exec();
res.status(200).send(slot);
    }catch(err){
        res.status(500).send(err.message);
        console.log(err.message);
    }
})
module.exports=router;