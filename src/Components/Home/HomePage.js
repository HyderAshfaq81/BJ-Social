import React, { useEffect } from "react";
import NavBar from "./NavBar.js"
import HowItWorks from "./HowItWorks.js";
import FindMatch from "./FindMatch.js";
import About from "./About.js";
import Reviews from "./Reviews/Reviews.js";
import ContactUs from "./ContactUs/ContactUs.js";
import Footer from "./Footer/Footer.js";
import { useDispatch, useSelector } from "react-redux";
import { getProfiles } from "../../redux/actions/profiles/index.js";

const HomePage  = () => {
   const dispatch = useDispatch();
   const allProfiles = useSelector(state => state.allProfiles.profiles)
   useEffect(() => {
    dispatch(getProfiles());
   }, [])
   const token = localStorage.getItem('authToken')
  return (
    <>
      <NavBar />
      <HowItWorks />
      <About />
      <Reviews />
      <ContactUs />
      <Footer />
      {/* {allProfiles?.length < 0 && <FindMatch /> }*/}
    </>
  )
}
export default HomePage;
