import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import DemoComponent from "./component/demoComponent";
import Component2 from "./component/component2";
import Component3 from "./component/component3";
import ErrorCompo from "./component/errorCompo";
import "./css/style.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div>
            <Link to="/">DemoComponent</Link>
            <br />
            <Link to="/compo2/">Component-2</Link>
            <br />
            <Link to="/compo3/">Component-3</Link>
          </div>
          <Switch>
            <Route path="/" exact component={DemoComponent} />
            <Route path="/compo2/" component={Component2} />
            <Route path="/compo3/" component={Component3} />
            <Route component={ErrorCompo} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
