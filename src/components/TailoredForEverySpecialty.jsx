import React from 'react'

export default function TailoredForEverySpecialty() {
  return (
    <div className="sm:w-full lg:w-[1140px] m-auto flex justify-center">
        <div className=" grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4">
          <div 
            className=" bg-cover bg-center rounded-[15px]"
            style={{ 
              backgroundImage: `url('assets/tailored-speciality-img-1.jpg')`,
              height: '500px',
            }}
          ></div>
         <div className="p-4 flex justify-center items-center bg-bg-color rounded-[15px] bg-cover bg-center ">
            <div className='w-[70%] flex flex-col gap-5'>
              <h4 className="uppercase w-[250px] text-center px-[23px] py-[3px] rounded-[30px] bg-white text-btn-color">
                About Square Medix
              </h4>
              <h2 className="font-sora font-medium text-[48px] leading-[60px] tracking-[0] text-white normal-case not-italic">
                Custom-Fit for Every Specialty
              </h2>
              <p className="font-roboto font-normal text-[16px] leading-[1.5] tracking-[0] text-white normal-case not-italic">
              At Square Medix, we provide comprehensive outsourced medical billing services, meticulously crafted to cater to the unique needs of each specialty. Our team of expert billing and coding professionals is committed to handling every facet of your medical billing process, from claim submission to denial management. We emphasize precision, efficiency, and compliance, ensuring your revenue cycle is fully optimized.
              </p>
            </div>
          </div>

      </div>
  </div>
  )
}
