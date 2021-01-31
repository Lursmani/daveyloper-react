import React from "react"
import { Link, BrowserRouter as Router } from "react-router-dom"
import "./nav.css"


function Nav() {
    return(
        <Router>
        <div className="nav-container">
            <ul className="nav-list">
                <NavLink to="/" text="Home" />
            </ul>
        </div>
        </Router>
    )
}


function NavLink(props) {
return(
    
    <Link to={props.to}>
        <li className="nav-link">
            {props.text}
        </li>
    </Link>
    
)}

export default Nav