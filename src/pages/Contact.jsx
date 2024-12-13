import React from "react";
import { Link } from "react-scroll";
import { FaArrowRight } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact-us" className="relative bg-cover  mt-40 mb-40 ">
      <div
        className="bg-cover absolute  w-full  h-[calc(60vh)] opacity-50"
        style={{ backgroundImage: `url("/images/contact.jpg")` }}
      ></div>
      <div className="absolute inset-0  w-full  h-[calc(60vh)] bg-secondary/20 backdrop-blur-sm"></div>
      <div className=" relative z-100 w-[calc(70%)] mx-auto ">
        <div className="  w-6/7 flex flex-col  mx-auto  items-center pt-36">
          <h1 className="  text-7xl font-montserrat text-primary font-bold mb-12 ">
            Contact
          </h1>
          <div>
            <p className=" text-white  text-3xl tracking-wider   font-montserrat">
              Get in touch with us about anything related to our company or
              services.
            </p>
          </div>
          <div className="grid grid-cols-2 w-full mt-36 gap-16">
            <div className="px-20 bg-gray-50 rounded-3xl py-12">
              <h1 className="font-montserrat text-5xl font-semibold text-primary py-12 ">
                Send us a Message
              </h1>
              <p className="font-montserrat text-2xl mb-4 text-red-700">
                Fields marked with * is mandatory
              </p>
              <form className="flex flex-col items-center w-full mx-auto">
                <label
                  htmlFor="name"
                  className="self-start font-montserrat text-3xl font-semibold flex"
                >
                  Full Name
                  <p className="ml-1 text-red-700">*</p>
                </label>
                <input
                  id="name"
                  name="name"
                  className="h-16 w-full cursor-pointer border-2  mt-4 p-4 font-montserrat  text-2xl hover:shadow-md focus:outline-0   focus:shadow-md"
                  placeholder="Enter your name"
                />
                <label
                  htmlFor="phone"
                  className="self-start font-montserrat text-3xl mt-8 font-semibold"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  className="h-16 w-full border-2 cursor-pointer mt-4 p-4 font-montserrat  text-2xl hover:shadow-md focus:outline-0   focus:shadow-md"
                  placeholder="Enter your phone number"
                />
                <label
                  htmlFor="phone"
                  className="self-start font-montserrat text-3xl mt-8 font-semibold flex"
                >
                  Email <p className="ml-1 text-red-700">*</p>
                </label>
                <input
                  id="phone"
                  name="phone"
                  className="h-16 w-full border-2 cursor-pointer mt-4 p-4 font-montserrat  text-2xl hover:shadow-md focus:outline-0   focus:shadow-md"
                  placeholder="Enter your email"
                />
                <label
                  htmlFor="message"
                  className="self-start font-montserrat text-3xl mt-8 font-semibold"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="h-64 w-full border-2 cursor-pointer mt-4 px-4 font-montserrat  text-2xl p-4 hover:shadow-md focus:outline-0   focus:shadow-md"
                  placeholder="Enter your message here...."
                />
                <button className="px-10 py-6 mt-12 justify-self-center shadow-2xl cursor-pointer bg-primary  text-2xl text-white rounded-xl ">
                  Send Message
                </button>
              </form>
            </div>
            <div className="flex flex-col" >
              <div className="mt-80 px-8 py-6 flex items-baseline justify-between"> <p className="font-montserrat text-3xl font-semibold">Our Location</p> <a className="flex items-center font-montserrat text-2xl"> GET DIRECTION <FaArrowRight className="ml-2"/></a></div>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d634.6179558995395!2d85.37416622072327!3d27.692858315806344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1a386373112b%3A0x86880d311674d928!2sPolice%20Sector%20Kandaghari!5e0!3m2!1sen!2snp!4v1734118595632!5m2!1sen!2snp"
                width="600"
                height="450"
           className=" px-8  w-full "
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* <div className=" w-[calc(70%)] mx-auto pt-32 flex-flex-col">
        <h1 className="  text-7xl font-montserrat text-primary font-bold mb-20 justify-self-center">
          Contact Us
        </h1>
        <div className="grid grid-cols-2">
      <div className="px-12 bg-gray-50 rounded-3xl">
        <h1 className="font-montserrat text-5xl font-semibold text-primary py-12 ">Send us a Message</h1>
      <form className="flex flex-col items-center w-full mx-auto">
            <label
              htmlFor="name"
              className="self-start font-montserrat text-3xl font-semibold flex"
            >
              Full Name
              <p className="ml-1 text-red-700">*</p>
            </label>
            <input
              id="name"
              name="name"
              className="h-16 w-full cursor-pointer border-2  mt-4 p-4 font-montserrat  text-2xl hover:shadow-md focus:outline-0   focus:shadow-md"
              placeholder="Enter your name"
            />
            <label
              htmlFor="phone"
              className="self-start font-montserrat text-3xl mt-8 font-semibold"
            >
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              className="h-16 w-full border-2 cursor-pointer mt-4 p-4 font-montserrat  text-2xl hover:shadow-md focus:outline-0   focus:shadow-md"
              placeholder="Enter your phone number"
            />
            <label
              htmlFor="phone"
              className="self-start font-montserrat text-3xl mt-8 font-semibold flex"
            >
                     
              Email <p className="ml-1 text-red-700">*</p>
            </label>
            <input
              id="phone"
              name="phone"
              className="h-16 w-full border-2 cursor-pointer mt-4 p-4 font-montserrat  text-2xl hover:shadow-md focus:outline-0   focus:shadow-md"
              placeholder="Enter your email"
            />
            <label
              htmlFor="message"
              className="self-start font-montserrat text-3xl mt-8 font-semibold"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="h-64 w-full border-2 cursor-pointer mt-4 px-4 font-montserrat  text-2xl p-4 hover:shadow-md focus:outline-0   focus:shadow-md"
              placeholder="Enter your message here...."
            />
            <button className="px-10 py-6 mt-12 justify-self-center shadow-2xl cursor-pointer bg-primary  text-2xl text-white rounded-xl ">
              Send Message
            </button>
          </form>
        </div>
        </div>
      </div> */}
    </div>
  );
};

export default Contact;
