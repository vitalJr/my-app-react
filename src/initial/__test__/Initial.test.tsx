import { act, create, ReactTestRenderer } from "react-test-renderer";
import { MemoryRouter as Router, Link } from "react-router-dom";
import Initial from "../index";
import { Button, Container, Paragraph } from "../styles";

let wrapper: ReactTestRenderer;
let root: ReactTestRenderer["root"];

const componentToTest = (): JSX.Element => {
  return (
    <Router>
      <Initial />
    </Router>
  );
};

describe("Initial Test", () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  beforeEach(() => {
    wrapper = create(componentToTest());
    root = wrapper.root;
  });

  it("renders Account header", () => {
    expect(root.findAllByType(Container)).toHaveLength(1);
    expect(root.findAllByType(Paragraph)).toHaveLength(1);
    expect(root.findAllByType(Link)).toHaveLength(1);
  });

  it("test click", () => {
    const buttonElement = root.findAllByType(Button);
    act(() => {
      buttonElement[0].props.onClick();
    });

    expect(root.findAllByType(Paragraph)).toHaveLength(2);
  });
});
