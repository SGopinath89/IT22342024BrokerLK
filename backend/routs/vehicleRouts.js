import express from "express"
import multer from "multer"
import { addVehicle } from "../controllers/vehicleController.js";

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