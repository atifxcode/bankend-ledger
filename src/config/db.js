import mongoose from "mongoose";


export function connectToDB(){
    try{
        mongoose.connect(process.env.MONGO_URI)

        console.log("connected to db");

    }
    catch(error){
        console.log("Error connecting to DB");
        process.exit(1);
    }
}