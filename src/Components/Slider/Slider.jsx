import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./slider.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slide h-[40vh] md:h-[80vh] slide1"><div className="overlay-box flex flex-col items-center justify-center">
            <h2 className="text-2xl md:text-5xl mb-4 md:mb-10 font-bold">Family-Friendly Suburban Home</h2>
            <Link to={`/EstateDetails/${7}`} className="btn rounded-none btn-md border-0 bg-[#0077be] text-white hover:text-black">Explore Now</Link>
            </div></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide h-[40vh] md:h-[80vh] slide2"><div className="overlay-box flex flex-col items-center justify-center">
            <h2 className="text-2xl md:text-5xl mb-4 md:mb-10 font-bold">Senior Living Community</h2>
            <Link to={`/EstateDetails/${5}`} className="btn rounded-none btn-md border-0 bg-[#0077be] text-white hover:text-black">Explore Now</Link>
            </div></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide h-[40vh] md:h-[80vh] slide3"><div className="overlay-box flex flex-col items-center justify-center">
            <h2 className="text-2xl md:text-5xl mb-4 md:mb-10 font-bold">Cozy Townhouse Retreat</h2>
            <Link to={`/EstateDetails/${3}`} className="btn rounded-none btn-md border-0 bg-[#0077be] text-white hover:text-black">Explore Now</Link>
            </div></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide h-[40vh] md:h-[80vh] slide4"><div className="overlay-box flex flex-col items-center justify-center">
            <h2 className="text-2xl md:text-5xl mb-4 md:mb-10 font-bold">Student Housing Complex</h2>
            <Link to={`/EstateDetails/${4}`} className="btn rounded-none btn-md border-0 bg-[#0077be] text-white hover:text-black">Explore Now</Link>
            </div></div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}