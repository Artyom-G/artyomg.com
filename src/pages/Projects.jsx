import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Projects.scss';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProjects = async () => {
            const context = require.context('../projects', false, /\.json$/);
            const projectData = await Promise.all(
                context.keys().map(async (file) => {
                    const data = await import(`../projects/${file.replace('./', '')}`);
                    const projectName = file.replace('./', '').replace('.json', '');
                    return { ...data, name: projectName };
                })
            );

            projectData.sort((a, b) => a.priority - b.priority);

            console.log(projectData);
            setProjects(projectData);
        };
        fetchProjects();
    }, []);

    const handleProjectClick = (project) => {
        navigate(`/projects/${project.title.replace(/\s+/g, '-').toLowerCase()}`, { state: { project } });
    };

    return (
        <div className="projects">
            <div className="projects__grid">
                {projects.map((project, index) => (
                    <div 
                        key={index} 
                        className="projects__card"
                        onClick={() => handleProjectClick(project)}
                    >
                        <img src={require(`../projects/${project.name}.jpg`)} alt={project.title}/>
                        <h2>{project.title}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;