import React, { useState } from "react";
import { allServicesContent } from "../constants";
import { Link, useNavigate } from "react-router-dom";
export default function RealMenu() {
  const navigate = useNavigate();
  // const handleServiceClick = () => {
  //   navigate("/services");
  // };
  const handleMakeAppointmentClick=()=>{
    navigate("/contact")
  };

  const [isOpen, setIsOpen] = useState(false);

  const textStyle =
    "font-[500]  text-[14px] font-sora tracking-[0.3px] uppercase not-italic text-white textblack block mt-4 lg:inline-block lg:mt-0 mr-4";
  return (
    <nav className="flex items-center justify-between flex-wrap p-6z-50 w-full">
      <div className="flex items-center flex-shrink-0 text-white textblack mr-6">
        <img src="/assets/asset 0.gif" alt="Logo" className="h-[100px]" />
      </div>

      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 border rounded text-white textblack border-white hover:text-gray-300"
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

      <div
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="text-sm lg:flex-grow textblack">
          <Link to="/" className={textStyle}>
            Home
          </Link>
          <div className="inline-block group relative cursor-pointer py-2">
            <a href="service"
              className={`menu-hover ${textStyle} textblack`}
              // onClick={handleServiceClick}
            >
              Services
            </a>

            {/* <div className="invisible absolute z-50 flex w-[300px] flex-col py-1 mt-2 px-4 bg-white  shadow-xl group-hover:visible">
              {Object.keys(allServicesContent).map((service, index) => (
                <a
                  key={index}
                  href={`/services/${service}`}
                  className="my-1 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                >
                  {allServicesContent[service]?.title}
                </a>
              ))}
            </div> */}
          </div>
          <div className="inline-block group relative cursor-pointer py-2 textblack">
            <a href="/specialities" className={`menu-hover ${textStyle}`} onClick="">
              Specialities
            </a>

            {/* <div className="invisible absolute z-50 flex w-[300px] flex-col py-1 mt-2 px-4 bg-white shadow-xl group-hover:visible">
              {specialitiesList.map((speciality, index) => (
                <a
                  key={index}
                  href={`/#facilities`}
                  className="my-1 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                >
                  {speciality}
                </a>
              ))}
            </div> */}
          </div>
          <a href="/about" className={textStyle + " textblack"}>
            About Us
          </a>
          <a href="#" className={textStyle + " textblack"}>
            Blog
          </a>
          <a href="/contact" className={textStyle + " textblack"}>
            Contact Us
          </a>
        </div>

        <div className="sm:hidden lg:block"> 
          <button onClick={handleMakeAppointmentClick} className="inline-flex items-center px-8 py-4 bg-white text-primary-heading-color rounded-full font-bold uppercase text-xs leading-6 tracking-wider transition-all hover:bg-primary-heading-color hover:text-white ">
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
  );
}
