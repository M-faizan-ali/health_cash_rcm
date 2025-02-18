import React from "react";
import Navbar2 from "../components/Navbar2";
import { allServicesContent } from "../constants";
import { Link } from "react-router-dom";

const ServicePage = () => {
  return (
    <>
      <Navbar2 />

      <div className="container mx-auto flex items-center justify-start flex-wrap gap-4 my-10">
        {Object.keys(allServicesContent).map((service, index) => (
          <>
            <Link key={index} to={`/services/${service}`} className="w-full h-auto md:w-[48%] lg:w-[32%] md:h-[506px] lg:h-[559px] xl:h-[450px] rounded-[30px] overflow-hidden shadow-lg p-4">
              <div className=" ">
                <img
                  className="w-[90%] h-[200px] object-cover mx-auto my-4 rounded-[30px] hover:scale-105 transition-all duration-200 ease-out cursor-pointer "
                  src={allServicesContent[service]?.image}
                  alt=""
                />
                <h1 className="text-xl font-bold text-center">
                  {allServicesContent[service]?.title}
                </h1>
                <p className="text-center p-3 text-black">
                  {allServicesContent[service]?.summary}
                </p>
              </div>
            </Link>
          </>
        ))}

        <div className="w-[60%]">
          <img
            className=""
            src="https://medipaybilling.com/wp-content/uploads/2024/09/75b888e9-58df-4bb3-93cb-ae24d5c7fdb8-removebg-preview.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default ServicePage;
