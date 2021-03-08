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
const QuoteGenerator = React.lazy(() => import ("./components/works/quote-generator/quote-generator"))
const MarkdownPreviewer = React.lazy(() => import ("./components/works/markdownPreviewer/markdownpreviewer"))
const DrumPad = React.lazy(() => import ("./components/works/dumpPad/drumPad"))



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
      <Route exact path="/index.html" component={Home} />
      <Route path="/about.html" component={About} />
      <Route path="/projects.html" component={Projects} />
      <Route path="/contact.html" component={Contact} />
      <Route path="/quotegenerator.html" component={QuoteGenerator} />
      <Route path="/markdownpreviewer.html" component={MarkdownPreviewer} />
      <Route path="/drumpad.html" component={DrumPad} />
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