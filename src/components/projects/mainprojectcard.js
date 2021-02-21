import React, {useState} from "react"
import AOS from 'aos';
import 'aos/dist/aos.css'
import "./mainprojectcard.css"

AOS.init(

    );

function MainProjectCard(props) {
    const [hover, setHovered] = useState(false)
    
    function handleMouseOver() {
        setHovered(true) 
    }
    function handleMouseLeave() {
        setHovered(false)
    }

    const buttonClass = hover ? "main-link-button-hover" : "main-link-button-nohover"
    const overlayClass = hover ? "project-description-div-in" : "project-description-div-out" //this is supposed to animate on hoevr-out, but doesn't

    return (
            <div className="main-project-card-div" onMouseEnter={handleMouseOver} onMouseLeave={handleMouseLeave}>
                <img src={props.image} alt={props.imageDescription} className="main-project-img" />
                <a href={props.destination} className="main-project-link">
                    <button className={buttonClass} >{props.linkText}</button>
                </a>

                {/* This activates the overlay on hover. 
                 I want to make this part disappear after hoevrv-out animation is done. Will look up later */}
                {hover && (
                <div className={overlayClass}   >
                    <p className="main-project-description" data-aos="fade-up" data-aos-delay="200" >
                        {props.description} 
                    </p>
                    <div className="main-project-overlay"  ></div> 
                </div> )}
                
             
                

            </div>
    )
}

export default MainProjectCard