import mongoose from "mongoose";

const  vehicleSchema = new mongoose.Schema({
    name:{type:String, required:true},
    description:{type:String,required:true},
    price:{type:Number,required:true},
    image:{type:String,required:true},
    category:{type:String,required:true}
})

const vehiclemodel = mongoose.model.vehicle || mongoose.model("Vehicle",vehicleSchema);

export default vehiclemodel;