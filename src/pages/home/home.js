import React, { useEffect } from "react";
import BannerImage from "./banner-image.png";
import LightSpeed from "react-reveal/LightSpeed";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";
import "./home.css";
import { Link } from "react-scroll";
import { Icon } from "@iconify/react";
import chevronDown from "@iconify-icons/el/chevron-down";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";
import ProjectCard from "./projectcard";
import Gitsearch from "../../images/gitsearch.PNG";
import CarouselImage from "../../images/carousel.PNG";
import MyDispatcher from "../../images/MyDispatcher/3.png";
import About from "./About";

AOS.init({
  once: true,
});

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home-container">
      <Helmet>
        <title>
          Davit Lursmanashvili Homepage - React Front-end Developer{" "}
        </title>
        <meta
          name="description"
          content="Davit Lursmanashvili. A web developer and a front-end developer from Georgia. I build responsive, optimized websites using 
            React, HTML, and CSS. This is my home page/landing page. Learn about me and my experience here. "
        />
      </Helmet>
      <div className="banner-container">
        <div id="banner-text-div">
          <LightSpeed left duration={400}>
            <h1 className="banner-text">
              I am Davit Lursmanashvili, a front-end developer
            </h1>
          </LightSpeed>
          <LightSpeed right duration={400} delay={200}>
            <h2 className="banner-text">And I make pretty cool websites</h2>
          </LightSpeed>
          <LightSpeed left right duration={400} delay={350}>
            <Link smooth to="scroll-container" offset={-80}>
              <button id="banner-link">Project Showcase</button>{" "}
            </Link>
          </LightSpeed>
          <LightSpeed bottom right duration={400} delay={550}>
            <Icon icon={chevronDown} color="#DEF2F1" id="down-chevron" />
          </LightSpeed>
        </div>

        <img src={BannerImage} alt="" id="banner-image" />
      </div>
      <Flip top>
        <div id="scroll-title-div">
          <h2 id="scroll-title">Check out some of my latest projects below:</h2>
          <h4 id="scroll-subtitle"><i>Disclaimer: My latest projects are covered by an NDA, therefore I can not display them publicly.</i> </h4>
        </div>
      </Flip>

      <div className="scroll-container">
        <Fade bottom>
          <ProjectCard
            image={MyDispatcher}
            destination="https://mydispatcher.universaltransit.us/"
            linkText="My Dispatcher"
            description="A dispatching application for a transit company, develped in collaboration with Univeral Transit LTD."
          />
          <ProjectCard
            image={CarouselImage}
            destination="/carousel"
            linkText="Carousel"
            description="A responsive carousel that can accept any HTML content."
          />
        </Fade>
        <Fade bottom delay={150}>
          <ProjectCard
            image={Gitsearch}
            destination="https://github-seach-project.netlify.app/users"
            linkText="Github Search Tool"
            description="An app that lets you search github users, display their repos and sort the results. Using Github Search API with dinamic routing."
          />
        </Fade>
        <Fade bottom delay={300}></Fade>
      </div>

      <About />
    </div>
  );
}

export default Home;
