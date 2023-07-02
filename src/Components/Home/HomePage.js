import React from "react";
import NavBar from "./NavBar.js"
import HowItWorks from "./HowItWorks.js";
import FindMatch from "./FindMatch.js";
import About from "./About.js";

const HomePage  = () => {
  return (
    <>
      <NavBar />
      <HowItWorks />
      <FindMatch />
      <About />
    </>
  )
}
export default HomePage;
