import React, { useState, useEffect } from "react";
import projects from './projects.json';
import './styles.scss';
import GistEmbed from "../../components/gistEmbed";
import CircleButton from "../../components/circleButton";
import ArrowSVG from "./arrow.svg"

const Projects=()=>{
    const [blurLevel, setBlurLevel] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            // Calculate the distance between the image and the viewport
            const image = document.querySelector('.projects__item__banner img');
            if (image) {
                const bounding = image.getBoundingClientRect();
                const clearWindowThreashold = 350;
                const distanceToViewportTop = Math.abs(bounding.top) - clearWindowThreashold;
                const distanceToViewportBottom = distanceToViewportTop + 2 * clearWindowThreashold;
                
                // Adjust blur level based on distance
                const maxDistance = window.innerHeight / 2; // Adjust this threshold as needed
                const newBlurLevelNoWindow = Math.min(Math.min(10, (distanceToViewportTop / maxDistance) * 10), Math.min(10, (distanceToViewportTop / maxDistance) * 10));
                const newBlurLevel = (-clearWindowThreashold > Math.abs(bounding.top) > clearWindowThreashold) ? 0 : newBlurLevelNoWindow
                
                // Set the blur level
                setBlurLevel(newBlurLevel);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const togglePointerEvents = () => {
        const iframe = document.querySelector('.projects__item__embed__overlay');
        iframe.style.height = "0px";
    }

    return(
        <>
            <ul className="projects">
                {
                    projects.projects.map((item, key) => (
                        <li key={key} className="projects__item">
                            <div className="projects__item__banner">
                                <h1>{item.title}</h1>
                                <img src={require(`./${item.image}`)} alt={item.title} style={{ filter: `blur(${blurLevel}px) brightness(${Math.min(1-blurLevel/20, 1)})` }}/>
                            </div>

                            <div className="projects__item__info">
                                <ul className="projects__item__info__tags">
                                    {
                                        item.tags.map((tag, index) => (
                                            <li key={index} className="projects__item__info__tags__tag">
                                                <div>
                                                    <p>{tag}</p>
                                                </div>
                                                
                                            </li>
                                        ))
                                    }
                                </ul>
                                <div className="projects__item__info__link">
                                    <CircleButton link={item.link} logoSrc={ArrowSVG}/>
                                </div>
                            </div>

                            <div className="projects__item__links">

                            </div>
                            <div className="projects__item__description">
                                <p>
                                    {item.description}
                                </p>
                            </div>
                            <div className="projects__item__embed">
                                {
                                    item.playable ? <div dangerouslySetInnerHTML={{ __html: item.embed }} /> : <></>
                                }
                                <div className="projects__item__embed__overlay" onClick={togglePointerEvents}></div>
                            </div>
                            

                        </li>
                    ))
                }
            </ul>
        </>
    )
}
export default Projects;