import './App.scss';
import { Routes, Route, useLocation } from 'react-router-dom'
//import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import particles_home from './assets/particles_home';
import particles_other from './assets/particles_other';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import NavBar from './components/NavBar';
import LoadingScreen from './components/LoadingScreen';
import ProjectDetails from './pages/ProjectDetails';

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
            setFadeOut(true);
            setTimeout(() => setInit(true), 1000);
        });
    }, []);

    const particlesLoaded = (container) => {
        //console.log(container);
    };

    if (!init) {
        return (
            <div className='App'>
                <LoadingScreen className={fadeOut ? 'fade-out' : ''} />
            </div>
        );
    }

    return (
        <div className="App">
            {
                location.pathname === "/" ? 
                    <Particles id="tsparticles" options={particles_home} particlesLoaded={particlesLoaded} /> : 
                    <Particles id="tsparticles" options={particles_other} particlesLoaded={particlesLoaded} />
            }

            <NavBar />

            <div className='App__main-page-content'>
                <Routes>
                    <Route index path='/' element={<Home />} />
                    {/*
                        <Route index path='/resume' element={<Resume />} />
                    */}
                    <Route index path='/projects' element={<Projects />} />
                    <Route path="/projects/:projectTitle" element={<ProjectDetails />} />
                    <Route index path='/contact' element={<Contact />} />
                </Routes>
            </div>

        </div>
    );
}

export default App;
