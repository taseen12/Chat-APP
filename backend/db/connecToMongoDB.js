import mongoose from "mongoose";

const connectToMongoDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("conected to MongoDB")
    }
    catch(error){
        console.log("Error Connecting to MONGODB",error.message)
    }
}

export default connectToMongoDB