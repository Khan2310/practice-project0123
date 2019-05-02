import React, { Component } from "react";
import styled from "styled-components";

export default class Component3 extends Component {
  render() {
    return (
      <div className="compo-3">
        <Title>I am component Three !</Title>
      </div>
    );
  }
}

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #6c5ce7;
`;
