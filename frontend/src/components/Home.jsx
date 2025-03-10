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
import GithubCalender from './GithubCalender';

const Home = () => {
    return (
        <>
            <NavBar />
            <Title />
            <Banner />
            <About />
            <GithubCalender />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
            <BackToTop />
        </>
    )
}

export default Home
