import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Projects from "./components/sections/Projects";

function App() {
  return (
    <Router>
      <Box display="flex" flexDirection="column" minH="100vh">
        <NavBar />
        <Box as="main" flex="1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
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
