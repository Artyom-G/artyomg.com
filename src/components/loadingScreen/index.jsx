import React from "react";
import './styles.scss';
import { ReactTyped } from "react-typed";
import { BounceLoader } from "react-spinners"; 

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
    <BounceLoader color={"#ffffff"} size={50} />
  </div>
);

export default LoadingScreen;