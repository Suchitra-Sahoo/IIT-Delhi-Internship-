import React from 'react';
import image from '../Home Page/Home-Page-Assets/illustration20.png';
import image2 from '../Home Page/Home-Page-Assets/illustration21.png';

function Section6() {
  return (
    <div className="bg-white w-full min-h-[440px] flex flex-col items-center pt-20 mt-2">
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
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">Sector Wise</h2>
          <p className="text-gray-600">
          We provide specialized tests across various sectors. These sector-specific assessments are designed to evaluate skills, knowledge, and competencies that are directly relevant to each industry. By tailoring the tests to the unique requirements of each sector, we help organizations assess candidates' capabilities and ensure they are well-suited for the job roles within their respective fields.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section6;
