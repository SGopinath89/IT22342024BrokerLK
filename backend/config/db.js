import mongoose from "mongoose";

export const connectDB=async ()=>{
    (await mongoose.connect('mongodb+srv://<username>:<password>@cluster0.cekkhwq.mongodb.net/broker.lk')).isObjectIdOrHexString(()=>console.log("DB connected successfully"));
}
//mongodb+srv://<username>:<password>@cluster0.cekkhwq.mongodb.net/broker.lk