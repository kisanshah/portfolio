import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Work from "./pages/Work";
import NavBar from "./sections/NavBar";

import background from "./assets/icons/background.svg";
import { ReactComponent as Github } from "./assets/icons/github_outline.svg";
import { ReactComponent as LinkedIn } from "./assets/icons/linkedin.svg";
import { darkTheme } from "./styles/AppTheme";
import { GlobalStyle, hover, iconStyle } from "./styles/Global";

function App() {
  const openUrl = (link: string) => {
    window.open(link, "_blank");
  };
  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";
  const toggleTheme = () => setTheme(isDarkTheme ? "light" : "dark");

  return (
    // <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <GlobalStyle theme={darkTheme} />
        <NavBar />
        <AppDiv>
          <LeftDiv>
            <InnerDiv>
              <GithubIcon />
              {/* <InstagramIcon /> */}
              <LinkedInIcon />
              {/* <YoutubeIcon /> */}
              <Line />
            </InnerDiv>
          </LeftDiv>
          <CenterDiv>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/work" element={<Work />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </CenterDiv>
          <LeftDiv>
            <InnerDiv>
              <RotatedEmail
                onClick={() => openUrl("mailto:shahkisan64@gmail.com")}
              >
                shahkisan64@gmail.com
              </RotatedEmail>
              <Line />
            </InnerDiv>
          </LeftDiv>
        </AppDiv>
      </BrowserRouter>
    </ThemeProvider>
  );
}

const RotatedEmail = styled.p`
  ${hover}
  rotate: 90deg;
  width: 420px;
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
