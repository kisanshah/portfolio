import React from "react";
import styled, { keyframes } from "styled-components";
import profile from "../assets/images/profile.png";
import LineBreak from "../components/LineBreak";
import Span from "../components/Span";
import { appTheme } from "../styles/AppTheme";
export default function Home() {
  return (
    <StyledHome>
      <StyledParagraph>
        Hello, <LineBreak />
        My Self <Span>Kisan Shah</Span>
        <LineBreak />
        <Span fontSize="2.2rem" color={appTheme.colors.textColor}>
          I love building things for the mobile using
          <Span> flutter</Span> & <Span>android</Span>.{" "}
        </Span>
      </StyledParagraph>
      <ImageContainer>
        <StyledImage src={profile} alt="Image description" />
        {/* <AnimatingBox /> */}
      </ImageContainer>
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

const ImageContainer = styled.div`
  flex: 1;
  justify-self: center;
  align-self: center;
  height: 55%;
  overflow: clip;
  position: relative;
`;
const float = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

// const leftRight = keyframes`
//   0% {
//     transform: translate(0, 0) scale(1);
//   }
//   50% {
//     transform: translateY(150px) ;
//   }
//   100% {
//     transform: translate(0, 0) scale(1);
//   }
// `;
// const AnimatingBox = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 50px;
//   height: 50px;
//   background-color: red;
//   transform-origin: top left;
//   z-index: 1;
//   border-radius: 100%;
//   animation: ${leftRight} 10s ease-in-out forwards;
// `;

const StyledImage = styled.img`
  animation: ${float} 2s ease-in-out infinite;
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;
