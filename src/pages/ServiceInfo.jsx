import { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi"; // Importing a lightweight arrow icon
import { Link, useParams } from "react-router-dom";
import { allServicesContent } from "../constants";
import Navbar2 from "../components/Navbar2";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";

const ServiceInfo = () => {
  const { servicename } = useParams();
  const [currService, setCurrentService] = useState(null);
  const [faqs, setFaqs] = useState();
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  useEffect(() => {
    const content = allServicesContent[servicename];
    const currFaqs = allServicesContent[servicename].faqs;
    setCurrentService(content);
    setFaqs(currFaqs);

    // Smooth scroll to the top
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [currService, servicename]);

  return (
    <>
      <Navbar2 />
      <div className="w-[90%] m-auto">
        {/* sidebar  */}
        <div className="flex w-full mt-[100px] mb-[100px] gap-9">
          {/* Sidebar */}
          <div className="w-1/3 bg-white rounded-[15px] p-9 shadow-lg">
            <ul>
              {Object.keys(allServicesContent).map((item, index) => (
                <Link
                  to={`/services/${item}`}
                  key={index}
                  className={`cursor-pointer p-4 flex justify-between items-center transition-all duration-300 ${
                    servicename === item
                      ? "bg-blue-500 text-white rounded-full shadow-md"
                      : "text-black"
                  }`}
                >
                  {allServicesContent[item]?.title}

                  {/* Conditionally render the arrow for the active item */}
                  {servicename === item && (
                    <span className="ml-2 flex justify-center items-center bg-white text-blue-500 rounded-full p-1">
                      <FiArrowRight className="w-4 h-4" />
                    </span>
                  )}
                </Link>
              ))}
            </ul>
          </div>

          {/* Content Area */}
          <div className="w-3/4 p-6 bg-transparent h-auto ">
            <div>
              <div>
                <img
                  src={currService?.image}
                  alt=""
                  className="w-full rounded-[30px] object-cover"
                />
              </div>

              <h1 className="text-[45px] font-bold my-5">
                {currService?.title}
              </h1>

              <div id="content">
                <div
                  dangerouslySetInnerHTML={{ __html: currService?.content }}
                />
              </div>

              <div className="">
                <h1 className="text-[45px] font-bold mb-5">FAqs</h1>

                <div className="*:mb-5 ml-8">
                  <div
                    id="accordion-color"
                    data-accordion="collapse"
                    data-active-classes="bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white"
                  >
                    {faqs?.map((faq, idx) => (
                      <Accordion
                        key={idx}
                        open={open === idx + 1} // Adjust open logic for each accordion
                        icon={<Icon id={idx + 1} open={open} />} // Pass a unique id for each item
                      >
                        <AccordionHeader onClick={() => handleOpen(idx + 1)}>
                          {faq?.question}
                        </AccordionHeader>
                        <AccordionBody>{faq?.answer}</AccordionBody>
                      </Accordion>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceInfo;

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}
