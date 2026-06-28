import { Link } from "react-router-dom";

function ProjectCard({ id, title, image }) {
  return (
    <div className="card">
      <img src={image} alt={title} />

      <h3>{title}</h3>

      <Link to={`/project/${id}`}>
        <button>View Project</button>
      </Link>
    </div>
  );
}

export default ProjectCard;