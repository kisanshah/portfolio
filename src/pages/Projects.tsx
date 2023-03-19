import React from "react";
import Gap from "src/components/Gap";
import Header from "src/components/Header";
import Project from "src/components/ProjectItem";

import styled from "styled-components";
export default function Projects() {
  return (
    <StyledProject>
      <Header>Projects</Header>
      <Gap height="50px" />
      <ProjectWrapper>
        <Project />
        <Project />
        <Project />
        <Project />
      </ProjectWrapper>
    </StyledProject>
  );
}

const ProjectWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`;
const StyledProject = styled.div`
  padding-top: 10%;
  width: 100%;
`;
