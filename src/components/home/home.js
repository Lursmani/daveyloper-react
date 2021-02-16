import React, {useState} from "react"
import BannerImage from "./banner-image.png" 
import "./home.css"
import { Link,  animateScroll as scroll, } from 'react-scroll'
import { Icon, } from '@iconify/react';
import chevronDown from '@iconify-icons/el/chevron-down';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProjectCard from "./projectcard"



AOS.init(

);

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
            <div id="scroll-title-div">
                <h1 id="scroll-title">
                    Check out some of my projects below:
                </h1>
            </div>
            <div className="scroll-container">
            <ProjectCard 
            image = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
            destination = "https://www.google.com/"
            linkText = "Google"
            description="asfdasdfasdf"
            />
             <ProjectCard 
            image = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
            destination = "https://www.google.com/"
            linkText = "Google"
            description="asfdasdfasdf"
            />
             <ProjectCard 
            image = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
            destination = "https://www.google.com/"
            linkText = "Google"
            description="asfdasdfasdf"
            />
            </div>
        </div>
    )
}







export default Home