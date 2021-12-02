import React from "react"
import { Link } from "react-router-dom"
import "./nav.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons' 
import Hamburger from "./components/hamburger/hamburger"
 


function Header() {
   
    return(
        
        <header className="nav-container">
            
            <div id="logo-div">
                <h1 id="logo-text"><a id="logo-link" href="/"><FontAwesomeIcon icon={faCode} /> DaveyLoper</a></h1>
            </div>
            <ul className="nav-list">
                <Linkie to="/" text="Home" />
                <Linkie to="/projects" text="Projects" />
                <Linkie to="/contact" text="Contact" />
            </ul>
        </header>
        
    )
    }



function Linkie(props) {
return(
    
    <Link to={props.to} style={{textDecoration: "none"}}>
        <li className="nav-link">
            <div className="nav-link-div">{props.text}</div>
        </li>
    </Link>
    
)}

export default Header