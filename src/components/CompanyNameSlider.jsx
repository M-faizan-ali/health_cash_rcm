import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; 
import { Autoplay } from "swiper/modules"; 
export default function CompanyNameSlider() {
  return (
    <div className="w-[90%] m-auto mt-[50px] mb-[100px]" id="facilities">
      <Swiper
        spaceBetween={20} 
        slidesPerView={1} 
        loop={true} 
        autoplay={{
         
          delay: 1000, 
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1, 
          },
          768: {
            slidesPerView: 4, 
              },
          1024: {
            slidesPerView: 6, 
             },
          1440: {
            slidesPerView: 6, 
            
          },
        }}
        modules={[Autoplay]} 
             >
       
        <SwiperSlide>
          <div>
            <img
              src="assets/asset 29.png"
              alt=""
              className="h-[120px]"
              loading="lazy"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src="assets/asset 30.png"
              alt=""
              className="h-[120px]"
              loading="lazy"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src="assets/asset 31.png"
              alt=""
              className="h-[120px]"
              loading="lazy"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src="assets/asset 32.png"
              alt=""
              className="h-[120px]"
              loading="lazy"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src="assets/asset 33.png"
              alt=""
              className="h-[120px]"
              loading="lazy"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src="assets/asset 34.png"
              alt=""
              className="h-[120px]"
              loading="lazy"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src="assets/asset 35.png"
              alt=""
              className="h-[120px]"
              loading="lazy"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src="assets/asset 36.png"
              alt=""
              className="h-[120px]"
              loading="lazy"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src="assets/asset 37.png"
              alt=""
              className="h-[120px]"
              loading="lazy"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src="assets/asset 38.png"
              alt=""
              className="h-[120px]"
              loading="lazy"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src="assets/asset 39.png"
              alt=""
              className="h-[120px]"
              loading="lazy"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src="assets/asset 40.png"
              alt=""
              className="h-[120px]"
              loading="lazy"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src="assets/asset 41.png"
              alt=""
              className="h-[120px]"
              loading="lazy"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src="assets/asset 42.png"
              alt=""
              className="h-[120px]"
              loading="lazy"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src="assets/asset 43.png"
              alt=""
              className="h-[120px]"
              loading="lazy"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src="assets/asset 44.png"
              alt=""
              className="h-[120px]"
              loading="lazy"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src="assets/asset 45.png"
              alt=""
              className="h-[120px]"
              loading="lazy"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src="assets/asset 46.png"
              alt=""
              className="h-[120px]"
              loading="lazy"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src="assets/asset 47.png"
              alt=""
              className="h-[120px]"
              loading="lazy"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src="assets/asset 48.png"
              alt=""
              className="h-[120px]"
              loading="lazy"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src="assets/asset 49.png"
              alt=""
              className="h-[120px]"
              loading="lazy"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src="assets/asset 50.png"
              alt=""
              className="h-[120px]"
              loading="lazy"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
