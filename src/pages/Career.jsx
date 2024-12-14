import React, { useEffect, useRef } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-scroll";
import Opening from "../components/Opening.jsx";

const Career = () => {
  return (
    <div id="career" className=" relative bg-cover  mt-40 mb-40">
      {/* <div className= "bg-cover h-screen absolute inset-0 opacity-15" style={{backgroundImage : `url("/images/zig-zag-texture.jpg")`}}></div> */}
      <div
        className="bg-cover absolute  w-full  h-[calc(60vh)] opacity-50"
        style={{ backgroundImage: `url("/images/group.jpg")` }}
      ></div>
      <div className="absolute inset-0  w-full  h-[calc(60vh)] bg-secondary/20 backdrop-blur-sm"></div>
      <div className=" relative z-100 w-[calc(70%)] mx-auto ">
        <div className="  w-6/7 flex flex-col  mx-auto  h-[calc(60vh)] items-center  justify-center">
          <h1 className="  text-7xl font-montserrat text-primary font-bold mb-12 ">
            Careers
          </h1>
          <div>
            <p className=" text-white  text-3xl tracking-wider   font-montserrat">
              Join our innovative team and shape the future of technology.
              Explore exciting career opportunities and collaborate with
              brilliant minds.
            </p>
            <Link
              className="px-8 py-6 mt-4 justify-self-center shadow-lg cursor-pointer bg-primary grid grid-cols-6 gap-4  "
              to="openings"
            >
              <p className="items-center text-white font-montserrat text-2xl col-span-5">
                Check Current Openings
              </p>
              <FaArrowRight className="self-center text-white font-montserrat text-2xl  col-span-1" />
            </Link>
          </div>
        </div>
      </div>
      <div id="openings" className="flex flex-col  w-[calc(70%)] mx-auto pt-40">
        <h1 className="text-7xl font-montserrat text-primary font-bold mb-12">
          Current Openings
        </h1>

        <div className="grid grid-cols-2 gap-10">
          <Opening/>
          <Opening/>
          <Opening/>
        </div>
      </div>
    </div>
  );
};

export default Career;
