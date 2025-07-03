import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import certificateModel from "../models/certificate.model.js";


// Cloudinary storage setup
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "Portfilio_backend", 
    allowedFormats: ["jpg", "jpeg", "png", "gif"],
  },
});



const upload = multer({ storage: storage });

export const postCertificate=async(req,res)=>{
    console.log('comes')
    upload.single('image')(req,res,async(err)=>{
        
        if (err) {
            
            return res.status(400).send("Error uploading image.");
          }
          
          // Ensure the image has been uploaded and the file is available
          if (!req.file) {
            return res.status(400).send("No file uploaded.");
          } 
          
          // Ensure req.body contains form data
          const { title, description } = req.body;
      
          // If any required fields are missing, respond with an error
          if (!title || !description) {
            return res.status(400).send("Missing required fields.");
          }

          const certificate = await certificateModel.create({title,description,image:req.file.path})
          res.status(201).send({certificate,message:"certificate uploaded successfully"})
    })
}

export const getCertificate=async(req,res)=>{
    

    try {
        const certificate=await certificateModel.find();
        
        return res.status(200).json({message:"all certificate fetched successfully project",certificate});
    } catch (error) {
            return res.status(500).send("Error fetching projects");
    }

    
}