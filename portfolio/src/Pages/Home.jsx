import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./Home.css";

const Home = () => {
  return (
    <section className="home">
      {/* Background Text */}
      <h1 className="bg-text top">
        DESIGNER UI DESIGNER UI
      </h1>

      <h1 className="bg-text bottom">
        FRONT END DEVELOPER FRONT
      </h1>

      {/* Main Content */}
      <div className="hero-content">
        <p className="hello">Hey There I'm</p>

        <h1 className="name">Ganesh sujith</h1>

        <p className="desc">
          Currently Studying Computer Science <br />
          and Engineering
        </p>

        <div className="socials">
          <a href="#">
            <FaLinkedin />
          </a>

          <a href="#">
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home; 


