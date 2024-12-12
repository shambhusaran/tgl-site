import React from "react";

const Contact = () => {
  return (
    <div id="contact-us" className="h-screen w-full  ">
      <div className=" w-[calc(70%)] mx-auto pt-32 flex-flex-col">
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
      </div>
    </div>
  );
};

export default Contact;
