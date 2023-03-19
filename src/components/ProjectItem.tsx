import React from "react";
import Text from "src/components/Text";
import { hover, iconStyle } from "src/styles/Global";
import styled from "styled-components";
import { ReactComponent as AppStore } from "../assets/icons/appstore.svg";
import { ReactComponent as Github } from "../assets/icons/github_color.svg";
import { ReactComponent as PlayStore } from "../assets/icons/playstore.svg";
import Header from "./Header";
export default function Project() {
  return (
    <ProjectItem>
      <ProjectImage
        src={"https://flutterflow.io/images/dashboard_app_12x.png"}
        alt="Image description"
      />
      <ProjectTitle>Drive Your Dream</ProjectTitle>
      <ProjectDesc>
        DYD – Drive Your Dream is a first-of-its-kind car service app.
      </ProjectDesc>
      <IconWrapper>
        <PlayStoreIcon />
        <AppStoreIcon />
        <GithubIcon />
      </IconWrapper>
    </ProjectItem>
  );
}

const AppStoreIcon = styled(AppStore)`
  ${hover}
  ${iconStyle}
`;
const GithubIcon = styled(Github)`
  ${hover}
  ${iconStyle}
`;
const PlayStoreIcon = styled(PlayStore)`
  ${hover}
  ${iconStyle}
`;

const IconWrapper = styled.div`
  display: flex;
  width: 40%;
  justify-content: space-around;
  margin-bottom: 10px;
`;

const ProjectImage = styled.img`
  padding: 20px;
  height: 300px;
  width: 100%;
  object-fit: scale-down;
  background-color: ${(props) => props.theme.tintBg};
  text-align: center;
`;
const ProjectTitle = styled(Header)`
  margin: 0px;
  font-weight: 700;
  font-size: 24px;
  line-height: 50px;
  text-align: center;
`;
const ProjectDesc = styled(Text)`
  margin-right: 20px;
  margin-left: 20px;
  margin-bottom: 20px;
  font-weight: 400;
  padding: 0px 10px;
  color: ${(props) => props.theme.subText};
  font-size: 14px;
  text-align: center;
`;

const ProjectItem = styled.div`
  overflow: clip;
  border-style: solid;
  height: auto;
  border-width: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-color: #1d2429;
  border-radius: 12px;
  background-color: ${(props) => props.theme.secondaryBg};
  &:hover {
  }
`;
