import React from "react";
import { ReactTyped } from "react-typed";
import { BounceLoader } from "react-spinners"; 
import './LoadingScreen.scss';

const LoadingScreen = () => (
  <div className="loading-screen">
    <h1>
        Welcome to my {" "}
        <ReactTyped
            strings={["Portfolio", "Projects", "Skills Showcase", "Creative Space", "Journey", "Work"]}
            typeSpeed={100}
            loop
            backSpeed={100}
            cursorChar="|"
            showCursor={true}
        />
    </h1>
    <h2>
        the site is loading, please stand by
    </h2>
    <BounceLoader className="loading-screen__loader" color={"#ffffff"} size={50} />
  </div>
);

export default LoadingScreen;