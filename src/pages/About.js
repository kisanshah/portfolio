import styled from "styled-components";
import Gap from "../components/Gap";
import Header from "../components/Header";
import LineBreak from "../components/LineBreak";
import Span from "../components/Span";
import Text from "../components/Text";
export default function About() {
  return (
    <StyledAbout>
      <Header>About Me</Header>
      <Gap height="20px" />
      <Text>
        I am an <Span>Android/Flutter</Span> Developer with a Bachelor of
        Science degree in Information Technology. My primary interest lies in
        Mobile App Development and I always strive to stay informed about the
        latest advancements in the field.
        <LineBreak />
        <LineBreak />
        On my social media platforms, such as <Span>YouTube</Span> and
        <Span> Instagram</Span>, I take pleasure in sharing my programming
        expertise with others. From insightful tutorials to practical advice, my
        content is designed to help people learn programming in an engaging and
        accessible way.
        <LineBreak />
        <LineBreak />
        In my free time, I enjoy playing Chess and watching Anime. These hobbies
        provide a welcome respite from the demands of development work and help
        me stay balanced.
      </Text>
    </StyledAbout>
  );
}

const StyledAbout = styled.div`
  padding-top: 10%;
  width: 70%;
`;
