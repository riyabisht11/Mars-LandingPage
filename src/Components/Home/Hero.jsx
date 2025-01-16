import React from "react";
import Mars from "../../assets/images/bg.png";

function Hero() {
  return (
    <div className="herosec max-w-screen-2xl mx-auto  relative px-4 sm:px-10 py-56 h-screen overflow-hidden  ">
      <img src={Mars} alt="" className="absolute inset-0 z-0 object-cover h-full w-full " />
      <div className="bg-black bg-opacity-55 absolute inset-0 w-full h-full"></div>
      <main>
      <div className="max-w-[1000px] text-white font-medium   text-2xl md:text-4xl lg:text-6xl text-center md:text-start relative">
        <h1>
          Making procurement simpler cheaper & transparent through end to end
          process automation
        </h1>
      </div>
      <div className="flex gap-8 py-14 md:py-28 flex-col md:flex-row relative">
        <button className="bg-[#4F80FF] font-pop text-white   rounded-md px-14 py-4">
          Get In Touch
        </button>
        <button className="font-pop border rounded-md px-14 py-4 bg-white text-[#4F80FF]">
          Request a Demo
        </button>
      </div>
      </main>
    </div>
  );
}

export default Hero;
