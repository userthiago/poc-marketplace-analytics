import styled from 'styled-components';

export const FullBackgroundContainer = styled.div`
  z-index: 100;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background: rgba(0, 0, 0, 0.6);
  height: 100vh;
  width: 100vw;

  &.backgroundContent-enter {
    opacity: 0;
  }

  &.backgroundContent-enter-active {
    opacity: 1;
    transition: opacity 400ms ease;
  }

  &.backgroundContent-exit {
    opacity: 1;
  }

  &.backgroundContent-exit-active {
    opacity: 0;
    transition: opacity 400ms ease;
  }
`;
