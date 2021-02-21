import React, {Suspense} from "react"
import './App.css';
import "./Loading.css"
import {BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Header from "./Nav"
import Footer from "./Footer"
import Hamburger from "./components/hamburger/hamburger"
const Contact = React.lazy(() => import ("./components/contact/Contact") )
const Projects = React.lazy (() => import ("./components/projects/Projects") )
const About = React.lazy(() => import ("./components/about/About") )
const Home = React.lazy(() => import  ("./components/home/home"));



function App() {
  return (
  <Router>
    <Hamburger />
    <div className="main-container">
      <Header />
      
      <div className="nav-offset"></div>
      <div className="main-body">
      <Suspense fallback={<Loading/>}>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} />
      <Route path="/contact" component={Contact} />
      </Switch>
      </Suspense>
      </div>
      <Footer />
    </div>
  </Router>
  );
}


function Loading() {
  return (
    <div className="loading-background">
      <h1 className="loading-text">
        Loading...
      </h1>
    </div>
  )
}

export default App;




// import About from "./components/about/About"
// import Projects from "./components/projects/Projects"
// import Contact from "./components/contact/Contact"