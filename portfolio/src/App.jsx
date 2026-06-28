import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectCard from "./components/ProjectCard";

import Home from "./Pages/home";
import About from "./Pages/About"; 
import ProjectDetails from "./Pages/ProjectDetails";
import Projects from "./pages/Projects";
import Gallery from "./Pages/Gallery";
import Contact from "./pages/Contact";


function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;