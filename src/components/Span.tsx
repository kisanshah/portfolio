import styled from "styled-components";
const Span = styled.span`
  /* font-weight: bold; */
  color: ${(props) => props.theme.underLine};
  font-size: ${(props) => props.fontSize};
`;

export const ClickableSpan = styled(Span)`
  cursor: pointer;
`;

export default Span;
