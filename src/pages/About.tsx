import React from "react";
import styled from "styled-components";
import Gap from "../components/Gap";
import Header, { SubHeader } from "../components/Header";
import Span, { ClickableSpan } from "../components/Span";
import Text from "../components/Text";
export default function About() {
  const openUrl = (link: string) => {
    window.open(link, "_blank");
  };
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
      <SubHeader>Tech Stack</SubHeader>
    </StyledAbout>
  );
}

const StyledAbout = styled.div`
  padding-top: 10%;
  width: 70%;
`;
