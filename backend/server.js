import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import vehicleRouter from "./routs/vehicleRouts.js";


const app=express();
const port=8081;

app.use(express.json());
app.use(cors());

connectDB();

//api endpoint
app.use("/api/vehicle",vehicleRouter)

app.get('/', (req, res) => {
    res.send("API working");
})

app.listen(port,()=>{
    console.log("server started");
})

