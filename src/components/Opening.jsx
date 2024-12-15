import React from 'react'
import { LiaCertificateSolid } from "react-icons/lia";
import { IoLocationOutline } from "react-icons/io5";
import { MdTimer } from "react-icons/md";


const Opening = () => {
  return (
    <div className=" sm:h-80  flex flex-col  bg-gray-50 px-6 sm:px-12 py-8 sm:py-10 rounded-2xl shadow-lg hover:shadow-2xl justify-center">
    <div className="flex  ">
      <LiaCertificateSolid className="  bg-primary h-16 w-16 sm:h-20 sm:w-20 text-white  rounded-full" />

      <div className="flex flex-col  sm:h-20 ml-5 sm:ml-8 justify-center">
        <h1 className="font-montserrat text-3xl sm:text-4xl font-semibold">
          React Native Developer
        </h1>
        <p className="font-montserrat text-xl sm:text-2xl mt-2">2 Open Positions</p>
      </div>
    </div>
    <div className="flex flex-col mt-4 sm:mt-8">
      <div className="flex  items-center">
        <IoLocationOutline className="ml-3 sm:ml-0 h-8 w-8 text-gray-500" />
        <p className="ml-10 sm:ml-8 font-montserrat text-2xl sm:text-3xl text-gray-500">Remote, Nepal</p>
      </div>
      <div className="flex  items-center mt-2 sm:mt-4 text-gray-500">
      <MdTimer className="ml-3 sm:ml-0 h-8 w-8" />
        <p className=" ml-10 sm:ml-8 font-montserrat text-2xl sm:text-3xl text-gray-500 ">1st January, 2025</p>
      </div>
    </div>
  </div>
  )
}

export default Opening