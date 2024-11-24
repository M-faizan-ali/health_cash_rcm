export default function HealthCare() {
  const headingStyle = {
    fontFamily: "Sora, sans-serif",
    fontWeight: 500,
    fontSize: "48px",
    lineHeight: "60px",
    letterSpacing: "0",
    color: "#031b4e",
    textTransform: "none",
    fontStyle: "normal",
  };
  return (
    <>
      <div className="lg:flex sm:w-[100%] lg:w-[95%] m-auto">
        {/* First Child with Two Inner Divs */}
        <div className="sm:w-full lg:w-1/2  p-4 lg:flex gap-2">
          <div className="sm:w-full lg:w-3/5 relative ">
            <img
              src="/assets/asset 56.jpeg" // Ensure the image path is correct
              alt="Description of the first image" // Provide a descriptive alt text
              className="object-cover h-full w-full rounded-[15px]" // Ensures the image covers the div
            />
            <div className="w-[65%] h-[200px] bg-body-color p-[20px] absolute rounded-md rounded-bl-none bottom-0 right-0">
              <div className=" p-[20px] rounded-[15px] bg-health-care-bg">
                <img
                  src="https://xcare-demo.pbminfotech.com/datasite/wp-content/uploads/sites/7/2024/01/infobox-img-02.png" // Ensure the image path is correct
                  alt="Description of the first image" // Provide a descriptive alt text
                  className="object-cover h-full w-full " // Ensures the image covers the div
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
              src="/assets/asset 2.jpeg" // Ensure the image path is correct
              alt="Description of the second image" // Provide a descriptive alt text
              className="object-cover h-full w-full rounded-[15px]" // Ensures the image covers the div
            />
          </div>
        </div>

        {/* child 2 */}
        {/* <div className="sm:w-full lg:w-1/2 lg:pl-[90px] p-0">
          <div className="">
            <h4 className="uppercase inline px-[23px] py-[3px] rounded-[30px] bg-white text-btn-color">
              About Medipay Billing{" "}
            </h4>
            <div style={headingStyle} className="mt-5">
              Streamlining
            </div>
            <div style={headingStyle}>Revenue Cycle</div>
            <div style={headingStyle}>Management for</div>
            <div style={headingStyle}>Healthcare</div>
            <div style={headingStyle}>Providers</div>
            <p className="font-[28px] text-p-color text-justify pt-[30px] font-roboto ">
              At Medipay Billing, we are committed to delivering comprehensive
              revenue cycle management solutions that simplify billing processes
              for healthcare providers. With our industry expertise and
              dedication to excellence, we help medical practices optimize their
              financial performance.
            </p>
            <button className="px-[35px] py-[18px] bg-g-blue text-white text-center mt-[30px] rounded-[50px]">
              Know More
              <i
                className="fa-solid fa-arrow-right ml-2 transform rotate-[320deg] inline-block"
                style={{ marginLeft: "8px" }}
              ></i>
            </button>
          </div>
        </div> */}


        {/* copy  */}
        <div className="sm:w-full lg:w-1/2 lg:pl-[90px] p-0 flex flex-col items-center text-center sm:flex sm:items-center sm:text-center">
          <div>
            <h4 className="uppercase inline px-[23px] py-[3px] rounded-[30px] bg-white text-btn-color">
              About Medipay Billing
            </h4>
            <div style={headingStyle} className="mt-5">
              Streamlining
            </div>
            <div style={headingStyle}>Revenue Cycle</div>
            <div style={headingStyle}>Management for</div>
            <div style={headingStyle}>Healthcare</div>
            <div style={headingStyle}>Providers</div>
            <p className="font-[28px] text-p-color text-justify pt-[30px] font-roboto p-2">
              At Medipay Billing, we are committed to delivering comprehensive revenue
              cycle management solutions that simplify billing processes for healthcare
              providers. With our industry expertise and dedication to excellence, we
              help medical practices optimize their financial performance.
            </p>
            <button className="px-[35px] py-[18px] bg-g-blue text-white text-center mt-[30px] rounded-[50px]">
              Know More
              <i
                className="fa-solid fa-arrow-right ml-2 transform rotate-[320deg] inline-block"
                style={{ marginLeft: "8px" }}
              ></i>
            </button>
  </div>
</div>

      </div>
    </>
  );
}
