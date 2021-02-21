import React, {useEffect} from "react"
import myPicture from "./me.jpg"
import "./about.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Link} from "react-scroll"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faReact, faHtml5, faCss3Alt, faSass, faBootstrap, faJsSquare} from "@fortawesome/free-brands-svg-icons"
import { Icon, InlineIcon } from '@iconify/react';
import reduxIcon from '@iconify-icons/simple-icons/redux';



AOS.init({
    once:true
});



function About(props) {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div id="about-container">
            <div id="about-me-div">
                <img id="about-me-img" src={myPicture} alt="Me, Davit Lursmanashvili"/>
                <div data-aos="fade-up" id="about-me-text-div">
                    <h1 data-aos="fade-right" data-aos-delay="500" className="about-me-text" id="about-me-headline">I am Davit Lursmanashvili</h1>
                    <h2 data-aos="fade-right" data-aos-delay="700" className="about-me-text">Web developer, social scientist, researcher.</h2>
                    <h3 data-aos="fade-right" data-aos-delay="900" className="about-me-text">This is my portfolio website built with React</h3>
                    <Link data-aos="fade-right" data-aos-delay="1100" to="about-skills-div" offset={-50} smooth={true} id="about-me-link"><button id="about-me-link-button">My Skills and Experience</button></Link>
                </div>
            </div>

            <div id="about-story-div">
                <div id="about-story-text-div">
                    <h1 className="about-story-text">
                        A little bit about myself...
                    </h1>
                    <p className="about-story-text about-story-p">
                        I became a developer in 2020, when the whole world was upside down. Since then I have been 
                        constantly advancing my skills and portfolio as a front-end developer.
                    </p>
                    <p className="about-story-text about-story-p">
                    I focus on creating responsive, fast websites with interactive elements and good accessibility. 
                    </p>
                </div>
            </div>

            <Skills />
        </div>
    )
}


function Skills() {

    return (
        <div id="about-skills-div">
                <div id="languages-div">
                   <div className="languages-headline-div"> <h1 className="languages-headline">
                        Development languages and frameworks:
                    </h1> </div>
                    <div id="languages-flex">
            
                        <LanguageCard 
                        title = {<FontAwesomeIcon icon={faReact} />}
                        text="React"
                        animation = "fade-right"
                        />
                        <LanguageCard 
                        title = {<FontAwesomeIcon icon={faJsSquare} />}
                        text="Javascript"
                        animation = "fade-left"
                        delay = "100"
                        />
                        <LanguageCard 
                        title= {<FontAwesomeIcon icon={faHtml5} />}
                        text="HTML5" 
                        animation = "fade-down"
                        delay = "200"
                        />
                        <LanguageCard
                            title={<FontAwesomeIcon icon={faCss3Alt} />}
                            text="CSS3"
                            animation = "fade-up"
                            delay = "300"
                        />
                        <LanguageCard
                            title={<FontAwesomeIcon icon={faSass} />}
                            text="SASS"
                            animation = "fade-left"
                            delay = "400"
                        />
                        <LanguageCard 
                        title = {<FontAwesomeIcon icon={faBootstrap} />}
                        text="Bootstrap"
                        animation = "fade-up"
                        delay = "500"
                        />
                        <LanguageCard 
                        title = {<Icon icon={reduxIcon} />}
                        text="Redux"
                        animation = "fade-left"
                        delay = "600"
                        />
                        

                    </div>

                   <AboutLists/>

                </div>
               <a href="/projects" id="projects-link"> <button id="projects-button">My Projects</button> </a>
            </div>



    )
}




function LanguageCard(props) {

    return (
    <div className="language-card" data-aos={props.animation} data-aos-delay={props.delay} >
         <h1 className="language-card-title">
            {props.title}
        </h1>
        <p className="language-card-text">
            {props.text}                        
        </p>
   </div>
    )
}

function AboutLists() {

    return (
        <div id="lists-div">

        <div className="skills-headline-div" data-aos="fade-right">
        <h2 className="skills-headline">
            Tools that I use:
        </h2> 
        <ul className="skills-list" data-aos="fade-right" data-aos-delay="200">
            <li>VSCode</li>
            <li>Github</li>
            <li>NPM</li>
            <li>Photoshop</li>
        </ul>
        </div>
        <div className="skills-headline-div" data-aos="fade-left" data-aos-delay="100">
        <h2 className="skills-headline">
            (Human) Languages:
        </h2> 
        <ul className="skills-list" data-aos="fade-left" data-aos-delay="300">
            <li>English </li>
            <li>Dutch </li>
            <li>Russian </li>
            <li>Georgian </li>
        </ul>
        </div>
        </div>
    )
}



export default About