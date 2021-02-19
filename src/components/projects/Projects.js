import React from "react"
import "./projects.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MainProjectCard from "./mainprojectcard"


const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },

    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1
    }
  
}


function Projects(props) {

    return (
        <div className="projects-container">
            <div className="projects-title-div">
                <h1 className="projects-title">My Projects:</h1>
            </div>
            <ProjectCarousel 
            title="FreeCodeCamp projects"
            description="These are the first projects I did while I was learning HTML and CSS">
                <MainProjectCard />
                <MainProjectCard />
                <MainProjectCard />
                <MainProjectCard />

            </ProjectCarousel>
            
           
        </div>
    )
}


function ProjectCarousel(props) {

    return (
        <div className="carousel-div">
             <h1 className="carousel-title">{props.title}</h1>
             <p className="carousel-description">{props.description}</p>
             <Carousel responsive={responsive}>
                {props.children}
            </Carousel>
        </div>
    )
}




export default Projects