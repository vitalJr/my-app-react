import { useState, useEffect } from "react";
import {
  Container,
  Paragraph,
  Button as ButtonInitial,
  ContainerButton,
} from "./styles";
import { Link } from "react-router-dom";
import { get, testFetch } from "./initial.service";

const Initial = (): JSX.Element => {
  const [test, setTest] = useState("");
  const [listTest, setListTest] = useState([]);

  const onClickLink = () => {
    setTest("button clicked");
  };

  const getTest = async (): Promise<void> => {
    // const list = await get();
    const list = await testFetch();
    setListTest(list);
  };

  console.log(listTest);

  return (
    <Container backgroundColor="#F2F2F2">
      <Paragraph>Initial Test</Paragraph>
      <Link to="/second">Second</Link>
      <ContainerButton>
        <ButtonInitial
          id="teste"
          onClick={() => {
            onClickLink();
            getTest();
          }}
        >
          Click here
        </ButtonInitial>
      </ContainerButton>

      {listTest && listTest.length > 0 && <Paragraph>{test}</Paragraph>}
    </Container>
  );
};

export default Initial;
