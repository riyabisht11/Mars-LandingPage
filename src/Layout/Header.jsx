import React, { useState } from "react";
import ham from "../assets/svg/menu.svg";
import Mobileheader from "../Components/Home/Mobileheader";

function Header() {
  const [dropdown, setdropdown] = useState(false);
  const Handleclick = () => {
    setdropdown(!dropdown);
  };

  const [isMobileHeaderOpen, setIsMobileHeaderOpen] = useState(false);
  const toggleMobileHeader = () => {
    setIsMobileHeaderOpen(!isMobileHeaderOpen);
  };

  return (
    <>
      <Mobileheader
        functionality={toggleMobileHeader}
        open={isMobileHeaderOpen}
      />
      <nav className="max-w-screen-2xl mx-auto px-4 sm:px-10 py-10 bg-transparent  flex justify-between items-center absolute left-1/2 -translate-x-1/2 w-full z-10">
        {/* Mobileheader */}

        <div className="logo relative ">
          <h1 className="font-pop text-xl sm:text-2xl md:text-5xl font-extrabold text-white ">
            MARS
          </h1>
        </div>

        <div className="hidden lg:flex font-pop text-lg font-medium text-white gap-12 ">
          <h1>Platform</h1>
          <div onClick={Handleclick} className="relative">
            <h1>Solutions</h1>
            <div
              className={`absolute top-10 left-1/2 -translate-x-1/2  gap-2 ${
                dropdown ? "flex flex-col" : "hidden"
              }`}
            >
              <button className="bg-white text-black font-pop py-3 px-10">
                Suppliers
              </button>
              <button className="bg-[#4F80FF] font-pop px-13 py-4">
                Buyers
              </button>
            </div>
          </div>

          <h1>Pricing</h1>
        </div>
        {/* <div className='flex font-pop text-lg font-normal text-white'>
            
        </div> */}
        <div onClick={toggleMobileHeader} className="block lg:hidden z-20">
          <img src={ham} alt="" />
        </div>

        <div className="login flex font-pop text-white font-normal text-lg gap-12 hidden lg:block">
          <button className="border rounded-md px-8 py-4">Register</button>
          <button className="border rounded-md px-8 py-4 bg-[#4F80FF]">
            Login
          </button>
        </div>
      </nav>
    </>
  );
}

export default Header;
