import styled from "styled-components/macro";

interface ContainerProps {
  backgroundColor?: string;
}

export const Container = styled.div<ContainerProps>`
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;
  height: 100%;
  text-align: center;
  box-shadow: 5px 5px 2px 1px rgba(0, 0, 255, 0.2);
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "#FFF"};
`;
Container.displayName = "ContainerInicial";

export const Paragraph = styled.p``;
Paragraph.displayName = "ParagraphInitial";

export const ContainerButton = styled.div``;

export const Button = styled.button`
  width: 150px;
  height: 30px;
  border-radius: 8px;
  border-width: 1px;
  margin-top: 20px;
  margin-bottom: 10px;
`;
Button.displayName = "ButtonInitial";
