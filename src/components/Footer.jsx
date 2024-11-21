import React from "react";

export default function Footer() {
  return (
    <div>
      <footer>
        <div className="bg-gray-800 py-4 text-gray-400">
          <div className="container px-4 mx-auto">
            <div className="-mx-4 flex flex-wrap justify-between">
              <div className="px-4 my-4 w-full xl:w-1/5">
                <a href="/" className="block w-56 mb-10">
                  <svg
                    version="1.1"
                    viewBox="0 0 3368 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="none" fillRule="evenodd">
                      <g transform="translate(0 -75)">
                        <g transform="translate(0 75)">
                          <rect
                            width="512"
                            height="512"
                            rx="128"
                            fill="#3D5AFE"
                          ></rect>
                          <rect
                            x="149"
                            y="176"
                            width="220"
                            height="220"
                            fill="#fff"
                          ></rect>
                          <circle cx="259" cy="156" r="40" fill="#fff"></circle>
                          <circle
                            cx="369"
                            cy="286"
                            r="40"
                            fill="#2962FF"
                          ></circle>
                        </g>
                        <text
                          fill="white"
                          fontFamily="Nunito-Bold, Nunito"
                          fontSize="512"
                          fontWeight="bold"
                        >
                          <tspan x="654" y="518">
                            Tailwindow
                          </tspan>
                        </text>
                      </g>
                    </g>
                  </svg>
                </a>
                <p className="text-justify">
                  Tailwindow is a collection of UI Components created using
                  Tailwind CSS Framework. The UI Components give you all of the
                  building blocks you need to build any designs without any
                  annoying opinionated styles you have to fight to override.
                </p>
              </div>

              <div className="px-4 my-4 w-full sm:w-auto">
                <div>
                  <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600">
                    Company
                  </h2>
                </div>
                <ul className="leading-8">
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>

              <div className="px-4 my-4 w-full sm:w-auto">
                <div>
                  <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600">
                    Blog
                  </h2>
                </div>
                <ul className="leading-8">
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Getting Started With HTML and CSS
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      What Is Flex And When to Use It?
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      How TailwindCSS Can Help Your Productivity?
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      5 Tips to Make Responsive Website
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      See More
                    </a>
                  </li>
                </ul>
              </div>

              <div className="px-4 my-4 w-full sm:w-auto xl:w-1/5">
                <div>
                  <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600">
                    Connect With Us
                  </h2>
                </div>
                <div className="flex">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-blue-400 hover:border-blue-400"
                  >
                    <svg
                      className="w-4 h-4 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-blue-400 hover:border-blue-400"
                  >
                    <svg
                      className="w-4 h-4 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                    </svg>
                  </a>
                  {/* Add more icons as needed */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
