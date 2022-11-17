import { Link } from "react-router-dom";
import { Container } from "./styles";

interface SecondProps {
  name: string;
}

function Second({ name }: SecondProps) {
  return (
    <Container>
      <p>{name}</p>
      <Link to="/">Initial</Link>
    </Container>
  );
}

export default Second;
