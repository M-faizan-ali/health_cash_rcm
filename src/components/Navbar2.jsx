import React, { useState } from "react";

export default function Navbar2() {
  const [isOpen, setIsOpen] = useState(false);
  const textStyle ="font-[500]  text-[14px] font-sora tracking-[0.3px] uppercase not-italic text-white block mt-4 lg:inline-block lg:mt-0 mr-4";
  return (
    <div
      className="mb-[15px] sm:w-[100%] sm:rounded-none xl:w-[95%] m-auto xl:rounded-[15px]"
      style={{
        backgroundImage: `url('/assets/header-image-1.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <nav className="flex items-center justify-between flex-wrap p-6 bg-transparent">
        {/* Logo Section */}
        <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img src="/assets/asset 0.gif" alt="Logo" className="h-[100px]" />
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-gray-300"
          >
            {isOpen ? (
              <svg
                className="fill-current h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
              </svg>
            ) : (
              <svg
                className="fill-current h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            )}
          </button>
        </div>

        {/* Links Section */}
        <div
          className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <div className="text-sm lg:flex-grow">
            <a
              href="#"
              className= {textStyle}
            >
              Home
            </a>
            <a
              href="#"
              className={textStyle}
            >
              Services
            </a>
            <a
              href="#"
              className={textStyle}
            >
              Specialities
            </a>
            <a
              href="#"
              className={textStyle}
            >
              About Us
            </a>
            <a
              href="#"
              className={textStyle}
            >
              Blog
            </a>
            <a
              href="#"
              className={textStyle}
            >
              Contact Us
            </a>
          </div>

          {/* Button Section */}
          <div>
            <button className="uppercase inline-flex items-center px-8 py-4 bg-white text-g-blue rounded-full font-bold uppercase text-xs leading-6 tracking-wider transition-all hover:bg-g-blue hover:text-white">
              Make an appointment
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
      </nav>

        <div className="pb-[100px] pl-9 mt-[80px] w-full">
          <button className="font-roboto text-[11px] font-normal text-white uppercase no-underline tracking-[1.1px] leading-[22px] text-left whitespace-nowrap px-[17px] py-[2px] border border-white rounded-full bg-transparent opacity-100 pointer-events-auto mb-[30px]">
            Medipay billing
          </button>
          
          {/* <!-- First Heading --> */}
          <h1 className="font-sora text-[26px] sm:text-[26px] md:text-[46px] xl:text-[83px] font-normal text-white tracking-[0px] leading-tight text-left whitespace-normal p-0">
            Focus on Comprehensive
          </h1>
  
          {/* <!-- Second Heading --> */}
          <h1 className="font-sora text-[26px] sm:text-[26px] md:text-[46px] lg:text-[83px] font-normal text-white tracking-[0px] leading-tight text-left whitespace-normal p-0 w-full">
            Solutions
          </h1>

          <p className="font-roboto text-[14px] sm:text-[17px] md:text-[20px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] font-normal text-white tracking-[0px] leading-tight text-left whitespace-normal overflow-visible pt-[20px] w-auto h-auto border-t border-white/10 z-[11] align-top transform origin-center translate-x-0 translate-y-0 block bg-transparent">
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
