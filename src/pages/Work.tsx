import styled, { css } from "styled-components";
import Gap from "../components/Gap";
import Header from "../components/Header";
import LineBreak from "../components/LineBreak";
import Paragraph from "../components/Paragraph";
import Span from "../components/Span";
import Text from "../components/Text";
import { appTheme } from "../styles/AppTheme";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
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
    <StyledWork>
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
          <Text fontSize="20px">
            {selected.label}{" "}
            <ClickableSpan onClick={() => openUrl(selected.link)}>
              @{selected.company}
            </ClickableSpan>
            <LineBreak />
            <Paragraph>May 2021 - Jul 2021 · 3 mos</Paragraph>
            <Gap height="10px" />
          </Text>
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
const activeCss = css`
  border-left: 3px solid ${() => appTheme.colors.primary};
  color: ${() => appTheme.colors.primary};
  background-color: ${() => appTheme.colors.tint};
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
    ${activeCss}
  }
  ${({ active }) => active && activeCss}
`;

const StyledWork = styled.div`
  padding-top: 10%;
`;
