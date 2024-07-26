import React from "react";

function AboutSection() {
  return (
    <div className="w-full">
      <div className="max-w-[1320px] mx-auto flex justify-between items-start py-20 gap-10 lg:flex-row flex-col  md:px-8 sm:px-6 px-4">
        <div className="expText lg:w-1/2">
          <h2 className="text-[42px] md:leading-9 font-extrabold">
            My Experience as a
          </h2>
          <h2 className="text-[30px] md:leading-12 font-extrabold">
            Digital Marketing & Sales Strategist
          </h2>
          <p className="text-[18px] leading-[1.4em]">
            My primary objective as a Digital Marketing & Sales Strategist is to
            create vibrant and brilliant visual content in marketing the
            company’s brands and services. I have competent k.nowledge and
            dexterity in creating strategies and project roadmap using the
            latest technology in digital marketing. I am very adept in brand
            optimization and having good experience in B2B and B2C brand
            optimization by using latest digital marketing trends and digital
            brand optimization strategies.{" "}
          </p>
          <p className="text-[18px] leading-[1.4em] mt-5 pr-4">
            I am also very well versed in managing SEO and PPC campaigns, have a
            solid grasp of web analytics and have a strong understanding of
            online marketing concepts, procedures, strategies, project road map
            creation, and practices. I have more than 12 years of experience to
            manage multiple online projects that include SEO, social media,
            content delivery, email campaigns, user journey optimization, and
            web support
          </p>
          <button className="mt-5 text-[18px] leading-8 px-8 py-2 border text-white font-bold bg-[#13a300]">
            <a href="url.pdf" download>Download Resume</a>
          </button>
        </div>
        <div className="expYear lg:w-1/2 lg:pl-10 flex flex-col gap-5">
          <div className="2019 flex flex-col items-start">
            <div className="innerCol flex items-center gap-2">
              <h3 className="text-[26px] leading-[1em] font-bold">2019</h3>
              <div className="w-7 h-[3px] bg-black"></div>
              <h3 className="text-[26px] font-bold leading-[1em]">Present</h3>
            </div>
            <h4 className="text-[20px] font-bold">
              Freelance Digital Marketing & Sales Strategist.
            </h4>
            <p className="text-[16px] text-[#2d2d2d]">
              I worked as Manager of SEO. Leading a Team of 10+ SEO specialists
              & 20 active clients.
            </p>
          </div>
          <div className="13-20 flex flex-col items-start">
            <div className="innerCol flex items-center gap-2">
              <h3 className="text-[26px] leading-[1em] font-bold">2013</h3>
              <div className="w-7 h-[3px] bg-black"></div>
              <h3 className="text-[26px] font-bold leading-[1em]">2020</h3>
            </div>
            <h4 className="text-[20px] font-bold">
            Sr. Digital Marketing Executive at Softprodigy.
            </h4>
            <p className="text-[16px] text-[#2d2d2d]">
            I worked as Manager of SEO. Leading a Team of 10+ SEO specialists & 20 active clients.
            </p>
          </div>
          <div className="11-13 flex flex-col items-start">
            <div className="innerCol flex items-center gap-2">
              <h3 className="text-[26px] leading-[1em] font-bold">2011</h3>
              <div className="w-7 h-[3px] bg-black"></div>
              <h3 className="text-[26px] font-bold leading-[1em]">2013</h3>
            </div>
            <h4 className="text-[20px] font-bold">
            Digital Marketing Executive at Wwics.
            </h4>
            <p className="text-[16px] text-[#2d2d2d]">
              I worked as Manager of SEO. Leading a Team of 10+ SEO specialists
              & 20 active clients.
            </p>
          </div>
          <div className="08-11 flex flex-col items-start">
            <div className="innerCol flex items-center gap-2">
              <h3 className="text-[26px] leading-[1em] font-bold">2008</h3>
              <div className="w-7 h-[3px] bg-black"></div>
              <h3 className="text-[26px] font-bold leading-[1em]">2011</h3>
            </div>
            <h4 className="text-[20px] font-bold">
            SEO Executive at Net Magic, Chandigarh
            </h4>
            <p className="text-[16px] text-[#2d2d2d]">
              I worked as Manager of SEO. Leading a Team of 10+ SEO specialists
              & 20 active clients.
            </p>
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default AboutSection;
