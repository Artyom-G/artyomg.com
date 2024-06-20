import React from "react";
import './styles.scss';
import { ReactTyped } from "react-typed";

const LoadingScreen = () => (
  <div className="loading-screen">
    <h1>
        Welcome to my {" "}
        <ReactTyped
            strings={["Portfolio", "Projects", "Skills Showcase", "Creative Space", "Journey", "Work"]}
            typeSpeed={100}
            loop
            backSpeed={100000}
            cursorChar="|"
            showCursor={true}
        />
    </h1>
  </div>
);

export default LoadingScreen;