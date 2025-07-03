import { useState } from "react";
import axios from "axios"
const Certificatepost = () => {
  const [loading,setLoading]=useState(false)
  const [title, setTitle] = useState("");
  const [description, setDescriptions] = useState([""]);
  const [image, setImages] = useState([]);

  // Add new description field
  const addDescription = () => {
    setDescriptions([...description, ""]);
  };

  // Handle description change
  const handleDescriptionChange = (index, value) => {
    const newDescriptions = [...description];
    newDescriptions[index] = value;
    setDescriptions(newDescriptions);
  };




  // Handle image selection
  const handleImageChange = (e) => {
    const file=e.target.files[0]
    if(!file){
        console.log("file not uploaded")
    }
    if(file){
        console.log(file)
    }
    setImages(e.target.files[0]); // Store selected files as an array
  };

  // Submit Form
  const handleSubmit = async(e) => {
    e.preventDefault();
    
    setLoading(true)
    const data={
        title:title,
        image:image,
        description:description
    }
    try {
      const res=await axios.post("http://localhost:3000/certificate/post",data,{
          headers:{
              "Content-Type":"multipart/form-data"
          }
      })
    } catch (error) {
      alert("error in submitting form");
      console.log(error)
    }finally{
      setLoading(false)
    }
    


  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Certificate Form</h2>
      <form  className="space-y-4">
        
        {/* Title Input */}
        <div>
          <label className="block font-medium">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter project title"
            required
          />
        </div>

        {/* Descriptions Input */}
        <div>
          <label className="block font-medium">Descriptions</label>
          {description.map((desc, index) => (
            <input
              key={index}
              type="text"
              value={desc}
              onChange={(e) => handleDescriptionChange(index, e.target.value)}
              className="w-full p-2 border rounded mb-2"
              placeholder={`Description ${index + 1}`}
              required
            />
          ))}
          <button type="button" onClick={addDescription} className="mt-1 text-blue-600">
            + Add Description
          </button>
        </div>


        {/* Image Upload */}
        <div>
          <label className="block font-medium">Upload Images</label>
          <input
            type="file"
            
            accept="image/*"
            onChange={handleImageChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Submit Button */}

        {
          loading && loading?<button  className="w-full bg-blue-500 text-white p-2 rounded">
          Loading
        </button>:<button onClick={handleSubmit} className="w-full bg-blue-500 text-white p-2 rounded">
          Submit
        </button>
        }
        
      </form>
    </div>
  );
};

export default Certificatepost;
