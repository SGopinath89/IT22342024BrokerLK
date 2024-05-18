import vehiclemodel from "../models/vehiclemodel.js";
import fs from 'fs';

//add vehicle

const addVehicle = async(req,res) =>{
    let image_file_name = `${req.file.filename}`;

    const vehicle = new vehiclemodel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_file_name
    })
    try {
        await vehicle.save();
        res.jason({success:true,message:"Vehicle added"})
    } catch (error) {
        console.log(error)
        res.jason({success:false,message:"Error"})
    }
}

export {addVehicle}