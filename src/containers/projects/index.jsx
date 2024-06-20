import React from "react";
import './styles.scss';
import { useNavigate } from "react-router-dom";
import projectsData from './projects.json'; // Adjust the path to your JSON file

const Projects = () => {
    const navigate = useNavigate();

    const handleProjectClick = (project) => {
        navigate(`/projects/${project.title.replace(/\s+/g, '-').toLowerCase()}`, { state: { project } });
    };

    return (
        <div className="projects">
            <div className="projects__grid">
                {projectsData.projects.map((project, index) => (
                    <div 
                        key={index} 
                        className="projects__card"
                        onClick={() => handleProjectClick(project)}
                    >
                        <img src={require(`./${project.image}`)} alt={project.title}/>
                        <h2>{project.title}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
