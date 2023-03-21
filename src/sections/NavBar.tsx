import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Button from "src/components/Button";
import styled from "styled-components";
import Logo from "../components/Logo";
import StyledLink from "../components/StyledLink";
import { RootState } from "../store/store";

export default function NavBar() {
  const items = useSelector((state: RootState) => state.navbar.navItems);

  const location = useLocation();
  const currentEndpoint = location.pathname;

  return (
    <StyledNavBar>
      <Logo />
      <NavLinkWrapper>
        {items.map((item) => (
          <StyledLink
            key={item.id}
            to={item.route}
            active={item.route === currentEndpoint}
          >
            {item.label}
          </StyledLink>
        ))}
      </NavLinkWrapper>
      <Div>
        <ResumeButton>Resume</ResumeButton>
      </Div>
    </StyledNavBar>
  );
}
const Div = styled.div`
  flex: 1;
  display: flex;
  justify-content: end;
`;
const ResumeButton = styled(Button)`
  border-radius: 5px;
  font-size: 15px;
  &:hover {
  }
`;

const StyledNavBar = styled.nav`
  display: flex;
  height: 64px;
  padding: 0px 5%;
  align-items: center;
`;

const NavLinkWrapper = styled.div`
  display: flex;
  flex: 1;
`;
