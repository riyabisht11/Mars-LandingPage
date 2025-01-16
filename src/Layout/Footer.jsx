import React from "react";
import lin from "../assets/svg/lin.svg";
import face from "../assets/svg/facebook.svg";
import twitter from "../assets/svg/Vector.svg";
import msg from "../assets/svg/msg.svg";

function Footer() {
  return (
    <footer>
      <div className="foothead bg-black max-w-screen-2xl mx-auto px-4 sm:px-10 py-14 ">
        <main className="flex  flex-col md:flex-row justify-between items-center gap-5 md:gap-0">
          <div>
            <h1 className="font-pop text-5xl font-extrabold text-white">
              MARS
            </h1>
          </div>

          <div className="icon flex justify-center items-center gap-6 md:gap-10 ">
            <div className="rounded-full size-8 md:size-14 bg-[#6792FF] flex items-center justify-center">
              <img src={lin} alt="" />
            </div>

            
              <div className="rounded-full size-8 md:size-14 bg-white flex items-center justify-center">
                <img src={face} alt="" />
              </div>
            

            
              <div className="rounded-full size-8 md:size-14 bg-[#6792FF]  flex items-center justify-center">
                <img src={twitter} alt="" />
              </div>
          </div>
        </main>

        <div className="footcont flex flex-col md:flex-row items-center md:justify-between py-14 gap-8  md:gap-0 ">
          <div className="cont1">
            <ul className="text-white font-pop font-normal space-y-3 md:space-y-5 text-center md:text-start">
              <li className="font-bold">Product</li>
              <li className=" text-white text-opacity-60">Platform</li>
              <li className=" text-white text-opacity-60">Solutions</li>
              <li className=" text-white text-opacity-60">Pricing</li>
            </ul>
          </div>

          <div className="cont2">
            <ul className="text-white font-pop font-normal space-y-3 md:space-y-5 text-center md:text-start">
              <li className="font-bold">Stakeholders</li>
              <li className=" text-white text-opacity-60">Suppliers</li>
              <li className=" text-white text-opacity-60">Buyers</li>
              <li className="  text-white text-opacity-60">3PL Providers</li>
            </ul>
          </div>

          <div className="cont3">
            <ul className="text-white font-pop font-normal space-y-3 md:space-y-5 text-center md:text-start">
              <li className="font-bold">Corporate</li>
              <li className=" text-white text-opacity-60">About Us</li>
              <li className=" text-white text-opacity-60">Offices</li>
              <li className=" text-white text-opacity-60">Media</li>
              <li className=" text-white text-opacity-60">Careers</li>
              <li className=" text-white text-opacity-60">Legal</li>
            </ul>
          </div>

          <div className="text-white font-pop flex flex-col gap-4 items-center ">
            <h1 className="font-bold">Get In Touch</h1>
            <div className="flex gap-5">
              <img src={msg} alt="" />
              <h1 className=" text-white text-opacity-60 font-normal">
                contact@betamars.co
              </h1>
            </div>
          </div>
        </div>

        <div className="foot text-white text-center">
          <h1 className=" text-white text-opacity-60">
            © 2021 βM@RS. All rights reserved.
          </h1>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
