import React from 'react';
import image from '../Home Page/Home-Page-Assets/illustration18.png';
import image2 from '../Home Page/Home-Page-Assets/illustration19.png';

function Section4() {
  return (
    <div className="bg-white w-full min-h-[500px] flex flex-col items-center pt-20 mt-2">
      <div className="flex flex-col md:flex-row justify-center items-center w-full px-6 md:px-28">
        {/* Image Section */}
        <div className="relative flex justify-center items-center mb-6 md:mb-0">
          {/* Main Image */}
          <img src={image} alt="Illustration" className="w-80" />
          {/* Smaller Overlay Image */}
          <img
            src={image2}
            alt="Illustration overlay"
            className="absolute top-5 left-6 w-5/6"
          />
        </div>
        <div className="md:w-11"></div>
        {/* Text Section */}
        <div className="md:w-1/2 md:pl-10 text-center md:text-left flex flex-col items-center md:items-start">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">Talent Assessment</h2>
          <p className="text-gray-600">
          Talent assessment is the process of evaluating an individual’s skills, abilities, and potential in various areas to determine their suitability for specific roles or tasks. It helps identify strengths, areas for improvement, and opportunities for development, enabling better talent management and career growth.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section4;
