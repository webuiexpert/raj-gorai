import React from 'react'
import logoImg from "../assets/logo.png"

function Navbar() {



  return (
    <>
    <div className="lg:max-w-[1320px] mx-auto flex items-end justify-between py-10">
        <div className="logo">
            <img className="w-[100%]" src={logoImg} alt="" />
        </div>
        <ul className='hidden sm:hidden md:hidden lg:flex items-center gap-7 text-[20px] text-white font-semibold font-[Montserrat]'>
          <li>About</li>
          <li>Expertise</li>
          <li>Reviews</li>
          <li>Casestudies</li>
          <li>Contact</li>
          <button className="px-4 py-2 border bg-[#13a300]">Book an Appointment</button>
        </ul>
    </div>
    </>
  )
}

export default Navbar