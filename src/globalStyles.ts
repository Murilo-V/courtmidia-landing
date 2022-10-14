import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: 0;
    text-decoration: none;
    font-family: 'Inter', sans-serif;
  }

  .dark-button {
      background-color: #2b2b2b;
      color: #edce7e;
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
      cursor: pointer;
      border-radius: 7px;
      box-shadow: 5px 5px #edce7e;
      border: 1px solid #edce7e;
    }

    .light-button {
    background-color: #edce7e;
    color: #2b2b2b;
    padding: 1rem 1.5rem;
    font-size: 1.5rem;
    cursor: pointer;
    border-radius: 7px;
    box-shadow: 5px 5px #2b2b2b;
    border: 1px solid #2b2b2b;
  }
`;

export default GlobalStyle;
