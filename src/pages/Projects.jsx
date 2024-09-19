import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Projects.scss';

const filterOptions = ["All", "Featured", "WebDev", "Mobile", "GameDev", "AI", "Bot"];

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [filter, setFilter] = useState("All");
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

    const filteredProjects = filter === "All"
        ? projects
        : projects.filter(project => project.filters.includes(filter));

    return (
        <div className="projects">
            <div className="projects__filters">
                {filterOptions.map(option => (
                    <button 
                        key={option} 
                        className={`projects__filters__filter ${filter === option ? 'active' : ''}`}
                        onClick={() => setFilter(option)}
                    >
                        {option}
                    </button>
                ))}
            </div>
            <div className="projects__grid">
                {filteredProjects.map((project, index) => (
                    <div 
                        key={index} 
                        className={`projects__card ${index === 0 ? 'projects__card--large' : ''}`}
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
