import styled from "styled-components";
import Gap from "../components/Gap";
import Header from "../components/Header";
import LineBreak from "../components/LineBreak";
import Text from "../components/Text";
export default function About() {
  return (
    <StyledAbout>
      <Header>About Me</Header>
      <Gap height="20px" />
      <Text>
        I am an Android/Flutter Developer with a Bachelor of Science degree in
        Information Technology. My primary interest lies in Mobile App
        Development and I always strive to stay informed about the latest
        advancements in the field.
        <LineBreak />
        <LineBreak />
        In my free time, I enjoy playing Chess and watching Anime. These hobbies
        provide a welcome respite from the demands of development work and help
        me stay balanced.
      </Text>
    </StyledAbout>
  );
}

const ListItem = styled.div`
  border: 1px solid;
`;

const StyledAbout = styled.div`
  padding-top: 10%;
  width: 70%;
`;
