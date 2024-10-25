import React from 'react';
import illustration7 from '../Landing-Page-Assets/illustration7.png';
import illustration8 from '../Landing-Page-Assets/illustration8.png';
import illustration9 from '../Landing-Page-Assets/illustration9.png';
import illustration10 from '../Landing-Page-Assets/illustration10.png';
import illustration11 from '../Landing-Page-Assets/illustration11.png';

function Section2() {
  return (
    <div className="flex flex-col items-center justify-center"> {/* Center content horizontally */}
      <h1 className="text-center font-semibold mt-10 text-4xl text-slate-600 mb-4">
        How It Works
      </h1>
      <img 
        src={illustration7} 
        alt="How It Works Illustration" 
        className="w-full h-auto max-w-md sm:max-w-lg md:max-w-3xl mb-10 mt-10 ml-2 mr-2" // Responsive widths
      />
      <img 
        src={illustration8} 
        alt="How It Works Illustration" 
        className="w-full h-auto max-w-md sm:max-w-lg md:max-w-3xl mb-10  ml-2 mr-2 mt-10" // Responsive widths
      />
       <img 
        src={illustration9} 
        alt="How It Works Illustration" 
        className="w-full h-auto max-w-md sm:max-w-lg md:max-w-3xl mb-10  ml-2 mr-2 mt-10" // Responsive widths
      />
       <img 
        src={illustration10} 
        alt="How It Works Illustration" 
        className="w-full h-auto max-w-md sm:max-w-lg md:max-w-3xl mb-10  ml-2 mr-2 mt-10" // Responsive widths
      />
       <img 
        src={illustration11} 
        alt="How It Works Illustration" 
        className="w-full h-auto max-w-md sm:max-w-lg md:max-w-3xl mb-10  ml-2 mr-2 mt-10" // Responsive widths
      />
    </div>
  );
}

export default Section2;
