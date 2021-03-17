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
import QuoteGenerator from "../projects/images/quoteGenerator.PNG"
import MarkdownPreviewer from "../projects/images/MarkdownPreviewer.png"


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
            <title>Davit Lursmanashvili (Daveyloper): Front-end Developer - Landing Page</title>
            <meta name="description" content="Davit Lursmanashvili. Front-end developer. I build responsive, optimized websites using 
            React, HTML, and CSS." />
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
            image={QuoteGenerator}
            destination="/quotegenerator"
            linkText="Random Quote Generator"
            description="A random quote Generator that displays quotes from an API. Part of the FreeCodeCamp React course."
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
            image={MarkdownPreviewer}
            destination="/markdownpreviewer"
            linkText="Markdown Previewer"
            description="An app that lets you markdown plain text into HTML. Uses the 'marked' parser. "
            />
            </div>


            <div className="end-links-div" data-aos="flip-up" data-aos-delay="200" >
            
            
            <div className="end-link-projects" data-aos="flip-left" data-aos-delay="400"    >
            <a className="end-links" href="/projects"  >
                    <h2 className="end-links-text">Take a look at more of my projects</h2>
                    </a>
                    </div>
                    
                 <div className="end-link-contact" data-aos="flip-right" data-aos-delay="600">
                 <a className="end-links" href="/contact" > 
                <h2 className="end-links-text">Contact me directly </h2>
                   </a>
                </div>
               
            </div>
        </div>
    )
}







export default Home