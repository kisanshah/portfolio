import React, { useEffect, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Gap from "src/components/Gap";
import Header from "src/components/Header";
import styled, { keyframes } from "styled-components";
import profile from "../assets/images/profile.png";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 0);
    return () => clearTimeout(timeout);
  }, []);

  const items = [
    <StyledParagraph>Hi, my name is</StyledParagraph>,
    <Gap height="5px" />,
    <Header>Kisan Shah</Header>,
    <StyledSubText>
      I love building things for the mobile using flutter & android.
    </StyledSubText>,
  ];

  return (
    <StyledHome id="home">
      <TextWrapper>
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={2000}>
                <div style={{ transitionDelay: `${i + 2}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      </TextWrapper>
      <ImageContainer>
        <StyledImage src={profile} alt="Image description" loading="lazy" />
      </ImageContainer>
    </StyledHome>
  );
}
const StyledHome = styled.section`
  display: flex;
  min-height: 100vh;
  @media screen and (max-width: 500px) {
    display: block;
    width: 100%;
    margin-top: 100px;
  }
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
  @media screen and (max-width: 500px) {
    margin: 0px;
  }
`;

const StyledSubText = styled.h1`
  margin-top: 10px;
  color: ${(props) => props.theme.subText};
  font-size: 35px;
  line-height: 1.2;
  @media screen and (max-width: 500px) {
    font-size: 24px;
    margin-top: 0px;
    font-weight: 500;
  }
`;

const StyledParagraph = styled.p`
  font-weight: 400;
  font-size: 25px;
  color: ${(props) => props.theme.subText};
  @media screen and (max-width: 500px) {
    font-size: 20px;
    margin-top: 10%;
  }
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
  z-index: -1;
  background-color: ${(props) => props.theme.primary};
  overflow: clip;
  position: relative;
  @media screen and (max-width: 500px) {
    margin-top: 40px;
    width: 300px;
    height: 300px;
  }
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
  @media screen and (max-width: 500px) {
    width: 275px;
  }
`;
