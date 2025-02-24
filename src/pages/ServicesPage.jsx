import React from 'react'
import Navbar2 from '../components/Navbar2'
import {servicesMainCards, servicesMainCardsPart2,servicesLastCards} from '../constants';

export default function ServicesPage() {
  return (
    <>
        <Navbar2 
            customBackgroundImage="/assets/speciality-img-5.jpg"
            customSpan="> services"
        />
        <div 
            className="bg-cover bg-center mt-[50px] mb-[50px]" 
            style={{ backgroundImage: 'url("/assets/speciality-img-2.jpg")' }}
        >
        <div className='w-[90%] m-auto pt-[50px] pb-[50px] pl-5 pr-5'>
          <h1 className='text-[50px] font-semibold '>
            Services
          </h1>
          <p className='w-full lg:w-[50%] mt-3 text-[18px]'>
          Optimize your billing process from patient intake to payment posting for seamless efficiency and accuracy.
          </p>
        </div>
        </div>


    {/* Main  service cards section  */}
    <div className='bg-[#EDF1FC] p-5 pb-[50px]'>
        <div className='w-[60%] m-auto '>
            <h1 className='text-center text-[18px] text-btn-color'>who we serve</h1>
            <h2 className='capitalize sm:text-[30px] md:text-[35px] lg:text-[45px] font-bold text-center '>Expert Billing Solutions from Square Medix</h2>
        </div>
        <div className="md:w-[90%] m-auto grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
            {servicesMainCards.map((service, index) => (
                <div
                key={index}
                className="rounded-2xl shadow-lg p-6 bg-transparent hover:shadow-2xl transition-shadow duration-300 border-2 border-solid"
                >
                <h1 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h1>
                <ul className="list-disc ml-6 text-gray-600">
                    {service.content.map((item, idx) => (
                    <li key={idx} className="mb-2">{item}</li>
                    ))}
                </ul>
                </div>
            ))}
        </div>
    </div>

    {/* main service  cards second section  */}
    <div className=' bg-[#17224D] '>
        <div className="w-full m-auto grid md:grid-cols-2 lg:grid-cols-4 gap-5 pt-[50px] pb-[50px] pl-5 pr-5">
                {servicesMainCardsPart2.map((service, index) => (
                    <div
                    key={index}
                    className="rounded-2xl shadow-lg p-6 bg-white hover:shadow-2xl transition-shadow duration-300  bg-[#EFFF]"
                    >
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h1>
                    <p>{service.content}</p>
                    </div>
                ))}
        </div>
    </div>

    {/* Percentage Counting */}
    <div className="w-full pt-[50px] pb-[50px] bg-white">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center">
                <p className="text-[40px] font-bold">97.35%</p>
                <p className="text-[19px]">Claim Approval</p>
            </div>
            <div className="text-center">
                <p className="text-[40px] font-bold">98.17%</p>
                <p className="text-[19px]">Fast Reimbursements</p>
            </div>
            <div className="text-center">
                <p className="text-[40px] font-bold">98.44%</p>
                <p className="text-[19px]">Satisfaction</p>
            </div>
            <div className="text-center">
                <p className="text-[40px] font-bold">98.89%</p>
                <p className="text-[19px]">Overall Score</p>
            </div>
        </div>
    </div>


                {/* features last section  */}
    <div className='pb-[50px] pt-5 bg-[#EDF1FC]'>
        <div className='pl-5 pr-5'>
            <h1 className='text-center text-[18px] text-btn-color'>Our Services</h1>
            <h2 className='capitalize sm:text-[28px] md:text-[35px] lg:text-[45px] font-bold text-center '>Experience the benefits of expert medical billing consultation and improve your practice
            </h2>
        </div>
        <div className="w-[90%] m-auto grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        {servicesLastCards.map((service, index) => (
            <div class=" p-6 bg-transparent border-2 border-solid border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 text-center flex flex-col gap-3 items-center">
                <img src={service.img} alt="" width={50} />
                <a href="#">
                    <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{service.title}</h5>
                </a>
                <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">{service.desc}</p>
            </div>
        ))}
        </div>
    </div>

    </>
    
    
  )
}
