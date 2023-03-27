import React from "react";
import styled from "styled-components";

export default function Logo() {
  return <StyledLogo>{"{KS}"}</StyledLogo>;
}

export const StyledLogo = styled.h1`
  flex: 1;
  font-weight: 700;
  letter-spacing: 2px;
  font-size: 1.5rem;
`;
