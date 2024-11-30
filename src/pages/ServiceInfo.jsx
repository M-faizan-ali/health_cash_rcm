import { useState } from "react";
import { FiArrowRight } from "react-icons/fi"; // Importing a lightweight arrow icon

const ServiceInfo = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [content, setContent] = useState("Content for Home");

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
    setContent(menuItems[index].content);
  };

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
            {/* <h1 className="text-2xl">
              {content.split(",").map((line, index) => (
                <div key={index}>{line}</div>
              ))}
            </h1> */}

            <div>
              <div>
                <img
                  src="https://medipaybilling.com/wp-content/uploads/2024/09/Virtual-Assistance.jpg"
                  alt=""
                  className="w-full rounded-[30px] object-cover"
                />
              </div>

              <div className="*:mt-5 mb-10">
                <div>
                  <h1 className="text-[45px] font-bold">
                    Virtual Assistant Services
                  </h1>

                  <div className="flex gap-4 items-start">
                    <p className="font-bold text-[50px]">A</p>
                    <p className="text-lg ">
                      orem ipsum dolor sit amet consectetur adipisicing elit.
                      Libero, voluptate assumenda? Ab amet veritatis laboriosam
                      ipsa nisi! Accusantium odio ut doloremque! Enim cum rem
                      repellendus eum commodi repellat veritatis! Quibusdam non
                      cupiditate reiciendis reprehenderit!
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h1 className="text-[45px] font-bold mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt, cumque!
                </h1>

                <div className="*:mb-5">
                  <p className="text-lg ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
                    a doloremque iusto veniam delectus architecto.
                  </p>

                  <div className="flex items-start justify-between gap-5">
                    <ul className="*:text-lg *:mb-2">
                      <li>
                        <span>tick icon</span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        At odio totam earum et! Quisquam quibusdam saepe vel
                        tempora modi mollitia?
                      </li>
                      <li>
                        <span>tick icon</span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        At odio totam earum et! Quisquam quibusdam saepe vel
                        tempora modi mollitia?
                      </li>
                    </ul>

                    <ul className="*:text-lg">
                      <li>
                        <span>tick icon</span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        At odio totam earum et! Quisquam quibusdam saepe vel
                        tempora modi mollitia?
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h1 className="text-[45px] font-bold mb-5">
                  Lorem ipsum dolor sit amet consectetur ad
                </h1>

                <div className="*:mb-5">
                  <div className="flex items-start justify-between gap-5 flex-wrap">
                    <div className=" *:mb-2 w-[48%]">
                      <h2 className="text-[25px] font-bold">
                        1. Lorem, ipsum dolor.
                      </h2>
                      <p className="text-xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolorem rerum similique iure repellendus voluptas,
                        eligendi inventore aliquam. Deserunt sunt sint quam
                        debitis magnam consectetur doloribus, dolore ea, et
                        autem quae illum exercitationem expedita illo?
                        Consequatur repudiandae odio id cum et!
                      </p>
                      <ul className="list-disc ml-10">
                        <li className="font-bold text-xl mb-1">
                          Lorem, ipsum dolor.
                        </li>
                        <li className="font-bold text-xl mb-1">
                          Lorem, ipsum dolor.
                        </li>
                        <li className="font-bold text-xl mb-1">
                          Lorem, ipsum dolor.
                        </li>
                      </ul>
                    </div>

                    <div className=" *:mb-2 w-[48%]">
                      <h2 className="text-[25px] font-bold">
                        1. Lorem, ipsum dolor.
                      </h2>
                      <p className="text-xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolorem rerum similique iure repellendus voluptas,
                        eligendi inventore aliquam. Deserunt sunt sint quam
                        debitis magnam consectetur doloribus, dolore ea, et
                        autem quae illum exercitationem expedita illo?
                        Consequatur repudiandae odio id cum et!
                      </p>
                      <ul className="list-disc ml-10">
                        <li className="font-bold text-xl mb-1">
                          Lorem, ipsum dolor.
                        </li>
                        <li className="font-bold text-xl mb-1">
                          Lorem, ipsum dolor.
                        </li>
                        <li className="font-bold text-xl mb-1">
                          Lorem, ipsum dolor.
                        </li>
                      </ul>
                    </div>

                    <div className=" *:mb-2 w-[48%]">
                      <h2 className="text-[25px] font-bold">
                        1. Lorem, ipsum dolor.
                      </h2>
                      <p className="text-xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolorem rerum similique iure repellendus voluptas,
                        eligendi inventore aliquam. Deserunt sunt sint quam
                        debitis magnam consectetur doloribus, dolore ea, et
                        autem quae illum exercitationem expedita illo?
                        Consequatur repudiandae odio id cum et!
                      </p>
                      <ul className="list-disc ml-10">
                        <li className="font-bold text-xl mb-1">
                          Lorem, ipsum dolor.
                        </li>
                        <li className="font-bold text-xl mb-1">
                          Lorem, ipsum dolor.
                        </li>
                        <li className="font-bold text-xl mb-1">
                          Lorem, ipsum dolor.
                        </li>
                      </ul>
                    </div>

                    <div className=" *:mb-2 w-[48%]">
                      <h2 className="text-[25px] font-bold">
                        1. Lorem, ipsum dolor.
                      </h2>
                      <p className="text-xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolorem rerum similique iure repellendus voluptas,
                        eligendi inventore aliquam. Deserunt sunt sint quam
                        debitis magnam consectetur doloribus, dolore ea, et
                        autem quae illum exercitationem expedita illo?
                        Consequatur repudiandae odio id cum et!
                      </p>
                      <ul className="list-disc ml-10">
                        <li className="font-bold text-xl mb-1">
                          Lorem, ipsum dolor.
                        </li>
                        <li className="font-bold text-xl mb-1">
                          Lorem, ipsum dolor.
                        </li>
                        <li className="font-bold text-xl mb-1">
                          Lorem, ipsum dolor.
                        </li>
                      </ul>
                    </div>

                    <div className=" *:mb-2 w-[48%]">
                      <h2 className="text-[25px] font-bold">
                        1. Lorem, ipsum dolor.
                      </h2>
                      <p className="text-xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolorem rerum similique iure repellendus voluptas,
                        eligendi inventore aliquam. Deserunt sunt sint quam
                        debitis magnam consectetur doloribus, dolore ea, et
                        autem quae illum exercitationem expedita illo?
                        Consequatur repudiandae odio id cum et!
                      </p>
                      <ul className="list-disc ml-10">
                        <li className="font-bold text-xl mb-1">
                          Lorem, ipsum dolor.
                        </li>
                        <li className="font-bold text-xl mb-1">
                          Lorem, ipsum dolor.
                        </li>
                        <li className="font-bold text-xl mb-1">
                          Lorem, ipsum dolor.
                        </li>
                      </ul>
                    </div>

                    <div className=" *:mb-2 w-[48%]">
                      <h2 className="text-[25px] font-bold">
                        1. Lorem, ipsum dolor.
                      </h2>
                      <p className="text-xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolorem rerum similique iure repellendus voluptas,
                        eligendi inventore aliquam. Deserunt sunt sint quam
                        debitis magnam consectetur doloribus, dolore ea, et
                        autem quae illum exercitationem expedita illo?
                        Consequatur repudiandae odio id cum et!
                      </p>
                      <ul className="list-disc ml-10">
                        <li className="font-bold text-xl mb-1">
                          Lorem, ipsum dolor.
                        </li>
                        <li className="font-bold text-xl mb-1">
                          Lorem, ipsum dolor.
                        </li>
                        <li className="font-bold text-xl mb-1">
                          Lorem, ipsum dolor.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="">
                <h1 className="text-[45px] font-bold mb-5">How It Works</h1>

                <div className="*:mb-5 ml-8">
                  <ol className="list-decimal">
                    <li className="text-xl mb-4">
                      <span className="font-bold">Lorem, ipsum. :</span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ab, a doloremque iusto veniam delectus architecto.
                    </li>
                    <li className="text-xl mb-4">
                      <span className="font-bold">Lorem, ipsum. :</span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ab, a doloremque iusto veniam delectus architecto.
                    </li>
                    <li className="text-xl mb-4">
                      <span className="font-bold">Lorem, ipsum. :</span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ab, a doloremque iusto veniam delectus architecto.
                    </li>
                    <li className="text-xl mb-4">
                      <span className="font-bold">Lorem, ipsum. :</span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ab, a doloremque iusto veniam delectus architecto.
                    </li>
                  </ol>
                </div>
              </div>

              <div className="">
                <h1 className="text-[45px] font-bold mb-5">FAqs</h1>

                <div className="*:mb-5 ml-8">
                  <div
                    id="accordion-color"
                    data-accordion="collapse"
                    data-active-classes="bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white"
                  >
                    <h2 id="accordion-color-heading-1">
                      <button
                        type="button"
                        className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 gap-3"
                        data-accordion-target="#accordion-color-body-1"
                        aria-expanded="true"
                        aria-controls="accordion-color-body-1"
                      >
                        <span>What is Flowbite?</span>
                        <svg
                          data-accordion-icon
                          className="w-3 h-3 rotate-180 shrink-0"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 10 6"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5 5 1 1 5"
                          />
                        </svg>
                      </button>
                    </h2>
                    <div
                      id="accordion-color-body-1"
                      className="hidden"
                      aria-labelledby="accordion-color-heading-1"
                    >
                      <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                          Flowbite is an open-source library of interactive
                          components built on top of Tailwind CSS including
                          buttons, dropdowns, modals, navbars, and more.
                        </p>
                        <p className="text-gray-500 dark:text-gray-400">
                          Check out this guide to learn how to{" "}
                          <a
                            href="/docs/getting-started/introduction/"
                            className="text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            get started
                          </a>{" "}
                          and start developing websites even faster with
                          components on top of Tailwind CSS.
                        </p>
                      </div>
                    </div>
                    <h2 id="accordion-color-heading-2">
                      <button
                        type="button"
                        className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 gap-3"
                        data-accordion-target="#accordion-color-body-2"
                        aria-expanded="false"
                        aria-controls="accordion-color-body-2"
                      >
                        <span>Is there a Figma file available?</span>
                        <svg
                          data-accordion-icon
                          className="w-3 h-3 rotate-180 shrink-0"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 10 6"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5 5 1 1 5"
                          />
                        </svg>
                      </button>
                    </h2>
                    <div
                      id="accordion-color-body-2"
                      className="hidden"
                      aria-labelledby="accordion-color-heading-2"
                    >
                      <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                          Flowbite is first conceptualized and designed using
                          the Figma software so everything you see in the
                          library has a design equivalent in our Figma file.
                        </p>
                        <p className="text-gray-500 dark:text-gray-400">
                          Check out the{" "}
                          <a
                            href="https://flowbite.com/figma/"
                            className="text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            Figma design system
                          </a>{" "}
                          based on the utility classes from Tailwind CSS and
                          components from Flowbite.
                        </p>
                      </div>
                    </div>
                    <h2 id="accordion-color-heading-3">
                      <button
                        type="button"
                        className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 gap-3"
                        data-accordion-target="#accordion-color-body-3"
                        aria-expanded="false"
                        aria-controls="accordion-color-body-3"
                      >
                        <span>
                          What are the differences between Flowbite and Tailwind
                          UI?
                        </span>
                        <svg
                          data-accordion-icon
                          className="w-3 h-3 rotate-180 shrink-0"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 10 6"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5 5 1 1 5"
                          />
                        </svg>
                      </button>
                    </h2>
                    <div
                      id="accordion-color-body-3"
                      className="hidden"
                      aria-labelledby="accordion-color-heading-3"
                    >
                      <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                          The main difference is that the core components from
                          Flowbite are open source under the MIT license,
                          whereas Tailwind UI is a paid product. Another
                          difference is that Flowbite relies on smaller and
                          standalone components, whereas Tailwind UI offers
                          sections of pages.
                        </p>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                          However, we actually recommend using both Flowbite,
                          Flowbite Pro, and even Tailwind UI as there is no
                          technical reason stopping you from using the best of
                          two worlds.
                        </p>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                          Learn more about these technologies:
                        </p>
                        <ul className="ps-5 text-gray-500 list-disc dark:text-gray-400">
                          <li>
                            <a
                              href="https://flowbite.com/pro/"
                              className="text-blue-600 dark:text-blue-500 hover:underline"
                            >
                              Flowbite Pro
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://tailwindui.com/"
                              rel="nofollow"
                              className="text-blue-600 dark:text-blue-500 hover:underline"
                            >
                              Tailwind UI
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
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
