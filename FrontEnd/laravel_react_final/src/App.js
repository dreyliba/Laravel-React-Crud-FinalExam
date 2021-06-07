import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Add from "./components/Add";
import Edit from "./components/Edit";

export class App extends Component {
  componentDidMount() {
    fetch("http://127.0.0.1:8000/api/profiles")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  }

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Add" component={Add} />
            <Route exact path="/Edit/:id" component={Edit} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
