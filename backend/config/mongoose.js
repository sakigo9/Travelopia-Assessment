const mongoose = require("mongoose");


const ConnectDB=async()=>{
    try{
        mongoose.set('strictQuery', true); 
       const connect=await mongoose.connect(process.env.Mongo_DB,{
        keepAlive: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
       });
       console.log("Successfully Connect with MongoDB",connect.connection.host)
    }catch(err){
       console.log(`Error : ${err.message}`)
       process.exit();
    }
}


module.exports=ConnectDB;