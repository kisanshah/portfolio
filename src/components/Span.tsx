import styled from "styled-components";
import { appTheme } from "../styles/AppTheme";
const Span = styled.span`
  /* font-weight: bold; */
  color: ${(props) => props.color || appTheme.colors.primary};
  font-size: ${(props) => props.fontSize};
`;

export default Span;
