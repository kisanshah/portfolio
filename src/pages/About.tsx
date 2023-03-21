import React from "react";
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
  const openUrl = (link: string) => {
    window.open(link, "_blank");
  };
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
    <StyledAbout>
      <Header>About Me</Header>
      <Gap height="20px" />
      <Text>
        I'm an enthusiastic <Span>Android/Flutter</Span> Developer with a degree
        in Information Technology. I'm always keen to learn about the latest
        advancements in mobile app development and enjoy sharing my programming
        tips on social media platforms like{" "}
        <ClickableSpan
          onClick={() => openUrl("https://www.instagram.com/simplekoder/")}
        >
          Instagram
        </ClickableSpan>{" "}
        and{" "}
        <ClickableSpan
          onClick={() => openUrl("https://www.youtube.com/c/SimpleKoder")}
        >
          YouTube
        </ClickableSpan>
        .
      </Text>
      <Gap height="20px" />
      <SubHeader>Tech Stack & Tools</SubHeader>
      <IconGroup>
        {icons.map((e) => (
          <IconWrapper>
            <StyledIcon src={e} />
          </IconWrapper>
        ))}
      </IconGroup>
    </StyledAbout>
  );
}

const StyledAbout = styled.div`
  padding-top: 10%;
  width: 70%;
`;

const StyledIcon = styled.img`
  height: 30px;
  width: 30px;
`;

const IconGroup = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(5, auto);
  padding-bottom: 40px;
  grid-gap: 20px;
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
