const express=require("express")
const app=express();


const slotController=require("./controllers/slot.controller");
const ticketController=require("./controllers/ticket.contoller") 
const  historyController=require("./controllers/history.controller");
app.use(express.json());
app.use("/slot",slotController);
app.use("/ticket",ticketController);
app.use("/history",historyController);

module.exports=app