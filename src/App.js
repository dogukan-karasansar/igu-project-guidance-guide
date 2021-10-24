import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import "./App.css";
import Github from "./screens/guide/github";

export default function App() {
  return (
    <Router>
      <div className="dashoard">
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route path="/github" component={Github} />
        </Switch>
      </div>
    </Router>
  );
}
