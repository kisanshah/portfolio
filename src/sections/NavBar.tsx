import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "src/components/Button";
import { appTheme } from "src/styles/AppTheme";
import styled from "styled-components";
import Logo from "../components/Logo";
import StyledLink from "../components/StyledLink";
import { setCurrent } from "../store/reducers/navBarSlice";
import { RootState } from "../store/store";

export default function NavBar() {
  const items = useSelector((state: RootState) => state.navbar.navItems);
  const dispatch = useDispatch();
  const selectedItem = useSelector(
    (state: RootState) => state.navbar.selectedItem
  );
  return (
    <StyledNavBar>
      <Logo />
      <NavLinkWrapper>
        {items.map((item) => (
          <StyledLink
            onClick={() => {
              dispatch(setCurrent(item));
            }}
            key={item.id}
            to={item.route}
            active={selectedItem?.id === item.id}
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
  border: 1px ${appTheme.colors.primary} solid;
  background-color: transparent;
  font-size: 15px;
  color: ${appTheme.colors.primary};
  &:hover {
    background-color: ${appTheme.colors.primary};
    color: ${appTheme.colors.white};
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
