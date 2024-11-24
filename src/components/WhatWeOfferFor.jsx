import React from "react";
import "../App.css";

export default function WhatWeOfferFor() {
  return (
    <div
      className="relative bg-no-repeat bg-top-center bg-[#2e3482] py-[100px] px-0"
      style={{ backgroundImage:"url('https://medipaybilling.com/wp-content/uploads/2024/01/service-bg-pattern.png')",      }}
    >
      <div className="text-center mb-[15px]">
        <h4 className="font-sora uppercase inline-block px-[23px] py-[3px] rounded-[30px] bg-white text-btn-color text-center font-semibold text-[12px]">
          Our Services
        </h4>
      </div>

      <h2 className="font-sora font-medium text-[48px] leading-[60px] tracking-0 text-center mb-[50px] text-white">
        What we offer for you{" "}
      </h2>

      <div className="max-w-[1140px] mx-auto grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="block lg:mr-[30px] relative cursor-pointer">
          <div className="image-container">
            <a href="#" className="group block">
              <img
                src="https://medipaybilling.com/wp-content/uploads/2024/09/Virtual-Assistance.jpg"
                alt="Virtual Assistance"
                className="md:rounded-[15px] transition-transform duration-300 ease-in-out transform md:group-hover:scale-110"
              />
            </a>
            <a className="absolute bottom-[33px] right-[40px] border border-white text-white bg-transparent rounded-full w-[50px] h-[50px] flex items-center justify-center">
              <i className="fa-solid fa-arrow-right transform rotate-[320deg] text-sm text-center rounded-[50%] text-white"></i>
            </a>
          </div>
          <div className="absolute bottom-[40px] cursor-pointer left-[30px]">
            <a href="#">
              <h3 className="font-normal text-[24px] font-['Roboto', sans-serif] text-white">
                Virtual Assistance
              </h3>
            </a>
          </div>
        </div>
        
        {/* Duplicate this block as needed */}
        
        <div className="block lg:mr-[30px] relative cursor-pointer">
          <div className="image-container">
            <a href="#" className="group block">
              <img
                src="https://medipaybilling.com/wp-content/uploads/2024/09/Virtual-Assistance.jpg"
                alt="Virtual Assistance"
                className="md:rounded-[15px] transition-transform duration-300 ease-in-out transform md:group-hover:scale-110"
              />
            </a>
            <a className="absolute bottom-[33px] right-[40px] border border-white text-white bg-transparent rounded-full w-[50px] h-[50px] flex items-center justify-center">
              <i className="fa-solid fa-arrow-right transform rotate-[320deg] text-sm text-center rounded-[50%] text-white"></i>
            </a>
          </div>
          <div className="absolute bottom-[40px] cursor-pointer left-[30px]">
            <a href="#">
              <h3 className="font-normal text-[24px] font-['Roboto', sans-serif] text-white">
                Virtual Assistance
              </h3>
            </a>
          </div>
        </div>
        
        <div className="block lg:mr-[30px] relative cursor-pointer">
          <div className="image-container">
            <a href="#" className="group block">
              <img
                src="https://medipaybilling.com/wp-content/uploads/2024/09/Virtual-Assistance.jpg"
                alt="Virtual Assistance"
                className="md:rounded-[15px] transition-transform duration-300 ease-in-out transform md:group-hover:scale-110"
              />
            </a>
            <a className="absolute bottom-[33px] right-[40px] border border-white text-white bg-transparent rounded-full w-[50px] h-[50px] flex items-center justify-center">
              <i className="fa-solid fa-arrow-right transform rotate-[320deg] text-sm text-center rounded-[50%] text-white"></i>
            </a>
          </div>
          <div className="absolute bottom-[40px] cursor-pointer left-[30px]">
            <a href="#">
              <h3 className="font-normal text-[24px] font-['Roboto', sans-serif] text-white">
                Virtual Assistance
              </h3>
            </a>
          </div>
        </div>
      </div>


      <div className="text-center mb-[15px] mt-[100px] relative">
        <div className="font-sora inline-block py-3 pr-[70px] pl-[40px] border  border-[rgba(255,255,255,0.3)] rounded-[30px]   text-white text-center sm:text-[12px] md:text-[16px] relative">
          Need more Services based on your demand?
          <span>Contact Us</span>
          <a className="absolute bottom-0 right-0 border border-white  bg-white rounded-full w-[50px] h-[50px] flex items-center justify-center cursor-pointer">
            <i className="fa-solid fa-arrow-right transform rotate-[320deg] text-sm text-center rounded-[50%] text-g-blue"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
