import React from "react";
import { Link } from "react-scroll";
const NavBar = (props) => {
  return (
    <>
      <nav className="bg-white h-30   flex flex-row shadow-sm w-[calc(70%)] justify-between mx-auto ">
        <img
          src="/images/tgl.png"
          alt="tgl logo"
          className="w-32 h-24 self-center py-2"
        />

        <ul className="flex text-black   text-3xl">
          <li>
            {" "}
            <Link
              className=" h-28 flex items-center font-montserrat px-10 cursor-pointer hover:bg-primary  hover:text-white  "
              to="dashboard" spy= {true} smooth={true} duration={500}  activeClass="active" 
            >
              Home
            </Link>
          </li>
          <li>
            {" "}
            <Link
              className=" h-28 flex items-center font-montserrat px-10 cursor-pointer  hover:bg-primary hover:text-white  "
              to="about-us" spy= {true} smooth={true} duration={500}  activeClass="active" 
            >
              About Us
            </Link>
          </li>

          <li>
            <Link
              className=" h-28 flex items-center font-montserrat px-10 cursor-pointer hover:bg-primary hover:text-white "
              to="career" spy= {true} smooth={true} duration={500}  activeClass="active" 
            >
              Career
            </Link>
          </li>
          <li>
            {" "}
            <Link
              className=" h-28 flex items-center font-montserrat px-10 cursor-pointer hover:bg-primary hover:text-white "
              to="contact-us" spy= {true} smooth={true} duration={500}  activeClass="active" 
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
