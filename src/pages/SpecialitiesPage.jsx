import React from 'react'
import {allSpecialitiesContent} from '../constants';
import RealMenu from '../components/RealMenu';
import Navbar2 from '../components/Navbar2';
export default function SpecialitiesPage() {
  return (
    <div>
      <Navbar2 
        customBackgroundImage="/assets/speciality-img-5.jpg"
        customParagraph="Welcome to our amazing service!"
        customSpan="> specialities"
      />
      {/* <RealMenu /> */}
      {/* first div  */}
      <div 
        className="bg-cover bg-center mt-[50px] mb-[50px]" 
        style={{ backgroundImage: 'url("/assets/speciality-img-2.jpg")' }}
      >
        <div className='w-[90%] m-auto pt-[50px] pb-[50px] pl-5 pr-5 '>
          <h1 className='text-[50px] font-semibold'>
            Specialities
          </h1>
          <p className='w-full lg:w-[50%] mt-3 text-[18px]'>
            Square Medix offers specialized medical billing services tailored to over 75 specialties across the nation, regardless of your practice size or type.
          </p>
        </div>
      </div>
      {/* second div  */}
      <div className="p-5 bg-[#EDF1FC] pt-[50px] pb-[50px] grid grid-cols md:grid-cols-2 lg:grid-cols-5 gap-4 2xl:gap-9 text-center">
        {Object.keys(allSpecialitiesContent).map((speciality, index) => (
        <>
        <div class=" p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center group hover:bg-primary-heading-color">
          <img
            className="w-[70px] h-[70px] group-hover:filter group-hover:invert group-hover:brightness-0"
            src={allSpecialitiesContent[speciality]?.image}
            alt=""
          />
          <a href="#">
            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white group-hover:text-white">
              {allSpecialitiesContent[speciality]?.title}
            </h5>
          </a>
          <p class="mb-2 font-normal text-gray-500 dark:text-gray-400 overflow-hidden break-words max-w-full group-hover:text-white">
            {allSpecialitiesContent[speciality]?.content}
          </p>
        </div>
      </>
      
       
        ))}
     
      </div>
    </div>
  )
}
