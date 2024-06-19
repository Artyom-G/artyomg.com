import React from "react";
import './styles.scss';
import { useNavigate } from "react-router-dom";
import { Animate } from 'react-simple-animate';
import { ReactTyped } from "react-typed";

const Home=()=>{

    const navigate = useNavigate();

    const handleNavingateToContactMePage=()=>{
        navigate("/contact");
    }

    return(
        <div id="home" className="home">
            <div className="home__text-wrapper">
                <h1>
                    Hello, I am Artyom
                    <br/>
                    I am {" "}
                    <ReactTyped
                        strings={[
                            "a Developer",
                            "a Designer",
                            "a Student",
                            "an Enthusiast",
                            "a Creator",
                            "a Learner",
                            "an Innovator"
                        ]}
                        typeSpeed={100}
                        loop
                        backSpeed={20}
                        cursorChar="|"
                        showCursor={true}
                    />
                </h1>
            </div>
            <div className="home__contact-me">
                <button onClick={handleNavingateToContactMePage}>
                    <span className="contact-button">
                        Send Me a Message

                    </span>
                </button>
            </div>
        </div>
    )
}
export default Home;