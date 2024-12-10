import React from "react";

const About = () => {
  return (
    <div id="about-us">
      <div className="  w-[calc(70%)]  mx-auto">
        <div className="w-6/7 mx-auto flex flex-col items-center">
          <div className="mt-20 font-montserrat text-5xl text-secondary">
            ABOUT US
          </div>
          <h1 className="font-montserrat text-7xl mt-4 self-start font-bold text-primary">
            Who We Are
          </h1>
          <div className="grid grid-cols-2 gap-8 mt-8">
            <img
              src="/images/who-we-are.jpg"
              alt="who-we-are.jpg"
              className="h-[calc(50vh)] w-full self-center   "
            />
            <p className=" text-justify font-montserrat text-4xl">
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

      {/* <div className=" w-[calc(70%)] mx-auto">
          <div className=" flex  mt-32 ">
            <p className="font-montserrat text-center text-5xl w-1/2 flex items-center font-semibold">
              Our biggest claim to fame is our team. We hire and train great
              talent through our rich pipeline. 
            </p>

            <p className="font-montserrat text-justify text-2xl w-1/2 leading-10 tracking-wide">
              Our biggest claim to fame is our team. We hire and train great
              talent through our rich pipeline and try to create an atmosphere
              of inclusion and opportunity to help them grow into future
              leaders. Our 100+ member delivery team is what helps us achieve
              stupendous goals time and again. We are diverse in our makeup, our
              approach and our strengths, giving us a lot of depth in key
              technical fields and almost all of the most commonly used software
              development platforms/languages. When we do have a new unmet need,
              we utilize our reputation and reach.
            </p>
          </div>
      
      </div> */}

      <div className=" w-[calc(70%)] mx-auto">
        <div className="w-6/7 flex flex-col mt-32 items-center mx-auto">
          <h1 className="text-7xl self-start font-montserrat text-primary font-bold">
            Our Services
          </h1>
          <div className="grid grid-cols-4">

          </div>
          
        </div>
      </div>
      <div className=" w-[calc(70%)] mx-auto mt-32">
        <div className="flex flex-col items-center">
          <p className="text-7xl font-montserrat text-primary font-bold">
            Words From our Founder
          </p>
          <div className=" flex mt-10">
            <p className="font-montserrat text-center text-5xl w-1/2 flex items-center font-semibold pr-6">
              "Our biggest claim to fame is our team. We hire and train great
              talent through our rich pipeline."
            </p>

            <p className="font-montserrat text-justify text-2xl w-1/2 leading-10 tracking-wide pl-6">
              Our biggest claim to fame is our team. We hire and train great
              talent through our rich pipeline and try to create an atmosphere
              of inclusion and opportunity to help them grow into future
              leaders. Our 100+ member delivery team is what helps us achieve
              stupendous goals time and again. We are diverse in our makeup, our
              approach and our strengths, giving us a lot of depth in key
              technical fields and almost all of the most commonly used software
              development platforms/languages. When we do have a new unmet need,
              we utilize our reputation and reach.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
