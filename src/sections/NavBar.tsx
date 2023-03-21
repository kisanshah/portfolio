import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Button from "src/components/Button";
import { StyledIcon } from "src/pages/About";
import { setTheme } from "src/store/reducers/themeSlice";
import styled from "styled-components";
import Moon from "../assets/icons/moon.svg";
import Sun from "../assets/icons/sun.svg";
import Logo from "../components/Logo";
import StyledLink from "../components/StyledLink";
import { RootState } from "../store/store";

export default function NavBar() {
  const items = useSelector((state: RootState) => state.navbar.navItems);

  const location = useLocation();
  const currentEndpoint = location.pathname;

  const dispatch = useDispatch();
  const dark = useSelector((state: RootState) => state.theme.isDarkModeEnabled);

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
      <Toggle>
        <StyledIcon
          src={dark ? Sun : Moon}
          onClick={() => {
            dispatch(setTheme(true as any));
          }}
        />
      </Toggle>
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
  color: ${(props) => props.theme.bodyBg};
`;

const StyledNavBar = styled.nav`
  display: flex;
  height: 64px;
  padding: 0px 5%;
  align-items: center;
`;

const Toggle = styled.div`
  margin-left: 20px;
  margin-top: 7px;
  cursor: pointer;
`;

const NavLinkWrapper = styled.div`
  display: flex;
  flex: 1;
`;
