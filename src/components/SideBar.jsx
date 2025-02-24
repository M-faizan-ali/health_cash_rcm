import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import ImmediateAssistance from "./ImmediateAssistance";
import Navbar2 from "./Navbar2";
import HealthCare from "./HealthCare";

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const menuItems = [
    {
      name: "Who We Are",
      content:
        "Square Medix is comprised of a team of seasoned experts with deep-rooted experience in the healthcare sector. Our mission is to relieve you of the complexities of billing administration, so you can stay focused on what matters most—delivering exceptional patient care. We specialize in precise, efficient healthcare billing solutions designed to expedite reimbursements and minimize financial pressures, giving you peace of mind.",
    },
    {
      name: "Our Mission",
      content:
        "Our mission is to empower healthcare providers by enhancing their revenue cycle through streamlined billing solutions. We focus on reducing claim denials, accelerating payment cycles, and improving overall financial outcomes for your practice.",
    },
    {
      name: "Why Choose Us?",
      content: (
        <ul className="list-disc ml-5">
          <li>
            Proven Expertise: Our team has in-depth knowledge of revenue cycle
            management and stays updated with the latest industry standards,
            ensuring compliance and maximizing your revenue.
          </li>
          <li>
            Tailored Solutions: We offer customized billing services that align
            with your specific needs.
          </li>
          <li>
            Client-Focused Service: We are dedicated to providing transparent
            communication, detailed reporting, and proactive support to keep
            your billing operations running smoothly.
          </li>
        </ul>
      ),
    },
    {
      name: "Our Vision",
      content:
        "We envision a future where healthcare providers can operate without the complexities of billing. Square Medix aims to be a trusted partner in healthcare billing services, known for driving significant improvements in the revenue cycle of practices nationwide.",
    },
    {
      name: "Learn More About Us",
      content:
        "Curious about how we can help your practice thrive? Contact us today to discuss how our revenue cycle management solutions can benefit your healthcare practice.",
    },
  ];

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
      <Navbar2
        customBackgroundImage="/assets/speciality-img-5.jpg"
        customSpan="> about us"
      />
      <div className="sm:w-full lg:w-[90%] m-auto">
        {/* Sidebar */}
        <div className="flex flex-col lg:flex-row w-full mt-[100px] mb-[100px] gap-9">
          {/* Sidebar menu */}
          <div className="w-full lg:w-1/3 bg-white rounded-[15px] p-9 lg:shadow-lg ">
            <ul>
              {menuItems.map((item, index) => (
                <li key={index} className="mb-4">
                  <div
                    onClick={() => handleClick(index)}
                    className={`cursor-pointer p-4 flex justify-between items-center transition-all duration-300 rounded-full border-2 sm:border-gray-300 md:border-gray-300 lg:border-0  ${
                      activeIndex === index
                        ? "bg-[#17224D] text-white rounded-full shadow-md"
                        : "text-black"
                    }`}
                  >
                    <span>{item.name}</span>
                    {/* Conditionally render the arrow for the active item */}
                    {activeIndex === index && (
                      <span className="ml-2 flex justify-center items-center bg-white text-blue-500 rounded-full p-1">
                        <FiArrowRight className="w-4 h-4" />
                      </span>
                    )}
                  </div>
                  {/* Display content only for the active item in mobile view */}
                  <div
                    className={`transition-all duration-300 overflow-hidden lg:hidden ${
                      activeIndex === index ? "max-h-screen mt-4" : "max-h-0"
                    }`}
                  >
                    <p>{item.content}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Content Area for larger screens */}
          <div className="w-full lg:w-3/4 p-6 bg-transparent border border-gray-200 rounded-[15px] shadow-lg hidden lg:flex justify-center items-center">
            <h1>{activeIndex !== null ? menuItems[activeIndex].content : menuItems[0].content}</h1>
          </div>
        </div>
        {/* Immediate Assistance Form */}
        <ImmediateAssistance />
      </div>
    </>
  );
};

export default Sidebar;
