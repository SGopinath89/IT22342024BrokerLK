import mongoose from "mongoose";

export const connectDB=async ()=>{
    await mongoose.connect('mongodb+srv://Brokerlk1:B123@cluster0.teezko8.mongodb.net/brokerlk').then(()=>console.log("DB connected successfully"));
}
//mongodb+srv://<username>:<password>@cluster0.teezko8.mongodb.net/?