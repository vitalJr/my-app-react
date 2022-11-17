import React, { Component, useState } from "react";
import { Container, Paragraph, Button } from "./styles";
import { Link } from "react-router-dom";

const Initial = (): JSX.Element => {
  const [test, setTest] = useState("");

  const onClickLink = () => {
    setTest("button clicked");
  };

  return (
    <Container data-testid="teste">
      <Paragraph>Initial Test</Paragraph>
      <Link to="/second">Second</Link>
      <Button onClick={onClickLink}>Click here</Button>
      {test && <Paragraph>{test}</Paragraph>}
    </Container>
  );
};

export default Initial;
