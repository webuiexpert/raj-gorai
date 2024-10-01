import React from 'react'
import { PopupButton } from "react-calendly";


function MoreSalesSection() {
  return (
    <div className="solveBtn w-full bg-[#174153] text-white lg:py-20 py-10 flex flex-col items-center lg:px-0 md:px-8 sm:px-6 px-4">
    <h2 className="lg:text-[3.5rem] lg:leading-[3.8rem] leading-[1em] text-[44px] text-center font-bold">
    Want More Sales?
    </h2>
    <p className="lg:text-[18px] text-[16px] text-center">Get your free proposal on how I can help you with that!</p>
    <PopupButton
              className="lg:mt-10 mt-5 lg:text-[18px] text-[16px] leading-8 lg:px-14 px-8 py-2 border text-white font-bold bg-[#13a300]"
              url="https://calendly.com/auditseoexperts"
              rootElement={document.getElementById("root")}
              text="Book an Appointment Today!!"
            /> 
    <h3 className="italic font-bold lg:text-2xl text-[18px] leading-[1.8em] mt-2 text-center">or connect me <a href="tel:+91-9115144232">+91-9115144232</a></h3>
    

  </div>
  )
}

export default MoreSalesSection