const express=require("express");
const  connect  = require("./configs/db")
const app=express();
const cors =require("cors");
const MainController=require("./controller/main.controller");
app.use(express.json());
app.use(cors());

app.use("/restaurant",MainController);

app.listen(5000,async()=>{
    try{
       await connect();
      console.log("connected");
    }catch(err){
       console.log(err.message);
    }
})