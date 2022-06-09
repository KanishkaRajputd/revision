const Product=require("../models/product.model");
const express=require("express");
const Reviews=require("../models/reviews.model");
const router=express.Router();

router.post("/",async(req,res)=>{
try{
const user=await Product.create(req.body);
    return  res.status(201).send(user);
}catch(err){
return res.status(400).send({
    statue:"failure",
    msg:err.message
})
}
})


router.get("/",async(req,res)=>{
    try{
    const user=await Product.find().lean().exec();
        return  res.status(200).send(user);
    }catch(err){
    return res.status(500).send({
        statue:"failure",
        msg:err.message
    })
    }
    })
    router.get("/:id",async(req,res)=>{
        try{
        const user=await Product.findById({"_id":req.params.id}).lean().exec();
            return  res.status(200).send(user);
        }catch(err){
        return res.status(500).send({
            statue:"failure",
            msg:err.message
        })
        }
        })
        router.patch("/:id",async(req,res)=>{
            try{
            const user=await Product.findByIdAndUpdate(req.params.id,req.body).lean().exec();
                return  res.status(200).send(user);
            }catch(err){
            return res.status(500).send({
                statue:"failure",
                msg:err.message
            })
            }
            });
           
           
            router.post("/:id/reviews",async(req,res)=>{
                try{
                const review=await Reviews.create(req.body);
                const product=await Product.findByIdAndUpdate(req.params.id,{$push: { reviewsId: review._id }});
                    return  res.status(201).send(product);
                }catch(err){
                return res.status(400).send({
                    statue:"failure",
                    msg:err.message
                })
                }
                })  

                router.delete("/:id/reviews/:idx", async (req, res) => {
                    try {
                        const review = await Reviews.findByIdAndDelete(req.params.idx);
                        const product = await Product.findByIdAndDelete(req.params.id, { $pull: { reviewsId:req.params.idx }});
                        return res.status(200).send({ "review": review });
                    } catch (error) {
                        return res.status(500).send({ "error": error.message });
                    }
                });
                router.delete("/:id", async (req, res) => {
                    try {
                        
                        const product = await Product.findByIdAndDelete({_id:req.params.id});
                        return res.status(200).send(product);
                    } catch (error) {
                        return res.status(500).send({ "error": error.message });
                    }
                });



module.exports=router;
