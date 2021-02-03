import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom"
import Header from "./Nav"
import Home from "./components/home/home"
import Footer from "./Footer"
import About from "./components/about/About"
import Projects from "./components/projects/Projects"
import Contact from "./components/contact/Contact"

function App() {
  return (
  <Router>
    <div className="main-container">
      <Header />
      <div className="nav-offset"></div>
      <div className="main-body">
      <Switch>
      <Route exact path="/" component={withRouter(Home)} />
      <Route path="/about" component={withRouter(About)} />
      <Route path="/projects" component={withRouter(Projects)} />
      <Route path="/contact" component={withRouter(Contact)} />
      </Switch>
      </div>
      <Footer />
    </div>
  </Router>
  );
}

export default App;
