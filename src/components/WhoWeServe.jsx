export default function WhoWeServe() {
  const serveDiv = {};
  return (
    <div className="pt-[100px] max-w-[1140px] mx-auto pb-[100px]">
      <div className="text-center mb-[15px]">
        <h4 className="font-sora uppercase inline-block px-[23px] py-[3px] rounded-[30px] bg-white text-btn-color text-center font-semibold text-[12px]">
          Who We Serve
        </h4>
      </div>

      <h2 className="font-sora font-medium text-[48px] leading-[60px] tracking-0 text-primary-heading-color text-center mb-[50px]">
      Discover our comprehensive network of trusted healthcare providers.{" "}
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-[25px] max-w-[1140px]">
        <div className="border border-gray-200 bg-white rounded-[15px] relative py-[30px] px-[20px] transform transition-transform duration-300 ease-in-out hover:-translate-y-2">
          <h2 className="font-sans font-[600] text-primary-heading-color normal-case">
            Healthcare<span className="block">system</span>
          </h2>

          <div className="w-[60%] pt-[20px]">
            <img
              src="assets/asset 3.png"
              alt="Billing"
              className="w-[80px] h-full"
              loading="lazy"

            />
          </div>
          <div className="icon-btn w-[30px] rounded absolute right-2 bottom-2 ">
            <i
              className="fa-solid fa-arrow-right ml-2 transform rotate-[320deg] text-sm text-center  rounded-[50%] text-g-blue"
              style={{ marginLeft: "8px" }}
            ></i>
          </div>
        </div>
        <div className="border border-gray-200 bg-white rounded-[15px] relative py-[30px] px-[20px] transform transition-transform duration-300 ease-in-out hover:-translate-y-2">
          <h2 className="font-sans font-[600] text-primary-heading-color normal-case">
            <span>Hospitals</span>
          </h2>

          <div className="w-[60%] pt-[20px]">
            <img
              src="assets/asset 4.png"
              alt="Hospital"
              className="w-[80px] h-full"
              loading="lazy"

            />
          </div>
          <div className="icon-btn w-[30px] rounded absolute right-2 bottom-2 ">
            <i
              className="fa-solid fa-arrow-right ml-2 transform rotate-[320deg] text-sm text-center  rounded-[50%] text-g-blue"
              style={{ marginLeft: "8px" }}
            ></i>
          </div>
        </div>
        <div className="border border-gray-200 bg-white rounded-[15px] relative py-[30px] px-[20px] transform transition-transform duration-300 ease-in-out hover:-translate-y-2">
          <h2 className="font-sans font-[600] text-primary-heading-color normal-case">
            Urgent<span className="block">Care</span>
          </h2>

          <div className="w-[60%] pt-[20px]">
            <img
              src="assets/asset 5.png"
              alt="Care"
              className="w-[80px] h-full"
              loading="lazy"

            />
          </div>
          <div className="icon-btn w-[30px]  rounded absolute right-2 bottom-2 ">
            <i
              className="fa-solid fa-arrow-right ml-2 transform rotate-[320deg] text-sm text-center  rounded-[50%] text-g-blue"
              style={{ marginLeft: "8px" }}
            ></i>
          </div>
        </div>
        <div className="border border-gray-200 bg-white rounded-[15px] relative py-[30px] px-[20px] transform transition-transform duration-300 ease-in-out hover:-translate-y-2">
          <h2 className="font-sans font-[600] text-primary-heading-color normal-case">
            Private<span className="block">Practices</span>
          </h2>

          <div className="w-[60%] pt-[20px]">
            <img
              src="assets/asset 6.png"
              alt="Practices"
              className="w-[80px] h-full"
              loading="lazy"

            />
          </div>
          <div className="icon-btn w-[30px] rounded absolute right-2 bottom-2 ">
            <i
              className="fa-solid fa-arrow-right ml-2 transform rotate-[320deg] text-sm text-center  rounded-[50%] text-g-blue"
              style={{ marginLeft: "8px" }}
            ></i>
          </div>
        </div>
        <div className="border border-gray-200 bg-white rounded-[15px] relative py-[30px] px-[20px] transform transition-transform duration-300 ease-in-out hover:-translate-y-2">
          <h2 className="font-sans font-[600] text-primary-heading-color normal-case">
            Emergency<span className="block">Rooms</span>
          </h2>

          <div className="w-[60%] pt-[20px]">
            <img
              src="assets/asset 7.png"
              alt="Emergency Rooms"
              className="w-[80px] h-full"
              loading="lazy"
            />
          </div>
          <div className="icon-btn w-[30px] rounded absolute right-2 bottom-2 ">
            <i
              className="fa-solid fa-arrow-right ml-2 transform rotate-[320deg] text-sm text-center  rounded-[50%] text-g-blue"
              style={{ marginLeft: "8px" }}
            ></i>
          </div>
        </div>
        <div className="border border-gray-200 bg-white rounded-[15px] relative py-[30px] px-[20px] transform transition-transform duration-300 ease-in-out hover:-translate-y-2">
          <h2 className="font-sans font-[600] text-primary-heading-color normal-case">
            All<span className="block">Specialities</span>
          </h2>

          <div className="w-[60%] pt-[20px]">
            <img
              src="assets/asset 8.png"
              alt="Specialities"
              className="w-[80px] h-full"
              loading="lazy"
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
