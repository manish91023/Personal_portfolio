import mongoose from "mongoose";
const projectSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:[{
        type:String,
        required:true
    }],
    image:{
        type:String,
        required:true
    },
    technology:[{
        type:String,
        required:true
    }]
  
})

export default  mongoose.model("Project",projectSchema)