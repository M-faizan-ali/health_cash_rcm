import React from "react";

export default function WhyChooseUs() {
  return (
    <>
      <div className="sm:w-full lg:w-[1140px] m-auto mt-[100px]">
        <div className="text-center mb-[15px]">
          <h4 className="font-sora uppercase inline-block px-[23px] py-[3px] rounded-[30px] bg-white text-btn-color text-center font-semibold text-[12px]">
            Our Services
          </h4>
        </div>

        <h2 className="font-sora font-medium text-[48px] leading-[60px] tracking-0 text-primary-heading-color text-center mb-[50px]">
          Why choose us
        </h2>

        <div className="flex flex-col lg:flex-row gap-9">
          {/* first section */}

          <div className="w-full lg:w-[28%] max-w-full box-border">
            <div className="flex w-full mb-[80px] pr-[15px]">
              <div className="image-icon relative pr-[20px] pb-[20px]">
                <img
                  src="assets/asset 15.png"
                  alt="" loading="lazy"
                />
              </div>
              <div>
                <h2 className="font-sora font-medium tracking-normal text-primary-heading-color normal-case not-italic pb-[15px] leading-[1.7]">
                Demonstrated<span className="block">Expertise</span>{" "}
                </h2>
                <p className="font-roboto text-[#666]">
                Our team’s profound expertise in revenue cycle management guarantees full compliance while optimizing revenue potential.
                </p>
              </div>
            </div>
            <div className="flex w-full mb-[80px]">
              <div className="image-icon relative pr-[20px] pb-[20px]">
                <img
                  src="assets/asset 16.png"
                  loading="lazy"
                  alt=""
                />
              </div>
              <div>
                <h2 className="font-sora font-medium tracking-normal text-primary-heading-color normal-case not-italic pb-[15px] leading-[1.7]">
                Customized<span className="block">Solutions</span>{" "}
                </h2>
                <p className="font-roboto text-[#666]">
                Tailored billing solutions specifically crafted to meet the distinct needs of your practice.
                </p>
              </div>
            </div>
            <div className="flex w-full">
              <div className="image-icon relative pr-[20px] pb-[20px]">
                <img
                  src="assets/asset 17.png"
                  loading="lazy"
                  alt=""
                />
              </div>
              <div>
                <h2 className="font-sora font-medium tracking-normal text-primary-heading-color normal-case not-italic pb-[15px] leading-[1.7]">
                Revenue<span className="block">Enhancement</span>{" "}
                </h2>
                <p className="font-roboto text-[#666]">
                Comprehensive strategies and specialized expertise designed to maximize your revenue and secure long-term financial success.
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
                  src="assets/asset 18.jpeg"
                  alt=""
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* 3rd section */}
          <div className="w-[100%] lg:w-[28%]">
            <div className="flex w-[100%] mb-[80px]">
              <div className="image-icon relative pr-[20px] pb-[20px]">
                <img
                  src="assets/asset 19.png"
                  alt=""
                  loading="lazy"
                />
              </div>
              <div>
                <h2 className="font-sora font-medium tracking-normal text-primary-heading-color normal-case not-italic pb-[15px] leading-[1.7]">
                Industry<span className="block">Insights</span>{" "}
                </h2>
                <p className="font-roboto text-[#666]">
                We ensure your billing practices are always aligned with the latest industry standards for optimal efficiency.
                </p>
              </div>
            </div>
            <div className="flex w-[100%] mb-[80px]">
              <div className="image-icon relative pr-[20px] pb-[20px]">
                <img
                  src="assets/asset 20.png"
                  alt=""
                  loading="lazy"
                />
              </div>
              <div>
                <h2 className="font-sora font-medium tracking-normal text-primary-heading-color normal-case not-italic pb-[15px] leading-[1.7]">
                Client-Centric<span className="block">Service</span>{" "}
                </h2>
                <p className="font-roboto text-[#666]">
                Focusing on your priorities through clear communication and comprehensive reporting.
                </p>
              </div>
            </div>
            <div className="flex w-[100%]">
              <div className="image-icon relative pr-[20px] pb-[20px]">
                <img
                  src="assets/asset 21.png"
                  alt=""
                  loading="lazy"
                />
              </div>
              <div>
                <h2 className="font-sora font-medium tracking-normal text-primary-heading-color normal-case not-italic pb-[15px] leading-[1.7]">
                Anticipatory<span className="block">Support</span>{" "}
                </h2>
                <p className="font-roboto text-[#666]">
                Providing continuous support to resolve any issues and ensure the seamless operation of your billing processes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
