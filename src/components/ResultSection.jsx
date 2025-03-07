import React from 'react'
import { PopupButton } from "react-calendly";


function ResultSection() {
  return (
    <div className="solveBtn w-full bg-[#174153] text-white lg:py-20 py-10 flex flex-col items-center lg:px-0 md:px-8 sm:px-6 px-4">
    <h2 className="lg:text-[3.5rem] lg:leading-[4.75rem] leading-[3rem] text-[44px] text-center font-bold ">
    Want Similar Results?
    </h2>
    <p className="lg:text-[22px] text-[16px] sm:text-[20px] text-center lg:mt-0 mt-2">Supercharge Your SEO Campaign Today!</p>
    <p className="lg:text-[22px] text-[16px] sm:text-[20px] text-center">Get Free Consultation</p>
    
    <PopupButton
              className="lg:mt-10 mt-5 lg:text-[18px] text-[16px] leading-8 lg:px-14 px-8 py-2 border text-white font-bold bg-[#13a300]"
              url="https://calendly.com/auditseoexperts"
              rootElement={document.getElementById("root")}
              text="Book an Appointment Today!!"
            /> 
    <h3 className="italic font-bold lg:text-2xl text-[18px] leading-[1.8em] mt-2">or connect me <a href="tel:+91-9115144232">+91-9115144232</a></h3>
    

  </div>
  )
}

export default ResultSection