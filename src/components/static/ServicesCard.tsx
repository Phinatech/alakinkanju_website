/* eslint-disable @typescript-eslint/no-explicit-any */
// import React from 'react'


interface iServiceCard {
    img? : any;
    serviceName? : string;
    serviceContent? : string;
}

const ServicesCard:React.FC<iServiceCard> = ({img, serviceName, serviceContent}) => {

  return (
    <div className="w-full md:w-[32%] lg:w-[30%] bg-blue-500 flex flex-col items-center justify-center text-white h-[350px] rounded-md p-3 gap-5">

        <div className="text-[60px]">
            {/* <MdComputer /> */}
            {img}
        </div>

        <h3 className="text-[18px] font-bold text-center md:text-[21px]">
            {/* Product Engineering */}
            {serviceName}
        </h3>

        <h5 className="text-[13px] text-center md:w-[75%] w-[90%]">
            {/* We will build your solution, whether bringing new amazing products and services to market, or discovering new ways. */}
            {serviceContent}
        </h5>

    </div>
  )
}

export default ServicesCard