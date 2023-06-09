import React from "react";
import { AppUtils } from "src/utils/AppUtils";
import styled from "styled-components";
import Android from "../assets/icons/android.svg";
import Bitbucket from "../assets/icons/bitbucket.svg";
import Figma from "../assets/icons/figma.svg";
import Firebase from "../assets/icons/firebase.svg";
import Flutter from "../assets/icons/flutter.svg";
import Git from "../assets/icons/git.svg";
import Github from "../assets/icons/github_color.svg";
import Kotlin from "../assets/icons/kotlin.svg";
import MongoDB from "../assets/icons/mongodb.svg";
import Node from "../assets/icons/node.svg";
import Postman from "../assets/icons/postman.svg";
import ReactJs from "../assets/icons/reactjs.svg";
import Gap from "../components/Gap";
import Header, { SubHeader } from "../components/Header";
import Span, { ClickableSpan } from "../components/Span";
import Text from "../components/Text";
export default function About() {
  let icons = [
    Android,
    Flutter,
    Node,
    ReactJs,
    Kotlin,
    Git,
    Github,
    Bitbucket,
    Firebase,
    MongoDB,
    Figma,
    Postman,
  ];
  return (
    <StyledAbout id="about">
      <Header>About Me</Header>
      <Gap height="20px" />
      <Text>
        I'm an enthusiastic <Span>Android/Flutter</Span> Developer with a degree
        in Information Technology. I'm always keen to learn about the latest
        advancements in mobile app development and enjoy sharing my programming
        tips on social media platforms like{" "}
        <ClickableSpan
          onClick={() =>
            AppUtils.openUrl("https://www.instagram.com/simplekoder/")
          }
        >
          Instagram
        </ClickableSpan>{" "}
        and{" "}
        <ClickableSpan
          onClick={() =>
            AppUtils.openUrl("https://www.youtube.com/c/SimpleKoder")
          }
        >
          YouTube
        </ClickableSpan>
        .
      </Text>
      <Gap height="20px" />
      <SubHeader>Tech Stack & Tools</SubHeader>
      <IconGroup>
        {icons.map((item, index) => (
          <IconWrapper key={index}>
            <StyledIcon src={item} alt="Tech Stack Image" />
          </IconWrapper>
        ))}
      </IconGroup>
    </StyledAbout>
  );
}

const StyledAbout = styled.section`
  padding-top: 10%;
  width: 70%;
  min-height: 100vh;
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

export const StyledIcon = styled.img`
  height: 30px;
  width: 30px;
  @media screen and (max-width: 500px) {
    /* margin-right: 10px; */
  }
`;

const IconGroup = styled.div`
  margin-top: 20px;
  display: inline-grid;
  grid-template-columns: repeat(5, auto);
  padding-bottom: 40px;
  grid-gap: 20px;
  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(4, auto);
    grid-gap: 10px;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 56px;
  margin-right: 20px;
  height: 56px;
  background-color: ${(props) => props.theme.tintBg};
  border-radius: 16px;
`;
