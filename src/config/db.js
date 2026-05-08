import mongoose from "mongoose";


export const connectToDB = async => {
    try{
        mongoose.connect(process.env.MONGO_URI)

        console.log("connected to DB ")

    }
    catch(error){
        console.log("Error connecting to DB");
        process.exit(1);
    }
}