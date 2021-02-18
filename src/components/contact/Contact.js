import React from "react"
import "./contact.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin, faGithubSquare} from "@fortawesome/free-brands-svg-icons"
import {faEnvelopeSquare} from "@fortawesome/free-solid-svg-icons"



function Contact(props) {

    return (
        <div id="contact-container">
            <div className="contacts-div">
                <div id="contact-linkedin">
                <a target= "_blank" rel="noreferrer" className="contact-text"  href="https://www.linkedin.com/in/davit-lursmanashvili/"> <h1 className="contact-text" >Find me on <FontAwesomeIcon icon={faLinkedin} className="contact-page-icon" /></h1></a>
                </div>
                <hr id="vertical-line"/>
                <div id="contact-github">
                <a target= "_blank" rel="noreferrer" className="contact-text"  href="https://github.com/Lursmani" >   <h1 className="contact-text"> Take a look at my repos on <FontAwesomeIcon icon={faGithubSquare} className="contact-page-icon" /> </h1> </a>
                </div>
                <div id="contact-email">
                   <a className="contact-text" href="mailto:lursmanashvilidavit@gmail.com"> <h1 className="contact-text"> If you have a direct inquiry, you can send me an <FontAwesomeIcon icon={faEnvelopeSquare} className="contact-page-icon" /> </h1> </a>
                </div>
                <hr id="horizontal-line" />
                <div id="contact-cv">

                </div>
            </div>
        </div>
    )
}

export default Contact