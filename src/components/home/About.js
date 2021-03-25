import React, {useEffect} from "react"
import myPicture from "./me.jpg"
import Flip from "react-reveal/Flip"
import Fade from 'react-reveal/Fade'
import "./about.css"
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faReact, faHtml5, faCss3Alt, faSass, faBootstrap, faJsSquare} from "@fortawesome/free-brands-svg-icons"
import { Icon, InlineIcon } from '@iconify/react';
import reduxIcon from '@iconify-icons/simple-icons/redux';



function About(props) {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div id="about-container">


            <div id="about-me-div">
               <Fade left><img id="about-me-img" src={myPicture} alt="Me, Davit Lursmanashvili" /></Fade> 
            <div id="about-story-div">
                <Fade right cascade  distance="100px" duration={500}>
                <section id="about-story-text-div">
                    <h1 className="about-story-text" >
                       I am Davit, a front-end developer from Georgia.
                    </h1>
                    <p className="about-story-text about-story-p">
                    I became a front-end developer in 2020, when the whole world was upside down. Since then I have been 
                     constantly advancing my skills and portfolio as a front-end developer. 
                    </p>
                    <p className="about-story-text about-story-p">
                    I focus on creating responsive, fast websites with interactive elements and good accessibility. 
                    I use React, CSS, HTML and other supporting technology to deliver excellent products.  
                        
                    </p>

                </section>
                </Fade>
            </div>
            </div>



            <Skills />
        </div>
    )
}


function Skills() {

    return (
        <section id="about-skills-div">
                <div id="languages-div">
                   <div className="languages-headline-div"> <h1 className="languages-headline">
                        Development languages and frameworks:
                    </h1> </div>
                   
                    <div id="languages-flex">
                    <Fade bottom>
                        <LanguageCard 
                        title = {<FontAwesomeIcon icon={faReact} />}
                        text="React"
                        />
                    </Fade>
                    <Fade top>
                        <LanguageCard 
                        title = {<FontAwesomeIcon icon={faJsSquare} />}
                        text="Javascript"
                        />
                    </Fade>
                     <Fade bottom>
                        <LanguageCard 
                        title= {<FontAwesomeIcon icon={faHtml5} />}
                        text="HTML5" 
                        />
                    </Fade>
                    <Fade top>
                        <LanguageCard
                            title={<FontAwesomeIcon icon={faCss3Alt} />}
                            text="CSS3"
                        />
                    </Fade>
                     <Fade bottom>
                        <LanguageCard
                            title={<FontAwesomeIcon icon={faSass} />}
                            text="SASS"
                        />
                    </Fade>    
                    <Fade top>
                        <LanguageCard 
                        title = {<FontAwesomeIcon icon={faBootstrap} />}
                        text="Bootstrap"
                        />
                     </Fade>   
                     <Fade bottom>
                        <LanguageCard 
                        title = {<Icon icon={reduxIcon} />}
                        text="Redux"
                        />
                    </Fade>

                    </div>
                 

                   <AboutLists/>

            <div className="end-links-div" >
            <Flip right>   
            <div className="end-link-projects"  >
            <a className="end-links" href="/projects"  >
                    <h2 className="end-links-text">My projects</h2>
            </a>
            </div>
            </Flip>
            <Flip right>   
            <div className="end-link-contact" >
            <a className="end-links" href="/contact" > 
                <h2 className="end-links-text">Contact me directly </h2>
            </a>
            </div>
            </Flip>
            </div>
            </div>
            </section>



    )
}




function LanguageCard(props) {

    return (
    <div className="language-card">
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
        
        <div className="skills-headline-div">
        <Fade left>
        <h2 className="skills-headline">
            Tools that I use:
        </h2> 
        </Fade>
        <Fade left cascade>
        <ul className="skills-list">
            <li>VSCode</li>
            <li>Github</li>
            <li>NPM</li>
            <li>Photoshop</li>
            <li>Figma</li>
        </ul>
        </Fade>
        </div>
        <div className="skills-headline-div">
        <Fade right>
        <h2 className="skills-headline">
            (Human) Languages:
        </h2> 
        </Fade>     
        <Fade right cascade>
        <ul className="skills-list">
            <li>English </li>
            <li>Dutch </li>
            <li>Russian </li>
            <li>Georgian </li>
        </ul>
        </Fade>
        </div>
        </div>
    )
}



export default About