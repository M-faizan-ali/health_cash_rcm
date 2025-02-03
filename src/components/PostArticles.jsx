import React from 'react';

export default function PostArticles() {
  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <div className='text-primary-heading-color text-[45px] font-bold pt-5 pb-5'>Our Latest Post and Articles</div>
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
        <div className="rounded overflow-hidden shadow-lg">
          <a href="#"></a>
          <div className="relative">
            <a href="#">
              <img
                className="w-full h-[250px] object-cover"
                src="assets/blog-heading-1.jpeg"
                alt="Accerelate Your Revenue"
                loading='lazy'
              />
              <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
            </a>
            <a href="#!">
              <div className="absolute bottom-0 left-0 bg-primary-heading-color px-4 py-2 text-white text-sm hover:bg-white hover:primary-heading-color transition duration-500 ease-in-out">
                Photos
              </div>
            </a>

            <a href="#!">
              <div className="text-sm absolute top-0 right-0 bg-primary-heading-color px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:primary-heading-color transition duration-500 ease-in-out">
                <span className="font-bold">27</span>
                <small>March</small>
              </div>
            </a>
          </div>
          <div className="px-6 py-4">
            <a
              href="#"
              className="font-semibold text-lg inline-block hover:primary-heading-color transition duration-500 ease-in-out"
            >
              How SquareMedix can accelerate your revenue
            </a>
            
          </div>
          {/* <div className="px-6 py-4 flex flex-row items-center">
            <span
              href="#"
              className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center"
            >
              <svg
                height="13px"
                width="13px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
                style={{ enableBackground: 'new 0 0 512 512' }}
                xmlSpace="preserve"
              >
                <g>
                  <g>
                    <path d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256 c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128 c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"></path>
                  </g>
                </g>
              </svg>
              <span className="ml-1">6 mins ago</span>
            </span>
          </div> */}
        </div>

        <div className="rounded overflow-hidden shadow-lg">
          <a href="#"></a>
          <div className="relative">
            <a href="#">
              <img
                className="w-full h-[250px] object-cover"
                src="assets/blog-heading-2.jpeg"
                alt="Sunset in the mountains"
                loading='lazy'
              />
              <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
            </a>
            <a href="#!">
              <div className="absolute bottom-0 left-0 bg-primary-heading-color px-4 py-2 text-white text-sm hover:bg-white hover:text- transition duration-500 ease-in-out">
                Photos
              </div>
            </a>

            <a href="#!">
              <div className="text-sm absolute top-0 right-0 bg-primary-heading-color px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:primary-heading-color transition duration-500 ease-in-out">
                <span className="font-bold">20</span>
                <small>March</small>
              </div>
            </a>          </div>
          <div className="px-6 py-4">
            <a
              href="#"
              className="font-semibold text-lg inline-block hover:primary-heading-color transition duration-500 ease-in-out"
            >
              Revenue Cycle Management - A Comprehensive guide to US-Healthcare Providers
            </a>
          </div>
          {/* <div className="px-6 py-4 flex flex-row items-center">
            <span
              href="#"
              className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row justify-between items-center"
            >
              <svg
                height="13px"
                width="13px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
                style={{ enableBackground: 'new 0 0 512 512' }}
                xmlSpace="preserve"
              >
                <g>
                  <g>
                    <path d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256 c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128 c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"></path>
                  </g>
                </g>
              </svg>
              <span className="ml-1">3 mins read</span>
            </span>
          </div> */}
        </div>

        <div className="rounded overflow-hidden shadow-lg">
          <a href="#"></a>
          <div className="relative">
            <a href="#">
              <img
                className="w-full h-[250px] object-cover"
                src="assets/blog-heading-3.jpeg"
                loading='lazy'
              />
              <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
            </a>
            <a href="#!">
              <div className="absolute bottom-0 left-0 bg-primary-heading-color px-4 py-2 text-white text-sm hover:bg-white hover:primary-heading-color transition duration-500 ease-in-out">
                Photos
              </div>
            </a>

            <a href="#!">
              <div className="text-sm absolute top-0 right-0 bg-primary-heading-color px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:primary-heading-color transition duration-500 ease-in-out">
                <span className="font-bold">15</span>
                <small>April</small>
              </div>
            </a>
          </div>
          <div className="px-6 py-4">
            <a
              href="#"
              className="font-semibold text-lg inline-block hover:primary-heading-color transition duration-500 ease-in-out"
            >
              Tips to Improve the Billing Discprepencies and Improvements
            </a>
          </div>
          {/* <div className="px-6 py-4 flex flex-row items-center">
            <span
              href="#"
              className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row justify-between items-center"
            >
              <svg
                height="13px"
                width="13px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
                style={{ enableBackground: 'new 0 0 512 512' }}
                xmlSpace="preserve"
              >
                <g>
                  <g>
                    <path d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256 c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128 c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"></path>
                  </g>
                </g>
              </svg>
              <span className="ml-1">6 mins read</span>
            </span>
          </div> */}
        </div>
      </div>
    </div>
  );
}
