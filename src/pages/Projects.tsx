import React from "react";
import { useSelector } from "react-redux";
import Gap from "src/components/Gap";
import Header from "src/components/Header";
import ProjectComponent from "src/components/ProjectItem";
import { RootState } from "src/store/store";

import styled from "styled-components";
export default function Projects() {
  const projects = useSelector((state: RootState) => state.project);

  return (
    <StyledProject>
      <Header>Projects</Header>
      <Gap height="50px" />
      <ProjectWrapper>
        {projects.map((e) => (
          <ProjectComponent item={e} />
        ))}
      </ProjectWrapper>
    </StyledProject>
  );
}

const ProjectWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  padding-bottom: 40px;
`;
const StyledProject = styled.div`
  padding-top: 10%;
  width: 100%;
`;
