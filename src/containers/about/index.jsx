import React from "react";
import {BsInfoCircleFill} from 'react-icons/bs';
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from 'react-simple-animate';
import './styles.scss';
import { DiApple, DiAndroid } from 'react-icons/di';
import { FaDev, FaDatabase } from "react-icons/fa";

const jobSummary = "Hello dear reader, my name is Artyom, I am a first year computer science major at the University of Guelph. \nIn my short time at university, I have demonstrated strong interest to expanding my knowledge on the subject and I am really eager to start applying it in the real world as well. As you may see based on my portfolio, I like to diversify my knowledge and learn new ways to code whether its games, websites, social media bots or AI.\nWhat excites me most about joining your team is the opportunity to work in a collaborate environment where I can learn from likeminded ambitious individuals. "

const personalDetails = [
    {
        label: "Name",
        value: "Artyom Gabtraupov",
    },
    {
        label: "Location",
        value: "Waterloo, Ontario",
    },
    {
        label: "Email",
        value: "admin@artyomg.com",
    },
];

const About=()=>{
    return(
        <section id="about" className="about">
            <PageHeaderContent headerText = "About Me" icon = {<BsInfoCircleFill size = {40}/>}/>
            <div className="about__content">
                <div className="about__content__personalWrapper">
                    <Animate play duration={1.5} delay={1} start={{transform: 'translateY(550px)'}} end={{transform: 'translateY(0px)'}}>
                        <h3>
                            Front End Developer
                        </h3>
                        <p>
                            {jobSummary}
                        </p>
                    </Animate>
                    <Animate play duration={1.5} delay={1} start={{transform: 'translateY(550px)'}} end={{transform: 'translateY(0px)'}}>
                        <h3 className="personalInformationHeaderText">Personal Information</h3>
                        <ul>
                            {
                                personalDetails.map((item, i) =>(
                                    <li key ={i}>
                                        <span className="title">{item.label}</span>
                                        <span className="value">{item.value}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </Animate>
                </div>
                <div className="about__content__servicesWrapper">
                    <Animate play duration={1.5} delay={1} start={{transform: 'translateY(550px)'}} end={{transform: 'translateY(0px)'}}>
                        <div className="about__content__servicesWrapper__innerContent">
                            <div>
                                <FaDev size={60} color="var(--theme-main-color)"/>
                            </div>
                            <div>
                                <DiAndroid size={60} color="var(--theme-main-color)"/>
                            </div>
                            <div>
                                <FaDatabase size={60} color="var(--theme-main-color)"/>
                            </div>
                            <div>
                                <DiApple size={60} color="var(--theme-main-color)"/>
                            </div>
                        </div>
                    </Animate>
                </div>
            </div>
        </section>
    )
}
export default About;