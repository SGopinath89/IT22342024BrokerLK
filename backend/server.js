import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";

const app=express();
const port=8081;

app.use(express.json());
app.use(cors());

connectDB();

app.get('/', (req, res) => {
    res.send("API working");
})

app.listen(port,()=>{
    console.log("server started");
})

//mongodb+srv://<username>:<password>@cluster0.cekkhwq.mongodb.net/?