import React from 'react';

export default function AboutSquareMedix() {
  const headingStyle = {
    fontSize: '38px',
    fontWeight: 'bold',
    color: '#000',
  };

  return (
    <div className="lg:w-[1140px] mx-auto flex flex-wrap gap-[50px] lg:flex-nowrap lg:mt-[100px]">
      <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
        <img
          src="/assets/asset 25.jpeg"
          alt="Description of the image"
          className="w-full object-cover rounded-xl"
        />
      </div>

      <div className="sm:w-full lg:w-1/2 p-0 flex flex-col items-center text-center sm:flex sm:items-center sm:text-center">
        <div className="flex flex-col lg:items-start items-center">
          <h4 className="uppercase inline px-[23px] py-[3px] rounded-[30px] bg-white text-btn-color w-[225px]">
            About Square Medix
          </h4>

          <div style={headingStyle}>
            Optimizing
          </div>
          <div style={headingStyle}>Revenue Cycle</div>
          <div style={headingStyle}>Management for</div>
          <div style={headingStyle}>Healthcare</div>
          <div style={headingStyle}>Providers</div>

          <p className="text-[18px] text-p-color text-justify pt-[30px] font-roboto sm:p-[15px] lg:p-1">
            At Square Medix, we specialize in providing end-to-end revenue cycle
            management solutions that streamline billing for healthcare
            providers. Leveraging our industry expertise, we enable medical
            practices to enhance financial performance and ensure seamless
            payment processes. Our commitment to excellence drives efficiency,
            helping practices focus on what matters most—patient care.
          </p>
        </div>
      </div>
    </div>
  );
}
