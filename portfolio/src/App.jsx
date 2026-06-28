import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectCard from "./components/ProjectCard";

import Home from "./Pages/Home";
import About from "./Pages/About";
import ProjectDetails from "./Pages/ProjectDetails";
import Projects from "./Pages/Projects";
import Gallery from "./Pages/Gallery";
import Contact from "./Pages/Contact";


function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About/>} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/ProjectDetails/:id" element={<ProjectDetails />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;