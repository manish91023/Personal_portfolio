import mongoose from "mongoose";
const certificateSchema=new mongoose.Schema({
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
  

  
})

export default  mongoose.model("Certtificate",certificateSchema)