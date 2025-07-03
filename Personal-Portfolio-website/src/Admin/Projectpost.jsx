import { useState } from "react";
import axios from "axios";
const Projectpost = () => {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescriptions] = useState([""]);
  const [technology, setTechnologies] = useState([""]);
  const [image, setImages] = useState([]);
  const [category, setCategory] = useState("web");

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

  // Add new technology field
  const addTechnology = () => {
    setTechnologies([...technology, ""]);
  };

  // Handle technology change
  const handleTechnologyChange = (index, value) => {
    const newTechnologies = [...technology];
    newTechnologies[index] = value;
    setTechnologies(newTechnologies);
  };

  // Handle image selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) {
      console.log("file not uploaded");
    }
    if (file) {
      console.log(file);
    }
    setImages(e.target.files[0]); // Store selected files as an array
  };

  // Submit Form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      title: title,
      image: image,
      description: description,
      technology: technology,
      category:category, 
    };
    try {
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}project/post`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (error) {
      console.log(error);
      alert("error in uploading project");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Project Form</h2>
      <form className="space-y-4">
        <div>
          <label className="block font-medium">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="web">Web Project</option>
            <option value="ml">ML Project</option>
            <option value="mobile">Mobile App</option>
            <option value="iot">IoT Project</option>
          </select>
        </div>
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
          <button
            type="button"
            onClick={addDescription}
            className="mt-1 text-blue-600"
          >
            + Add Description
          </button>
        </div>

        {/* Technologies Input */}
        <div>
          <label className="block font-medium">Technologies</label>
          {technology.map((tech, index) => (
            <input
              key={index}
              type="text"
              value={tech}
              onChange={(e) => handleTechnologyChange(index, e.target.value)}
              className="w-full p-2 border rounded mb-2"
              placeholder={`Technology ${index + 1}`}
              required
            />
          ))}
          <button
            type="button"
            onClick={addTechnology}
            className="mt-1 text-blue-600"
          >
            + Add Technology
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

        {loading && loading ? (
          <button className="w-full bg-blue-500 text-white p-2 rounded">
            Please Wait...
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            className="w-full bg-blue-500 text-white p-2 rounded"
          >
            Submit
          </button>
        )}
      </form>
    </div>
  );
};

export default Projectpost;
