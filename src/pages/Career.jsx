import React, { useEffect, useRef } from "react";
import { FaArrowRight } from "react-icons/fa6";



const Career = () => {




  return (
    <div id="career" className=" relative bg-cover h-screen ">
      {/* <div className= "bg-cover h-screen absolute inset-0 opacity-15" style={{backgroundImage : `url("/images/zig-zag-texture.jpg")`}}></div> */}
      <div
        className="bg-cover absolute  w-full  h-[calc(60vh)] opacity-50"
        style={{ backgroundImage: `url("/images/group.jpg")` }}
      ></div>
      <div className="absolute inset-0  w-full  h-[calc(60vh)] bg-gray-950 opacity-25"></div>
      <div className=" relative z-100 w-[calc(70%)] mx-auto ">
        
        <div  className="  w-6/7 flex flex-col  mx-auto  h-[calc(60vh)] items-center  ">
          <h1 className="  text-7xl font-montserrat text-primary font-bold mb-12 ">
            Careers
          </h1>
          <div>
            <p className=" text-white  text-3xl tracking-wider   font-montserrat">
              Join our innovative team and shape the future of technology.
              Explore exciting career opportunities and collaborate with
              brilliant minds.
            </p>
            <button className="px-8 py-6 mt-4 justify-self-center shadow-lg  bg-primary grid grid-cols-6 gap-4  hover:animate-bounce">
              <p className="items-center text-white font-montserrat text-2xl col-span-5">
                {" "}
                Check Current Openings
              </p>
              <FaArrowRight className="self-center text-white font-montserrat text-2xl  col-span-1" />
            </button>
          </div>
        </div>
        </div>
      </div>
   
  );
};

export default Career;
