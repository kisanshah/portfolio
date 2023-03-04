import styled from "styled-components";
import Logo from "../components/Logo";
import NavItem from "../components/NavItem";

export default function NavBar() {
  return (
    <StyledNavBar>
      <Logo />
      <NavLinkWrapper>
        <NavItem text="Home" to="/" />
        <NavItem text="About" to="/about" />
        <NavItem text="TechStack" to="/techstack" />
        <NavItem text="Project" to="/projects" />
        <NavItem text="Contact" to="/contact" />
      </NavLinkWrapper>
    </StyledNavBar>
  );
}

const StyledNavBar = styled.nav`
  display: flex;
  height: 64px;
  align-items: center;
`;

const NavLinkWrapper = styled.div`
  display: flex;
  flex: 1;
`;
