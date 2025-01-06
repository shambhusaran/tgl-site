import React, { useState } from "react";

import TextField from "../components/TextField";
import DropDown from "../components/DropDown";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('')

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleRole = (event) => {
    setRole(event.target.value);
  };

  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault(); 
    // Handle form submission here (e.g., send data to server)
   

    if(email==="superadmin@tgltechnology.com" && password ==="superAdmin321##"){

      navigate('/')
      
    }
  };
  return (
    <div>
      <div
        className="h-[calc(100vh)]  bg-cover relative bg-no-repeat"
        style={{ backgroundImage: `url("/images/login-background.png")` }}
      >
        <div className="  w-[calc(90%)]  mx-auto min-h-screen">
          <div className="justify-items-center h-[calc(15vh)] md:justify-items-start">
            <img
              src="images/tgl-all-white-cropped.png"
              className="h-44 lg:h-[calc(15vh)] py-10"
            />
            </div>
            <div className=" flex mt-[calc(10vh)] justify-center items-center">
              <div className="bg-white px-10 w-full sm:w-[calc(90%)]  lg:w-[calc(40%)] rounded-lg sm:px-14  py-16 ">
                <h1 className="text-5xl font-bold font-montserrat ">
                  Welcome Back
                </h1>
                <div className=" h-12 w-12 justify-self-end flex items-center ">
               
                  <img className="bg-cover bg-no-repeat" src="images/NP.png" />
                </div>

                <form className="grid grid-cols-1 mt-2" id="login-form" onSubmit={handleSubmit}>
                  <DropDown value={role} handleChange={handleRole}/>
                  <TextField forWhich={"email"} label={"Email"} type= {"email"} value={email} handleChange={handleEmail} />
                  <TextField forWhich={"password"} label={"Password"} type={"password"} value={password} handleChange={handlePassword}/>

                  <div className="flex flex-row  mt-8 justify-between">
                    <div className="flex flex-row  items-center">
                      <input type="checkbox" id="remember_me" className="cursor-pointer" />
                      <p className="ml-4 font-montserrat text-lg leading-none">
                        Remember Me
                      </p>
                    </div>
                    <a className="font-montserrat text-lg leading-none cursor-pointer hover:underline">
                      Forgot Password?
                    </a>
                  </div>
                  <button type="submit" className="w-full h-16 mt-16 mb-8 sm:mb-0 justify-self-center shadow-2xl cursor-pointer bg-primary font-semibold  text-2xl text-white   font-montserrat" >
                    Log In
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

      </div>
    // </div>
  );
};

export default Login;
