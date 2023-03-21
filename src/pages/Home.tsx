import React from "react";
import Gap from "src/components/Gap";
import Header from "src/components/Header";
import styled, { keyframes } from "styled-components";
import profile from "../assets/images/profile.png";
export default function Home() {
  return (
    <StyledHome>
      <TextWrapper>
        <StyledParagraph>Hi, my name is</StyledParagraph>
        <Gap height="5px" />
        <Header>Kisan Shah</Header>
        <StyledSubText>
          I love building things for the mobile using flutter & android.
        </StyledSubText>
      </TextWrapper>
      <ImageContainer>
        <StyledImage src={profile} alt="Image description" />
      </ImageContainer>
    </StyledHome>
  );
}
const StyledHome = styled.div`
  display: flex;
  height: calc(100vh - 90px);
`;

const TextWrapper = styled.p`
  flex: 2;
  margin: 0 50px 50px 0;
  align-self: center;
  font-size: 2.5rem;
  line-height: 1.3;
  font-weight: 900;
  letter-spacing: -1px;
  font-family: "Poppins";
`;

const StyledSubText = styled.h1`
  margin-top: 10px;
  color: ${(props) => props.theme.subText};
  font-size: 35px;
  line-height: 1.2;
`;

const StyledParagraph = styled.p`
  font-weight: 400;
  font-size: 25px;
  color: ${(props) => props.theme.subText};
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
const ImageContainer = styled.div`
  animation: ${float} 2s ease-in-out infinite;
  justify-self: center;
  align-self: center;
  height: 400px;
  width: 400px;
  border-radius: 20000px;
  background-color: ${(props) => props.theme.primary};
  overflow: clip;
  position: relative;
`;

export const StyledImage = styled.img`
  width: 320px;
  display: flex;
  justify-self: center;
  align-self: center;
  position: relative;
  position: absolute;
  margin: auto;
  left: 10px;
  right: 0;
  transform: rotate(5deg);
  top: 40px;
  bottom: 0;
`;
