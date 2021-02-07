import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom"
import Header from "./Nav"
import Home from "./components/home/home"
import Footer from "./Footer"
import About from "./components/about/About"
import Projects from "./components/projects/Projects"
import Contact from "./components/contact/Contact"
import Hamburger from "./components/hamburger/hamburger"

function App() {
  return (
  <Router>
    <Hamburger />
    <div className="main-container">
      <Header />
      
      <div className="nav-offset"></div>
      <div className="main-body">
      <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} />
      <Route path="/contact" component={Contact} />
      </Switch>
      </div>
      <Footer />
    </div>
  </Router>
  );
}

export default App;
