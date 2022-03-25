import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    font-family: Roboto, Arial, Helvetica, sans-serif;
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
