import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Button from "src/components/Button";
import { StyledIcon } from "src/pages/About";
import { setCurrentNav } from "src/store/reducers/navBarSlice";
import { setTheme } from "src/store/reducers/themeSlice";
import styled, { keyframes } from "styled-components";
import { ReactComponent as Cancel } from "../assets/icons/cancel.svg";
import { ReactComponent as Menu } from "../assets/icons/menu.svg";
import Moon from "../assets/icons/moon.svg";
import Sun from "../assets/icons/sun.svg";
import { StyledLogo } from "../components/Logo";
import StyledLink from "../components/StyledLink";
import { RootState } from "../store/store";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 0);
    return () => clearTimeout(timeout);
  }, []);

  const items = useSelector((state: RootState) => state.navbar.navItems);
  const currentNav = useSelector((state: RootState) => state.navbar.current);

  const dispatch = useDispatch();
  const dark = useSelector((state: RootState) => state.theme.isDarkModeEnabled);
  const scroll = (path: string) => {
    const section = document.querySelector(path);
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    window.addEventListener("scroll", navHighlighter);
    function navHighlighter() {
      let scrollY = window.pageYOffset;

      sections.forEach((current: HTMLElement) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        let sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          dispatch(setCurrentNav(sectionId as any));
        }
      });
    }
  });

  return (
    <StyledNavBar>
      <Hamburger
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      />
      <TransitionGroup component={null}>
        {isMounted && (
          <CSSTransition classNames={"fadedown"} timeout={1000}>
            <StyledLogo style={{ transitionDelay: `200ms` }}>
              {"{KS}"}
            </StyledLogo>
          </CSSTransition>
        )}
      </TransitionGroup>

      <NavLinkWrapper isOpen={isOpen}>
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadedown" timeout={1000}>
                <StyledLink
                  style={{ transitionDelay: `${i + 3}00ms` }}
                  key={item.id}
                  to={item.route}
                  active={currentNav === item.route.replace("/#", "")}
                  onClick={() => {
                    setIsOpen(false);
                    scroll(item.route);
                  }}
                >
                  {item.label}
                </StyledLink>
              </CSSTransition>
            ))}
        </TransitionGroup>
        <CancelIcon
          onClick={() => {
            setIsOpen(false);
          }}
        />
      </NavLinkWrapper>
      <TransitionGroup component={null}>
        {isMounted && (
          <CSSTransition classNames={"fadedown"} timeout={1000}>
            <Toggle style={{ transitionDelay: `750ms` }}>
              <StyledIcon
                src={dark ? Sun : Moon}
                onClick={() => {
                  dispatch(setTheme(true as any));
                }}
              />
            </Toggle>
          </CSSTransition>
        )}
      </TransitionGroup>
      <TransitionGroup component={null}>
        {isMounted && (
          <CSSTransition classNames={"fadedown"} timeout={100}>
            <Div style={{ transitionDelay: `900ms` }}>
              <ResumeButton>Resume</ResumeButton>
            </Div>
          </CSSTransition>
        )}
      </TransitionGroup>
    </StyledNavBar>
  );
}
const Div = styled.div`
  flex: 1;
  display: flex;
  justify-content: end;
`;
const ResumeButton = styled(Button)`
  border-radius: 5px;
  font-size: 15px;
  color: ${(props) => props.theme.bodyBg};
`;

const StyledNavBar = styled.nav`
  display: flex;
  width: 100%;
  backdrop-filter: blur(10px);
  background: rgba(2A, 100, 100, 0.5);
  height: 64px;
  padding: 0px 5%;
  align-items: center;
  position: fixed;
  z-index: 2;
`;

const Toggle = styled.div`
  margin-left: 20px;
  margin-top: 7px;
  cursor: pointer;
`;

const Hamburger = styled(Menu)`
  visibility: hidden;
  cursor: pointer;
  padding-right: 5px;
  height: 35px;
  width: 35px;
  fill: ${(props) => props.theme.text};
  @media screen and (max-width: 500px) {
    visibility: visible;
  }
`;
const slide = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
`;

const NavLinkWrapper = styled.div`
  display: flex;
  flex: 1;
  @media screen and (max-width: 500px) {
    flex-direction: column;
    position: absolute;
    left: 0;
    right: 0;
    background-color: ${(props) => props.theme.tintBg};
    top: 0;
    z-index: 3;
    height: 100vh;
    display: ${({ isOpen }) => (isOpen ? "inline" : "none")};
    animation: ${slide} 1s ease-in-out forwards;
  }
`;

const CancelIcon = styled(Cancel)`
  display: none;
  @media screen and (max-width: 500px) {
    stroke: ${(props) => props.theme.text};
    display: flex;
    height: 10%;
    padding: 3%;
    object-fit: contain;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;
