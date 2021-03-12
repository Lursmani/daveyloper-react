import React, {useEffect} from "react"
import BannerImage from "./banner-image.png" 
import "./home.css"
import { Link,  } from 'react-scroll'
import { Icon, } from '@iconify/react';
import chevronDown from '@iconify-icons/el/chevron-down';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProjectCard from "./projectcard"
import Drumpad from "../projects/images/drumpad.PNG"
import QuoteGenerator from "../projects/images/quoteGenerator.PNG"
import MarkdownPreviewer from "../projects/images/MarkdownPreviewer.png"


AOS.init(

);

function Home() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div className="home-container">
            <div className="banner-container">
                <div id="banner-text-div">
                    <h1 data-aos="fade-right" data-aos-delay="150" className="banner-text">I am Davit Lursmanashvili, a front-end developer</h1>
                    <h1 data-aos="fade-left" data-aos-delay="250" className="banner-text">And I make pretty cool websites</h1>
                    <Link data-aos="fade-up" data-aos-delay="350" smooth to="scroll-container" offset={-80}><button id="banner-link">Project Showcase</button> </Link>
                    <Icon data-aos="fade-down" data-aos-delay="550" icon={chevronDown} color="#DEF2F1" id="down-chevron" />
                </div>
                <img src={BannerImage} alt="" id="banner-image" />
            </div>
            <div id="scroll-title-div">
                <h1 id="scroll-title">
                    Check out some of my projects below:
                </h1>
            </div>
            <div className="scroll-container">
            <ProjectCard 
            image={QuoteGenerator}
            destination="/quotegenerator.html"
            linkText="Random Quote Generator"
            description="A random quote Generator that displays quotes from an API. Part of the FreeCodeCamp React course."
            />
             <ProjectCard 
             image={Drumpad}
             destination="/drumpad.html"
             linkText="Drum Pad"
             description="A drumpad that plays different audio files when you press different buttons."
            />
             <ProjectCard 
            image={MarkdownPreviewer}
            destination="/markdownpreviewer.html"
            linkText="Markdown Previewer"
            description="An app that lets you markdown plain text into HTML. Uses the 'marked' parser. "
            />
            </div>
            <div className="end-links-div" data-aos="flip-up" data-aos-delay="200" >
            <a className="end-links" href="/projects"  >
                 <div className="end-link-projects" data-aos="flip-left" data-aos-delay="400">
                    <h1>Click here to see more of my projects</h1>
                </div>
                </a>
                <hr id="end-link-br"/>
                <a className="end-links" href="/contact" >  
                 <div className="end-link-contact" data-aos="flip-right" data-aos-delay="600">
                <h1>Click here to contact me directly </h1> 
                </div>
                </a>
            </div>
        </div>
    )
}







export default Home