import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Projects from "./components/sections/Projects";
import ProjectDetail from "./components/sections/ProjectDetail";
import Experience from "./components/sections/Experience";

function App() {
  function ScrollToTop() {
    const { pathname } = useLocation();
    React.useEffect(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }, [pathname]);
    return null;
  }
  return (
    <Router>
      <Box display="flex" flexDirection="column" minH="100vh">
        <ScrollToTop />
        <NavBar />
        <Box as="main" flex="1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </Router>
  );
}

export default App;
