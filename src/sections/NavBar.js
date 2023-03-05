import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Logo from "../components/Logo";
import StyledLink from "../components/StyledLink";
import { setCurrent } from "../store/reducers/navBarSlice";

export default function NavBar() {
  const items = useSelector((state) => state.navbar.navItems);
  const dispatch = useDispatch();
  const selectedItem = useSelector((state) => state.navbar.selectedItem);
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
            active={selectedItem?.id == item.id}
          >
            {item.label}
          </StyledLink>
        ))}
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
