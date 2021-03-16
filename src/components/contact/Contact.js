import React, {useEffect}from "react"
import "./contact.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin, faGithubSquare} from "@fortawesome/free-brands-svg-icons"
import {faEnvelopeSquare} from "@fortawesome/free-solid-svg-icons"



function Contact(props) {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div id="contact-container">
            <div className="contacts-div">
                <div id="contact-linkedin">
                <a target= "_blank" rel="noreferrer" className="contact-link"  href="https://www.linkedin.com/in/davit-lursmanashvili/"> 
                <h2 className="contact-text" >Find me on LinkedIn <FontAwesomeIcon icon={faLinkedin} className="contact-page-icon" /> </h2></a>
                </div>

                <hr id="contact-line-1"/>

                <div id="contact-github">
                <a target= "_blank" rel="noreferrer" className="contact-link"  href="https://github.com/Lursmani" >  
                <h2 className="contact-text"> Take a look at my repos on <FontAwesomeIcon icon={faGithubSquare} className="contact-page-icon" /> </h2> </a>
                </div>

                <hr id="contact-line-2" />

                <div id="contact-email">
                   <a className="contact-link" href="mailto:lursmanashvilidavit@gmail.com">
                   <h2 className="contact-text"> If you have a direct inquiry, you can send me an <FontAwesomeIcon icon={faEnvelopeSquare} className="contact-page-icon" /> </h2> </a>
                </div>
                <div id="contact-cv">

                </div>
            </div>
        </div>
    )
}

export default Contact