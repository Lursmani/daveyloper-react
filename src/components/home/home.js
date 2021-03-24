import React, {useEffect} from "react"
import BannerImage from "./banner-image.png" 
import "./home.css"
import { Link,  } from 'react-scroll'
import { Icon, } from '@iconify/react';
import chevronDown from '@iconify-icons/el/chevron-down';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Helmet} from "react-helmet"
import ProjectCard from "./projectcard"
import Drumpad from "../projects/images/drumpad.PNG"
import Timer from "../projects/images/Timer.PNG"
import Calculator from "../projects/images/calculator.PNG"
import About from "./About"


AOS.init(
    {
        once:true
    }
);

function Home() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
       

        <div className="home-container">
             <Helmet>
            <title>Davit Lursmanashvili Website - React Front-end Developer </title>
            <meta name="description" content="Davit Lursmanashvili. A web developer and a front-end developer from Georgia. I build responsive, optimized websites using 
            React, HTML, and CSS. This is my home page/landing page. Learn about me and my experience here. " />
          </Helmet>
            <div className="banner-container">
                <div id="banner-text-div">
                    <h1 data-aos="fade-right" data-aos-delay="150" className="banner-text">I am Davit Lursmanashvili, a front-end developer</h1>
                    <h2 data-aos="fade-left" data-aos-delay="250" className="banner-text">And I make pretty cool websites</h2>
                    <Link data-aos="fade-up" data-aos-delay="350" smooth to="scroll-container" offset={-80}><button id="banner-link">Project Showcase</button> </Link>
                    <Icon data-aos="fade-down" data-aos-delay="550" icon={chevronDown} color="#DEF2F1" id="down-chevron" />
                </div>
                <img src={BannerImage} alt="" id="banner-image" />
            </div>
            <div id="scroll-title-div" data-aos="flip-up">
                <h2 id="scroll-title">
                    Check out some of my projects below:
                </h2>
            </div>
            <div className="scroll-container">
            <ProjectCard 
            animation="fade-up"
            animationDelay="200"
            image={Timer}
            destination="/25timer"
            linkText="Interval Timer"
            description="A dual timer that starts the second countdown when one countdown is over."
            />
             <ProjectCard 
             animation="fade-up"
             animationDelay="400"
             image={Drumpad}
             destination="/drumpad"
             linkText="Drum Pad"
             description="A drumpad that plays different audio files when you press different buttons."
            />
             <ProjectCard 
             animation="fade-up"
             animationDelay="600"
            image={Calculator}
            destination="/calculator"
            linkText="React Calculator"
            description="A calculator built with React."
            />
            </div>



            <About/>
        </div>
    )
}







export default Home