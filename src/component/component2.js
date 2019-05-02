import React, { Component } from "react";
import styled from "styled-components";

export default class Component2 extends Component {
  render() {
    return (
      <div className="compo-2">
        <Title>I am component Two !</Title>
      </div>
    );
  }
}

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #6c5ce7;
`;
