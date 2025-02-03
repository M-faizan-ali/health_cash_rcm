import React from "react";
import { Tilt } from "react-tilt";
import Typewriter from "typewriter-effect";
import { Link, useNavigate } from "react-router-dom";


export default function BillingSolutions() {
  const navigate=useNavigate();
   const handleBookConsultation=()=>{
     navigate("/contact")
   };
  const defaultOptions = {
    reverse: false,
    max: 35, 
    perspective: 1000, 
    scale: 1, 
    speed: 1000, 
    transition: true,
    axis: null, 
    reset: true, 
    easing: "cubic-bezier(.03,.98,.52,.99)", 
  };

  return (
    <div
      className="relative  bg-no-repeat bg-top-center  bg-bg-color py-[100px] px-0 mt-[100px]"
    >
      <div className="w-[90%] m-auto text-justify">
        <div className="text-center mb-9">
          <h3 className="font-sora text-[40px] leading-[50px] tracking-normal text-white font-semibold ">
            Billing Solutions For all{" "}
            <span className="text-special text-primary-heading-color">
              <Typewriter
                options={{
                  strings: ["Specialties"],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                  delay: 50,
  
                }}
              />
            </span>
          </h3>
        </div>

        <div className="flex flex-col sm:flex-col lg:flex-row">
          <div className="sm:w-[100%] lg:w-[50%]">
            <div className="h-full flex flex-col justify-center">
              <p className="mb-[25px] text-white">
              Unlock the power of Square Medix comprehensive, specialty-specific billing solutions. Our experienced team expertly manages every step of your billing process— from seamless claims submission to efficient denial resolution—ensuring accuracy, compliance, and timely reimbursement to optimize your practice’s revenue.
              </p>
              <div className="book-consultation">
                <button onClick={handleBookConsultation} className="flex items-center px-8 py-4 bg-primary-heading-color text-white rounded-full font-bold uppercase text-xs leading-6 tracking-wider transition-all">
                  Book consultation
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
          </div>

          <div className="w-[100%] lg:w-[50%]">
            <Tilt options={defaultOptions} className="w-full h-full">
              <img src="https://i.imgur.com/kAoYH6D.gif" alt="" loading="lazy"/>
            </Tilt>
          </div>
        </div>
      </div>
    </div>
  );
}
