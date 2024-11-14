import React from 'react';
import illustration3 from '../Landing Page/Landing-Page-Assets/illustration3.png';
import illustration4 from '../Landing Page/Landing-Page-Assets/illustration4.png';
import illustration5 from '../Landing Page/Landing-Page-Assets/illustration5.png'
import illustration6 from '../Landing Page/Landing-Page-Assets/illustration6.png'

function Section8() {
  return (
    <div className="bg-white py-20 px-4 md:px-16">
      <h1 className="text-4xl font-semibold mb-4">Case Studies</h1>
      <h2 className="text-lg text-gray-600 mb-8">Our client's feedback is important for us</h2>

      {/* Testimonial Card Section */}
      <div className="flex flex-col items-center md:flex-row md:justify-center">
        {/* Left Card */}
        <div className="bg-white rounded-lg shadow-lg w-72 flex flex-col mx-2 h-72">
        <div className="flex-shrink-0 w-full h-full">
            <img
              src={illustration6} // Replace with the actual image path for the right card
              alt="Testimonial"
              className="h-full w-full object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Center Card */}
        <div className="bg-white rounded-lg shadow-lg w-100 flex flex-row mx-2 h-72 mt-5 mb-5">
          {/* Left Section for Image */}
          <div className="flex-shrink-0 w-1/3 h-full">
            <img
              src={illustration3}
              alt="Testimonial"
              className="h-full w-full object-cover rounded-l-lg"
            />
          </div>

          {/* Right Section for Text */}
          <div className="flex-grow p-4 flex flex-col">
          <img
                src={illustration4} // Use the actual image path for the small illustration
                alt="Small Illustration"
                className="h-10 w-10 mr-3 mb-2" // Adjust the size as needed
              />
            <p className="text-gray-700 text-sm mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec orci nec quam placerat cursus sed suscipit purus. Curabitur dictum, libero non pharetra ultricies, metus libero.
            </p>
            <div className="flex items-center mb-3">
              <h3 className="font-semibold text-gray-800">Kelly Martin</h3>
            </div>
          </div>
        </div>

        {/* Right Card */}
        <div className="bg-white rounded-lg shadow-lg w-72 flex flex-col mx-2 h-72">
          <div className="flex-shrink-0 w-full h-full">
            <img
              src={illustration5} // Replace with the actual image path for the right card
              alt="Testimonial"
              className="h-full w-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section8;
