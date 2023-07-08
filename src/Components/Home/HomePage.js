import React from "react";
import NavBar from "./NavBar.js"
import HowItWorks from "./HowItWorks.js";
import FindMatch from "./FindMatch.js";
import About from "./About.js";
import Reviews from "./Reviews/Reviews.js";
import ContactUs from "./ContactUs/ContactUs.js";
import Footer from "./Footer/Footer.js";

const HomePage  = () => {
  return (
    <>
      <NavBar />
      <HowItWorks />
      <FindMatch />
      <About />
      <Reviews />
      <ContactUs />
      <Footer />
    </>
  )
}
export default HomePage;
