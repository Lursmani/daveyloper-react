import React, {useEffect} from "react"
import {Helmet} from "react-helmet"
import "./projects.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MainProjectCard from "./mainprojectcard"
import DaveyLoper from "../../images/daveyloper.png"
import TributePage from "../../images/tribute-page.png"
import LandingPage from "../../images/landingpage.png"
import TechDoc from "../../images/techdoc.png"
import SurveyForm from "../../images/surveyform.png"
import QuoteGenerator from "../../images/quoteGenerator.PNG"
import MarkdownPreviewer from "../../images/MarkdownPreviewer.png"
import Drumpad from "../../images/drumpad.PNG"
import Calculator from "../../images/calculator.PNG"
import Timer from "../../images/Timer.PNG"
import CarouselImage from "../../images/carousel.PNG"
import Gitsearch from "../../images/gitsearch.PNG"


const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 768 },
      items: 3
    },

    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1
    }
  
}


function Projects(props) {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div className="projects-container">
            <Helmet>
                <title>Projects - Davit Lursmanashvili (Daveyloper)</title>
                <meta name="description" content="This is the portfolio of projects that I've built using mostly React, CSS and HTML. Visit to view the projects that I have built."/>
            </Helmet>

            <div className="projects-title-div" data-aos="fade-up">
                <h1 className="projects-title">My Projects:</h1>
                <h2 className="projects-subtitle">While this website itself is one of my projects, below you can see other projects that I have worked on.</h2>
            </div>
            <ProjectCarousel
                title="React Projects"
                description="These are some projects that I worked on to get familiar with React"
            >
                <MainProjectCard
                image={Gitsearch}
                destination="https://github-seach-project.netlify.app/users"
                linkText="Github Search Tool"
                description="An app that lets you search github users, display their repos and sort the results. Using Github Search API with dinamic routing."
                /> 
                <MainProjectCard
                image={CarouselImage}
                destination="/carousel"
                linkText="Carousel"
                description="A responsive carousel that can accept any HTML content."
                /> 
                  <MainProjectCard
                image={Calculator}
                destination="/calculator"
                linkText="Calculator"
                description="A calculator built with Reactjs."
                /> 
               
                 <MainProjectCard
                image={Drumpad}
                destination="/drumpad"
                linkText="Drum Pad"
                description="A drumpad that plays different audio files when you press different buttons."
                />  
                <MainProjectCard
                image={Timer}
                destination="/25timer"
                linkText="25+5 Timer"
                description="A dual timer that starts the second countdown when one countdown is over."
                />
                <MainProjectCard
                image={QuoteGenerator}
                destination="/quotegenerator"
                linkText="Random Quote Generator"
                description="A random quote Generator that displays quotes from an API. Part of the FreeCodeCamp React course."
                />
                 <MainProjectCard
                image={MarkdownPreviewer}
                destination="/markdownpreviewer"
                linkText="Markdown Previewer"
                description="An app that lets you markdown plain text into HTML. Uses the 'marked' parser. "
                />  
                

            </ProjectCarousel>

            <ProjectCarousel  
            title="FreeCodeCamp projects"
            description="These are the first projects I did while I was learning HTML and CSS. Everybody has to start somewhere, right?">
                <MainProjectCard 
                image={DaveyLoper}
                destination="https://lursmani.github.io/daveyloper.com/"
                linkText="My First Website"
                description="First version of my website. Pure HTML and CSS, with only a little bit of vanilla JS"
                />
                <MainProjectCard 
                destination="https://lursmani.github.io/daveyloper.com/tribute.html"
                linkText="Tribute Page"
                description="Simple page with text and an image."
                image={TributePage}
                />
                
                <MainProjectCard 
                destination="https://lursmani.github.io/daveyloper.com/landingpage.html"
                linkText="Landing Page"
                description="First landing page I made. Simple HTML and CSS."
                image={LandingPage}
                />
                <MainProjectCard 
                destination="https://lursmani.github.io/daveyloper.com/techdoc.html"
                linkText="Documentation Page"
                description="A page with sidebar navigation."
                image={TechDoc}
                />
                <MainProjectCard 
                destination="https://lursmani.github.io/daveyloper.com/surveyform.html"
                linkText="HTML Form"
                description="Just an HTML form. My first one"
                image={SurveyForm}
                />
                
            </ProjectCarousel>
            
           
           <div className="projects-title-div" data-aos="flip-up">
                <h1 className="projects-title" style={{color:"#d9dae6"}} >To be continued...</h1>
           </div>
        </div>
    )
}


function ProjectCarousel(props) {

    return (
        <div className="carousel-div" data-aos="fade-up" data-aos-delay="100">
            <div className="carousel-title-box" data-aos="fade-up" data-aos-delay="200"> <h1 className="carousel-title">{props.title}</h1>
             <p className="carousel-description" data-aos="fade-up"data-aos-delay="300" >{props.description}</p>
             </div>
                 <Carousel 
                 additionalTransfrom={0}
                 responsive={responsive} 
                 containerClass="carousel-container"
                 sliderClass="carousel-slider"
                 itemClass="carousel-item"
                 dotListClass="carousel-dotlist"
                 slidesToSlide={1}
                 infinite={true}
                 showDots={true}
                 centerMode={false}
                 focusOnSelect={true}
                 >
                {props.children}
                 </Carousel>
               
        </div>
    )
}




export default Projects