import React from 'react'

const Dashboard = () => {
    return (
        <>
        
        <div className="bg-cover bg-no-repeat h-[calc(60vh)] flex items-center" id='dashboard' style={{ backgroundImage: `url('/images/homepage.png') ` }}>
        <div className=" container w-[calc(70%)] flex  mx-auto">
        <div className="flex flex-col w-full h-full  justify-center  ">
                <div className="text-7xl  font-montserrat font-bold text-white text-center tracking-normal leading-12"> Impacting Lives Through Technology and Innovation</div>
                <p className=" text-white mt-16 px-20 text-3xl tracking-wider  text-center font-satoshi"> At TGL Technologies, we transform your ideas into products that allows you to turn your imagination into reality. We put a strong emphasis on delivering high-quality outcomes on schedule and precisely as required.</p>
            </div>
        </div>


        </div>
        </>
    
    
  )
}

export default Dashboard