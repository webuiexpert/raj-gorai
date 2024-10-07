import { a, div } from "framer-motion/client";
import SRimg0 from "../assets/Seo Results/Casestudies1.png";
import SRimg1 from "../assets/Seo Results/Casestudies2.png";
import SRimg2 from "../assets/Seo Results/Casestudies3.png";
import SRimg3 from "../assets/Seo Results/Casestudies4.png";
import gadcamImg from "../assets/Seo Results/gacampaings.jpg";

import React from "react";

const SRdata = [
  {
    title: "1 Stop Driving School",
    domain: "https://1stopdic.com/",
    sitepdf:
      "https://webuiexpert.com/wp-content/uploads/2024/10/SEO_Case_Study_1Stop-Driving-School-1.pdf",
    SRImg: SRimg0,
    list: "1 Stop Driving School, LLC was created to play a role in improving the safety and reducing accidents involving the Virginia motoring public. We offer only Virginia Department of Motor Vehicle (DMV) approved classroom and online driver improvement curriculum",
  },
  {
    title: "Paradise Galleries, Dolls & Smiles",
    domain: "https://www.paradisegalleries.com/",
    sitepdf:
      "https://webuiexpert.com/wp-content/uploads/2024/10/SEO_Case_Study_paradisegalleries.pdf",
    SRImg: SRimg1,
    list: "Since 1991, Paradise Galleries has been a leader in bringing the magic of award-winning dolls to collectors around the world. We are dedicated to offering you the most irresistible and innovative artistic treasures from the world's premiere artists and designers. ",
  },
  {
    title: "Appliance All Service",
    domain: "https://www.applianceallservice.ca/",
    sitepdf:
      "https://webuiexpert.com/wp-content/uploads/2024/10/SEO_Case_Study_applianceall.pdf",
    SRImg: SRimg2,
    list: "At Appliance All Service we strive to offer the best value in used appliances. Everything we sell is professionally repaired, thoroughly tested and meticulously cleaned. All this means that we offer like-new condition used appliances at around half the cost of new.",
  },
  {
    title: "Adora Toys",
    domain: "http://www.adora.com/",
    sitepdf:
      "https://webuiexpert.com/wp-content/uploads/2024/10/SEO_Case_Study_Adora-toys.pdf",
    SRImg: SRimg3,
    list: "At Adora, we know you want to be a confident parent who nurtures your child with healthy and creative play. To do that, you need toys that will spark their imagination and support their development. The problem is, in our digital world",
  },
];

function CaseStudies() {
  return (
    <div className="mainsection w-full  bg-[#fff]">
      <div className="max-w-[1320px] mx-auto min-h-screen flex items-center lg:py-20 py-10 gap-2 flex-col lg:px-0  md:px-8 sm:px-6 px-4">
        <h2 className="text-[42px] font-[800] text-[#000]">
          <span className="uppercase font-[900] ">Case Studies</span>
        </h2>
        <div className="resultsCols grid lg:grid-cols-2 grid-cols-1">
          {SRdata.map((id, index) => (
            <div
              key={index}
              className="p-3  drop-shadow-2xl rounded-lg lg:mt-10 mt-5 w-[100%]"
            >
              <div className="flex flex-col border p-1">
                <img className="w-full" src={id.SRImg} alt="Stars-Img" />
                <div className="textBox shadow-lg p-3 bg-white">
                  <h5 className="font-bold text-black text-[22px]">
                    {id.title}
                  </h5>
                  <p>{id.list}</p>
                  <div className="buttonDiv flex gap-4">
                    {" "}
                    <button className="py-1 px-3 my-4 bg-[#1E1E79] text-white text-[12px] rounded-full">
                      <a href={id.domain} target="_blank">
                        Visit Website
                      </a>
                    </button>
                    <button className="py-1 px-3 my-4 bg-[#fff] text-[#1E1E79] border border-[#1E1E79] font-medium text-[12px] rounded-full">
                      <a href={id.sitepdf} target="_blank">
                        Read Full Case Study...
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h2 className='text-[42px] my-12 font-[800] text-[#000]'>Google & Facebook Ads Case Studies</h2>
        <div className="addSection grid grid-cols-2 p-4 w-full gap-10">
        <div className="googleAdds bg-white">
            <img className="w-full" src={gadcamImg} alt="" />
            <h2 className="text-[24px] font-[800] my-4">GOOGLE ADS CAMPAIGNS</h2>
            <button className="py-2 px-3 bg-[#1E1E79] text-white text-[12px] rounded-full">
                      <a href="https://webuiexpert.com/wp-content/uploads/2024/10/Google-Ads-campigns-1.pdf" target="_blank">
                        View Case Studies...
                      </a>
                    </button>
        </div>
        <div className="fbAdds">
            <img src="{gadcamImg}" alt="" />
            <h2></h2>
        </div>

      </div>
      </div>
      
    </div>
  );
}

export default CaseStudies;
