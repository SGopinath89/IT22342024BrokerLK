import express from "express"
import { addVehicle } from '../backend/controllers/vehicleController.js'
import multer from "multer"

const vehicleRouter = express.Router();


//image storage

const storage=multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`);
    }
});
const upload = multer({storage:storage});

vehicleRouter.post("/add",upload.single("image"),addVehicle); 

vehicleRouter.post("/add",addVehicle)


export default vehicleRouter;