import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from "./Home"
import About from "./About"
import Login from "./Login"
import Dashboard from "./Dashboard"
export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li> <Link to="/about">About</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/Login">Login</Link></li>
        </ul>
        <hr />

        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/about"> <About /> </Route>
          <Route path="/dashboard"><Dashboard /></Route>
          <Route path="/Login"><Login /> </Route>
        </Switch>
      </div>
    </Router>
  );
}


