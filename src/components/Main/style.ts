import styled from "styled-components";
import mainBackground from "../../assets/main_background.png";

export const MainStyle = styled.main`
  background-image: url(${mainBackground});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left;
  position: fixed;
  width: 100vw;
  height: 100vh;

  h1 {
    font-weight: 700;
    text-align: right;
    margin-right: 10vw;
    margin-top: 30vh;
    font-size: 4rem;
    text-shadow: 5px 5px #2b2b2b;
    color: #edce7e;
  }

  div {
    display: flex;
    align-items: right;
    justify-content: right;
    margin-right: 10vw;

    button {
      background-color: #2b2b2b;
      color: #edce7e;
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
      cursor: pointer;
      border-radius: 7px;
      box-shadow: 5px 5px #edce7e;
      margin-top: 1rem;
    }
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 1.5rem;
      text-shadow: 2px 2px #2b2b2b;
    }
  }
`;
