const mongoose=require("mongoose")
const connect=()=>{
    return mongoose.connect(
        "mongodb+srv://KanishkaRajput:khushy1234@cluster0.516ub.mongodb.net/Parkinglot?retryWrites=true&w=majority"
        );
      
      
        module.exports=connect;
}
module.exports=connect;