import { a, div } from 'framer-motion/client';
import SRimg0 from "../assets/Seo Results/success-1.png"
import SRimg1 from "../assets/Seo Results/success-2.png"
import SRimg2 from "../assets/Seo Results/success-3.png"
import SRimg3 from "../assets/Seo Results/success-4.png"
import SRimg4 from "../assets/Seo Results/success-5.png"
import SRimg5 from "../assets/Seo Results/success-6.png"
import SRimg6 from "../assets/Seo Results/success-7.png"
import SRimg7 from "../assets/Seo Results/success-8.png"
import React from 'react'

const SRdata = [
    {
      title: "Keywords & there rankings – Results shown as per September 2024",
      domain: "https://1stopdic.com/",
      SRImg: SRimg0,
      "list": ['driver improvement class Hampton VA - #1', 'Virginia Audly Driver Education Online Course - #2', 'Virginia Teen & Adult Driver Education Online Course - #2', '8 hour driver manual course online - #2', ]
    },
    {
        title: "Keywords & there rankings – Results shown as per September 2024",
        domain: "https://www.paradisegalleries.com/",
        SRImg: SRimg1,
        "list": ['Affordable reborn dolls - #1', 'Awareness doll - #1', 'reborn dolls under $99 - #1', 'vintage paradise galleries dolls - #1']
      },
    {
        title: "Keywords & there rankings – Results shown as per September 2024",
        domain: "https://www.applianceallservice.ca/",
        SRImg: SRimg2,
        "list": ['In shop appliance repair - #1', 'used appliances repair & sales - #1', 'Awareness doll - #1', 'Used Appliances and Appliance Repair For Property Managers - #1']

      },
    {
        title: "Keywords & there rankings – Results shown as per September 2024",
        domain: "http://www.adora.com/",
        SRImg: SRimg3,
        "list": ['doll toys and accessories - #1', 'machine washable toys dolls - #1', 'amazing dolls & accessories - #1', 'color changing doll toys - #1']
      },
    {
        title: "Keywords & there rankings – Results shown as per September 2024",
        domain: "https://www.xcelwetsuits.com.au/",
        SRImg: SRimg4,
        "list": ['Xcel women wetsuit - #1', 'Xcel winter wetsuit - #1', 'Drylock wetsuit - #1', 'Drylock boots - #1']
      },
    {
        title: "Keywords & there rankings – Results shown as per September 2024",
        "domain": "https://zoozbikes.com.au/",
        SRImg: SRimg5,
        "list": ['zooz bike accessories - #1', 'max 250 electric bike - #1', 'e bike 250 - #1', 'zooz bikes australia - #1']
      },
    {
        title: "Keywords & there rankings – Results shown as per September 2024",
        domain: "https://naughty.pizza/",
        SRImg: SRimg6,
        "list": ['Pizzeria contemporanea bedford - #1', ' oven fresh pizza bedford - #1', 'Authentic Italian pizza restaurant bedford - #1', 'Naughty pizza dubai - #1']
      },
    {
        title: "Keywords & there rankings – Results shown as per September 2024",
        domain: "http://www.3dvisionservices.com/",
        SRImg: SRimg7,
        "list": ['Virtual tours for Restaurants - #1', 'Restaurants 3d virtual tours - #1', 'Restaurants 360 tours - #1', 'Restaurants virtual tours - #1']
      },
   
  ];

function SeoResults() {
  return (
    <div className="mainsection w-full  bg-[#fff]">
    <div className="max-w-[1320px] mx-auto min-h-screen flex items-center lg:py-20 py-10 gap-2 flex-col lg:px-0  md:px-8 sm:px-6 px-4">
        <h2 className='text-[42px] font-[800] text-[#000]'>Proven SEO <span className='uppercase font-[900] '>Results</span></h2>
        <div className="resultsCols grid lg:grid-cols-2 grid-cols-1">
        {
        SRdata.map((id, index) => (
              <div
                key={index}
                className="p-3  drop-shadow-2xl rounded-lg lg:mt-10 mt-5 w-[100%]"
              > 
               <div className='flex flex-col border p-1'>
                <img className='w-full' src={id.SRImg} alt="Stars-Img" />
                <div className="textBox shadow-lg p-3 bg-white">
          <h5 className="font-bold text-black text-[18px]">{id.title}</h5>
          <button className='py-1 px-3 my-4 bg-[#1E1E79] text-white text-[12px] rounded-full'><a href={id.domain} target="_blank">Click Domian link</a></button> 
          <ul>
            
                {
                    id.list.map((item, index) => (
                        <li className='list-disc list-inside' key={index}>{item}</li>
                        ))

                }
            </ul>
            </div>
              </div>
              </div>
            ))}                                                                                                
            </div>
    </div>
    </div>
  )
}

export default SeoResults