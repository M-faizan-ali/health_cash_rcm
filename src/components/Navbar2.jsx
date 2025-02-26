import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import RealMenu from "./RealMenu";

export default function Navbar2({
  customBackgroundImage,
  customParagraph,
  customSpan,
}) {
  const [page, setPage] = useState("/");
  const [isSticky, setIsSticky] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState(
    customBackgroundImage || "/assets/banner-bg-image.jpg"
  );
  const heroRef = useRef(null);

  useEffect(() => {
    const currUrl = window.location.pathname;
    setPage(currUrl);
  }, [page]);

  // Handle sticky navigation
  useEffect(() => {
    const handleScroll = () => {
      // Check if the screen width is lg or larger
      if (window.innerWidth >= 1024) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            setIsSticky(!entry.isIntersecting);
          },
          {
            root: null,
            threshold: 0.1,
          }
        );

        if (heroRef.current) {
          observer.observe(heroRef.current);
        }

        return () => {
          if (heroRef.current) {
            observer.unobserve(heroRef.current);
          }
        };
      } else {
        setIsSticky(false); // Ensure it doesn't get sticky on smaller screens
      }
    };

    // Call the function initially and add an event listener for window resize
    handleScroll();
    window.addEventListener("resize", handleScroll);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", handleScroll);
  }, []);

  // Handle background image change based on screen size
  useEffect(() => {
    const updateBackgroundImage = () => {
      if (window.innerWidth <= 640) {
        // Small screen (e.g., mobile)
        setBackgroundImage(
          customBackgroundImage || "/assets/home-banner-img-sm.jpg"
        );
      } else {
        // Larger screens
        setBackgroundImage(
          customBackgroundImage || "/assets/banner-bg-image.jpg"
        );
      }
    };

    // Add event listener on window resize
    window.addEventListener("resize", updateBackgroundImage);

    // Initial check on mount
    updateBackgroundImage();

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", updateBackgroundImage);
  }, [customBackgroundImage]);

  return (
    <div ref={heroRef} className="relative">
      <div
        className="mb-[15px] sm:w-[100%] sm:rounded-none xl:w-[100%] m-auto xl:rounded-[15px]"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className={`px-4 ${
            isSticky && window.innerWidth >= 1024
              ? "fixed w-full mx-auto top-0 z-50 bg-white text-white shadow-2xl sticky-nav"
              : ""
          }`}
        >
          <RealMenu />
        </div>

        <div className="pb-[100px] pl-9 mt-[80px] w-full">
          {page === "/" && (
            <button className="font-roboto text-[11px] font-normal text-white uppercase no-underline tracking-[1.1px] leading-[22px] text-left whitespace-nowrap px-[17px] py-[2px] border border-white rounded-full bg-transparent opacity-100 pointer-events-auto mb-[30px]">
              Square Medix
            </button>
          )}

          {/* First Heading */}
          <h1 className="font-sora text-[26px] sm:text-[26px] md:text-[46px] xl:text-[65px] font-normal text-white tracking-[0px] leading-tight text-left whitespace-normal p-0 w-[80%]">
            {page === "/about"
              ? "About Us"
              : page === "/contact"
              ? "Contact Us"
              : page === "/services"
              ? "Our Popular Services"
              : page === "/service"
              ? "Our Popular Services"
              : page === "/specialities"
              ? "Our Popular Specialities"
              : page === "/blog"
              ? "Blogs"
              : "Empowering success with complete solutions."}
          </h1>

          {page === "/" ? (
            <>
              <p className="font-roboto text-[14px] sm:text-[17px] md:text-[20px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] font-normal text-white tracking-[0px] leading-tight text-left whitespace-normal overflow-visible pt-[20px] h-auto border-t border-white/10 z-[11] align-top transform origin-center translate-x-0 translate-y-0 block bg-transparent w-[60%]">
                {customParagraph ||
                  "Transform your practice with Square Medix – seamless, efficient, and patient-friendly billing solutions."}
              </p>

              <Link
                to="/contact"
                className="inline-block font-sora text-[11px] font-medium text-[#031b4e] uppercase tracking-[0px] leading-[33px] text-left whitespace-nowrap overflow-visible px-[32px] py-[11px] min-h-0 w-auto h-auto z-[12] rounded-[30px] align-top transform origin-center translate-x-0 translate-y-0 block left-[27.7192px] top-[608.193px] visible opacity-100 pointer-events-auto border-none bg-white mt-[30px] hover:bg-primary-heading-color hover:text-white"
              >
                Contact Us
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2 inline"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </>
          ) : page === "/about" ? (
            <p className="font-roboto text-[14px] sm:text-[17px] lg:text-[20px] font-normal text-white tracking-[0px] leading-tight text-left whitespace-normal overflow-visible pt-[20px] w-auto h-auto border-t border-white/10 z-[11] align-top transform origin-center translate-x-0 translate-y-0 block bg-transparent">
              <Link to="/">Square Medix </Link>
              <span className="">{customSpan || "> About Us"}</span>
            </p>
          ) : (
            <p className="font-roboto text-[14px] sm:text-[17px] lg:text-[20px] font-normal text-white tracking-[0px] leading-tight text-left whitespace-normal overflow-visible pt-[20px] w-auto h-auto border-t border-white/10 z-[11] align-top transform origin-center translate-x-0 translate-y-0 block bg-transparent">
              <Link to="/">Square Medix </Link>
              <span className="">{customSpan || "> Contact Us"}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
