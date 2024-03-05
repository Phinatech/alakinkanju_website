// import React from 'react'

import ServicesCard from "../../components/static/ServicesCard";
import { MdComputer } from "react-icons/md";
import { GrTechnology } from "react-icons/gr";
import { IoIosCloudDone } from "react-icons/io";

const Services = () => {
  return (
    <div className="w-full flex items-center justify-center relative">
        <div className="w-[90%] flex flex-col justify-center md:flex-row md:justify-between items-center py-[40px] gap-4">

            <ServicesCard 
                img={<MdComputer />}
                serviceName="Product Engineering"
                serviceContent="We will build your solution, whether bringing new amazing products and services to market, or discovering new ways."
            />

            <ServicesCard 
                img={<GrTechnology />}
                serviceName="Digital Service"
                serviceContent="We offer all ranges of digital services from digital marketing, brand development, business development, socail media manager etc."
            />

            <ServicesCard 
                img={<IoIosCloudDone />}
                serviceName="IT Consultancy"
                serviceContent="We have the expertise to help you define a game plan, ideate and design the products customers want."
            />

        </div>
    </div>
  )
}

export default Services;