import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { appTheme } from "../styles/AppTheme";

const activeCss = css`
  color: ${appTheme.colors.primary};
`;

const StyledLink = styled(Link)`
  text-align: center;
  flex: 1;
  text-decoration: none;
  font-weight: 500;
  color: ${() => appTheme.colors.textColor};
  ${({ active }) => active && activeCss}
`;

export default StyledLink;
