import React from 'react'
// import logo from "../../assets/images/logo.png";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { NavLink } from 'react-router-dom';

const Header = () => {

    const [dropdown, setDropdown] = React.useState(false)

    const showDropdown = () => {
        setDropdown(!dropdown)
    }

  return (
    <div className="w-full h-[70px] flex justify-center items-center shadow-md font-pop fixed z-40 bg-white">
        <div className="w-[90%] h-full flex justify-between items-center ">

            {/* <img className="w-[100px] md:w-[130px]" src={logo} alt="W2H-logo" /> */}

            <h4 className='text-[22px]'>LOGO</h4>

            <div>
                <li className="hidden lg:flex items-center gap-5 text-[15px] transition-all duration-500 ease-in-out">
                    <NavLink to="/">
                        <ol className='text-[#3d82b3] hover:text-[#80c41c] cursor-pointer font-semibold transition-all duration-300 ease-in-out'>Home</ol>
                    </NavLink>

                    <NavLink to='/about'>
                        <ol className='text-[#3d82b3]  hover:text-[#80c41c] cursor-pointer font-semibold transition-all duration-300 ease-in-out'>About</ol>
                    </NavLink>

                    <NavLink to="/hikes">
                        <ol className='text-[#3d82b3]  hover:text-[#80c41c] cursor-pointer font-semibold transition-all duration-300 ease-in-out'>Testimonies</ol>
                    </NavLink>

                    <NavLink to="/contact">
                        <ol className='text-[#3d82b3]  hover:text-[#80c41c] cursor-pointer font-semibold transition-all duration-300 ease-in-out'>Contact</ol>
                    </NavLink>

                    {/* <NavLink to="/firststep">
                        <button className=' px-4 py-3 bg-[#80c41c] border-none hover:bg-[#3d82b3] text-white font-semibold animate-puls ml-[50px] rounded-[60px] transition-all duration-300 ease-in-out hover:px-5 hover:py-4'>
                            FIRST STEP!
                        </button>
                    </NavLink> */}
                </li>

                

            { dropdown ?
                <div className="lg:hidden text-[22px] cursor-pointer  ml-[6px] text-[#3d82b3]" onClick={showDropdown}>
                    <MdClose /> 
                </div>
            :
                <div className="lg:hidden text-[22px] cursor-pointer text-[#3d82b3] ml-[6px]" onClick={showDropdown}>
                    <HiMenuAlt3 /> 
                </div>
            }

            </div>

        </div>

        {
            dropdown ?

            <div className="lg:hidden w-full h-[100vh] absolute top-[70px] bg-white transition-all ease-in-out z-40 duration-300  " onClick={showDropdown}>
                <div className="w-full h-[320px]  flex flex-col pl-[15px] sm:pl-[35px] pt-[25px] text-[13px] gap-4 text-[#1f2035]">
                    {/* <li className="lg:flex items-center gap-5 text-[16px]"> */}
                        <NavLink to="/">
                            <ol className='text-[#3d82b3] hover:text-[#80c41c] cursor-pointer font-semibold transition-all duration-300 ease-in-out'>Home</ol>
                        </NavLink>

                        <NavLink to='/about'>
                            <ol className='text-[#3d82b3]  hover:text-[#80c41c] cursor-pointer font-semibold transition-all duration-300 ease-in-out'>About</ol>
                        </NavLink>

                        <NavLink to="/hikes">
                            <ol className='text-[#3d82b3]  hover:text-[#80c41c] cursor-pointer font-semibold transition-all duration-300 ease-in-out'>Testimonies</ol>
                        </NavLink>

                        <NavLink to="/contact">
                            <ol className='text-[#3d82b3]  hover:text-[#80c41c] cursor-pointer font-semibold transition-all duration-300 ease-in-out'>Contact</ol>
                        </NavLink>

                        {/* <NavLink to="/firststep">
                            <button className='w-[150px] bg-[#80c41c] border-none hover:bg-[#3d82b3] text-white font-semibold animate-pulse  rounded-[60px]'>
                                FIRST STEP!
                            </button>
                        </NavLink> */}
                    {/* </li> */}
                </div>
            </div>

            :
                null
        }
    </div>
  )
}

export default Header;

// #80c41c
// #3d82b3