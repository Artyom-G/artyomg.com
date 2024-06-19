import React from "react";
import { useLocation } from "react-router-dom";
import './styles.scss';

const ProjectDetails = () => {
    const location = useLocation();
    const { project } = location.state || {};

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div className="project-details">
            <h1>{project.title}</h1>
            <img src={project.image} alt={project.title} />
            <p>{project.description}</p>
            {project.playable && (
                <div className="project-details__embed" dangerouslySetInnerHTML={{ __html: project.embed }} />
            )}
            <div className="project-details__tags">
                {project.tags.map((tag, index) => (
                    <span key={index} className="project-details__tag">{tag}</span>
                ))}
            </div>
            {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>}
        </div>
    );
};

export default ProjectDetails;
