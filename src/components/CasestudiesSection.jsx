import React from "react";
import CaseStudiesImg from "../assets/casestudies-img.png"


function CasestudiesSection() {
  return (
    <div className="w-full h-auto">
      <div className="max-w-[1320px] mx-auto text-white lg:py-20 pt-10 flex flex-col items-start lg:px-0 md:px-8 sm:px-6 px-4">
      <h2 className="lg:text-[34px] text-[30px] leading-[1.2em] text-black text-start font-extrabold">Proven PPC/SEO Results and Casestudies</h2>
      <p className="lg:text-[24px] text-[18px] lg:w-[640px] text-black">I am always committed to our clients to provide top notch service along with great conversion.</p>

      <div className="row1 w-full flex lg:flex-row flex-col justify-between items-center gap-10 py-10">
        <div className="imgCol lg:w-[50%]">
            <img src={CaseStudiesImg} alt="" />
        </div>
        <div className="textCol lg:w-[50%] text-black">
            <h2 className="text-3xl font-bold">Challenge</h2>
            <p className="lg:text-[18px] text-[16px] w-[90%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quisquam ratione culpa neque accusantium nisi facere dolorem animi? Non, praesentium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, voluptates! </p>
            <h2 className="text-3xl font-bold mt-3">Solution</h2>
            <p className="lg:text-[18px] text-[16px] w-[90%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus architecto laborum recusandae ducimus corporis fugiat sint, consequatur explicabo rem perferendis Non, praesentium. Lorem ipsum dolor sit amet?</p>
            <button className="bg-[#14a800] px-10 rounded-full py-3 text-white font-semibold mt-5">See full case study</button>
        </div>
      </div>
      </div>
      
    </div>
  );
}

export default CasestudiesSection;
