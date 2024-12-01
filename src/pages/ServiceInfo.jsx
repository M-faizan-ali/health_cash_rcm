import { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi"; // Importing a lightweight arrow icon
import { useParams } from "react-router-dom";
import { allServicesContent } from "../constants";

const ServiceInfo = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const menuItems = [
    {
      name: "Who We Are",
      content: "Content for Home",
      img: "https://medipaybilling.com/wp-content/uploads/2024/09/Virtual-Assistance.jpg",
    },
    {
      name: "Our Mission",
      content: "1Content for About,2content for About,3Content for about",
    },
    { name: "Why Choose Us?", content: "Content for Services" },
    { name: "Our Vision", content: "Content for Contact" },
    { name: "Learn More About Us", content: "Content for Contact" },
  ];

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const { servicename } = useParams();
  const [currService, setCurrentService] = useState(null);
  const [faqs, setFaqs] = useState();
  useEffect(() => {
    const content = allServicesContent[servicename];
    const currFaqs = allServicesContent[servicename].faqs;
    setCurrentService(content);
    setFaqs(currFaqs);
  }, []);

  return (
    <>
      <div className="w-[90%] m-auto">
        {/* sidebar  */}
        <div className="flex w-full mt-[100px] mb-[100px] gap-9">
          {/* Sidebar */}
          <div className="w-1/3 bg-white rounded-[15px] p-9 shadow-lg">
            <ul>
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  onClick={() => handleClick(index)}
                  className={`cursor-pointer p-4 flex justify-between items-center transition-all duration-300 ${
                    activeIndex === index
                      ? "bg-blue-500 text-white rounded-full shadow-md"
                      : "text-black"
                  }`}
                >
                  <span>{item.name}</span>
                  {/* Conditionally render the arrow for the active item */}
                  {activeIndex === index && (
                    <span className="ml-2 flex justify-center items-center bg-white text-blue-500 rounded-full p-1">
                      <FiArrowRight className="w-4 h-4" />{" "}
                      {/* Using a lightweight arrow icon */}
                    </span>
                  )}
                </li>
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
                      <>
                        {/* Accordian  */}
                        <div key={idx}>
                          <p>{faq?.question}</p>
                          <p>{faq?.answer}</p>
                        </div>
                      </>
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
