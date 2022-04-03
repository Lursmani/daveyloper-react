import React, {Suspense} from "react"
import './App.css';
import "./Loading.css"
import {BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Header from "./Nav"
import Footer from "./Footer"
import Hamburger from "./components/hamburger/hamburger"
const Contact = React.lazy(() => import ("./pages/contact/Contact") )
const Projects = React.lazy (() => import ("./pages/projects/Projects") )
const Home = React.lazy(() => import  ("./pages/home/home"));
const QuoteGenerator = React.lazy(() => import ("./components/works/quote-generator/quote-generator"))
const MarkdownPreviewer = React.lazy(() => import ("./components/works/markdownPreviewer/markdownpreviewer"))
const DrumPad = React.lazy(() => import ("./components/works/drumPad/drumPad"))
const Calculator = React.lazy(() => import ("./components/works/calculator/calculator") )
const Timer25 = React.lazy(()=> import ("./components/works/25timer/25timer"))
const Carousel = React.lazy(() => import ("./components/works/carousel/demo/carouselView") )


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
      <Route path="/projects" component={Projects} />
      <Route path="/contact" component={Contact} />
      <Route path="/quotegenerator" component={QuoteGenerator} />
      <Route path="/markdownpreviewer" component={MarkdownPreviewer} />
      <Route path="/drumpad" component={DrumPad} />
      <Route path="/calculator" component={Calculator} />
      <Route path="/25timer" component={Timer25} />
      <Route path="/carousel" component={Carousel} />
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



