import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="w-full h-[calc(40vh)] bg-primary">
        <div className=" relative z-100 w-[calc(70%)] mx-auto ">
          <div className="flex  justify-between h-[calc(40vh)] ">
            <div className="flex items-center justify-center ">
              <img
                className="h-72 "
                src="/images/tgl-all-white.png"
                alt="tgl-all-white"
              />
            </div>
            <div className="flex flex-col items-start justify-center ">
              <p className="font-montserrat text-3xl text-white mb-6 font-semibold">
                {" "}
                Quick Links
              </p>
              <p className="font-montserrat text-2xl mb-4 text-white">Home</p>
              <p className="font-montserrat text-2xl mb-4 text-white">About</p>
              <p className="font-montserrat text-2xl mb-4 text-white">Career</p>
              <p className="font-montserrat text-2xl mb-4 text-white">
                Contact
              </p>
            </div>

            <div className="flex flex-col items-start justify-center ">
              <p className="font-montserrat text-3xl text-white mb-6 font-semibold">
                {" "}
                Connect With Us
              </p>
              <p className="font-montserrat text-2xl mb-4 text-white flex items-center">
                {" "}
                <FaPhoneAlt className="mr-4" />
                9866011661
              </p>
              <p className="font-montserrat text-2xl mb-4 text-white flex items-center">
                <MdEmail className="mr-4" /> saranshambhuparajuli@gmail.com
              </p>
              <p className="font-montserrat text-2xl mb-4 text-white flex items-center">
                {" "}
                <FaMapLocationDot className="mr-4" />
                Kadaghari-9, Kathmandu
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-secondary/70">
        <div className=" w-[calc(70%)] mx-auto py-6  flex justify-between ">
       
            
            <p className="text-2xl font-satoshi text-white ">
              © 2025 TGL Technology. All Rights Reserved.
            </p>
            <div className="flex ">
            <FaFacebook className="text-4xl   text-white"/>
            <FaLinkedin className="text-4xl ml-4  text-white" />
            <FaWhatsapp className="text-4xl ml-4  text-white" />
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default Footer;
