import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledNav = styled.nav`
  /* somehow width set to 100vw doesn't work as it would in normal css */
  /* width: 100vw; */
  height: 100px;
  padding-inline: 2rem;
  background-color: #242424;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
`;

const StyledNavContainer = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  @media (max-width: 450px) {
    display: ${({ expanded }) => (expanded ? "flex" : "none")};
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: ${({ expanded }) => (expanded ? "100vh" : "0")};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #242424;
    border-top: 1px solid tomato;
  }
`;
const StyledHamburger = styled.div`
  display: grid;
  place-content: center;
  color: white;

  @media (min-width: 450px) {
    display: none;
  }
`;

const StyledLogo = styled.div`
  width: 50px;
  height: 50px;
  background-color: tomato;
  border-radius: 0.5rem;
`;

const StyledLink = styled(Link)`
  color: white;
  margin: 1rem;
  text-decoration: none;
`;
export {
  StyledNav,
  StyledLink,
  StyledNavContainer,
  StyledLogo,
  StyledHamburger
};
