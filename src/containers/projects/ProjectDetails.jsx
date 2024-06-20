import React from "react";
import { useLocation } from "react-router-dom";
import './projectDetails.scss';
import CircleButton from "../../components/circleButton";
import ArrowSVG from "./arrow.svg"

const ProjectDetails = () => {
    const location = useLocation();
    const { project } = location.state || {};

    const togglePointerEvents = () => {
        const iframe = document.querySelector('.projects__item__embed__overlay');
        iframe.style.height = "0px";
    }

    if (!project) {
        return <div>Project not found</div>;
    }

    const description = project.description.replace(/\n/g, '<br />');

    return(
        <>
            <div className="projects__item">
                <div className="projects__item__banner">
                    <h1>{project.title}</h1>
                    <img src={require(`./${project.image}`)} alt={project.title}/>
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

                <div className="projects__item__links">

                </div>
                <div className="projects__item__description">
                    <p dangerouslySetInnerHTML={{ __html: description }} />
                </div>
                <div className="projects__item__embed">
                    {
                        project.playable ? <div dangerouslySetInnerHTML={{ __html: project.embed }} /> : <></>
                    }
                    <div className="projects__item__embed__overlay" onClick={togglePointerEvents}></div>
                </div>
                

            </div>
        </>
    )
};

export default ProjectDetails;
