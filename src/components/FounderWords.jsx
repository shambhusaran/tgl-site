import React from "react";

const FounderWords = () => {
  return (
    <div className=" w-[calc(70%)] mx-auto mt-40 ">
      <div className="flex flex-col items-center">
        <p className="text-7xl font-montserrat text-primary font-bold  ">
          Words From our Founder
        </p>
        <div className=" grid grid-cols-2 mt-16 gap-12">
          <div >
            <div className=" h-64 w-64 bg-slate-100 rounded-3xl justify-self-center mb-4">
              <img
                alt="founder-img"
                src="images/founder.png"
                className="object-cover h-full justify-self-center"
              />
            </div>

            <p className="font-montserrat text-center text-2xl justify-center font-semibold px-24">"Lets make Technology <span className="text-secondary font-bold">Acceptable</span>, <span className="text-secondary font-bold">Inspiring</span> and  <span className="text-secondary font-bold">Accessible.</span>" 
             
            </p>
          </div>

          <p className="font-montserrat text-justify text-2xl  leading-10 tracking-wide ">
            In an era defined by rapid technological advancement, we strive to
            bridge the digital divide. Our commitment lies in delivering
            innovative solutions that empower individuals and businesses alike.
            By harnessing the potential of technology, we aim to create a future
            where everyone, regardless of background, can access the tools and
            knowledge to thrive. <br/>
           <p className="font-montserrat  text-2xl  leading-10 tracking-wide justify-self-end"> -Shambhusaran Parajuli</p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FounderWords;
