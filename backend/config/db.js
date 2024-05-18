import mongoose from "mongoose";

export const connectDB=async ()=>{
    await mongoose.connect('mongodb+srv://Admin:Admin123@cluster0.cekkhwq.mongodb.net/IT22342024BrokerLK').then(()=>console.log("DB connected successfully"));
}
