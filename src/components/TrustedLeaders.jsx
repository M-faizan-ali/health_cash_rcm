import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyringe } from '@fortawesome/free-solid-svg-icons'; // Import the specific icon

export default function TrustedLeaders() {
  return (
    <div className="w-[1140px] m-auto mt-[100px] mb-[100px]">
      <div className='flex gap-5 w-full'>
        {/* 1st section  */}
        <div className='flex gap-5 basis-[33%]'>
          <div className='p-5 text-[39px] border border-[50%] rounded-full bg-[#00BBBD] flex justify-center items-center'>
            {/* Use the imported faSyringe icon */}
            <FontAwesomeIcon icon={faSyringe} style={{ color: "#f2f4f8" }} />
          </div>
          <div className='flex justify-center items-center'>
            <h3 className="text-[23px] font-sora font-medium leading-[46px] tracking-normal text-heading-color normal-case ml-5">
              HIPAA Compliant
            </h3>
          </div>
        </div>
        {/* second section  */}
        <div className='flex gap-5 basis-[33%]'>
          <div className='p-5 text-[39px] border border-[50%] rounded-full bg-[#00BBBD] flex justify-center items-center'>
            {/* Use the imported faSyringe icon */}
            <FontAwesomeIcon icon={faSyringe} style={{ color: "#f2f4f8" }} />
          </div>
          <div className='flex justify-center items-center'>
            <h3 className="text-[23px] font-sora font-medium leading-[46px] tracking-normal text-heading-color normal-case ml-5">
              HIPAA Compliant
            </h3>
          </div>
        </div>
        {/* 3rd section  */}
        <div className='flex gap-5 basis-[33%]'>
          <div className='p-5 text-[39px] border border-[50%] rounded-full bg-[#00BBBD] flex justify-center items-center'>
            {/* Use the imported faSyringe icon */}
            <FontAwesomeIcon icon={faSyringe} style={{ color: "#f2f4f8" }} />
          </div>
          <div className='flex justify-center items-center'>
            <h3 className="text-[23px] font-sora font-medium leading-[46px] tracking-normal text-heading-color normal-case ml-5">
              HIPAA Compliant
            </h3>
          </div>
        </div>
      </div>
      
    </div>
  );
}