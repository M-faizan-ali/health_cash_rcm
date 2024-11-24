import React from "react";
import Typewriter from "typewriter-effect";
export default function BillingSolutions() {
  return (
    <div
      className="relative  bg-no-repeat bg-top-center bg-[#2e3482] py-[100px] px-0 mt-[100px]"
      style={{ backgroundImage:"url('https://medipaybilling.com/wp-content/uploads/2024/01/service-bg-pattern.png')",
      }}
    >
      <div className="w-[90%] m-auto text-justify">
        <div className="text-center mb-9">
          <h3 className="font-sora text-[40px] leading-[50px] tracking-normal text-white font-semibold ">
            Billing Solutions For all{" "}
            <span className="text-special">
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

        {/* <div className="flex sm:flex-col lg:flex-row">
          <div className="sm:w-[100%] lg:w-[50%]">
            <div className="h-full flex flex-col justify-center ">
              <p className="mb-[25px] text-white">
                Explore Medipay Billing’s all-inclusive outsourced medical
                billing solutions, customized to address the distinct needs of
                various medical specialties. Our team of seasoned billing and
                coding specialists ensures seamless support through every phase
                of your billing process—from claims submission to denial
                resolution. We are focused on providing precise, timely, and
                compliant billing services that drive revenue optimization for
                your practice.
              </p>
              <div className="book-consultation">
                <button className="flex items-center px-8 py-4 bg-special text-white rounded-full font-bold uppercase text-xs leading-6 tracking-wider transition-all">
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
          <div className="sm:w-[100%] lg:w-[50%]">
            <img src="https://i.imgur.com/kAoYH6D.gif" alt="" />
          </div>
        </div> */}

<div className="flex flex-col sm:flex-col lg:flex-row">
  <div className="sm:w-[100%] lg:w-[50%]">
    <div className="h-full flex flex-col justify-center">
      <p className="mb-[25px] text-white">
        Explore Medipay Billing’s all-inclusive outsourced medical
        billing solutions, customized to address the distinct needs of
        various medical specialties. Our team of seasoned billing and
        coding specialists ensures seamless support through every phase
        of your billing process—from claims submission to denial
        resolution. We are focused on providing precise, timely, and
        compliant billing services that drive revenue optimization for
        your practice.
      </p>
      <div className="book-consultation">
        <button className="flex items-center px-8 py-4 bg-special text-white rounded-full font-bold uppercase text-xs leading-6 tracking-wider transition-all">
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
  <div className="sm:w-[100%] lg:w-[50%]">
    <img src="https://i.imgur.com/kAoYH6D.gif" alt="" />
  </div>
</div>



      </div>
      
    </div>
  );
}
