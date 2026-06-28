import React from "react";
import "./About.css";
import profile from "../assets/profile.jpg"; 

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title">ABOUT</h2>

      <div className="about-card">
        <div className="about-left">
          <img src={profile} alt="Profile" className="profile-img" />
        </div>

        <div className="about-right">
         <p>
  Hi, I'm Tarugu Venkata Ganesh Sujith. I completed my Master of Computer Applications (MCA) from GITAM University. I am passionate about Front-End Development and enjoy creating modern, responsive, and user-friendly web applications.

  I have strong knowledge of HTML, CSS, JavaScript, React.js, and responsive web design. I love turning creative ideas into interactive user interfaces while following clean coding practices and delivering a great user experience.

  I am a quick learner who enjoys exploring new web technologies, improving my problem-solving skills, and continuously enhancing my development knowledge. I believe in writing maintainable, reusable, and efficient code.

  As a Computer Applications graduate, I am looking for opportunities where I can contribute my skills, learn from experienced professionals, and grow as a Front-End Developer while building high-quality web applications.
</p>

          <p>
            I love solving real-world problems and continuously learning new
            technologies. My goal is to become a Full Stack Developer and
            contribute to impactful projects.
          </p>

          <a
            href="/resume.pdf"
            className="resume-btn"
            target="_blank"
            rel="noreferrer"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div className="skills-box">
        <h3>Skills</h3>

        <div className="skills">
          <img
            src="https://skillicons.dev/icons?i=html,css,js,react,nodejs,mongodb,tailwind,figma,github,vscode"
            alt="skills"
          />
        </div>
      </div>
    </section>
  );
};

export default About;