import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Register from "./Pages/Register";
import Detail from "./Pages/Detail";

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={Register}></Route>
            <Route exact path="/detail" component={Detail}></Route>
          </Switch>
        </Router>
      </>
    );
  }
}
