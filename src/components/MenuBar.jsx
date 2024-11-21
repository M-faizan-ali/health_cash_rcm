import MainText from "./MainText";
import React from "react";
export default function MenuBar() {
  const textStyle =
    "font-[600] text-[14px] font-sora tracking-[0.3px] uppercase not-italic";
  return (
    <div
      className="h-[650px] w-[95%] m-auto rounded-[15px]"
      style={{
        backgroundImage: `url('/assets/header-image-1.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex justify-between items-center text-white px-6 py-4">
        {/* First Div: Logo */}
        <div className="logo">
          <img src="/assets/asset 0.gif" alt="Logo" className="h-[100px]" />
        </div>

        {/* Second Div: Navigation Links */}
        <div className="nav-links w-[65%]">
          <ul className="flex space-x-8">
            <li>
              <a href="#" className={textStyle}>
                Home
              </a>
            </li>
            <li>
              <a href="#" className={textStyle}>
                Services
              </a>
            </li>
            <li>
              <a href="#" className={textStyle}>
                Specialities
              </a>
            </li>
            <li>
              <a href="#" className={textStyle}>
                About Us
              </a>
            </li>
            <li>
              <a href="#" className={textStyle}>
                Blog
              </a>
            </li>
            <li>
              <a href="#" className={textStyle}>
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Third Div: Button */}
        <div className="appointment">
          <button className="flex items-center px-8 py-4 bg-white text-g-blue rounded-full font-bold uppercase text-xs leading-6 tracking-wider transition-all hover:bg-g-blue hover:text-white">
            Make an Appointment
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="pl-9 mt-[80px]">
        <button className="font-roboto text-[11px] font-normal text-white uppercase no-underline tracking-[1.10877px] leading-[22px] text-left whitespace-nowrap px-[17px] py-[2px] border border-white rounded-full align-top transform origin-center translate-x-0 w-auto h-auto block visible bg-transparent opacity-100 pointer-events-auto mb-[30px]">
          Medipay billing
        </button>
        <h1 className="font-sora text-[83px] font-normal text-white tracking-[0px] leading-[92px] text-left whitespace-nowrap p-0 align-top transform origin-center translate-x-0 translate-y-[-7px] w-auto h-auto block visible bg-transparent opacity-100 pointer-events-auto">
          Focus on Comprehensive
        </h1>
        <h1 className="font-sora text-[83px] font-normal text-white tracking-[0px] leading-[92px] text-left whitespace-nowrap p-0 align-top transform origin-center translate-x-0 translate-y-[-7px] w-[50%] h-auto  visible bg-transparent opacity-100 pointer-events-auto">
          Solutions
        </h1>

        <p className="font-roboto text-[17px] font-normal text-white tracking-[0px] leading-[33px] text-left whitespace-nowrap overflow-visible pt-[20px] w-auto h-auto border-t border-white/10 z-[11] align-top transform origin-center translate-x-0 translate-y-0 block left-[27.7192px] top-[502.568px]  pointer-events-none bg-transparent">
          Enhancing Your Practice and Patient Experience with Medipay Billing
        </p>
        <button className="font-sora text-[11px] font-medium text-[#031b4e] uppercase tracking-[0px] leading-[33px] text-left whitespace-nowrap overflow-visible px-[32px] py-[11px] min-h-0 w-auto h-auto z-[12] rounded-[30px] align-top transform origin-center translate-x-0 translate-y-0 block left-[27.7192px] top-[608.193px] visible opacity-100 pointer-events-auto border-none bg-white mt-[30px] hover:bg-g-blue hover:text-white">
          Contact Us
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2 inline"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
