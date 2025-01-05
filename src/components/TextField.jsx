import React from "react";

const TextField = ({forWhich, label, type, value, handleChange}) => {
  return (
    <div className="mt-4">
   
      <label
        htmlFor={forWhich}
        className="font-montserrat text-2xl font-semibold mt-2"
      >
        {label}
      </label>
      <input
        id={forWhich}
        name={forWhich}
        type={type}
        value={value}
        placeholder={`Enter your ${forWhich}`}
        onChange={(e)=>handleChange(e)}
        className="h-14 w-full border-2 cursor-pointer mt-2 p-3 font-montserrat  text-xl hover:shadow-sm focus:outline-1 focus: outline-gray-400   focus:shadow-sm"
      />
    </div>
  );
};

export default TextField;
