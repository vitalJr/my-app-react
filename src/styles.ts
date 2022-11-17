import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  text-align: center;
`;

Container.displayName = "ContainerApp";

export const Paragraph = styled.p``;

export const LinkApp = styled.a`
  color: #61dafb;
`;

LinkApp.displayName = "LinkApp";

export const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

AppHeader.displayName = "AppHeader";

const breatheAnimation = keyframes`
 0% { height: 100px; width: 100px; }
 30% { height: 400px; width: 400px; opacity: 1 }
 40% { height: 405px; width: 405px; opacity: 0.3; }
 100% { height: 100px; width: 100px; opacity: 0.6; }
`;

export const AppLogo = styled.img`
  height: 40vmin;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    .App-logo {
      animation: App-logo-spin infinite 20s linear;
    }
  }
  animation-name: ${breatheAnimation};
  animation-duration: 8s;
`;

AppLogo.displayName = "AppLogo";
