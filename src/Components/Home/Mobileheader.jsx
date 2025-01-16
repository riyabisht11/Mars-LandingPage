import React, { useState } from "react";
import cross from '../../assets/svg/cross.svg'

function Mobileheader({functionality,open}) {
    const [dropdown, setdropdown] = useState(false);
      const Handleclick = () => { 
        setdropdown(!dropdown);
    };

    
  return (
    <div className={`main div mx-auto h-svh w-full px-4 sm:px-10 py-10 bg-black flex flex-col justify-between fixed top-0 left-0 z-[999] transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}>
      <div className="comp1 flex gap-10 justify-between">
        <div><h1 className="font-pop text-xl sm:text-2xl md:text-5xl font-extrabold text-white ">
          MARS
        </h1></div>

        <div onClick={functionality} className="cross">
            <img src={cross} alt="" />
        </div>
        
      </div>

      <div className=" comp2 flex flex-col items-center font-pop text-lg font-7xl text-white gap-12 ">
        <h1 onClick={functionality}>Platform</h1>
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
            <button className="bg-[#4F80FF] font-pop px-13 py-4">Buyers</button>
          </div>
        </div>

        <h1 onClick={functionality}>Pricing</h1>
      </div>

      <div className=" comp3 login flex justify-center font-pop text-white font-normal text-BASE gap-10 ">
        <button className="border rounded-md px-5 py-3">Register</button>
        <button className="border rounded-md px-5 py-3 bg-[#4F80FF]">
          Login
        </button>

      </div>
    </div>
  );
}

export default Mobileheader;
