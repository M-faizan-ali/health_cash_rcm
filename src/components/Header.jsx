import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaSearch } from "react-icons/fa";

export default function Header() {
  // Common styles for text and icons
  const commonStyles = {
    fontFamily: "Roboto, sans-serif",
    fontSize: "14px",
    marginRight: "6px",
    color: "#2d3888",
    transition: "all 0.3s",
  };

  return (
    <>
      <div className="w-[95%] m-auto flex ">
        {/* First Div */}
        <div className="bg w-1/2 p-4">
          <div className="flex gap-9 items-center">
            {/* Location with icon */}
            <p className="flex items-center gap-2" style={commonStyles}>
              <FaMapMarkerAlt style={commonStyles} /> Dublin - Ohio
            </p>
            {/* Email with icon */}
            <a
              href="#"
              className="flex items-center gap-2"
              style={commonStyles}
            >
              <FaEnvelope style={commonStyles} /> info@medipaybilling.com
            </a>
          </div>
        </div>

        {/* Second Div */}
        <div className=" w-1/2 p-4">
          <div className="flex justify-end items-center">
            {" "}
            {/* Align items to the end */}
            {/* Rotated Call icon pointing right */}
            <FaPhone style={{ ...commonStyles, transform: "rotate(90deg)" }} />
            <p style={commonStyles}>Make a call: 9834894</p>
            {/* Search icon */}
            <p className="">
              <FaSearch style={commonStyles} />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
