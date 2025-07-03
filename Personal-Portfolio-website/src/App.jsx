import { useState } from "react";
import "./App.css";
import About from "./Components/About";
import { BrowserRouter, Routes, Route, Form } from "react-router-dom";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import ForMobile from "./Components/ForMobile";
import Certificate from "./Components/Certificate";
import Home from "./Components/Home";
import MlProject from "./Components/MlProject";

import Projectpost from "./Admin/Projectpost";
import Certificatepost from "./Admin/Certificatepost";
import CertificatePage from "./Components/CertificatePage";
import ShowCertificate from "./Components/ShowCertificate";
import ProjectDetails from "./Components/ProjectDetails";

function App() {
  const [show, setShow] = useState(false);
  const [darkmode, setDarkmode] = useState("light");
  const [bgcolor, setBgcolor] = useState("white");
  const [cross, setCross] = useState(false);

  const handleclick = () => {
    setShow(true);
    setCross(true);
  };

  const handleremove = () => {
    setCross(false);
    setShow(false);
  };

  const handleDarkMode = () => {
    if (darkmode === "light") {
      setDarkmode("dark");
      document.body.style.backgroundImage =
        "url(https://i.pinimg.com/564x/37/24/db/3724db00677625d737f96f8faf8e31de.jpg)";
      document.body.style.width = "100%";
      setBgcolor("black");
    } else {
      setDarkmode("light");
      document.body.style.backgroundImage =
        "url(./Components/SocialLinks/background.jpg)";
      setBgcolor("white");
    }
  };
  return (
    <>
      <BrowserRouter>
        <ForMobile
          show={show}
          setShow={setShow}
          darkmode={darkmode}
          setDarkmode={setDarkmode}
          handleDarkMode={handleDarkMode}
          cross={cross}
          setCross={setCross}
          handleclick={handleclick}
          handleremove={handleremove}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                show={show}
                setShow={setShow}
                darkmode={darkmode}
                setDarkmode={setDarkmode}
                bgcolor={bgcolor}
                handleDarkMode={handleDarkMode}
                cross={cross}
                setCross={setCross}
                handleclick={handleclick}
                handleremove={handleremove}
              />
            }
          >
            <Route
              index
              element={<About bgcolor={bgcolor} darkmode={darkmode} />}
            />

            {/* <Route
              path="/Resume"
              element={<Resume bgcolor={bgcolor} darkmode={darkmode} />}
            /> */}

            <Route
              path="/Contact"
              element={<Contact bgcolor={bgcolor} darkmode={darkmode} />}
            />

            <Route
              path="/Projects"
              element={<Projects bgcolor={bgcolor} darkmode={darkmode} />}
            />
            <Route
              path="/Projects/details/shown/:id"
              element={<ProjectDetails bgcolor={bgcolor} darkmode={darkmode} />}
            />
            <Route
             path="/MLProject"
             element={<MlProject  bgcolor={bgcolor} darkmode={darkmode} />}
             />
            <Route
             path="/certification"
              element={<CertificatePage bgcolor={bgcolor}  darkmode={darkmode} />}
               />
            <Route
             path="/certification/details/shown/:id"
              element={<ShowCertificate bgcolor={bgcolor}  darkmode={darkmode} />}
               />

            

            <Route
              path="/Certify"
              element={<Certificate bgcolor={bgcolor} darkmode={darkmode} />}
            />
          </Route>
          <Route path="/admin/project/:adminauth" element={<Projectpost />}></Route>
          <Route path="/admin/certificate/:adminauth" element={<Certificatepost/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
