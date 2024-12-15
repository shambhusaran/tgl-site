import React from "react";
import OurServices from "../components/OurServices.jsx";
import FounderWords from "../components/FounderWords.jsx";

const About = () => {
  return (
    <div id="about-us">
      <div className=" w-[calc(90%)] sm:w-[calc(70%)]  mx-auto">
        <div className="w-6/7 mx-auto flex flex-col items-center">
          <div className="mt-20 font-montserrat text-4xl sm:text-5xl text-secondary ">
            ABOUT US
          </div>
          <h1 className="font-montserrat text-6xl sm:text-7xl mt-4 font-bold text-primary">
            Who We Are
          </h1>
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <img
              src="/images/who-we-are.jpg"
              alt="who-we-are.jpg"
              className=" sm:h-[calc(50vh)] w-full  self-center   "
            />
            <p className=" text-justify sm:text-justify font-montserrat text-3xl sm:text-4xl">
              A company founded in 2022 with the intention of establishing a
              greater connection between people and technology. Its objective is
              to gain the trust of people through technological innovation so
              that it is widely accepted and accessible. Our goal is to digitize
              every part of society so that people can use their residual time
              on inventive activities or activities that give their lives
              meaning. We also have expertise at collaborating to find solutions
              for our clients' challenges. For us to be able to proudly identify
              our collaborative idea when it succeeds in the market, we treasure
              every partnership and every project by giving best of our efforts,
              and bring your idea to reality.
            </p>
          </div>
        </div>
      </div>


      <OurServices/>
      {/* <FounderWords/> */}
    </div>
  );
};

export default About;
