// import React from 'react'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonies = () => {

    const settings = {
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        rtl: true,
        // responsive: [
        //     {
        //         breakpoint: 1000,
        //         settings: {
        //             slidesToShow: 3,
        //             slidesToScroll: 1,
        //         }
        //     },
        //     {
        //         breakpoint: 770,
        //         settings: {
        //             slidesToShow: 2,
        //         }
        //     },
        //     {
        //         breakpoint: 600,
        //         settings: {
        //             slidestoShow: 1,
        //         }
        //     },
        //     {
        //         breakpoint: 475,
        //         settings: {
        //             slidesToShow: 1,
        //         }
        //     }
        // ]
    }


  return (
    <div id="testimonies" className="w-full h-[70vh] p-[30px] bg-black bg-opacity-75 bg-testiBg text-white flex flex-col gap-4 justify-center bg-opac items-center">

        <h5 className="text-[14px] font-bold md:text-left animate-bounce text-orange-500">TESTIMONIES</h5>

        <h3 className="text-[20px] md:text-[23px] lg:text-[28px] md:text-left">What People Say About Us..</h3>

        <Slider {...settings} className="w-[95%] px-10 mt-[30px]" >

            <h2 className="text-[13px] md:text-[16px] lg:text-[20px] text-center">Working with Alakikanju Technology Solutions has been a game-changer for our business. Their team is professional, reliable, and ready to tackle our most demanding challenges. They revamped our infrastructure, significantly improving our system's efficiency and security. We highly recommend them to anyone looking for top-tier IT services.<br /><span className="font-bold mt-[30px]">- JUDITH UGBO</span></h2>

            <h2 className="text-[13px] md:text-[16px] lg:text-[20px] text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, natus molestiae esse qui officiis fugiat ipsum animi ad in quidem, dolor, eos quasi culpa maxime aperiam nulla. Inventore, pariatur tempora. <br /><span className="font-bold mt-[30px]">- MOMODU BENSON</span></h2>

            <h2 className="text-[13px] md:text-[16px] lg:text-[20px] text-center w-[90%] md:w-[70%] lg:w-[60%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, natus molestiae esse qui officiis fugiat ipsum animi ad in quidem, dolor, eos quasi culpa maxime aperiam nulla. Inventore, pariatur tempora. <br /><span className="font-bold mt-[30px]">- NURSE INEMESIT</span></h2>

        </Slider>
        
    </div>
  )
}

export default Testimonies