import { useState } from "react";
import {
  Container,
  Paragraph,
  Button as ButtonInitial,
  ContainerButton,
} from "./styles";
import { Link } from "react-router-dom";

const Initial = (): JSX.Element => {
  const [test, setTest] = useState("");

  const onClickLink = () => {
    setTest("button clicked");
  };

  return (
    <Container data-testid="teste" backgroundColor="#F2F">
      <Paragraph>Initial Test</Paragraph>
      <Link to="/second">Second</Link>
      <ContainerButton>
        <ButtonInitial onClick={onClickLink}>Click here</ButtonInitial>
      </ContainerButton>

      {test && <Paragraph>{test}</Paragraph>}
    </Container>
  );
};

export default Initial;
