import React from 'react';
import image from '../Home Page/Home-Page-Assets/illustration16.png';
import image2 from '../Home Page/Home-Page-Assets/illustration17.png';

function Section2() {
  return (
    <div className="bg-white w-full min-h-[500px] flex flex-col items-center pt-20 mt-2">
      <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">Features</h1>
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
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">Occupational Interest Profile</h2>
          <p className="text-gray-600">
          An Occupational Interest Profile is a tool used to assess an individual's preferences and inclinations toward various career fields and job roles. It helps identify areas of interest based on activities, tasks, and work environments, guiding individuals toward careers that align with their passions and strengths.</p>
        </div>
      </div>
    </div>
  );
}

export default Section2;
