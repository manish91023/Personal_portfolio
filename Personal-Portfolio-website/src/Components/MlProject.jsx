import React, { useEffect, useState } from "react";

import "../Components/Global.css";

import { Link } from "react-router-dom";

const MLProject = ({bgcolor,darkmode}) => {
  
const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}http://localhost:3000/project/get/ml`)
      .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
      })
      .then(data => {
        setProjects(data);
        // console.log(data)
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);


  return (
    <>
      {/* <div className="p-3"> */}
        <div className={` ${darkmode==="dark" ? `bg-${bgcolor}` : `bg-white`} p-10 rounded-lg`}>
          <h1 className={`text-3xl font-bold ${bgcolor==="white" ? "text-black" :"text-white"}`}>Projects</h1>

          <div className="flex gap-5 flex-wrap my-5">
            {
              projects && projects.length>0 && projects.map((project, index) =>(
                <Link to={`/projects/details/shown/${project._id}`} state={{project}} key={index}>
            <div
              className="ui-ux-design w-80 flex flex-col gap-3 p-5 rounded-lg"
              style={{background:`${bgcolor==="white" ? "#FFF4F4" :"black"}`,  border:`${bgcolor==="white" ? "none" :"1px solid #A6A6A6"}`}}
            >
              <img
                src={project.image}
                className="rounded-lg transition delay-150"
              />
              <div>

                <h1 className={`text-md font-bold ${bgcolor==="white" ? "text-black" :"text-white"}`}>{project.title}</h1>
              </div>
            </div>
            </Link>
              ))
            }

  
         
          </div>
        </div>
      {/* </div> */}
    </>
  );
};

export default MLProject;
