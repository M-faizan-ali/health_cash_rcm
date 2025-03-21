import React from 'react';

export default function BannerVideo() {
  return (
    <div className="w-full bg-gradient-to-br from-green-100 via-blue-100 to-teal-200">
      <div className="container max-w-[1180px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 p-6">
        {/* First Div: Heading and Paragraph */}
        <div className="w-full md:w-1/2 bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Stay Healthy, Stay Informed
          </h1>
          <p className="text-gray-600 text-lg md:text-xl">
            Our platform provides the best medical resources and information for your well-being. Get access to trusted health content and services with just a few clicks.
          </p>
        </div>

        {/* Second Div: Video with Multicolor Medical Border and Animation */}
        <div className="w-full md:w-1/2 relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 p-1">
          <div className="border-8 border-transparent rounded-xl bg-gradient-to-r from-blue-400 via-green-300 to-teal-400 p-1 hover:scale-105 transition-transform duration-500 ease-in-out">
            <div className="bg-white rounded-xl overflow-hidden">
              <video
                className="w-full h-[500px] object-cover rounded-xl"
                controls
                autoplay
                loop
                muted
              >
                <source
                  src="videos/banner-video.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
