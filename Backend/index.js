
import dotenv from "dotenv"
dotenv.config()
import express from "express";
import { v2 as cloudinary } from 'cloudinary';
import router from "./routes/project.route.js";
import certificaterouter from "./routes/certificate.route.js";
import mongoose from "mongoose";
import cors from "cors"
const app = express();
app.use(cors({ 
    origin:"https://manishkportfolio.netlify.app"
}))
app.use(express.urlencoded({extended:true}))
app.use(express.json())



mongoose.connect(process.env.MONGO_URI).then(()=>console.log("db connected")).catch((err)=>console.log(err))

    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUD_NAME, 
        api_key: process.env.CLOUD_API, 
        api_secret: process.env.CLOUD_SECRET 
    });
    

app.use("/project",router) 
app.use("/certificate",certificaterouter) 




app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
