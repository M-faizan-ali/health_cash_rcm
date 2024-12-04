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
          <div className="w-[30%]">
          <h2 className="text-center block pt-[20px] pb-[20px] text-2xl">Our Services</h2>
            <ul>
              {Object.keys(allServicesContent).map((item, index) => (
                <Link
                  to={`/services/${item}`}
                  key={index}
                  className={`cursor-pointer p-4 flex justify-between items-center transition-all duration-300 text-g-blue fond-semibold font-sora text-[14px]  ${
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
          <div className="w-[70%] bg-transparent h-auto ">
            <div>
              <div>
                <img
                  src={currService?.image}
                  alt=""
                  className="w-full rounded-[30px] object-cover"
                />
              </div>

              <h1 className="text-[36px] font-sora text-heading-color font-normal font-bold my-5">
                {currService?.title}
              </h1>

              <div id="content">
                <div className=""
                  dangerouslySetInnerHTML={{ __html: currService?.content }}
                />
              </div>

              <div className="">
                <h1 className="text-[36px] text-heading-color  font-bold mb-5">Frequently asked questions</h1>

                <div className="*:mb-5">
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
                        <AccordionHeader className="bg-white hover:bg-g-blue hover:text-white text-[16px] font-sora,sans-serif pl-[15px] pr-[15px] rounded-[15px] text-g-blue mb-[15px] pt-[20px]]" onClick={() => handleOpen(idx + 1)}>
                          {faq?.question}
                        </AccordionHeader>
                        <AccordionBody className="font-roboto font-normal text-[16px] text-base leading-6 tracking-normal text-transform-none not-italic text-para-color">{faq?.answer}</AccordionBody>
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
