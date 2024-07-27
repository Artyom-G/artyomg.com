import React from "react";
import { useLocation } from "react-router-dom";
import './projectDetailsOld.scss';
import CircleButton from "../../components/circleButton";
import ArrowSVG from "./arrow.svg"
import { Link } from 'react-router-dom';

const ProjectDetailsOld = () => {
    const location = useLocation();
    const { project } = location.state || {};

    
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
                {
                    project.playable ? 
                        <div className="projects__item__embed">
                            <div dangerouslySetInnerHTML={{ __html: project.embed }} />
                            <div className="projects__item__embed__bigger-display-message">
                                <p>This Page Has an Iteractive Element, Please Use a Bigger Screen</p>
                            </div>
                        </div>
                        :
                        <></>
                }
                
                <Link to={project.link} className="projects__item__visit">
                    <button>
                        <span className="projects__item__visit__span">
                            See More on the Project
                        </span>
                    </button>
                </Link>
            </div>
        </>
    )
};

export default ProjectDetailsOld;
