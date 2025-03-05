export default function HealthCare() {
  const headingStyle = {
    fontFamily: "Sora, sans-serif",
    fontWeight: 500,
    fontSize: "48px",
    lineHeight: "60px",
    letterSpacing: "0",
    color: "#072D44",
    textTransform: "none",
    fontStyle: "normal",
  };
  return (
    <>
      <div className="lg:flex sm:w-[100%] lg:max-w-[1140px] m-auto">
        {/* First Child with Two Inner Divs */}
        <div className="sm:w-full lg:w-1/2  p-4 lg:flex gap-2">
          <div className="sm:w-full lg:w-3/5 relative ">
            <img
              src="/assets/doctor-img-4.jpg"
              loading="lazy"
              alt="Description of the first image" 
              className="object-cover h-full w-full rounded-[15px]"
              
            />
            <div className="md:w-[65%] md:h-[200px] bg-[#D0D7E1] p-[20px] md:absolute rounded-md rounded-bl-none bottom-0 right-0">
              <div className=" p-[20px] rounded-[15px] bg-health-care-bg">
                <img
                  src="https://xcare-demo.pbminfotech.com/datasite/wp-content/uploads/sites/7/2024/01/infobox-img-02.png" // Ensure the image path is correct
                  alt="Description of the first image" 
                  className="object-cover h-full w-full " 
                  loading="lazy"
                />
                <p className="text-[15px] mb-0 font-sora text-white">
                  300+ Appointment Booking Confirm for this Week
                </p>
              </div>
            </div>
          </div>
          <div className="sm:w-full lg:w-2/5  p-2 sm:mt-[30px] lg:mt-[0]">
            {" "}
            {/* Added flex to center image */}
            <img
              src="/assets/doctor-img-1.jpg" 
              alt="Description of the second image" 
              className="object-cover h-full w-full rounded-[15px]"
              loading="lazy"
            />
          </div>
        </div>

         {/* Second child */}
        <div className="sm:w-full lg:w-1/2 lg:pl-[90px] p-0 flex flex-col items-center text-center sm:flex sm:items-center sm:text-center">
          <div className="flex flex-col lg:items-start items-center">
            <h4 className="uppercase inline px-[23px] py-[3px] rounded-[30px] bg-white text-btn-color w-[225px]">
              About Square Medix
            </h4>
            <div style={headingStyle} className="mt-5">
            Optimizing
            </div>
            <div style={headingStyle}>Revenue Cycle</div>
            <div style={headingStyle}>Management for</div>
            <div style={headingStyle}>Healthcare</div>
            <div style={headingStyle}>Providers</div>
            <p className="font-[28px] text-p-color text-justify pt-[30px] font-roboto sm:p-[15px] lg:p-1 2xl:w-[50%] p-2">
            At Square Medix, we specialize in providing end-to-end revenue cycle management solutions that streamline billing for healthcare providers. Leveraging our industry expertise, we enable medical practices to enhance financial performance and ensure seamless payment processes. Our commitment to excellence drives efficiency, helping practices focus on what matters most—patient care.
            </p>
            <a href="/about">
              <button className="px-[35px] py-[18px] bg-primary-heading-color text-white text-center mt-[30px] rounded-[50px] font-bold">
                Know More
                <i
                  className="fa-solid fa-arrow-right ml-2 transform rotate-[320deg] inline-block"
                  style={{ marginLeft: "8px" }}
                ></i>
              </button>
            </a>
           
  </div>
</div>

      </div>
    </>
  );
}
