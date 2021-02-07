import React from "react"
import myPicture from "./me.jpg"
import "./about.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();


function About(props) {

    return (
        <div id="about-container">
            <div id="about-me-div">
                <img id="about-me-img" src={myPicture} alt="Me, Davit Lursmanashvili"/>
                <div data-aos="fade-up" id="about-me-text-div">
                    <h1 data-aos="fade-right" data-aos-delay="500">I am Davit Lursmanashvili</h1>
                    <h2 data-aos="fade-right" data-aos-delay="700">Web developer, social scientist, researcher.</h2>
                    <h3 data-aos="fade-right" data-aos-delay="900">This is my portfolio website built with React</h3>
                </div>
            </div>
            <div id="about-skills-div">
            </div>
        </div>
    )
}

export default About