const mongoose=require("mongoose");
const ticketSchema=new mongoose.Schema({
carNo:{type:Number,required:true},
date:{type:Date,required:true},
slotId:{type : mongoose.Schema.Types.ObjectId, ref:"slot", required : true},
price:{type:Number,required:true}
}
,{
    timestamps:true,
    versionKey:false
})
const Ticket=mongoose.model("ticket",ticketSchema);
module.exports=Ticket;