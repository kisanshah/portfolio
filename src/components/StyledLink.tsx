import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const activeCss = css`
  color: ${(props) => props.theme.primary};
`;

const StyledLink = styled(Link)`
  text-align: center;
  flex: 1;
  text-decoration: none;
  font-weight: 500;
  ${({ active }) => active && activeCss}
`;

export default StyledLink;
