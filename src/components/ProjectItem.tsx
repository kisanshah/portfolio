import React from "react";
import Text from "src/components/Text";
import { Project } from "src/store/types/project";
import { hover, iconStyle } from "src/styles/Global";
import { AppUtils } from "src/utils/AppUtils";
import styled from "styled-components";
import { ReactComponent as AppStore } from "../assets/icons/appstore.svg";
import { ReactComponent as Github } from "../assets/icons/github.svg";
import { ReactComponent as PlayStore } from "../assets/icons/playstore.svg";
import Header from "./Header";

type ProjectComponentProps = {
  item: Project;
};

const ProjectComponent = ({ item }: ProjectComponentProps) => {
  return (
    <ProjectItem>
      <ProjectImage src={item.thumbnail} alt="Image description" />
      <ProjectTitle>{item.title}</ProjectTitle>
      <ProjectDesc>{item.description}</ProjectDesc>
      <IconWrapper>
        {item.android !== "" && (
          <PlayStoreIcon onClick={() => AppUtils.openUrl(item.android)} />
        )}
        {item.ios !== "" && (
          <AppStoreIcon onClick={() => AppUtils.openUrl(item.ios)} />
        )}
        {item.github !== "" && <GithubIcon />}
      </IconWrapper>
    </ProjectItem>
  );
};

export default ProjectComponent;

const AppStoreIcon = styled(AppStore)`
  ${hover}
  margin: 5px;
  ${iconStyle}
`;
const GithubIcon = styled(Github)`
  ${hover}
  margin: 5px;
  ${iconStyle}
`;
const PlayStoreIcon = styled(PlayStore)`
  ${hover}
  margin: 5px;
  ${iconStyle}
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 15px 0px;
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
  flex: 1;
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
  align-items: center;
  flex-direction: column;
  border-color: #1d2429;
  border-radius: 12px;
  background-color: ${(props) => props.theme.secondaryBg};
  &:hover {
  }
`;
