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
  width: 90px;
  ${({ active }) => active && activeCss}
  @media screen and (max-width: 500px) {
    display: flex;
    height: 10%;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;

export default StyledLink;
