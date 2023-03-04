import styled from "styled-components";
import profile from "../assets/images/profile.png";
import { appTheme } from "../styles/AppTheme";
export default function Home() {
  return (
    <StyledHome>
      <StyledParagraph>
        Hello, <LineBreak />
        My Self <StyledSpan>Kisan Shah</StyledSpan>
        <LineBreak />
        <StyledSpan fontSize="2.2rem" color={appTheme.colors.textColor}>
          I love building things for the mobile using
          <StyledSpan> flutter</StyledSpan> & <StyledSpan>android</StyledSpan>.{" "}
        </StyledSpan>
      </StyledParagraph>
      <StyledImage src={profile} alt="Image description" />
    </StyledHome>
  );
}
const StyledHome = styled.div`
  display: flex;
  height: calc(100vh - 90px);
`;

const StyledParagraph = styled.p`
  flex: 2;
  margin: 0 50px 50px 0;
  align-self: center;
  font-size: 2.5rem;
  line-height: 1.3;
  font-weight: 900;
  letter-spacing: -1px;
  font-family: "Poppins";
`;

const StyledSpan = styled.span`
  font-weight: bold;
  color: ${(props) => props.color || appTheme.colors.primary};
  font-size: ${(props) => props.fontSize};
`;

const LineBreak = styled.br``;

const StyledImage = styled.img`
  flex: 1;
  align-self: center;
`;
