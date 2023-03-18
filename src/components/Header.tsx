import styled from "styled-components";
import { appTheme } from "../styles/AppTheme";
const Header = styled.h1`
  color: ${appTheme.colors.header};
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 42px;
  line-height: 52px;
  letter-spacing: -0.4px;
`;

export const SubHeader = styled(Header)`
  font-size: 20px;
`;

export default Header;
