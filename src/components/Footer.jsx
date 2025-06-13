import React from "react";
import { allServicesContent } from "../constants";

export default function Footer() {
  return (
    <div>
      <footer>
        <div className=" py-4 bg-[#17224D] tex-white">
          <div className="container px-4 mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
            {/* <div className="w-full md:w-[33%]">
              <img
                className="w-full h-auto my-5"
                src="https://medipaybilling.com/wp-content/uploads/2024/09/Untitled-design-1.gif"
                alt="Animated GIF"
              />

              <p className="text-[#f2f2f2]">
              At Square Medix, we are dedicated to providing end-to-end revenue cycle management solutions that streamline billing processes for healthcare providers, ensuring efficiency and accuracy at every step.{" "}
              </p>
              <div>
                <img src="" alt="" />
              </div>
            </div> */}

            <div className="w-full md:w-[100%]">
              <div className="my-5 text-[30px]  font-bold text-[#f2f2f2]">
              Square Medix offers comprehensive revenue cycle management solutions that streamline billing, optimize reimbursement, and reduce financial complexities, enabling healthcare providers to focus on exceptional patient care.</div>

              <div className="flex flex-col sm:flex-row gap-6 ">
                <div>
                  <h2 className="text-[#3368c5] my-5">Useful Links</h2>
                  {Object.keys(allServicesContent).map((service, index) => (
                    <a
                      key={index}
                      href={`/services/${service}`}
                      className="my-1 block py-1 font-semibold text-[#f2f2f2]"
                    >
                      {allServicesContent[service]?.title}
                    </a>
                  ))}
                </div>
                
                <div>
                  <h2 className="text-[#3368c5] my-5">Working Time</h2>
                  <p className="my-1 block py-1 font-semibold text-[#f2f2f2]">
                    Mon - Fri: 9.00am - 5.00pm
                  </p>
                  <p className="my-1 block py-1 font-semibold text-[#f2f2f2]">
                    Saturday: 10.00am - 6.00pm
                  </p>
                  <p className="my-1 block py-1 font-semibold text-[#f2f2f2]">
                    Sunday Closed
                  </p>
                </div>

                <div>
                  <h2 className="text-[#3368c5] my-5"> How to Reach Us:</h2>
                  <p className="my-1 block py-1 font-semibold text-[#f2f2f2]">
                    Dublin - Ohio
                  </p>
                  <p className="my-1 block py-1 font-semibold text-[#f2f2f2]">
                    888-322-2702
                  </p>
                  <p className="my-1 block py-1 font-semibold text-[#f2f2f2]">
                    info@squaremedix.com
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
