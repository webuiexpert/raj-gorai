import React from 'react'

function ContactSection() {
  return (
  <div className="w-full min-h-screen bg-[#1D225D]">
        <div className="max-w-[1320px] mx-auto lg:py-20 py-10 lg:px-0 md:px-8 sm:px-6 px-4 flex flex-col justify-center items-center">
          <div className="lg:w-[80%] mx-auto">
            <h2 className="lg:text-3xl text-2xl   leading-[1.4em] font-medium text-white  text-center">Don't Wait Any Longer For Higher Rankings. Get Started today!</h2>
            <p className="lg:text-[18px] text-white text-center">Got a question? We’d love to hear from you. Send us a message and we’ll respond as soon as possible
            </p>
            <form className="flex flex-col gap-10 mt-10 items-center justify-between w-full bg-transparent" action="">
                <div className="inputBox1 flex lg:flex-row flex-col justify-between gap-10 w-full">
                  <input className="placeholder:text-slate-400 bg-transparent p-3 lg:w-[50%] border-b-[1px] outline-none	" type="text" placeholder='Your Name' />
                  <input className="bg-transparent p-3 lg:w-[50%] border-b-[1px] outline-none" type="email" name="email" placeholder="Your Email" id="" />
                </div>
                <div className="inputBox2 lg:mt-10 mt-5 flex lg:flex-row flex-col justify-between gap-10 w-full">
                  <input className="bg-transparent p-3 lg:w-[50%] border-b-[1px] h-[16px] outline-none" type="text" placeholder='Subject' />
                  <textarea className="bg-transparent p-3 lg:w-[50%] border-b-[1px] h-[150px] outline-none	" name="message" placeholder='Your Message' id=""></textarea>
                </div>
                <div className="subBtn relative mt-10">
                <button className="mssgBtn  bg-orange-500 py-3 px-8 text-white text-[20px]" type="submit">Send Message</button></div>
            </form>
            </div>
        </div>
    </div>
  )

}

export default ContactSection