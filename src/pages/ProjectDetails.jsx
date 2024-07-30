import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import CircleButton from "../components/CircleButton";
import ArrowSVG from "../assets/arrow.svg"
import { MarkdownCustom } from "../components/MarkdownCustom";
import './ProjectDetails.scss';

const ProjectDetails = () => {
    const location = useLocation();
    const { project } = location.state || {};
    const [content, setContent] = useState('');

    useEffect(() => {
        const fetchContent = async () => {
            try {
                const mdFile = await import(`../projects/${project.name}.md`);
                const response = await fetch(mdFile.default);
                const text = await response.text();
                setContent(text);
            } catch (error) {
                console.error('Error fetching the markdown file:', error);
                setContent('Failed to load project content.');
            }
        };
        fetchContent();
    }, []);
    
    if (!project) {
        return <div>Project not found</div>;
    }
    
    return(
        <div className="projects__item">
            <div className="projects__item__banner">
                <h1>{project.title}</h1>
                <img src={require(`../projects/${project.name}.jpg`)} alt={project.title}/>
            </div>

            <div className="projects__item__info">
                <div className="projects__item__info__tags">
                    {project.tags.map(option => (
                        <button 
                            key={option} 
                            className={`projects__item__info__tags__tag`}
                        >
                            {option}
                        </button>
                    ))}
                </div>
                <div className="projects__item__info__link">
                    <CircleButton link={project.link} logoSrc={ArrowSVG}/>
                </div>
            </div>
            <div className="projects__item__md">
                <MarkdownCustom content={content}/>
            </div>
        </div>
    )
};

export default ProjectDetails;
