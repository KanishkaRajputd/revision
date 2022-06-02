const mongoose=require("mongoose")
const slotSchema=new mongoose.Schema({

floorNo:{type:Number,required:true},
  slotNo:{type:Number,required:true},
 occupied:{type:Boolean,required:false,default:false}

}
,{
    timestamps:true,
    versionKey:false
})
const Slot=mongoose.model("slot",slotSchema);
module.exports=Slot;