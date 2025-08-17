import { useEffect, useState } from "react";
import "../Components/Global.css";
import { useLocation, useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
const ProjectDetails = ({ bgcolor, darkmode }) => {
  
  const location = useLocation();
  const proj = location.state?.project;


  if (!proj) {
    return <p>No project data found. Please go back to the list.</p>;
  }

  // Determine styles based on dark mode and bgcolor
  const containerBgClass = darkmode === "dark" ? `bg-gray-900` : `bg-${bgcolor}`;
  const titleTextClass = bgcolor === "white" && darkmode !== "dark" ? "text-black" : "text-white";

  return (
    <>
      <div className={`${containerBgClass} p-10 rounded-lg min-h-screen`}>
        <h1 className={`text-3xl font-bold mb-6 ${titleTextClass}`}>Project</h1>

        <h1 className={`text-2xl font-bold mb-4 text-center ${titleTextClass} `}>{proj.title}</h1>
        <div>
          <Link to={`${proj.live_link}`}>View Live</Link>
        </div>

        <div className="flex justify-center mb-6">
          <img
            src={proj.image}
            alt={proj.title}
            className="rounded-lg max-h-96 object-contain shadow-lg"
          />
        </div>

        <table className={`w-full text-left border rounded-lg overflow-hidden
          border-gray-300
          ${darkmode === "dark" ? "text-gray-200" : "text-gray-900"}
          bg-white
          dark:bg-gray-800
        `}>
          <thead className="bg-blue-600 dark:bg-blue-700 text-white">
            <tr>
              <th className="py-2 px-4">#</th>
              <th className="py-2 px-4">Key Features:</th>
            </tr>
          </thead>
          <tbody>
            {proj.description.map((desc, index) => (
              <tr
                key={index}
                className={
                  darkmode === "dark"
                    ? index % 2 === 0
                      ? "bg-gray-700"
                      : "bg-gray-800"
                    : index % 2 === 0
                    ? "bg-gray-100"
                    : "bg-white"
                }
              >
                <td className="py-2 px-4 font-medium">{index + 1}</td>
                <td className="py-2 px-4">{desc}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <table className={`w-full text-left border rounded-lg mt-4 overflow-hidden
          border-gray-300
          ${darkmode === "dark" ? "text-gray-200" : "text-gray-900"}
          bg-white
          dark:bg-gray-800
        `}>
          <thead className="bg-blue-600 dark:bg-blue-700 text-white ">
            <tr>
              <th className="py-2 px-4">#</th>
              <th className="py-2 px-4">Technologies Used:</th>
            </tr>
          </thead>
          <tbody>
            {proj.technology.map((tech, index) => (
              <tr
                key={index}
                className={
                  darkmode === "dark"
                    ? index % 2 === 0
                      ? "bg-gray-700"
                      : "bg-gray-800"
                    : index % 2 === 0
                    ? "bg-gray-100"
                    : "bg-white"
                }
              >
                <td className="py-2 px-4 font-medium">{index + 1}</td>
                <td className="py-2 px-4">{tech}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProjectDetails;
