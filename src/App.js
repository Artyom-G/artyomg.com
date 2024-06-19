import './App.scss';
import { Routes, Route, useLocation } from 'react-router-dom'
//import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import particles_home from './containers/home/particles_home';
import particles_projects from './containers/projects/particles_projects';
import Home from './containers/home';
import Contact from './containers/contact';
import Resume from './containers/resume';
import Skills from './containers/skills';
import Projects from './containers/projects';
import About from './containers/about';
import NavBar from './components/navBar';
import LoadingScreen from './components/loadingScreen';
import ProjectDetails from './containers/projects/ProjectDetails';

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.

function App() {

  const location = useLocation();
  const [init, setInit] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      await loadFull(engine);
    }).then(() => {
      setFadeOut(true); // Start fade-out effect
      setTimeout(() => setInit(true), 500);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  if(!init){
    return(
      <div className='App'>
        <LoadingScreen className={fadeOut ? 'fade-out' : ''} />
      </div>
    );
  }

  return (
    <div className="App">
      {
        location.pathname === "/" ? <Particles id="tsparticles" options={particles_home} particlesLoaded={particlesLoaded} /> : <></>
      }
      {
        location.pathname === "/projects" || location.pathname === "/resume" || location.pathname === "/contact" ? <Particles id="tsparticles" options={particles_projects} particlesLoaded={particlesLoaded} /> : <></>
      }


      <NavBar /> 
      
      <div className='App__main-page-content'>
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route index path='/about' element={<About />} />
          <Route index path='/resume' element={<Resume />} />
          <Route index path='/skills' element={<Skills />} />
          <Route index path='/projects' element={<Projects />} />
          <Route path="/projects/:projectTitle" element={<ProjectDetails />} />
          <Route index path='/contact' element={<Contact />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
