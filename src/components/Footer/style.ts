import styled from "styled-components";

export const FooterStyle = styled.footer`
  background-color: #edce7e;
  color: #2b2b2b;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 4px dashed #2b2b2b;

  i {
    font-size: 3rem;
    color: #2b2b2b;
    cursor: pointer;
  }

  @media (max-width: 900px) {
    font-size: 0.85rem;
  }
`;
