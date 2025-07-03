
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import "../Components/Global.css";
import certificate1 from "../Components/SocialLinks/e commerce ss.png"
import project2 from "../Components/SocialLinks/portfolio project ss.png"
import project3 from "../Components/SocialLinks/text analyzer ss.png"


const CertificatePage = ({bgcolor,darkmode}) => {
   
 const [certificates, setCertificates] = useState([]);
   const [loading, setLoading] = useState(true);
 
   useEffect(() => {
     fetch('http://localhost:3000/certificate/get')
       .then(response => {
         if (!response.ok) throw new Error('Network response was not ok');
         return response.json();
       })
       .then(data => {
         setCertificates(data.certificate);
         console.log(data)
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
         
             <div className=" flex gap-5 flex-wrap my-5">
               
              <h1 className={`text-3xl font-bold ${bgcolor==="white" ? "text-black" :"text-white"}`}>Internship Certificates</h1>
              <div className="flex gap-5 flex-wrap my-5">
              {
                certificates && certificates.length>0 && certificates.filter(certificate=>certificate.title.toLowerCase().includes("internship")).map((certificate, index) =>(
                  <Link to={`/certification/details/shown/${certificate._id}`} state={{certificate}} key={index}>
            <div
              className="ui-ux-design w-80 flex flex-col gap-3 p-5 rounded-lg"
              style={{background:`${bgcolor==="white" ? "#FFF4F4" :"black"}`,  border:`${bgcolor==="white" ? "none" :"1px solid #A6A6A6"}`}}
            >
              
              <img
                src={certificate.image}
                className="rounded-lg transition delay-150"
              />
              <div>

                <h1 className={`text-md font-bold ${bgcolor==="white" ? "text-black" :"text-white"}`}>{certificate.title}</h1>
              </div>
            </div>
            </Link>
              ))
            }

           </div>
           </div>
           <hr />
            <h1 className={`text-3xl font-bold ${bgcolor==="white" ? "text-black" :"text-white"}`}>Certificates</h1>
            <hr />
           <div className="flex gap-5 flex-wrap my-5">
              {
              certificates && certificates.length>0 && certificates.filter(certificate=>!certificate.title.toLowerCase().includes("internship")).map((certificate, index) =>(
                <Link to={`/certification/details/shown/${certificate._id}`} state={{certificate}} key={index}>
            <div
              className="ui-ux-design w-80 flex flex-col gap-3 p-5 rounded-lg"
              style={{background:`${bgcolor==="white" ? "#FFF4F4" :"black"}`,  border:`${bgcolor==="white" ? "none" :"1px solid #A6A6A6"}`}}
            >
              
              <img
                src={certificate.image}
                className="rounded-lg transition delay-150"
              />
              <div>

                <h1 className={`text-md font-bold ${bgcolor==="white" ? "text-black" :"text-white"}`}>{certificate.title}</h1>
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

export default CertificatePage;
