import React, {useState} from "react"
import AOS from 'aos';
import 'aos/dist/aos.css'
import "./projectcard.css"

AOS.init(

    );

function ProjectCard(props) {
    const [hover, setHovered] = useState(false)
    
    function handleMouseOver() {
        setHovered(true)
    }
    function handleMouseLeave() {
        setHovered(false)
    }

    const buttonClass = hover ? "link-button-hover" : "link-button-nohover"


    return (
            <div className="project-card-div" onMouseEnter={handleMouseOver} onMouseLeave={handleMouseLeave}>
                <img src={props.image} alt={props.imageDescription} className="project-img" />
                <a href={props.destination} className="project-link">
                    <button className={buttonClass} >{props.linkText}</button>
                </a>
                {hover && (
                <div className="project-description-div" data-aos="zoom-in-up"  >
                    <p className="project-description" data-aos="fade-up" data-aos-delay="200" >
                        {props.description} 
                    </p>
                    <div className="project-overlay"  ></div> 
                </div> )}
                
             
                

            </div>
    )
}

export default ProjectCard