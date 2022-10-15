import styled from "styled-components";
import mainBackground from "../../assets/main_background.png";

export const MainStyle = styled.main`
  background-image: url(${mainBackground});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: sticky;
  width: 100vw;
  height: 100vh;

  h1 {
    font-weight: 700;
    text-align: right;
    padding-right: 10vw;
    padding-top: 40vh;
    font-size: 4rem;
    text-shadow: 5px 5px #2b2b2b;
    color: #edce7e;
  }

  div {
    display: flex;
    align-items: right;
    justify-content: right;
    margin-right: 10vw;
  }

  @media (max-width: 900px) {
    h1 {
      font-size: 1.5rem;
      text-shadow: 2px 2px #2b2b2b;
    }

    button {
      font-size: 0.8rem !important;
    }
  }
`;

export const AdvantagesStyle = styled.div`
  background-color: #edce7e;
  padding-top: 2rem;
  border-top: 4px solid #2b2b2b;
  color: #2b2b2b;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;

  h2 {
    font-weight: 700;
    text-align: center;
    font-size: 2.5rem;
  }

  section {
    display: flex;
    align-items: center;
    justify-content: center;

    div {
      padding: 3rem 2.5rem 2rem 2.5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 1.4rem;

      i {
        font-size: 3.5rem;
      }
    }
  }

  @media (max-width: 900px) {
    h2 {
      font-size: 1.5rem;
    }
    section {
      flex-direction: column;

      div {
        padding: 2rem 0.5rem 1rem 0.5rem;
        font-size: 1rem;

        i {
          font-size: 2rem;
        }
      }
    }

    button {
      font-size: 1rem;
      margin-top: 2rem;
    }
  }
`;

export const PricesStyle = styled.div`
  background-color: #2b2b2b;
  border-top: 4px dashed #edce7e;
  color: #edce7e;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  padding-bottom: 3rem;

  h3 {
    padding: 2rem 0;
    font-size: 2.5rem;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 900px) {
    h3 {
      font-size: 1.5rem;
    }
    div {
      flex-direction: column;
    }
  }
`;
