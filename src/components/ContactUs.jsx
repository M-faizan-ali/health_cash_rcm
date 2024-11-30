import React from 'react';
import Footer from './Footer';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';


export default function ContactUs() {
    const HeadingText = "font-sora font-medium text-[48px] leading-[60px] tracking-[0] text-[#031b4e] normal-case not-italic mt-[15px]";
    const paraText = "font-roboto font-normal text-base leading-[1.5] tracking-[0] text-[#6e778c] normal-case not-italic mt-[30px]";

    return (
        <div className='mt-9 w-[90%] m-auto'>
            {/* first div  */}
            <div>
                <h4 className="uppercase inline px-[23px] py-[3px] rounded-[30px] bg-white text-btn-color">
                    get in touch with medipay billing
                </h4>
                <h2 className={HeadingText}>We're here to help you</h2>
                <p className={paraText}>
                    Whether you have a question, need detailed information or want to explore how our medical billing services can optimize your practice’s revenue, we’re just a message away.
                </p>
            </div>
            {/* second div  */}
            <div className='mt-[70px] mb-[70px]'>
                <h2 className={HeadingText}>We're here to help you</h2>
                <p className={paraText}>
                    Whether you have a question, need detailed information or want to explore how our medical billing services can optimize your practice’s revenue, we’re just a message away.
                </p>
            </div>

            {/* 3rd div  */}
            <div className="flex justify-between p-6 bg-gray-100">
                {/* First Column: Call */}
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                    <FaPhone className="text-2xl text-blue-500" />
                    </div>
                    <div>
                    <p className="text-lg font-medium">+1 234 567 890</p>
                    </div>
                </div>

                {/* Second Column: Email */}
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                    <FaEnvelope className="text-2xl text-green-500" />
                    </div>
                    <div>
                    <p className="text-lg font-medium">info@example.com</p>
                    </div>
                </div>

                {/* Third Column: Location */}
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                    <FaMapMarkerAlt className="text-2xl text-red-500" />
                    </div>
                    <div>
                    <p className="text-lg font-medium">123 Main St, City, Country</p>
                    </div>
                </div>
            </div>

            {/* 4th div  */}
            <div>
                <h2 className={HeadingText}>We're here to help you</h2>
                <p className={paraText}>
                    Whether you have a question, need detailed information or want to explore how our medical billing services can optimize your practice’s revenue, we’re just a message away.
                </p>
            </div>

            <Footer/>
        </div>
    );
}
