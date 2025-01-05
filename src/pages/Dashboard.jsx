import React from 'react'

const Dashboard = () => {
    return (
        <>
        <div className=" bg-cover relative bg-no-repeat h-[calc(60vh)] " id='dashboard' style={{ backgroundImage: `url('/images/homepage.png') ` }}>
        <img src='/images/home-bg.png' alt='dashboard-vector  ' className='absolute bottom-0 h-full opacity-25'/>
        <div className='bg-cover z-50 absolute top-0 bottom-0  bg-no-repeat h-[calc(60vh)]' style={{backgroundImage:`url('/images/home-bg.png')`}}></div>
        <div className='flex items-center h-full animate-fade-up animate-once animate-duration-1000 animate-delay-300 animate-ease-out'>
        <div className=" container w-[calc(70%)] flex  mx-auto">
        <div className="flex flex-col w-full h-full  justify-center  ">
                <div className="text-5xl md:text-7xl  font-montserrat font-bold text-white text-center tracking-normal leading-12"> Impacting Lives Through Technology and Innovation</div>
                <p className=" text-white mt-16 md:px-20 text-2xl md:text-3xl tracking-wider  text-center font-satoshi"> At TGL Technologies, we transform your ideas into products that allows you to turn your imagination into reality. We put a strong emphasis on delivering high-quality outcomes on schedule and precisely as required.</p>
            </div>
        </div>
        </div>
        </div>
        </> 
  )
}

export default Dashboard
