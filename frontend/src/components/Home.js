import React from 'react'
import { NavBar } from './NavBar'
import { Banner } from "./Banner";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import Title from './Title';
import About from './About';
import BackToTop from './BackToTop';

const Home = () => {
    return (
        <div>
            <NavBar />
            <Title />
            <Banner />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
            <BackToTop />
        </div>
    )
}

export default Home
