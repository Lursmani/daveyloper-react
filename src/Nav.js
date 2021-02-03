import React from "react"
import { Link } from "react-router-dom"
import "./nav.css"
import { slide as Menu } from "react-burger-menu"


class Header extends React.Component {
    showSettings (event) {
        event.PreventDefault ();
    }
    
    render () {
    return(
        
        <div className="nav-container">
            <ul className="nav-list">
                <Linkie to="/" text="Home" />
                <Linkie to="/about" text="About" />
                <Linkie to="/projects" text="Projects" />
                <Linkie to="/contact" text="Contact" />
            </ul>
            <Menu right width={ '70vw'}>
                <a id="home" className="menu-item" href="/">Home</a>
            </Menu>
        </div>
        
    )
    }
}


function Linkie(props) {
return(
    
    <Link to={props.to} style={{textDecoration: "none"}}>
        <li className="nav-link">
            {props.text}
        </li>
    </Link>
    
)}

export default Header