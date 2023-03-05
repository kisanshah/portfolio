import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Work from "./pages/Work";
import NavBar from "./sections/NavBar";

import { appTheme } from "./styles/AppTheme";
import { GlobalStyles } from "./styles/Global";

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <BrowserRouter>
        <GlobalStyles />
        <NavBar />
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
