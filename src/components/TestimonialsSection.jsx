import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ClientImg1 from "../assets/testimonial-img.png";
import Stars from "../assets/stars.png";

const data = [
  {
    title: "John Doe",
    subtitle: "Lorem ipsum dolor",
    ClientImg: ClientImg1,
    reviews:
      "Since using MyKids.Club, I have real time information on the bookings in my class, I know that the information provided is complete as without it a booking cannot be made. Its easier for me to manage my accounts as all the payments are automated.",
    Starsimg: Stars,
  },
  {
    title: "John Doe1",
    subtitle: "Lorem ipsum dolor",
    ClientImg: ClientImg1,
    reviews:
      "Since using MyKids.Club, I have real time information on the bookings in my class, I know that the information provided is complete as without it a booking cannot be made. Its easier for me to manage my accounts as all the payments are automated.",
    Starsimg: Stars,
  },
  {
    title: "John Doe2",
    subtitle: "Lorem ipsum dolor",
    ClientImg: ClientImg1,
    reviews:
      "MyKid.Club has helped me optimize my classes! The extracurricular marketplace has helped me attract new clients and better understand my competition. I’ve adapted some of my class contents and optimized my class timetable!",
    Starsimg: Stars,
  },
  {
    title: "John Doe3",
    subtitle: "Lorem ipsum dolor",
    ClientImg: ClientImg1,
    reviews:
      "Since using MyKids.Club, I have real time information on the bookings in my class, I know that the information provided is complete as without it a booking cannot be made. Its easier for me to manage my accounts as all the payments are automated.",
    Starsimg: Stars,
  },
];

function TestimonialsSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="w-full h-auto">
      <div className="max-w-[1320px] mx-auto text-white lg:pb-20 lg:py-0 py-10 flex flex-col items-start lg:px-0 md:px-8 sm:px-6 px-4">
        
        <div className="testCols grid grid-cols-1">
        <h2 className="lg:text-5xl text-[42px] leading-[1.2em] text-black text-start font-extrabold ">Testimonials</h2>
        <h3 className="lg:text-5xl text-[24px] text-black text-start font-medium ">Trusted by over <span className="font-extrabold italic text-[#023c4e]">1000+</span> business owners</h3>
          <Slider {...settings}>
            {data.map((d, index) => (
              <div
                key={index}
                className="shadow-sm border drop-shadow-2xl p-7 rounded-lg h-[420px] mt-10"
              >
                <img src={d.Starsimg} alt="Stars-Img" />
                <p className="text-gray-600 my-10">{d.reviews}</p>
                <div className="clientdetsBox text-black flex items-start gap-5">
                  <img src={d.ClientImg} alt="" className="size-12" />
                  <div className="clientName">
                    <h5>{d.title}</h5>
                    <p>{d.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default TestimonialsSection;
