import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Import Swiper styles
import { Autoplay } from "swiper/modules"; // Import Autoplay from the correct module

export default function CompanyNameSlider() {
  return (
    <div className="w-[90%] m-auto mt-[50px] mb-[100px]" id="facilities">
      <Swiper
        spaceBetween={20} // Space between slides
        slidesPerView={1} // Default 1 slide per view for small screens
        loop={true} // Infinite loop
        autoplay={{
          // Auto-slide to next set
          delay: 3000, // 3 seconds delay
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1, // Show 1 slide on small screens
          },
          768: {
            slidesPerView: 4, // Show 2 slides on medium screens
          },
          1024: {
            slidesPerView: 6, // Show 3 slides on large screens
          },
          1440: {
            slidesPerView: 6, // Show all slides on extra large screens
          },
        }}
        modules={[Autoplay]} // Ensure Autoplay module is added here
      >
        <SwiperSlide>
          <div>
            <img
              src="https://medipaybilling.com/wp-content/uploads/2024/09/Group-1000005586.png"
              alt=""
              className="h-[150px]"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src="https://medipaybilling.com/wp-content/uploads/2024/09/Group-1000005573.png"
              alt=""
              className="h-[120px]"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src="https://medipaybilling.com/wp-content/uploads/2024/09/Group-1000005574.png"
              alt=""
              className="h-[120px]"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src="https://medipaybilling.com/wp-content/uploads/2024/09/Group-1000005575.png"
              alt=""
              className="h-[120px]"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src="https://medipaybilling.com/wp-content/uploads/2024/09/Group-1000005576.png"
              alt=""
              className="h-[120px]"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src="https://medipaybilling.com/wp-content/uploads/2024/09/Group-1000005571.png"
              alt=""
              className="h-[120px]"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src="https://medipaybilling.com/wp-content/uploads/2024/09/Group-1000005577.png"
              alt=""
              className="h-[120px]"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src="https://medipaybilling.com/wp-content/uploads/2024/09/Group-1000005582.png"
              alt=""
              className="h-[120px]"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src="https://medipaybilling.com/wp-content/uploads/2024/09/Group-1000005581.png"
              alt=""
              className="h-[120px]"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src="https://medipaybilling.com/wp-content/uploads/2024/09/Group-1000005572-1.png"
              alt=""
              className="h-[120px]"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src="https://medipaybilling.com/wp-content/uploads/2024/09/Group-1000005570-1.png"
              alt=""
              className="h-[120px]"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src="https://medipaybilling.com/wp-content/uploads/2024/09/Group-1000005569.png"
              alt=""
              className="h-[120px]"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src="https://medipaybilling.com/wp-content/uploads/2024/09/Group-1000005568.png"
              alt=""
              className="h-[120px]"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src="https://medipaybilling.com/wp-content/uploads/2024/09/Group-1000005567.png"
              alt=""
              className="h-[120px]"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src="https://medipaybilling.com/wp-content/uploads/2024/09/Group-1000005643-1.png"
              alt=""
              className="h-[120px]"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src="https://medipaybilling.com/wp-content/uploads/2024/09/Group-1000005566.png"
              alt=""
              className="h-[120px]"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src="https://medipaybilling.com/wp-content/uploads/2024/09/Group-1000005583.png"
              alt=""
              className="h-[120px]"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src="https://medipaybilling.com/wp-content/uploads/2024/09/Group-1000005584.png"
              alt=""
              className="h-[120px]"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src="https://medipaybilling.com/wp-content/uploads/2024/09/Group-1000005585.png"
              alt=""
              className="h-[120px]"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src="https://medipaybilling.com/wp-content/uploads/2024/09/Group-1000005578.png"
              alt=""
              className="h-[120px]"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src="https://medipaybilling.com/wp-content/uploads/2024/09/Group-1000005579.png"
              alt=""
              className="h-[120px]"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src="https://medipaybilling.com/wp-content/uploads/2024/09/Group-1000005579.png"
              alt=""
              className="h-[120px]"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
