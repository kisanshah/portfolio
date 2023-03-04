import { Link } from "react-router-dom";
import styled from "styled-components";
import { appTheme } from "../styles/AppTheme";

export default function NavItem(props) {
  return <StyledLink to={props.to}>{props.text}</StyledLink>;
}

const StyledLink = styled(Link)`
  text-align: center;
  flex: 1;
  text-decoration: none;
  font-weight: 500;
  color: ${(props) => appTheme.colors.textColor};
  &:hover {
    color: ${(props) => appTheme.colors.primary};
  }
`;
