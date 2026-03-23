import mongoose from "mongoose";
const connectDb=async()=>{
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/BackendDb") 
        console.log("Connection established")  
    }
    catch(error){
        console.log("connection fail",error)
    }
   
    // 127.0.0.1 means localhost (your own computer)
    //27017 is the default port on which MongoDB runs 
}
export default connectDb;