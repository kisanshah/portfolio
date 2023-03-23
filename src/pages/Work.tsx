import styled, { css } from "styled-components";
import Gap from "../components/Gap";
import Header from "../components/Header";
import LineBreak from "../components/LineBreak";
import Paragraph from "../components/Paragraph";
import Span from "../components/Span";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SubText from "src/components/SubText";
import { setCurrentCompany } from "src/store/reducers/workSlice";
import { RootState } from "src/store/store";

export default function Work() {
  const companies = useSelector((state: RootState) => state.work.companies);
  const selected =
    useSelector((state: RootState) => state.work.selected) ?? companies[0];
  const dispatch = useDispatch();
  const openUrl = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <StyledWork id="work">
      <Header>Where I’ve Worked</Header>
      <Gap height="60px" />
      <Company>
        <CompanyNameSection>
          {companies.map((item) => (
            <Name
              key={item.id}
              onClick={() => {
                dispatch(setCurrentCompany(item as any));
              }}
              active={item.id === selected?.id}
            >
              {item.company}
            </Name>
          ))}
        </CompanyNameSection>
        <CompanyDetailSection>
          <SubText fontSize="20px">
            {selected.label}
            <ClickableSpan onClick={() => openUrl(selected.link)}>
              {` @` + selected.company}
            </ClickableSpan>
            <LineBreak />
            <Paragraph>May 2021 - Jul 2021 · 3 mos</Paragraph>
            <Gap height="10px" />
          </SubText>
          <ListWrapper>
            {selected.description.split("\n").map((elem) => (
              <ListItem key={elem}>{elem}</ListItem>
            ))}
          </ListWrapper>
        </CompanyDetailSection>
      </Company>
    </StyledWork>
  );
}

const ClickableSpan = styled(Span)`
  cursor: pointer;
  color: ${(props) => props.theme.primary};
`;

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
    color: ${(props) => props.theme.primary};
  }
`;
const Company = styled.div`
  display: flex;
  @media screen and (max-width: 500px) {
    flex-direction: column;
    margin-top: -40px;
  }
`;
const CompanyNameSection = styled.div`
  margin-right: 50px;
`;
const CompanyDetailSection = styled.div`
  width: 70%;
  padding: 20px;
  background-color: ${(props) => props.theme.tintBg};
  border-radius: ${(props) => props.theme.radius};
  @media screen and (max-width: 500px) {
    width: 100%;
    margin: 20px 0px;
  }
`;
const activeCss = css`
  border-left: 3px solid ${(props) => props.theme.primary};
  color: ${(props) => props.theme.primary};
  background-color: ${(props) => props.theme.tintBg};
`;
const Name = styled.p`
  padding: 10px;
  border-left: 3px solid transparent;
  align-items: center;
  height: 50px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;

  color: ${(props) => props.theme.subText};
  &:active,
  &:hover {
    ${activeCss}
  }
  ${({ active }) => active && activeCss}
`;

const StyledWork = styled.section`
  padding-top: 10%;
  min-height: 100vh;
`;
