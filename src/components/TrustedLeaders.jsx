import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyringe } from "@fortawesome/free-solid-svg-icons"; // Import the specific icon

export default function TrustedLeaders() {
  return (

    <div className="w-[90%] m-auto mt-[100px] mb-[100px]">
      <div className="flex flex-wrap w-full sm:gap-[15px] lg:gap-0">
        {/* 1st section */}
        <div className="flex gap-5 sm:basis-full md:basis-1/2 lg:basis-1/3">
          <div className="p-5 text-[39px] border border-[50%] rounded-full flex justify-center items-center">
            {/* Use the imported faSyringe icon */}
            {/* <FontAwesomeIcon icon={faSyringe} style={{ color: "#f2f4f8" }} /> */}
            <img src="assets/hipa-img-1-removebg.png" alt="" loading="lazy" />
          </div>
          <div className="flex justify-center items-center">
            <h3 className="text-[23px] font-sora font-medium leading-[46px] tracking-normal text-primary-heading-color normal-case">
              HIPAA Compliant
            </h3>
          </div>
        </div>
        {/* 2nd section */}
        <div className="flex gap-5 sm:basis-full md:basis-1/2 lg:basis-1/3">
          <div className="p-5 text-[39px] border border-[50%] rounded-full  flex justify-center items-center">
            {/* Use the imported faSyringe icon */}
            <img className="w-full h-auto" src="assets/expert-team-img-1-removebg.png" alt="Expert Team" loading="lazy" />
            {/* <FontAwesomeIcon icon={faSyringe} style={{ color: "#f2f4f8" }} /> */}
          </div>
          <div className="flex justify-center items-center">
            <h3 className="text-[23px] font-sora font-medium leading-[46px] tracking-normal text-primary-heading-color normal-case">
              Certified Expert Team
            </h3>
          </div>
        </div>
        {/* 3rd section */}
        <div className="flex gap-5 sm:basis-full md:basis-1/2 lg:basis-1/3">
          <div className="p-5 text-[39px] border border-[50%] rounded-full flex justify-center items-center">
            {/* Use the imported faSyringe icon */}
            {/* <FontAwesomeIcon icon={faSyringe} style={{ color: "#f2f4f8" }} /> */}
            <img src="assets/trusted-by-leader-img-1-removebg.png" alt="" loading="lazy" />
          </div>
          <div className="flex justify-center items-center">
            <h3 className="text-[23px] font-sora font-medium leading-[46px] tracking-normal text-primary-heading-color normal-case">
              Trusted by Leaders
            </h3>
          </div>
        </div>
      </div>
</div>




  );
}
