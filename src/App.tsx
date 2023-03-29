import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled, { ThemeProvider } from "styled-components";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Work from "./pages/Work";
import NavBar from "./sections/NavBar";

import { useSelector } from "react-redux";
import background from "./assets/icons/background.svg";
import { ReactComponent as Github } from "./assets/icons/github_outline.svg";
import { ReactComponent as LinkedIn } from "./assets/icons/linkedin.svg";
import { RootState } from "./store/store";
import { darkTheme, lightTheme } from "./styles/AppTheme";
import { GlobalStyle, hover, iconStyle } from "./styles/Global";
import { AppUtils } from "./utils/AppUtils";

function App() {
  const [isMounted, setIsMounted] = useState(false);
  // const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    // if (prefersReducedMotion) {
    //   return;
    // }

    const timeout = setTimeout(() => setIsMounted(true), 1000);
    return () => clearTimeout(timeout);
  }, []);

  const dark = useSelector((state: RootState) => state.theme.isDarkModeEnabled);
  const theme = useSelector((state: RootState) => state.theme.theme);
  let tempTheme = darkTheme;
  if (theme.primary === undefined) {
    tempTheme = dark ? darkTheme : lightTheme;
  } else {
    tempTheme = theme;
  }

  return (
    <ThemeProvider theme={tempTheme}>
      <BrowserRouter>
        <GlobalStyle theme={tempTheme} />
        <NavBar />
        <AppDiv>
          <TransitionGroup component={null}>
            {isMounted && (
              <CSSTransition classNames={"fade"} timeout={1000}>
                <LeftDiv style={{ transitionDelay: `400ms` }}>
                  <InnerDiv>
                    <GithubIcon
                      onClick={() =>
                        AppUtils.openUrl("https://github.com/kisanshah")
                      }
                    />
                    {/* <InstagramIcon /> */}
                    <LinkedInIcon
                      onClick={() =>
                        AppUtils.openUrl(
                          "https://www.linkedin.com/in/kisan-shah-73a58317b/"
                        )
                      }
                    />
                    {/* <YoutubeIcon /> */}
                    <Line />
                  </InnerDiv>
                </LeftDiv>
              </CSSTransition>
            )}
          </TransitionGroup>

          <CenterDiv>
            <Home />
            <Projects />
            <Work />
            <About />
            <Contact />
          </CenterDiv>
          <TransitionGroup component={null}>
            {isMounted && (
              <CSSTransition classNames={"fade"} timeout={1000}>
                <LeftDiv style={{ transitionDelay: `400ms` }}>
                  <InnerDiv>
                    <RotatedEmail
                      onClick={() =>
                        AppUtils.openUrl("mailto:shahkisan64@gmail.com")
                      }
                    >
                      shahkisan64@gmail.com
                    </RotatedEmail>
                    <Line />
                  </InnerDiv>
                </LeftDiv>
              </CSSTransition>
            )}
          </TransitionGroup>
        </AppDiv>
      </BrowserRouter>
    </ThemeProvider>
  );
}

const RotatedEmail = styled.p`
  ${hover}
  rotate: 90deg;
  width: 420px;
  margin-bottom: 10px;
`;

// const InstagramIcon = styled(Instagram)`
//   ${hover}
//   ${iconStyle}
// `;
// const YoutubeIcon = styled(Youtube)`
//   ${hover}
//   ${iconStyle}
// `;
const LinkedInIcon = styled(LinkedIn)`
  ${hover}
  ${iconStyle}
`;
const GithubIcon = styled(Github)`
  ${hover}
  ${iconStyle}
`;

const AppDiv = styled.div`
  display: flex;
  height: 100vh;
  padding: 0 5%;
  background-repeat: no-repeat;
  background-size: cover;
  /* background-image: url(${background}); */
`;

const Line = styled.div`
  display: flex;
  height: 20%;
  width: 2px;
  background-color: ${(props) => props.theme.primary};
`;

const LeftDiv = styled.div`
  width: 100px;
  display: flex;
  justify-items: center;
  align-items: flex-end;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;
const InnerDiv = styled.div`
  width: 100px;
  top: 64px;
  display: flex;
  position: fixed;
  flex-direction: column;
  bottom: 0;
  align-items: center;
  justify-content: end;
`;

const CenterDiv = styled.div`
  flex: 1;
  margin: 0px 2%;
`;

export default App;
