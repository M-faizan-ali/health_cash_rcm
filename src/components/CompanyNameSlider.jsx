import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import { Autoplay } from 'swiper/modules'; // Import Autoplay from the correct module

export default function CompanyNameSlider() {
  return (
    <div className='w-[1140px] m-auto mt-[50px] mb-[100px]'>
      <Swiper
        spaceBetween={20}   // Space between slides
        slidesPerView={3}   // Show 3 slides per row
        loop={true}         // Infinite loop
        autoplay={{         // Auto-slide to next set
          delay: 3000,      // 3 seconds delay
          disableOnInteraction: false,
        }}
        breakpoints={{      // Responsive layout
          768: {
            slidesPerView: 1,  // Show 1 slide on small screens
          },
          1024: {
            slidesPerView: 3,  // Show 3 slides on larger screens
          },
        }}
        modules={[Autoplay]}  // Ensure Autoplay module is added here
      >
        <SwiperSlide>
          <div>
              <img src="https://medipaybilling.com/wp-content/uploads/2024/09/Group-1000005586.png" alt="" className='w-[431px] height-[201px]' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
              <img src="https://medipaybilling.com/wp-content/uploads/2024/09/Group-1000005586.png" alt="" className='w-[431px] height-[201px]' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
              <img src="https://medipaybilling.com/wp-content/uploads/2024/09/Group-1000005586.png" alt="" className='w-[431px] height-[201px]' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
              <img src="https://medipaybilling.com/wp-content/uploads/2024/09/Group-1000005586.png" alt="" className='w-[431px] height-[201px]' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
              <img src="https://medipaybilling.com/wp-content/uploads/2024/09/Group-1000005586.png" alt="" className='w-[431px] height-[201px]' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
              <img src="https://medipaybilling.com/wp-content/uploads/2024/09/Group-1000005586.png" alt="" className='w-[431px] height-[201px]' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
              <img src="https://medipaybilling.com/wp-content/uploads/2024/09/Group-1000005586.png" alt="" className='w-[431px] height-[201px]' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
              <img src="https://medipaybilling.com/wp-content/uploads/2024/09/Group-1000005586.png" alt="" className='w-[431px] height-[201px]' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src="https://medipaybilling.com/wp-content/uploads/2024/09/Group-1000005586.png" alt="" className='w-[431px] height-[201px]' />
          </div>
          </SwiperSlide>
      </Swiper>
    </div>
  );
}
