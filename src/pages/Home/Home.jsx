import React from 'react';
import Contact from './Contact';
import Banner from './Banner';
import About from './About';
import Skills from './Skills';
import Education from './Education';
import Projects from './Projects';

const Home = () => {
    return (
        <div>
            <section id="home">
            <Banner></Banner>
            </section>
            <section id="about">
                <About></About>
            </section>
           
            <section id="skills">
                <Skills></Skills>
            </section>
            <section id="education">
                <Education></Education>
            </section>
            <section id="projects">
                <Projects></Projects>
            </section>
             <section id="contact">
                <Contact></Contact>
            </section>

        </div>
    );
};

export default Home;