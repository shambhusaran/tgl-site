import React from "react";
import NavBar from "./Navbar";
import Dashboard from "../pages/Dashboard.jsx";
import About from "../pages/About.jsx";
import Career from "../pages/Career.jsx";
import Contact from "../pages/Contact.jsx";
import Footer from "./Footer.jsx";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <Dashboard />
      <About />
      <Career />
      <Contact />
      <Footer/>
    </>
  );
};

export default HomePage;
