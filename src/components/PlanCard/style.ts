import styled from "styled-components";

export const PlanCardStyle = styled.div<{ number: number }>`
  margin: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: ${(props) => (props.number === 1 ? "" : "2px solid #edce7e")};
  background-color: ${(props) => (props.number === 1 ? "#edce7e" : "#2b2b2b")};
  color: ${(props) => (props.number === 1 ? "#2b2b2b" : "#edce7e")};
  padding: 2rem;
  border-radius: 10px;
  i {
    font-size: 3rem;
  }

  p:first-of-type {
    font-size: 2rem;
  }

  p {
    margin: 0.25rem;
    font-size: 1.2rem;
  }

  @media (max-width: 900px) {
    margin: 2rem 0;

    p:first-of-type {
      font-size: 1rem;
    }

    p {
      font-size: 1rem;
    }

    button {
      font-size: 1rem;
    }
  }
`;
