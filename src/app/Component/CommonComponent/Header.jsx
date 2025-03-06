"use client";
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { CgMenuGridR } from "react-icons/cg";
import { CiLogin } from "react-icons/ci";
import { FaUserPlus } from "react-icons/fa6";
import logo from "../../../../public/images/header/logo/logo.svg"
export default function Header() {
    // this state and given ChangeHeaderBg function for only use header 
   let[headerScrol,setHeaderScrol]= useState(false)
   let ChangeHeaderBg=()=>{
    if(window.scrollY>76){
        setHeaderScrol(true)
        console.log(headerScrol)
    }
    else{
        setHeaderScrol(false)
    }
   }

 window.addEventListener("scroll",ChangeHeaderBg)
  return (
    <>
      <header className="bg-[url('/images/header/backgraound.jpg')] bg-no-repeat relative h-[90vh]  ">
        <div className="bg-black w-full z-[1] h-full opacity-50 absolute"></div>
          <div className={`w-screen ${headerScrol ? "bg-teal-500 text-teal-100 md:text-black md:bg-white sticky top-0 z-[10]" : "relative z-[10] text-white" }`}>
              <div className=' max-w-[1340px] mx-auto pl-3 md:pl-[35px] lg:px-[10px] py-3 md:py-5 grid grid-cols-[60%_40%] md:gap-3 lg:gap-0 md:grid md:grid-cols-[15%_60%_20%] lg:grid lg:grid-cols-[15%_60%_auto] items-center'>
                <div className=' text-2xl font-extrabold font-serif flex items-center md:justify-center gap-4 md:gap-4 '>
                  <Image src={logo} width={60} alt={logo} />
                  <h1>VOLGA</h1>
                  </div>
                <nav className=' hidden md:block text-[18px] font-semibold '>
                    <ul className='md:flex md:justify-evenly   lg:flex lg:justify-evenly  '>
                        <li className='font-sans hover:underline underline-offset-8 cursor-pointer '>Home</li>
                        <li className=' hover:underline underline-offset-8 cursor-pointer '>About Us</li>
                        <li className=' hover:underline underline-offset-8 cursor-pointer '>Cource</li>
                        <li className=' hover:underline underline-offset-8 cursor-pointer '>Team</li>
                        <li className=' hover:underline underline-offset-8 cursor-pointer '>Contact Us</li>
                    </ul>
                </nav>
                <div className='flex justify-evenly md:justify-evenly items-center gap-3 '>
                   <div ><span className='  font-semibold text-[18px] hidden md:block hover:underline underline-offset-8 cursor-pointer'>Log in</span> <span><CiLogin className=' text-2xl md:hidden' /></span> </div>
                   <div ><span className='  font-semibold text-[18px] hidden md:block hover:underline underline-offset-8 cursor-pointer'>Register</span> <span><FaUserPlus className=' text-2xl  md:hidden' /></span> </div>
                     <CgMenuGridR className='text-2xl  md:hidden' />
                </div>
            </div>
          </div>
          {/* Header Content work */}
          <div className='  max-w-[1000px] mt-[200px] relative z-[10] flex justify-center '>
             <div className=' w-[650px] md:w-[850px] border-l-4 border-blue-700 p-8 md:p-12 text-white'>
             <h1 className='text-5xl md:text-7xl md:leading-24 font-sans' >With Edumy, Learning Never Ends </h1>
             </div>
          </div>
      </header>
    </>
  )
}

