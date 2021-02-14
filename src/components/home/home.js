import React from "react"
import BannerImage from "./banner-image.png" 
import "./home.css"
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { Icon, InlineIcon } from '@iconify/react';
import chevronDown from '@iconify-icons/el/chevron-down';



function Home() {

    return (
        <div className="home-container">
            <div className="banner-container">
                <div id="banner-text-div">
                    <h1 className="banner-text">I am Davit Lursmanashvili, a front-end developer</h1>
                    <h1 className="banner-text">And I make pretty cool websites</h1>
                    <Link smooth to="scroll-container"><button id="banner-link">Project Showcase</button> </Link>
                    <Icon icon={chevronDown} color="#DEF2F1" id="down-chevron" />
                </div>
                <img src={BannerImage} alt="" id="banner-image" />

            </div>
            <div className="scroll-container">

            </div>
        </div>
    )
}

export default Home