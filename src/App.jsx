import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import Intro from "./Components/Intro/Intro";
import Services from "./Components/Services/Services";
import Skills from "./Components/Skills/Skills";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import { ClimbingBoxLoader } from "react-spinners";
import styled from "styled-components";
import Footer from "./Components/Footer/Footer";
import GoToTop from "./Components/GoToTop/GoToTop";

const StyledDiv = styled.div`
  display: flex;
  height: 90vh;

  & > * {
    margin:auto;
  }
`;

function App() {
  const [isOpen, setIsOpen] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsOpen(false);
    },3000)
  }, [])
  return (
    <div className="App">
      {isOpen ? (
        <StyledDiv><ClimbingBoxLoader /></StyledDiv>
      ) : (
        <>
          <Navbar />
          <Intro />
          <Services />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <GoToTop />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
