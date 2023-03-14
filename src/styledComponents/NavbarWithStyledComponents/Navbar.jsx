import React, { useState } from "react";
import {
  StyledHamburger,
  StyledLink,
  StyledLogo,
  StyledNav,
  StyledNavContainer
} from "./Navbar.styled";



function Navbar() {
  const [isNavExpanded, setIsNavExtended] = useState(false);
  const handleExpandNav = function () {
    setIsNavExtended((prevState) => !prevState);
  };
  return (
    <StyledNav>
      <StyledHamburger onClick={handleExpandNav}>
        {isNavExpanded ? <>&#10005;</> : <>&#8801;</>}
      </StyledHamburger>
      <StyledNavContainer expanded={isNavExpanded}>
        <StyledLink to={"/"}>Home</StyledLink>
        <StyledLink to={"/about"}>About</StyledLink>
        <StyledLink to={"/contact"}>Contact</StyledLink>
        <StyledLink to={"help"}>Help</StyledLink>
      </StyledNavContainer>

      <StyledLogo />

    </StyledNav>
  );
}

export default Navbar;
