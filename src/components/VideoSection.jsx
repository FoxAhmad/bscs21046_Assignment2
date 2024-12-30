import React from "react";
// Importing the video file
import sampleVideo from "../assets/videos/sample-video.mp4";
//import signature from "../assets/images/signature.png"; // Replace with your actual signature image path

const VideoSection = () => {
  return (
    <section className="py-12 bg-gray-50" id="about">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Video Player */}
          <div className="lg:w-1/2 relative">
            <div className="overflow-hidden rounded-xl shadow-lg">
              <video
                className="w-full h-auto"
                controls
                preload="metadata"
              >
                <source src={sampleVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:w-1/2 mt-8 lg:mt-0 lg:pl-12">
            <h6 className="text-sm font-medium text-indigo-600 uppercase tracking-wider">
              Live Coffee Making Process
            </h6>
            <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-snug mt-3 mb-5">
              Experience Our <br /> Coffee-Making Process Live
            </h1>
            <p className="text-gray-700 mb-4">
              <span className="font-semibold text-gray-800">
                Join us as we craft your favorite coffee with passion.
              </span>
            </p>
            
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
