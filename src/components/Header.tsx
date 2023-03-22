import styled from "styled-components";
const Header = styled.h1`
  @media screen and (max-width: 500px) {
    font-size: 30px;
    line-height: 1.5;
  }
`;

export const SubHeader = styled(Header)`
  font-size: 20px;
`;

export default Header;
