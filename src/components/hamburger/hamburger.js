import React from "react"
import { Link } from "react-router-dom"
import "./hamburger.css"
import { slide as Menu } from "react-burger-menu"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpen, faHome, faAddressCard, faLaptopCode } from '@fortawesome/free-solid-svg-icons'
 



class Hamburger extends React.Component {
    showSettings (event) {
        event.PreventDefault ();
    }
    
    render () {

  return (
      <div id="hamburger-div">
  <Menu right width={ '70vw'}>
     <a id="home" className="menu-item" href="/">Home <FontAwesomeIcon icon={faHome} fixedWidth /></a>
     <a id="about" className="menu-item" href="/about.html">About <FontAwesomeIcon icon={faAddressCard} fixedWidth /></a>
     <a id="projects" className="menu-item" href="/projects.html">Projects <FontAwesomeIcon icon={faLaptopCode} fixedWidth /></a>
     <a id="contact" className="menu-item" href="/contact.html">Contact <FontAwesomeIcon icon={faEnvelopeOpen} fixedWidth /></a>
</Menu>
    </div>
)
    }
}

export default Hamburger