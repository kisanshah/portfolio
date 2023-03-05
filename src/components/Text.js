import styled from "styled-components";
import { appTheme } from "../styles/AppTheme";
const Text = styled.p`
  color: ${appTheme.colors.lighTextColor};
  font-size: ${(props) => props.fontSize || "18px"};
  line-height: 1.4;
  font-weight: 400;
`;

export default Text;
