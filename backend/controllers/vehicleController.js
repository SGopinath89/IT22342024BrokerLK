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
        res.json({success:true,message:"Vehicle added"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}
//all vehicle list

const listVehicle=async(req, res) =>{
    try {
        const vehicle = await vehiclemodel.find({});
        res.json({success:true,data:vehicle});
    } catch (error) {
        console.log(error);
        res.jasoon({success:false,message:"error"});
    }
}

//remove vehicle

const removeVehicle=async(req, res) =>{
    try {
        const vehicle = await vehiclemodel.findById(req.body.id);
        fs.unlink(`uploads/$vehicle.image`,()=>{})

        await vehiclemodel.findById(req.body.id);
        res.json({success:true,message:"Vehicle removed"});
    } catch (error) {
        console.log(error);
        res.jasoon({success:false,message:"error"});
    }
}

export {addVehicle,listVehicle,removeVehicle}
