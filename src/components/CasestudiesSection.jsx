import React from "react";
import CaseStudiesImg from "../assets/casestudies-img.png";
import CaseStudiesImg1 from "../assets/casestudies-img1.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function CasestudiesSection() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div id="casestudies" className="w-full h-auto">
      <div className="max-w-[1320px] mx-auto text-white lg:py-20 py-10 flex flex-col items-start lg:px-0 md:px-8 sm:px-6 px-4">
        <h2 className="lg:text-[34px] text-[30px] leading-[1.2em] text-black text-start font-extrabold">
          Proven PPC/SEO Results and Casestudies
        </h2>
        <p className="lg:text-[24px] text-[16px] lg:leading-[1.4em] leading-6 lg:w-[640px] text-black">
          I am always committed to our clients to provide top notch service
          along with great conversion.
        </p>
        <div className="CaseStudieSlider-container w-full mt-10">
          <Slider {...settings}>
            <div className="slideCol w-full flex lg:flex-row flex-col items-center justify-between border-black gap-10">
              <div className="imgCol lg:w-[50%]">
                <img src={CaseStudiesImg} alt="" />
              </div>
              <div className="textCol lg:w-[50%] text-black">
                <h2 className="lg:text-3xl text-2xl font-bold">Challenge</h2>
                <p className="lg:text-[18px] text-[16px] leading-[1.4em]">
                  Being in a highly competitive industry – the sports products,
                  the client was not able to get the desired number of clicks
                  for the targeted keywords in both organic as well as paid
                  search results.
                </p>
                <h2 className="lg:text-3xl text-2xl font-bold mt-3">
                  Solution
                </h2>
                <p className="lg:text-[18px] text-[16px] leading-[1.4em]">
                  The first thing we did was monitoring all the activities on
                  the client’s website, where the users were extracting or
                  bouncing back through an automated tool.
                </p>
                <a href="https://www.thecsshouse.com/casestudies/google/martialartsmart-shoping.pdf" target="_blank"><button className="bg-[#14a800] px-10 rounded-full py-3 lg:mb-0 mb-10 text-white font-semibold mt-5">
                  See full case study
                </button></a>
              </div>
            </div>
            <div className="slideCol w-full flex lg:flex-row flex-col items-center justify-between border-black gap-10">
              <div className="imgCol lg:w-[50%]">
                <img src={CaseStudiesImg1} alt="" />
              </div>
              <div className="textCol lg:w-[50%] text-black">
                <h2 className="text-3xl font-bold">Challenge</h2>
                <p className="lg:text-[18px] text-[16px]">
                  Client wanted to increase sales and revenues. The client had
                  used few companies and were spending around $2000 per month
                  and were getting very little conversion. Luxury Candle Brands
                  being in a quite competitive industry had a big challenge of
                  ramping up their sales and revenues.
                </p>
                <h2 className="text-3xl font-bold mt-3">Solution</h2>
                <p className="lg:text-[18px] text-[16px]">
                We recommended to run their SEO, PPC campaigns. Luxury candle brands were not running and Google Feeds/PLA campaigns.
                </p>
                <a href="https://www.thecsshouse.com/casestudies/google/Luxury-Candle-Brands-site-shoping.pdf" target="_black"><button className="bg-[#14a800] px-10 rounded-full py-3 lg:mb-0 mb-10 text-white font-semibold mt-5">
                  See full case study
                </button></a>
              </div>
            </div>
            
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default CasestudiesSection;
