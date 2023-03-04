import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-align: center;
  text-decoration: none;
`;

export default function NavItem(props) {
  return <StyledLink to={props.to}>{props.text}</StyledLink>;
}
