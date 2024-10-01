import React from 'react'


function ExpertiesSection() {
  return (
    <div id="expertise" className="h-auto w-full bg-[#1e3579]">
        <div className="max-w-[1320px] mx-auto flex justify-between items-start lg:py-20 py-10 gap-10 flex-col  lg:px-0 md:px-8 sm:px-6 px-4">
            <h2 className="lg:text-[42px] text-[32px] font-extrabold text-white leading-10">SEO Experties I have</h2>
            <div className="colBox lg:mt-5 w-full lg:grid grid-cols-3 gap-x-7 text-white">
              <div className="box">
                <ul>
                    <h3 className="font-bold text-[24px] leading-[1em]">Global SEO</h3>
                    <li>I help brands reach international audiences by optimizing websites for global search engines, ensuring effective keyword targeting and content localization.</li>
                </ul>
              </div>
              <div className="box lg:mt-0 mt-5">
                <ul>
                    <h3 className="font-bold text-[24px] leading-[1em]">Local SEO</h3>
                    <li>I specialize in improving search visibility for local businesses by optimizing for location-based queries and ensuring businesses rank high in local search results.</li>
                </ul>
              </div>
              <div className="box lg:mt-0 mt-5">
                <ul>
                    <h3 className="font-bold text-[24px] leading-[1em]">Ecommerce SEO</h3>
                    <li>I enhance the visibility of ecommerce platforms by optimizing product pages, categories, and user experience, driving organic traffic and increasing conversions.</li>
                </ul>
              </div>
            </div>
            <div className="colBox w-full lg:grid grid-cols-3 gap-x-7 text-white">
              <div className="box lg:mt-0">
                <ul>
                    <h3 className="font-bold text-[24px] leading-[1em]">Content Strategy</h3>
                    <li>I develop content plans that align with SEO goals, focusing on creating engaging, keyword-optimized content that drives organic traffic and enhances user engagement.</li>
                </ul>
              </div>
              <div className="box lg:mt-0 mt-5">
                <ul>
                    <h3 className="font-bold text-[24px] leading-[1em]">Technical SEO</h3>
                    <li>I ensure websites are search engine-friendly by addressing technical aspects like site speed, mobile optimization, structured data, and indexing.</li>
                </ul>
              </div>
              <div className="box lg:mt-0 mt-5">
                <ul>
                    <h3 className="font-bold text-[24px] leading-[1em]">Link Building & PR</h3>
                    <li>I build high-quality backlinks through strategic partnerships and digital PR campaigns, boosting domain authority and improving search rankings.</li>
                </ul>
              </div>
            </div>
            <div className="colBox w-full lg:grid grid-cols-3 gap-7  text-white">
              <div className="box lg:mt-0">
                <ul>
                    <h3 className="font-bold text-[24px] leading-[1em]">GMB Listing</h3>
                    <li>I optimize Google My Business profiles to ensure businesses rank well in local searches and appear in Google Maps, increasing visibility for nearby customers.</li>
                </ul>
              </div>
              <div className="box lg:mt-0 mt-5">
                <ul>
                    <h3 className="font-bold text-[24px] leading-[1em]">Citation building</h3>
                    <li>I enhance local search presence by ensuring consistent and accurate listings across various online directories, helping to improve local SEO performance.</li>
                </ul>
              </div>
              <div className="box lg:mt-0 mt-5">
                <ul>
                    <h3 className="font-bold text-[24px] leading-[1em]">Amazon SEO</h3>
                    <li>I optimize product listings on Amazon, improving keyword placement, product descriptions, and reviews to boost rankings and increase sales on the platform.</li>
                </ul>
              </div>
            </div>
           
            <h2 className="lg:text-[42px] lg:mt-10 mt-5 text-[32px] font-extrabold text-white leading-10">Paid Marketing/PPC Experties I have</h2>
            <div className="colBox lg:mt-5 w-full lg:grid grid-cols-3 gap-x-7 text-white">
              <div className="box lg:mt-0">
                <ul>
                    <h3 className="font-bold text-[24px] leading-[1em]">Google Ads</h3>
                    <li>I create and manage high-performing Google Ads campaigns, optimizing keywords, ad copy, and targeting to drive quality traffic and maximize ROI across search and display networks.</li>
                </ul>
              </div>
              <div className="box lg:mt-0 mt-5">
                <ul>
                    <h3 className="font-bold text-[24px] leading-[1em]">Facebook Ads</h3>
                    <li>I design targeted Facebook Ads campaigns that resonate with specific audiences, leveraging precise demographic and interest-based targeting to boost brand awareness, engagement, and conversions.</li>
                </ul>
              </div>
              <div className="box lg:mt-0 mt-5">
                <ul>
                    <h3 className="font-bold text-[24px] leading-[1em]">Amazon PPC</h3>
                    <li>I optimize Amazon PPC campaigns to increase product visibility, drive sales, and improve ad spend efficiency through strategic keyword bidding and performance analysis.</li>
                </ul>
              </div>
            </div>

        </div>
    </div>
  )
}

export default ExpertiesSection