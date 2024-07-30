import React, { useState } from "react";
import logoImg from "../assets/logo.png";
import { PopupButton } from "react-calendly";

function Navbar() {
  const [menuOpen, SetmenuOpen] = useState(false);

  return (
    <>
      <div className="nav lg:max-w-[1320px] mx-auto flex items-end justify-between lg:pt-6 lg:pb-7 py-5">
        <div className="logo">
          <img
            className="lg:w-[90%] w-[50%] sm:w-[70%] md:w-[80%]"
            src={logoImg}
            alt=""
          />
        </div>
        <div className="flex gap-7 items-end lg:w-auto w-[50%]">
          <ul className="hidden sm:hidden md:hidden lg:flex items-center gap-7  text-[20px] text-white font-semibold font-[Montserrat] ">
            <a href="#about">
              <li>About</li>
            </a>
            <a href="#expertise">
              <li>Expertise</li>
            </a>
            <a href="#reviews">
              <li>Reviews</li>
            </a>
            <a href="#casestudies">
              <li>Casestudies</li>
            </a>
            <a href="#contact">
              <li>Contact</li>
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
    </>
  );
}

export default Navbar;
