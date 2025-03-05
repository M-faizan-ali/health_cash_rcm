import React from "react";
import "../App.css";

export default function WhatWeOfferFor() {
  return (
    <div
      className="relative bg-no-repeat bg-top-center bg-g-blue py-[100px] px-0"
    >
      <div className="sm:w-full md:w-[100%] lg:w-[1140px] m-auto">
        <div className="text-center mb-[15px]">
          <h4 className="font-sora uppercase inline-block px-[23px] py-[3px] rounded-[30px] bg-white text-btn-color text-center font-semibold text-[12px]">
            Our Services
          </h4>
        </div>

        <h2 className="font-sora font-medium text-[48px] leading-[60px] tracking-0 text-center mb-[50px] text-white">
          What we offer for you{" "}
        </h2>

        <div className="ml-5 mr-5 mx-auto grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 md:gap-5 2xl:gap-12 2xl:gap-[50px]">
          <div className="block  relative cursor-pointer">
            <div className="image-container">
              <a href="#" className="group block">
                <img
                  src="assets/virtual-assisance-img-2.jpg"
                  loading="lazy"
                  alt="Virtual Assistance"
                  className="md:rounded-[15px] transition-transform duration-300 ease-in-out md:group-hover:scale-110"
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
          
          <div className="block  relative cursor-pointer">
            <div className="image-container">
              <a href="#" className="group block">
                <img
                  src="assets/medical-billing-img-1.jpg"
                  loading="lazy"
                  alt="Medical Billing"
                  className="md:rounded-[15px] transition-transform duration-300 ease-in-out md:group-hover:scale-110"
                />
              </a>
              <a className="absolute bottom-[33px] right-[40px] border border-white text-white bg-transparent rounded-full w-[50px] h-[50px] flex items-center justify-center">
                <i className="fa-solid fa-arrow-right transform rotate-[320deg] text-sm text-center rounded-[50%] text-white"></i>
              </a>
            </div>
            <div className="absolute bottom-[40px] cursor-pointer left-[30px]">
              <a href="#">
                <h3 className="font-normal text-[24px] font-['Roboto', sans-serif] text-white">
                  Medical Billing
                </h3>
              </a>
            </div>
          </div>
          
          <div className="block  relative cursor-pointer">
            <div className="image-container h-full">
              <a href="#" className="group block h-[100%]">
                <img
                  src="assets/medical-coding-img-1.jpg"
                  alt="Virtual Assistance"
                  loading="lazy"
                  className="md:rounded-[15px] transition-transform duration-300 ease-in-out md:group-hover:scale-110 h-[100%]"
                />
              </a>
              <a className="absolute bottom-[33px] right-[40px] border border-white text-white bg-transparent rounded-full w-[50px] h-[50px] flex items-center justify-center">
                <i className="fa-solid fa-arrow-right transform rotate-[320deg] text-sm text-center rounded-[50%] text-white"></i>
              </a>
            </div>
            <div className="absolute bottom-[40px] cursor-pointer left-[30px]">
              <a href="#">
                <h3 className="font-normal text-[24px] font-['Roboto', sans-serif] text-white">
                  Medical Coding
                </h3>
              </a>
            </div>
          </div>
        </div>


        <div class="text-center mb-[15px] mt-[100px] relative">
          <a href="/contact" class="inline-block">
            <div class="font-sora inline-block py-3 pr-[70px] pl-[40px] hover:bg-primary-heading-color border border-gray cursor-pointer rounded-[30px] text-white text-center sm:text-[12px] md:text-[16px] relative shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
              Need more services? Get in touch with us!
              <span class="ml-2 underline">Contact Us</span>
            </div>
          </a>
        </div>
      </div>

    </div>
  );
}
