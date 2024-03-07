// import React from 'react'

const Contact = () => {
  return (
    <div id="contact" className="w-full flex items-center justify-center">
        <div className="w-[90%] py-[40px] flex flex-col justify-center items-center">

            <h5 className="text-[14px] font-bold md:text-left animate-bounce text-orange-500 mb-[10px]">CONTACT US</h5>

            <h3 className="text-[17px] md:text-[20px] lg:text-[24px] md:text-left">Got something to tell us?</h3>

            <form action="" className="w-full md:w-[70%] lg:w-[60%] flex flex-col gap-4 p-3">
                <input className="w-full border-b-black border-b-[1px] rounded-md h-[42px] px-[7px]" type="text" placeholder="Name" />

                <input className="w-full border-b-black border-b-[1px] rounded-md h-[42px] px-[7px]" type="email" placeholder="Email" />

                <textarea className="w-full border-b-black border-b-[1px] rounded-md h-[132px] px-[7px]" placeholder="Message" />

                <button className="bg-black text-white animate-pulse">Send</button>
            </form>

        </div>
    </div>
  )
}

export default Contact