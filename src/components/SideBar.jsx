import { useState } from "react";
import { FiArrowRight } from "react-icons/fi"; 
import ImmediateAssistance from "./ImmediateAssistance";
import Navbar2 from "./Navbar2";
import HealthCare from "./HealthCare";
const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [content, setContent] = useState("Square Medix consists of a dedicated team with extensive knowledge in the healthcare field. Our primary goal is to ease the administrative challenges of billing, enabling healthcare providers to focus on delivering high-quality patient care. We offer reliable and streamlined billing solutions that ensure timely payments and help reduce financial strain.");

  const menuItems = [
    { name: "Who We Are", content: "Content for Home" },
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
    setContent(menuItems[index].content);
  };

  return (
    <>
      <Navbar2 
              customBackgroundImage="/assets/speciality-img-5.jpg"
              customSpan="> about us"
            />
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
                      ? "bg-bg-color text-white rounded-full shadow-md"
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
          <div className="w-3/4 p-6 bg-transparent border border-[#ccc] rounded-[15px] flex flex-col items-start">
            <h1 className="flex items-center min-h-screen">
              {content.split(",").map((line, index) => (
                <div key={index}>{line}</div>
              ))}
            </h1>
          </div>
        </div>
        {/* ImmediateAssistance Form  */}
        <ImmediateAssistance />
        {/* <Footer/> */}
      </div>
    </>
  );
};

export default Sidebar;
