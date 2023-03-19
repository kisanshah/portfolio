import styled from "styled-components";
const Text = styled.h3`
  font-size: ${(props) => props.fontSize || "18px"};
  line-height: 1.4;
  font-weight: 400;
`;

export default Text;
