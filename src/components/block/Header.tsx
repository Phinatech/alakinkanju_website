import React from "react";
// import logo from "../../assets/images/logo.png";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

const Header = () => {
  const [dropdown, setDropdown] = React.useState(false);

  const showDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <div
      className={`w-full h-[70px] flex justify-center items-center shadow-m font-pop fixed z-40 bg-transparent text-white  `}
    >
      <div className='w-[90%] h-full flex justify-between items-center '>
        {/* <img className="w-[100px] md:w-[130px]" src={logo} alt="W2H-logo" /> */}

        <h4 className='text-[17px] z-50 shadow-md text-white bg-opacity-40 rounded-[30px] relative p-1 px-3 rounded-m bg-black'>
          Alakikanju
        </h4>

        <div className='lg:bg-black lg:bg-opacity-40 rounded-[30px] lg:shadow-md p-3'>
          <li className='hidden lg:flex items-center gap-5 text-[15px] transition-all duration-500 ease-in-out'>
            <NavLink to='/'>
              <ol className='text-white hover:text-[#80c41c] cursor-pointer font-semibold transition-all duration-300 ease-in-out'>
                Home
              </ol>
            </NavLink>

            {/* <NavLink to='/'>
                        <ol className='text-white  hover:text-[#80c41c] cursor-pointer font-semibold transition-all duration-300 ease-in-out'>About</ol>
                    </NavLink> */}

            <Link offset={-100} smooth={true} duration={500} to='testimonies'>
              <ol className='text-white  hover:text-[#80c41c] cursor-pointer font-semibold transition-all duration-300 ease-in-out'>
                Testimonies
              </ol>
            </Link>

            {/* <Link offset={-100} smooth={true} duration={500} to="contact"> */}
            <NavLink to='/contact'>
              <ol className='text-white  hover:text-[#80c41c] cursor-pointer font-semibold transition-all duration-300 ease-in-out'>
                Contact
              </ol>
            </NavLink>

            {/* <NavLink to="/firststep">
                        <button className=' px-4 py-3 bg-[#80c41c] border-none hover:bg-[#3d82b3] text-white font-semibold animate-puls ml-[50px] rounded-[60px] transition-all duration-300 ease-in-out hover:px-5 hover:py-4'>
                            FIRST STEP!
                        </button>
                    </NavLink> */}
          </li>

          {dropdown ? (
            <div
              className='lg:hidden text-[22px] cursor-pointer  ml-[6px] shadow-md text-black relative z-50 p-1 rounded-md bg-white'
              onClick={showDropdown}
            >
              <MdClose />
            </div>
          ) : (
            <div
              className='lg:hidden text-[22px] cursor-pointer text-black shadow-md bg-white p-1 rounded-md ml-[6px] relative z-50'
              onClick={showDropdown}
            >
              <HiMenuAlt3 />
            </div>
          )}
        </div>
      </div>

      {/* {
            dropdown ? */}

      <div
        className={` ${
          dropdown ? "transform translate-x-0" : "transform -translate-y-full"
        } lg:hidden w-full h-[100vh] absolute bg-whit backdrop-blur-md top-0 transition-all ease-in-out z-30 duration-300`}
        onClick={showDropdown}
      >
        <div className='w-full h-[320px]  flex flex-col pl-[15px] sm:pl-[35px] pt-[25px] text-[13px] gap-4 text-[#1f2035] top-[70px] absolute '>
          {/* <li className="lg:flex items-center gap-5 text-[16px]"> */}
          <NavLink to='/'>
            <ol className='text-white hover:text-[#80c41c] cursor-pointer font-semibold transition-all duration-300 ease-in-out'>
              Home
            </ol>
          </NavLink>

          {/* <NavLink to='/'>
                            <ol className='text-white  hover:text-[#80c41c] cursor-pointer font-semibold transition-all duration-300 ease-in-out'>About</ol>
                        </NavLink> */}

          <Link offset={-100} smooth={true} duration={500} to='testimonies'>
            <ol className='text-white  hover:text-[#80c41c] cursor-pointer font-semibold transition-all duration-300 ease-in-out'>
              Testimonies
            </ol>
          </Link>

          {/* <Link offset={-100} smooth={true} duration={500} to="contact"> */}
          <NavLink to='/'>
            <ol className='text-white  hover:text-[#80c41c] cursor-pointer font-semibold transition-all duration-300 ease-in-out'>
              Contact
            </ol>
          </NavLink>

          {/* <NavLink to="/firststep">
                            <button className='w-[150px] bg-[#80c41c] border-none hover:bg-[#3d82b3] text-white font-semibold animate-pulse  rounded-[60px]'>
                                FIRST STEP!
                            </button>
                        </NavLink> */}
          {/* </li> */}
        </div>
      </div>

      {/* :
                null
        } */}
    </div>
  );
};

export default Header;

// #80c41c
// #3d82b3
