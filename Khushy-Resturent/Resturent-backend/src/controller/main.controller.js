const Main=require("../models/main.Model");
const express=require("express");
const router=express.Router();


router.post("/",async(req,res)=>{
try{
const resto=await  Main.create(req.body);
 return res.status(201).send(resto)
}catch(err){
   return res.status(400).send({
        status:"Failure",
        msg:err.message
    })
}
})
router.get("/",async(req,res)=>{
    try{

        const page=req.query.page||1;
        const limit=9;
        const skip=(page-1)*limit;
        const sorting = req.query.sort.split(",");
        const filtering=req.query.filter.split(",");
        const filterby=filtering[0]||"";
         const filterorder=filtering[1]||"";
        let sortby= sorting[0] || "_id";
        let val;
        if(skip>=0){
          val=skip
        }else{
        val=0;
        }
        const count=await  Main.find({[filterby]:filterorder}).count({});   
      const resto=await  Main.find({[filterby]:filterorder}).sort({[sortby]:+sorting[1]}).skip(val).limit(limit).lean().exec();
     return res.status(200).send({
                  products:resto,
                  count:count});
    }catch(err){
       return res.status(500).send({
            status:"Failure",
            msg:err.message
        })
    }
    })

module.exports=router;