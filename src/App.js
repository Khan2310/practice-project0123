import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import styled from "styled-components";
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
            <Button>
              <Link to="/">DemoComponent</Link>
            </Button>
            <br />
            <Button>
              <Link to="/compo2/">Component-2</Link>
            </Button>
            <br />
            <Button>
              <Link to="/compo3/">Component-3</Link>
            </Button>
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

const Button = styled.button`
  background: yellow;
  text-decoration: none;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid red;
  border-radius: 3px;
`;

export default App;
