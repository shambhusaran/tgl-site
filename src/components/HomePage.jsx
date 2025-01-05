import React from "react";
import NavBar from "./Navbar";
import Dashboard from "../pages/Dashboard.jsx";
import About from "../pages/About.jsx";
import Career from "../pages/Career.jsx";
import Contact from "../pages/Contact.jsx";
import Footer from "./Footer.jsx";
import { useState, useEffect, useRef } from "react";
const HomePage = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const sectionTop = sectionRef.current.offsetTop;
      console.log(sectionTop)
      const windowPosition = window.scrollY;

      if (windowPosition > sectionTop) {
        setIsNavbarVisible(false);
      } else {
        setIsNavbarVisible(true);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <>
    <div className="relative">
      <NavBar className={`"fixed " ${isNavbarVisible? 'opacity-100' : 'opacity-0'} `}/>
<section ref={sectionRef}>
<Dashboard/>
      <About   />
      <Career   />
      <Contact />
      <Footer  />
</section>
 

      </div>
    </>
  );
};

export default HomePage;
