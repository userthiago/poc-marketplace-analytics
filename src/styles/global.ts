import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    font-family: Roboto, Arial, Helvetica, sans-serif;
  }

  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;

    width: 100%;
    height: 100%;
  }

  body {
    font-size: 16px;

    a {
      text-decoration: none;

      &:hover {
        text-decoration: none;
      }
    }
  }

  button, a, [role="button"] {
    cursor: pointer;
  }
`;
