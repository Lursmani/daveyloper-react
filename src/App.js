import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Nav from "./Nav"
import Home from "./components/home/home"

function App() {
  return (
    <Router>
    <div className="main-container">
      <Nav />
      <Switch>
      <Route path="/" exact component={Home} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
