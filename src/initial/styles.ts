import styled from "styled-components";

interface ContainerProps {
  backgroundColor?: string;
}

export const Container = styled.div<ContainerProps>`
  margin: auto;
  text-align: center;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "#FFF"};
`;
Container.displayName = "ContainerInitial";

export const Paragraph = styled.p``;
Paragraph.displayName = "ParagraphInitial";

export const ContainerButton = styled.div``;

export const Button = styled.button`
  width: 150px;
  height: 40px;
  margin-top: 20px;
`;
Button.displayName = "ButtonInitial";
