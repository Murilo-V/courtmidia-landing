import styled from "styled-components";

export const NavBarStyle = styled.nav`
  background-color: #2b2b2b;
  width: 100vw;
  padding: 0.25rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #edce7e;
  position: fixed;
  top: 0;
  z-index: 7;

  img {
    width: 8rem;
  }

  div a i {
    font-size: 2.5rem;
    padding: 0 0.45rem;
    color: #edce7e;
    cursor: pointer;
  }
`;
