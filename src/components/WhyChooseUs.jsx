import React from "react";

export default function WhyChooseUs() {
  return (
    <>
      <div className="w-[90%] m-auto mt-[100px]">
        <div className="text-center mb-[15px]">
          <h4 className="font-sora uppercase inline-block px-[23px] py-[3px] rounded-[30px] bg-white text-btn-color text-center font-semibold text-[12px]">
            Our Services
          </h4>
        </div>

        <h2 className="font-sora font-medium text-[48px] leading-[60px] tracking-0 text-heading-color text-center mb-[50px]">
          Why choose us
        </h2>

        <div className="flex flex-col lg:flex-row gap-9">
          {/* first section */}

          <div className="w-full lg:w-[28%] max-w-full box-border">
            <div className="flex w-full mb-[80px] pr-[15px]">
              <div className="image-icon relative pr-[20px] pb-[20px]">
                <img
                  src="https://medipaybilling.com/wp-content/uploads/2024/09/quality-1.png"
                  alt=""
                />
              </div>
              <div>
                <h2 className="font-sora font-medium tracking-normal text-heading-color normal-case not-italic pb-[15px] leading-[1.7]">
                  Proven<span className="block">Expertise</span>{" "}
                </h2>
                <p className="font-roboto text-[#666]">
                  Our team’s deep knowledge of revenue cycle management ensures
                  compliance and maximizes your revenue.
                </p>
              </div>
            </div>
            <div className="flex w-full mb-[80px]">
              <div className="image-icon relative pr-[20px] pb-[20px]">
                <img
                  src="https://medipaybilling.com/wp-content/uploads/2024/09/quality-1.png"
                  alt=""
                />
              </div>
              <div>
                <h2 className="font-sora font-medium tracking-normal text-heading-color normal-case not-italic pb-[15px] leading-[1.7]">
                  Proven<span className="block">Expertise</span>{" "}
                </h2>
                <p className="font-roboto text-[#666]">
                  Our team’s deep knowledge of revenue cycle management ensures
                  compliance and maximizes your revenue.
                </p>
              </div>
            </div>
            <div className="flex w-full">
              <div className="image-icon relative pr-[20px] pb-[20px]">
                <img
                  src="https://medipaybilling.com/wp-content/uploads/2024/09/quality-1.png"
                  alt=""
                />
              </div>
              <div>
                <h2 className="font-sora font-medium tracking-normal text-heading-color normal-case not-italic pb-[15px] leading-[1.7]">
                  Proven<span className="block">Expertise</span>{" "}
                </h2>
                <p className="font-roboto text-[#666]">
                  Our team’s deep knowledge of revenue cycle management ensures
                  compliance and maximizes your revenue.
                </p>
              </div>
            </div>
          </div>

          {/* second section  */}
          <div className="w-[100%] lg:w-[44%]">
            <div className="flex justify-center items-center h-full">
              <div className="p-[15px] border-2 border-dashed border-[#64A7E6] rounded-full">
                <img
                  className=" rounded-full"
                  src="https://medipaybilling.com/wp-content/uploads/2024/09/doctor1.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>

          {/* 3rd section */}
          <div className="w-[100%] lg:w-[28%]">
            <div className="flex w-[100%] mb-[80px]">
              <div className="image-icon relative pr-[20px] pb-[20px]">
                <img
                  src="https://medipaybilling.com/wp-content/uploads/2024/09/quality-1.png"
                  alt=""
                />
              </div>
              <div>
                <h2 className="font-sora font-medium tracking-normal text-heading-color normal-case not-italic pb-[15px] leading-[1.7]">
                  Proven<span className="block">Expertise</span>{" "}
                </h2>
                <p className="font-roboto text-[#666]">
                  Our team’s deep knowledge of revenue cycle management ensures
                  compliance and maximizes your revenue.
                </p>
              </div>
            </div>
            <div className="flex w-[100%] mb-[80px]">
              <div className="image-icon relative pr-[20px] pb-[20px]">
                <img
                  src="https://medipaybilling.com/wp-content/uploads/2024/09/quality-1.png"
                  alt=""
                />
              </div>
              <div>
                <h2 className="font-sora font-medium tracking-normal text-heading-color normal-case not-italic pb-[15px] leading-[1.7]">
                  Proven<span className="block">Expertise</span>{" "}
                </h2>
                <p className="font-roboto text-[#666]">
                  Our team’s deep knowledge of revenue cycle management ensures
                  compliance and maximizes your revenue.
                </p>
              </div>
            </div>
            <div className="flex w-[100%]">
              <div className="image-icon relative pr-[20px] pb-[20px]">
                <img
                  src="https://medipaybilling.com/wp-content/uploads/2024/09/quality-1.png"
                  alt=""
                />
              </div>
              <div>
                <h2 className="font-sora font-medium tracking-normal text-heading-color normal-case not-italic pb-[15px] leading-[1.7]">
                  Proven<span className="block">Expertise</span>{" "}
                </h2>
                <p className="font-roboto text-[#666]">
                  Our team’s deep knowledge of revenue cycle management ensures
                  compliance and maximizes your revenue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
