import React from "react";
import PersonalImage from "../assets/Raj-gorai-img.png";
import { PopupButton } from "react-calendly";
import { motion } from "framer-motion"


function HeroSection() {
  return (
    <div className="max-w-[1320px] mx-auto lg:py-10 py-7 flex lg:flex-row md:flex-row  flex-col-reverse lg:gap-0 gap-5">
      <motion.div className="textSection text-white lg:text-[52px] text-[28px] font-extrabold lg:leading-[56px] lg:w-[70%] md:w-[60%] w-full flex flex-col items-start justify-center">
        <h2 className="">Hello,</h2>
        <h2 className="">I am Raj Gorai, </h2>
        <h2 className="lg:block hidden">a Digital Marketing & Sales</h2>
        <h2 className="lg:block hidden">Strategiest from India.</h2>
        <h2 className="lg:hidden block">a Digital Marketing & Sales Strategiest from India.</h2>
        <h5 className="lg:my-4 lg:w-[738px] lg:text-[24px] text-[18px] font-extrabold lg:leading-[1.2em]">
          Wants to boost your brand identity/sales or Rank higher on Google? No
          problem.
        </h5>
        <div className="btnBox lg:mt-0 mt-5 gap-10 lg:flex justify-between">
          <div className="letGoBtn w-fit relative">
            <a href="https://api.whatsapp.com/send/?phone=919115144232&text&type=phone_number&app_absent=0">
            <button className="text-[18px] leading-8 px-8 py-2 border bg-[#13a300]">
              Lets Connect
            </button></a>
            <svg
              className="absolute top-0 right-0 lg:-translate-y-1 -translate-y-2  translate-x-1"
              width="30px"
              height="30px"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16 31C23.732 31 30 24.732 30 17C30 9.26801 23.732 3 16 3C8.26801 3 2 9.26801 2 17C2 19.5109 2.661 21.8674 3.81847 23.905L2 31L9.31486 29.3038C11.3014 30.3854 13.5789 31 16 31ZM16 28.8462C22.5425 28.8462 27.8462 23.5425 27.8462 17C27.8462 10.4576 22.5425 5.15385 16 5.15385C9.45755 5.15385 4.15385 10.4576 4.15385 17C4.15385 19.5261 4.9445 21.8675 6.29184 23.7902L5.23077 27.7692L9.27993 26.7569C11.1894 28.0746 13.5046 28.8462 16 28.8462Z"
                fill="#BFC8D0"
              />
              <path
                d="M28 16C28 22.6274 22.6274 28 16 28C13.4722 28 11.1269 27.2184 9.19266 25.8837L5.09091 26.9091L6.16576 22.8784C4.80092 20.9307 4 18.5589 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16Z"
                fill="url(#paint0_linear_87_7264)"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 18.5109 2.661 20.8674 3.81847 22.905L2 30L9.31486 28.3038C11.3014 29.3854 13.5789 30 16 30ZM16 27.8462C22.5425 27.8462 27.8462 22.5425 27.8462 16C27.8462 9.45755 22.5425 4.15385 16 4.15385C9.45755 4.15385 4.15385 9.45755 4.15385 16C4.15385 18.5261 4.9445 20.8675 6.29184 22.7902L5.23077 26.7692L9.27993 25.7569C11.1894 27.0746 13.5046 27.8462 16 27.8462Z"
                fill="white"
              />
              <path
                d="M12.5 9.49989C12.1672 8.83131 11.6565 8.8905 11.1407 8.8905C10.2188 8.8905 8.78125 9.99478 8.78125 12.05C8.78125 13.7343 9.52345 15.578 12.0244 18.3361C14.438 20.9979 17.6094 22.3748 20.2422 22.3279C22.875 22.2811 23.4167 20.0154 23.4167 19.2503C23.4167 18.9112 23.2062 18.742 23.0613 18.696C22.1641 18.2654 20.5093 17.4631 20.1328 17.3124C19.7563 17.1617 19.5597 17.3656 19.4375 17.4765C19.0961 17.8018 18.4193 18.7608 18.1875 18.9765C17.9558 19.1922 17.6103 19.083 17.4665 19.0015C16.9374 18.7892 15.5029 18.1511 14.3595 17.0426C12.9453 15.6718 12.8623 15.2001 12.5959 14.7803C12.3828 14.4444 12.5392 14.2384 12.6172 14.1483C12.9219 13.7968 13.3426 13.254 13.5313 12.9843C13.7199 12.7145 13.5702 12.305 13.4803 12.05C13.0938 10.953 12.7663 10.0347 12.5 9.49989Z"
                fill="white"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_87_7264"
                  x1="26.5"
                  y1="7"
                  x2="4"
                  y2="28"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#5BD066" />
                  <stop offset="1" stop-color="#27B43E" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="lg:mt-0 mt-4 appontBtn">
          <PopupButton
              className="text-[18px] leading-8 px-4 py-2 border"
              url="https://calendly.com/auditseoexperts"
              rootElement={document.getElementById("root")}
              text="Book an Appointment"
            />
          </div>
        </div>
      </ motion.div>
      <motion.div initial={{x:100}} animate={{ x: 0 }}
  transition={{ ease: "easeOut", duration: 2 }} className="personalImg lg:w-[30%] md:w-[40%] w-full">
        <img className="w-full" src={PersonalImage} alt="" />
      </ motion.div>
    </div>
  );
}

export default HeroSection;
