import styled from "styled-components";
import Gap from "../components/Gap";
import Header from "../components/Header";
import LineBreak from "../components/LineBreak";
import Paragraph from "../components/Paragraph";
import Span from "../components/Span";
import Text from "../components/Text";
import { appTheme } from "../styles/AppTheme";
export default function Work() {
  return (
    <StyledWork>
      <Header>Where I’ve Worked</Header>
      <Gap height="60px" />
      <Company>
        <CompanyNameSection>
          <Name active={true}>WEQ Technologies</Name>
          <Name>Acropolis</Name>
        </CompanyNameSection>
        <CompanyDetailSection>
          <Text fontSize="20px">
            Android Developer Intern <Span>@Acropolis</Span>
            <LineBreak />
            <Paragraph>May 2021 - Jul 2021 · 3 mos</Paragraph>
            <Gap height="10px" />
            <ListWrapper>
              <ListItem>
                Worked with Kotlin programming language to write concise,
                expressive, and type-safe code for Android applications.
              </ListItem>
              <ListItem>
                Developed data-driven Android app UIs using LiveData, ViewModel,
                and Data Binding components.
              </ListItem>
              <ListItem>
                Managed the app submission and review process to ensure
                successful publication of Android apps on the Google Play Store,
                including compliance with app store guidelines and procedures.
              </ListItem>
            </ListWrapper>
          </Text>
        </CompanyDetailSection>
      </Company>
    </StyledWork>
  );
}

const ListWrapper = styled.ul``;
const ListItem = styled.li`
  font-size: 15px;
  margin-top: 10px;
  position: relative;
  line-height: 1.5;
  left: 15px;
  list-style-type: "◆  ";
  list-style-position: outside;
  &::marker {
    color: ${() => appTheme.colors.primary};
  }
`;
const Company = styled.div`
  display: flex;
`;
const CompanyNameSection = styled.div`
  margin-right: 50px;
`;
const CompanyDetailSection = styled.div`
  width: 50%;
  margin-top: 7px;
  height: 50vh;
`;

const Name = styled.p`
  display: flex;
  padding: 10px;
  align-items: center;
  height: 40px;
  cursor: pointer;
  font-size: 16px;
  color: ${() => appTheme.colors.color_gray_400};
  font-weight: 500;
  border-left: 3px solid ${() => appTheme.colors.color_gray_400};
  &:active,
  &:hover {
    border-left: 3px solid ${() => appTheme.colors.primary};
    color: ${() => appTheme.colors.primary};
    background-color: ${() => appTheme.colors.tint};
  }
`;

const StyledWork = styled.div`
  padding-top: 10%;
`;
