// import React from 'react'

import { FaSquareFacebook, FaLinkedin, FaSquareInstagram } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <div  className="w-full h-[60vh bg-black flex flex-col justify-center items-center font-pop">
        <div className="w-[90%] flex flex-col md:flex-row py-[40px] justify-cente items-cente gap-6">

                <div className="flex flex-col gap-6  text-white md:w-[32%] lg:w-[25%]">
                    <h4 className="font-bold ">ALAKINKANJU</h4>

                    <h5 className="text-[14px] text-white">
                        Alakinkanju is  a unique digital transformation consultancy & software development company that provides IT solutions.
                    </h5>

                    <div className="flex gap-3 items-center text-white text-[20px]">
                        <div><FaSquareFacebook /></div>
                        <div><FaTwitterSquare /></div>
                        <div><FaLinkedin /></div>
                        <div><FaSquareInstagram /></div>
                    </div>
                </div>

                <div className="flex flex-col md:w-[32%] lg:w-[25%] gap-5 text-white">
                    <h4 className="text-[15px] md:text-[16px] font-bold mb-[1px] text-orange-500">Contacts</h4>

                    <h5 className="text-[13px]"><span className="font-bold">Address:</span> 27, Division Road, Lagos</h5>
                    <h5 className="text-[13px]"><span className="font-bold">Email:</span> alakinkanju@gmail.com</h5>
                    <h5 className="text-[13px]"><span className="font-bold">Phone:</span> +234 814 563 7654 </h5>
                </div>

                <div className="flex flex-col md:w-[32%] lg:w-[25%] text-white gap-3 ">
                    <h4 className="text-orange-500 text-[15px] font-bold mb-[1px]">Services</h4>

                    <h5 className="text-[14px] ">Product Strategy</h5>
                    <h5 className="text-[14px]">Product Engineering</h5>
                    <h5 className="text-[14px]">UI/UX Design</h5>
                    <h5 className="text-[14px]">Digital Marketing</h5>
                    <h5 className="text-[14px]">Blockchain</h5>
                </div>

        </div>

        <h5 className="text-[12px] mt-[0px] mb-[20px] text-white">Copyright &#169; 2024 Alakinkanju</h5>
    </div>
  )
}

export default Footer