import React from "react";
import NavBar from "./Navbar";
import Dashboard from "../pages/Dashboard";
import About from "../pages/About";
import Career from "../pages/Career";
import Contact from "../pages/Contact";
import Footer from "./Footer";

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
