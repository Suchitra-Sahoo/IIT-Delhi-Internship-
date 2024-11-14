import React from 'react';
import image from '../Landing Page/Landing-Page-Assets/illustration15.png';
import image2 from '../Landing Page/Landing-Page-Assets/Illustration2.png';

function Section1() {
    return (
      <>
        <div className="bg-[#4F709C] w-full min-h-[500px] flex flex-col md:flex-row items-center p-8">
          <div className="w-full md:w-1/2 flex justify-center mb-4 md:mb-0 pt-14">
            <img src={image} alt="Illustration" className="h-auto max-w-full" />
          </div>
          <div className="w-full md:w-1/2 text-white text-2xl md:text-4xl font-semibold leading-snug p-4 md:p-8">
            <h1>Introduction to the software here</h1>
            <p className="mt-4 text-base md:text-lg font-normal pr-0 md:pr-8 ">
              Evaluate behavior, cognition, mental health, and attitude at recruitment and during tenure.
            </p>
            <img
              src={image2}
              alt="Illustration 2"
              className="mt-14 w-[22px] h-[22px] " // Positioned below the paragraph
            />
          </div>
        </div>

        {/* Section for Heading and Benefits */}
        <div className="bg-[#4F709C] text-center text-white p-8">
          <h1 className="text-3xl md:text-4xl font-semibold">
            Why to use this Software?
          </h1>
          <p className="text-base md:text-lg mt-4 px-4 md:px-16 lg:px-32 text-center mb-10">
          (Benefits of the software needs to be put here) 
          Example - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec orci nec quam placerat cursus sed suscipit purus. Curabitur dictum, libero non pharetra ultricies, metus libero tincidunt tellus, ac scelerisque tellus orci eget urna. Donec 
          </p>
        </div>

        
      </>
    );
}

export default Section1;
