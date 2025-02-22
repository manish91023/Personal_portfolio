import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import Project from "../models/project.model.js";

// Cloudinary storage setup
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "Portfilio_backend", 
    allowedFormats: ["jpg", "jpeg", "png", "gif"],
  },
});

const upload = multer({ storage: storage });

// Express route for projectPost
export const projectPost = async (req, res) => {
  // First, handle the file upload using multer middleware
  upload.single("image")(req, res, async (err) => {
    // Handle errors
    if (err) {
      console.log(err);
      return res.status(400).send("Error uploading image.");
    }
    
    // Ensure the image has been uploaded and the file is available
    if (!req.file) {
      return res.status(400).send("No file uploaded.");
    }
    
    // Ensure req.body contains form data
    const { title, description, technology } = req.body;

    // If any required fields are missing, respond with an error
    if (!title || !description || !technology) {
      return res.status(400).send("Missing required fields.");
    }

    // Create a new project entry
    const project = new Project({ title, description, image: req.file.path, technology });

    // Save the project to the database
    await project.save();

    // Respond with a success message
    res.send({
      message: "Image uploaded successfully",
      imageUrl: req.file.path,  // The URL of the uploaded image
    });
  });
};


export const projectGet = async (req, res) => {
        try {
            const project=await Project.find();
            console.log(project)
            return res.status(200).json(project)
        } catch (error) {
                return res.status(500).send("Error fetching projects");
        }
}

