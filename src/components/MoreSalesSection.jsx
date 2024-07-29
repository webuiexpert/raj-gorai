import React from 'react'

function MoreSalesSection() {
  return (
    <div className="solveBtn w-full bg-[#174153] text-white lg:py-20 py-10 flex flex-col items-center lg:px-0 md:px-8 sm:px-6 px-4">
    <h2 className="lg:text-[3.5rem] text-[44px] text-center font-bold ">
    Want More Sales?
    </h2>
    <p className="lg:text-[18px] text-[14px]">Get your free proposal on how I can help you with that!</p>
    <button className="lg:mt-10 mt-5 lg:text-[18px] text-[16px] leading-8 lg:px-14 px-8 py-2 border text-white font-bold bg-[#13a300]">
      Book an Appointment Today!!
    </button>
    <h3 className="italic font-bold lg:text-2xl text-[18px] leading-[1.8em] mt-2">or connect me <a href="#">+91-9515455662</a></h3>
    

  </div>
  )
}

export default MoreSalesSection