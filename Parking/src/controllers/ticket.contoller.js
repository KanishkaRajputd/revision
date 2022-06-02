const express=require("express")
const router=express.Router(); 
const Ticket=require("../models/ticketmodel");
const History=require("../models/historymodel")
router.get("/",async(req,res)=>{
    try{
const ticket=await Ticket.find().lean().exec();
 return res.status(200).send(ticket);
    }catch(err){
        console.log(err.message);
       return res.status(500).send(err.message);

    }
})

router.post("/",async(req,res)=>{
    try{
const ticket=await Ticket.create(req.body);
const history=await  History.create({
    ticketId:ticket._id
});
return res.status(201).send({ticket,history});
    }catch(err){
        console.log(err.message);
       return res.status(500).send(err.message);
       
    }
});

module.exports=router;