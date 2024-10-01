import React from "react";
import { PopupButton } from "react-calendly";


function SolveBtnSection() {
  return (
    <div className="solveBtn w-full bg-[#174153] lg:py-20 py-10 flex flex-col items-center lg:px-0 md:px-8 sm:px-6 px-4">
      <h2 className="lg:text-4xl text-[24px] leading-[1.4em] text-center font-bold text-white">
        Worried about how to grow your business Online?</h2>
      <h2 className="lg:text-4xl text-[24px] text-center font-bold text-white">
        Let's Solve your problem.
      </h2>
      <PopupButton
              className="lg:mt-10 mt-5 lg:text-[18px] text-[16px] leading-8 lg:px-14 px-8 py-2 border text-white font-bold bg-[#13a300]"
              url="https://calendly.com/auditseoexperts"
              rootElement={document.getElementById("root")}
              text="Book an Appointment Today!!"
            />
    
      

    </div>
  );
}

export default SolveBtnSection;
