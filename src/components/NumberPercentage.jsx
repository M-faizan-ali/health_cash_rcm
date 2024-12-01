import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
export default function NumberPercentage() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1500, // Animation duration (in ms)
      once: true, // If true, animation happens only once
    });
  }, []);

  const [startCount, setStartCount] = useState(false);

  // Intersection Observer to trigger the counter
  const { ref, inView } = useInView({
    triggerOnce: true, // trigger only once
    onChange: (inView) => {
      if (inView) {
        setStartCount(true); // Start counter when the section comes into view
      }
    },
  });

  const paragraphStyles = {
    fontFamily: "Roboto, sans-serif",
    fontWeight: "normal",
    fontStyle: "normal",
    fontSize: "16px",
    lineHeight: "16px",
    color: "#2e3482",
    marginBottom: "8px",
  };
  const paragraphStyles2 = {
    fontSize: "90px",
    lineHeight: "90px",
    fontWeight: "600",
    fontFamily: "Sora, sans-serif",
    letterSpacing: "0",
    color: "#031b4e",
    textTransform: "none",
    fontStyle: "normal",
  };
  const iconStyle =
    "font-flaticon font-normal leading-custom text-custom text-[#2e3482]";
    return (
      <div className="mt-[50px] mb-[50px]" ref={ref} data-aos="fade-up">
        <div className="md:flex justify-between sm:flex-col md:flex-row">
          <div className="flex-1 text-center p-4">
            <p style={paragraphStyles}>
              <i className="fas fa-users mr-2"></i>First Level Acceptance
            </p>
            <p style={paragraphStyles2}>
              {startCount && <CountUp start={0} end={88} duration={2.5} />}
              <sup>+</sup>
            </p>
          </div>
          <div className="flex-1 text-center p-4">
            <p style={paragraphStyles}>
              <i
                className={`fas fa-check-circle text-green-500 mr-2 ${iconStyle}`}
              ></i>
              Provider Served
            </p>
            <p style={paragraphStyles2}>
              {startCount && <CountUp start={0} end={700} duration={1.5} />}
              <sup>+</sup>
            </p>
          </div>
          <div className="flex-1 text-center p-4">
            <p style={paragraphStyles}>
              <i className="fas fa-hand-holding-heart text-gray-500 mr-2"></i>
              Revenue Increase
            </p>
            <p style={paragraphStyles2}>
              {startCount && <CountUp start={0} end={20} duration={3.5} />}%
            </p>
          </div>
        </div>
      </div>
    );
  }