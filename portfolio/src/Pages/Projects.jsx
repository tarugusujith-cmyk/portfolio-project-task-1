import React from "react";
import ProjectDetails from "./ProjectDetails";
import "../styles/style.css";

const Project = () => {
  return (
    <section className="projects" id="projects">
      <h1 className="project-title">PROJECTS</h1>

      <div className="project-grid">
        {ProjectDetails.map((project) => (
          <div className="project-card" key={project.id}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />

            <div className="project-content">
              <h2>{project.title}</h2>

              <span className="status">{project.status}</span>

              <p>{project.description}</p>

              <div className="tech-stack">
                {project.tech.map((tech, index) => (
                  <span key={index} className="tech">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="buttons">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="btn demo"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;