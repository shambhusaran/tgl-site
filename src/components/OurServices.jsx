import React from "react";

const OurServices = () => {
  return (
    <div className=" w-[calc(90%)] sm:w-[calc(70%)] mx-auto">
      <div className="w-6/7 flex flex-col mt-32 items-center mx-auto">
        <h1 className="text-6xl sm:text-7xl font-montserrat text-primary font-bold ">
          Our Services
        </h1>
        <div className=" grid md:grid-cols-2 gap-8 mt-16">
          <div className=" h-64  flex  bg-gray-50 px-6  rounded-lg shadow-sm">
          <div className=" flex items-center">
            <img
              src="/images/web-development.png"
              className="  justify-self-start object-fill h-48 w-2/5 shadow-md"
              alt="web-development-img"
            />
            <div className="ml-4 w-3/5  ">
              <h2 className="font-montserrat text-2xl sm:text-4xl font-semibold">
                Web Development
              </h2>
              <p className="font-montserrat text-lg sm:text-2xl mt-2">
                Build high-performance websites that captivate your audience.
                Our web development team delivers pixel-perfect solutions.
              </p>
            </div>
            </div>
          </div>
          <div className="  h-64 flex bg-gray-50 px-4 sm:px-6 rounded-lg shadow-sm">
          <div className=" flex items-center">
            <div className=" flex items-center">
              <img
                src="/images/mobile-app-development.jpg"
                className="  justify-self-start object-fill h-48 w-2/5 shadow-md "
                alt="mobile-app-development-img"
              />
              <div className="ml-4 w-3/5">
                <h2 className="font-montserrat text-2xl sm:text-4xl font-semibold">
                  Mobile App Development
                </h2>
                <p className="font-montserrat text-lg sm:text-2xl mt-2">
                  Transform your ideas into reality. Our expert team builds
                  high-performance mobile apps tailored to your needs.
                </p>
              </div>
            </div>
            </div>
          </div>
          <div className="  h-64 flex bg-gray-50 px-4 sm:px-6 rounded-lg shadow-sm">
                 <div className=" flex items-center">
            <img
              src="/images/network-security.png"
              className="  justify-self-start object-fill h-48 w-2/5 shadow-md "
              alt="network-security-img"
            />
            <div className="ml-4 w-3/5">
              <h2 className="font-montserrat text-2xl sm:text-4xl font-semibold">
                Networking and Security Services
              </h2>
              <p className="font-montserrat text-lg sm:text-2xl mt-2">
                Secure your digital infrastructure. Our network experts provide
                robust solutions to safeguard your business.
              </p>
            </div>
            </div>
          </div>
          <div className="  h-64 flex bg-gray-50 px-4 sm:px-6 rounded-lg shadow-sm">
          <div className=" flex items-center">
            <img
              src="/images/ui-ux-development.jpeg"
              className="  justify-self-start object-fill h-48 w-2/5 shadow-md "
              alt="ui-ux-development-img"
            />
            <div className="ml-4 w-3/5">
              <h2 className="font-montserrat text-2xl sm:text-4xl font-semibold">
                UI/UX Development
              </h2>
              <p className="font-montserrat text-lg sm:text-2xl mt-2 ">
                Elevate your brand with cutting-edge UI/UX design. We craft
                beautiful and functional digital products.
              </p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
