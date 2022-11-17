import React, { Component } from "react";
import { Container, Paragraph } from "./styles";
import { Link } from "react-router-dom";

class Initial extends Component {
  render(): React.ReactNode {
    return (
      <Container data-testid="teste">
        <Paragraph>Initial Test</Paragraph>
        <Link to="/second">Second</Link>
      </Container>
    );
  }
}

export default Initial;
