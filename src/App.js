import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Nav from "./Nav"
import Home from "./components/home/home"
import Footer from "./Footer"

function App() {
  return (
    <Router>
    <div className="main-container">
      <Nav />
      <div className="nav-offset"></div>
      <div className="main-body">
      <Switch>
      <Route path="/" exact component={Home} />
      </Switch>
      </div>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
