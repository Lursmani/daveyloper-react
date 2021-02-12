import React from "react"
import "./footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin, faGithubSquare} from "@fortawesome/free-brands-svg-icons"
import {faEnvelopeSquare} from "@fortawesome/free-solid-svg-icons"



function Footer() {
     
    return (
        <div className="footer-div">
            <div id="footer-name">
            <p className="footer-text-big">Davit Lursmanashvili</p>

            </div>
            <div id="footer-contact">
                <a target= "_blank" className="contact-icon" id="contact-icon-1" href="https://www.linkedin.com/in/davit-lursmanashvili/"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a target= "_blank" className="contact-icon" id="contact-icon-2" href="https://github.com/Lursmani"><FontAwesomeIcon icon={faGithubSquare} /> </a>
                <a className="contact-icon" id="contact-icon-3" href="mailto: lursmanashvilidavit@gmail.com"><FontAwesomeIcon icon={faEnvelopeSquare} /></a>
            </div>
        </div>
    )
}


export default Footer