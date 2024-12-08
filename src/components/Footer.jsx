import React from "react";
import { allServicesContent } from "../constants";

export default function Footer() {
  return (
    <div>
      <footer>
        <div className=" py-4 text-gray-400">
          <div className="container px-4 mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
            <div className="w-full md:w-[33%]">
              <img
                className="w-full h-auto my-5"
                src="https://medipaybilling.com/wp-content/uploads/2024/09/Untitled-design-1.gif"
                alt="Animated GIF"
              />

              <p className="">
                Medipay Billing is a team of seasoned professionals with
                extensive experience in the healthcare industry. Our goal is to
                alleviate the administrative burden of billing, allowing you to
                concentrate on patient care.{" "}
              </p>
              <div>
                <img src="" alt="" />
              </div>
            </div>

            <div className="w-full md:w-[67%]">
              <div className="my-5 text-[30px] text-[#2e3482] font-bold">
                At Medipay Billing, we are committed to delivering comprehensive
                revenue cycle management solutions that simplify billing
                processes for healthcare providers.
              </div>

              <div className="flex flex-col sm:flex-row gap-6 ">
                <div>
                  <h2 className="text-[#3368c5] my-5">Useful Links</h2>
                  {Object.keys(allServicesContent).map((service, index) => (
                    <a
                      key={index}
                      href={`/services/${service}`}
                      className="my-1 block py-1 font-semibold text-gray-500"
                    >
                      {allServicesContent[service]?.title}
                    </a>
                  ))}
                </div>
                
                <div>
                  <h2 className="text-[#3368c5] my-5">Working Time</h2>
                  <p className="my-1 block py-1 font-semibold text-gray-500">
                    Mon - Fri: 9.00am - 5.00pm
                  </p>
                  <p className="my-1 block py-1 font-semibold text-gray-500">
                    Saturday: 10.00am - 6.00pm
                  </p>
                  <p className="my-1 block py-1 font-semibold text-gray-500">
                    Sunday Closed
                  </p>
                </div>

                <div>
                  <h2 className="text-[#3368c5] my-5"> How to Reach Us:</h2>
                  <p className="my-1 block py-1 font-semibold text-gray-500">
                    Dublin - Ohio
                  </p>
                  <p className="my-1 block py-1 font-semibold text-gray-500">
                    888-322-2702
                  </p>
                  <p className="my-1 block py-1 font-semibold text-gray-500">
                    info@medipaybilling.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
