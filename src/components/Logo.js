import styled from "styled-components";
import { appTheme } from "../styles/AppTheme";

export default function Logo() {
  return <StyledLogo>LOGO</StyledLogo>;
}

const StyledLogo = styled.p`
  flex: 1;
  font-weight: 900;
  font-size: 1.5rem;
  color: ${(props) => appTheme.colors.primary};
`;
