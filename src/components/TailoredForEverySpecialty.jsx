import React from 'react'

export default function TailoredForEverySpecialty() {
  return (
    <div className="w-full flex justify-center">
        <div className="w-[90%] grid grid-cols-2 gap-4">
          <div 
            className=" bg-cover bg-center rounded-[15px]"
            style={{ 
              backgroundImage: `url('https://medipaybilling.com/wp-content/uploads/2024/01/bg-img-05.jpg')`,
              height: '500px',
            }}
          ></div>
         <div className="p-4 flex justify-center items-center bg-g-blue rounded-[15px] bg-cover bg-center bg-[url('https://medipaybilling.com/wp-content/uploads/2024/01/service-bg-pattern.png')]">
            <div className='w-[70%] flex flex-col gap-5'>
              <h4 className="uppercase w-[250px] text-center px-[23px] py-[3px] rounded-[30px] bg-white text-btn-color">
                About Medipay Billing
              </h4>
              <h2 className="font-sora font-medium text-[48px] leading-[60px] tracking-[0] text-white normal-case not-italic">
                Tailored for Every Speciality
              </h2>
              <p className="font-roboto font-normal text-[16px] leading-[1.5] tracking-[0] text-white normal-case not-italic">
                At Medipay Billing, we offer a range of outsourced medical billing services designed to meet the specific needs of various specialties. Our team of seasoned billing and coding professionals is dedicated to managing every aspect of your medical billing, from claim submission to denial management. We prioritize accuracy, timeliness, and compliance to ensure that your revenue is optimized.
              </p>
            </div>
          </div>

      </div>
  </div>
  )
}
