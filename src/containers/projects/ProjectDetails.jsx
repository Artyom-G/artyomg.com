import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import './projectDetails.scss';
import CircleButton from "../../components/circleButton";
import ArrowSVG from "./arrow.svg"
import { Link } from 'react-router-dom';

const ProjectDetails = () => {
    const location = useLocation();
    const { project } = location.state || {};

    useEffect(() => {
        console.log(project);
    }, [])
    
    if (!project) {
        return <div>Project not found</div>;
    }
    
    
    return(
        <div className="projects__item">
        <div className="projects__item__banner">
            <h1>{project.title}</h1>
            <img src={require(`./projects/${project.name}.jpg`)} alt={project.title}/>
        </div>

        <div className="projects__item__info">
            <ul className="projects__item__info__tags">
                {
                    project.tags.map((tag, index) => (
                        <li key={index} className="projects__item__info__tags__tag">
                            <div>
                                <p>{tag}</p>
                            </div>
                            
                        </li>
                    ))
                }
            </ul>
            <div className="projects__item__info__link">
                <CircleButton link={project.link} logoSrc={ArrowSVG}/>
            </div>
        </div>
    </div>
    )
};

export default ProjectDetails;
