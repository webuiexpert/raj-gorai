import React, { useState } from "react";
import logoImg from "../assets/logo1.png";
import { PopupButton } from "react-calendly";
import Headroom from "react-headroom";

function Navbar() {
  const [menuOpen, SetmenuOpen] = useState(false);

  return (
    <>
    <Headroom>
      <div className="nav bg-[#1e1e79] w-[100%] lg:px-0 px-4 py-5">
      <div className="nav bg-[#1e1e79] lg:max-w-[1320px] mx-auto flex items-end justify-between">
        <div className="logo">
          <img
            className="lg:w-[80%] w-[70%] sm:w-[70%] md:w-[80%]"
            src={logoImg}
            alt=""
          />
        </div>
        <div className="flex gap-7 items-center lg:w-auto w-[50%]">
          <ul className="hidden sm:hidden md:hidden lg:flex items-center gap-7 text-[20px] text-white font-semibold font-[Montserrat] ">
            <a href="#about">
              <li className="leading-[18px]">About</li>
            </a>
            <a href="#expertise">
              <li className="leading-[18px]">Expertise</li>
            </a>
            <a href="#reviews">
              <li className="leading-[18px]">Reviews</li>
            </a>
            <a href="#casestudies">
              <li className="leading-[18px]">Casestudies</li>
            </a>
            <a href="#contact">
              <li className="leading-[18px]">Contact</li>
            </a>
          </ul>
          <PopupButton
         className="lg:text-[20px] text-[14px] text-white w-full font-semibold lg:px-4 px-2 py-2 border bg-[#13a300]"
         url="https://calendly.com/auditseoexperts"
         rootElement={document.getElementById("root")}
         text="Book an Appointment"
       />
        </div>

     
      </div>
      </div>
      </Headroom>
    </>
  );
}

export default Navbar;
