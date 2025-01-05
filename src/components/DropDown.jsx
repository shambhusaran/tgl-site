import React, { useState } from 'react'

const DropDown = ({value, handleChange}) => {

   
      // const [selectedRole, setselectedRole] = useState("");

      // const handleChange =  (event) => {
      //   const selectedRoleName = event.target.value
      //    setselectedRole(selectedRoleName);



  
      // };

      const roles = [
        // Placeholder option
        "Select your role",
        'Admin',
        'Super Admin',
        'Staff',
      ];

  return (
    <div className="mt-4 relative">
     
    <label
      htmlFor={"role"}
      className="font-montserrat text-2xl font-semibold mt-2"
    >
      Role
    </label>
    <select 
        value={value} 
        onChange={(e)=>handleChange(e)} 
      className="h-14 w-full border-2 cursor-pointer mt-2 px-2  font-montserrat  text-xl hover:shadow-sm focus:outline-0  bg-white  focus:shadow-sm"
      
      >
        {roles.map((option) => (
          <option key={option} value={option} className={`bg-white border-none font-montserrat text-xl  hover:bg-secondary ${option === "Select your role"&& 'text-gray-400'}`}>
            {option}
          </option>
        ))}
      </select>
  
  </div>
  )
}

export default DropDown