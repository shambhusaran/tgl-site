import React from "react";
import NavBar from "./Navbar";
import Dashboard from "../pages/Dashboard";
import About from "../pages/About";
import Career from "../pages/Career";
import Contact from "../pages/Contact";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <Dashboard />
      <About />
      <Career />
      <Contact />
    </>
  );
};

export default HomePage;
