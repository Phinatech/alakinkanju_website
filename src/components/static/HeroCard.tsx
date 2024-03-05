import React from 'react';

interface iHeroCard {
  // bgImg? : string,
  content1? : string;
  content2? : string;
  content3? : string;
}

// import img from "../../assets/images/heroBG1.jpg";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";


const HeroCard:React.FC<iHeroCard> = ({ content1, content2, content3}) => {
  return (
    <div className="w-full h-[100vh] relative font-pop flex flex-col items-center justify-center">

      {/* <div className='w-full absolute top-0 left-0'>
        <img className='w-full' src={img} alt="" />
      </div> */}

      <div className='absolute text-[11px] p-[5px] md:text-[14px] lg:text-[16px] lg:p-[7px]  bg-white rounded-full left-[2px] md:left-[5px] top-[50%] flex items-center justify-center animate-pulse'>
        <FaArrowLeft />
      </div>

      <div className='absolute text-[11px] p-[5px] md:text-[14px] lg:text-[16px] lg:p-[7px] bg-white rounded-full right-[2px] md:right-[5px] top-[50%] flex items-center justify-center animate-pulse'>
        <FaArrowRight />
      </div>

      <div className='w-[90%] z-20 text-white flex flex-col gap-4 mt-[80px] md:mt-[40px] items-center md:items-start'>
        <h5 className='text-[16px] tracking-[3px] lg:text-[22px] md:tracking-[7px]'>
          {/* WE ARE THE BEST */}
          {content1}
        </h5>

        <h2 className='w-[90%] md:w-[65%] lg:w-[55%] font-bold text-[25px] text-center md:text-left lg:text-[45px] leading-normal'>
          {/* Innovating Tech Solutions For Your Business Growth */}
          {content2}
        </h2>

        <h4 className='text-[11px] lg:text-[14px] w-[80%] md:w-[50%] lg:w-[45%] text-center md:text-left'>
          {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, tempora praesentium. Molestiae facere odit, quisquam. */}
          {content3}
        </h4>

        <button className='bg-black transition-all duration-300 ease-in-out text-[13px] md:w-[160px] h-[45px] hover:w-[130px] md:hover:w-[180px] hover:h-[49px border-none mt-[20px] outline-none hover:border-none'>
          Get in Touch
        </button>

      </div>

    </div>
  )
}

export default HeroCard