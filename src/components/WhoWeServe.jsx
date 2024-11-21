export default function WhoWeServe() {
  const serveDiv = {};
  return (
    <div className="pt-[100px] max-w-[1140px] mx-auto pb-[100px]">
      <div className="text-center mb-[15px]">
        <h4 className="font-sora uppercase inline-block px-[23px] py-[3px] rounded-[30px] bg-white text-btn-color text-center font-semibold text-[12px]">
          Who We Serve
        </h4>
      </div>

      <h2 className="font-sora font-medium text-[48px] leading-[60px] tracking-0 text-heading-color text-center mb-[50px]">
        Discover the diverse range of healthcare providers we support{" "}
      </h2>

      <div className="flex gap-[25px] max-w-[1140px]">
        <div className="w-1/6 bg-white rounded-[15px] relative py-[30px] px-[20px]">
          <h2 className="font-sans font-[600] text-[#031b4e] normal-case">
            Healthcare<span className="block">system</span>
          </h2>

          <div className="w-[60%] pt-[20px]">
            <img
              src="https://medipaybilling.com/wp-content/uploads/2024/09/solar_health-linear.png"
              alt="Billing"
              className="w-[80px] h-full"
            />
          </div>
          <div className="icon-btn w-[30px] rounded absolute right-2 bottom-2 ">
            <i
              className="fa-solid fa-arrow-right ml-2 transform rotate-[320deg] text-sm text-center  rounded-[50%] text-g-blue"
              style={{ marginLeft: "8px" }}
            ></i>
          </div>
        </div>
        <div className="w-1/6 bg-white rounded-[15px] relative py-[30px] px-[20px]">
          <h2 className="font-sans font-[600] text-[#031b4e] normal-case">
            Healthcare<span className="block">system</span>
          </h2>

          <div className="w-[60%] pt-[20px]">
            <img
              src="https://medipaybilling.com/wp-content/uploads/2024/09/ph_hospital-light.png"
              alt="Hospital"
              className="w-[80px] h-full"
            />
          </div>
          <div className="icon-btn w-[30px] rounded absolute right-2 bottom-2 ">
            <i
              className="fa-solid fa-arrow-right ml-2 transform rotate-[320deg] text-sm text-center  rounded-[50%] text-g-blue"
              style={{ marginLeft: "8px" }}
            ></i>
          </div>
        </div>
        <div className="w-1/6 bg-white rounded-[15px] relative py-[30px] px-[20px]">
          <h2 className="font-sans font-[600] text-[#031b4e] normal-case">
            Healthcare<span className="block">system</span>
          </h2>

          <div className="w-[60%] pt-[20px]">
            <img
              src="https://medipaybilling.com/wp-content/uploads/2024/09/streamline_health-care-2.png"
              alt="Care"
              className="w-[80px] h-full"
            />
          </div>
          <div className="icon-btn w-[30px]  rounded absolute right-2 bottom-2 ">
            <i
              className="fa-solid fa-arrow-right ml-2 transform rotate-[320deg] text-sm text-center  rounded-[50%] text-g-blue"
              style={{ marginLeft: "8px" }}
            ></i>
          </div>
        </div>
        <div className="w-1/6 bg-white rounded-[15px] relative py-[30px] px-[20px]">
          <h2 className="font-sans font-[600] text-[#031b4e] normal-case">
            Healthcare<span className="block">system</span>
          </h2>

          <div className="w-[60%] pt-[20px]">
            <img
              src="https://medipaybilling.com/wp-content/uploads/2024/09/hugeicons_doctor-03.png"
              alt="Practices"
              className="w-[80px] h-full"
            />
          </div>
          <div className="icon-btn w-[30px] rounded absolute right-2 bottom-2 ">
            <i
              className="fa-solid fa-arrow-right ml-2 transform rotate-[320deg] text-sm text-center  rounded-[50%] text-g-blue"
              style={{ marginLeft: "8px" }}
            ></i>
          </div>
        </div>
        <div className="w-1/6 bg-white rounded-[15px] relative py-[30px] px-[20px]">
          <h2 className="font-sans font-[600] text-[#031b4e] normal-case">
            Healthcare<span className="block">system</span>
          </h2>

          <div className="w-[60%] pt-[20px]">
            <img
              src="https://medipaybilling.com/wp-content/uploads/2024/09/mdi_guest-room-outline.png"
              alt="Emergency Rooms"
              className="w-[80px] h-full"
            />
          </div>
          <div className="icon-btn w-[30px] rounded absolute right-2 bottom-2 ">
            <i
              className="fa-solid fa-arrow-right ml-2 transform rotate-[320deg] text-sm text-center  rounded-[50%] text-g-blue"
              style={{ marginLeft: "8px" }}
            ></i>
          </div>
        </div>
        <div className="w-1/6 bg-white rounded-[15px] relative py-[30px] px-[20px]">
          <h2 className="font-sans font-[600] text-[#031b4e] normal-case">
            Healthcare<span className="block">system</span>
          </h2>

          <div className="w-[60%] pt-[20px]">
            <img
              src="https://medipaybilling.com/wp-content/uploads/2024/09/fluent_doctor-12-regular.png"
              alt="Specialities"
              className="w-[80px] h-full"
            />
          </div>
          <div className="icon-btn w-[30px] rounded absolute right-2 bottom-2 ">
            <i
              className="fa-solid fa-arrow-right ml-2 transform rotate-[320deg] text-sm text-center  rounded-[50%] text-g-blue"
              style={{ marginLeft: "8px" }}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
}
