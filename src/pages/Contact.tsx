import React from "react";
import Button from "src/components/Button";
import Gap from "src/components/Gap";
import Header from "src/components/Header";
import Text from "src/components/Text";
import styled from "styled-components";

export default function Contact() {
  return (
    <StyledContact>
      <Header>Get In Touch</Header>
      <Gap height="20px" />
      <ContentWrapper>
        <ContactText>
          Welcome to my portfolio! As an experienced Android/Flutter developer,
          I am always looking for new opportunities to grow my skills and take
          on exciting projects. If you have any inquiries about my experience or
          would like to discuss potential job opportunities, please don't
          hesitate to contact me
        </ContactText>
        <Input name="message" />
        <ContactButton>Submit</ContactButton>
      </ContentWrapper>
    </StyledContact>
  );
}

const StyledContact = styled.div`
  padding-top: 10%;
  width: 100%;
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ContactText = styled(Text)`
  width: 70%;
  /* text-align: justify; */
`;
const ContactButton = styled(Button)`
  width: 30%;
  margin-top: 20px;
  border-radius: 2px;
  font-size: 14px;
`;

const Input = styled.textarea`
  margin-top: 20px;
  width: 70%;
  min-height: 150px;
  height: 50%;
  font-size: 16px;
  font-weight: 300;
  border-radius: 20px;
  background: ${(props) => props.theme.tintBg};
  border: none;
  padding: 20px;
  color: ${(props) => props.theme.text};
  border-radius: 3px;
  resize: vertical;
  outline: none;
`;
