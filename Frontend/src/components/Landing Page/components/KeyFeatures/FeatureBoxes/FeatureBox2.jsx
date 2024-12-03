import React from 'react';
import { FaTheaterMasks } from "react-icons/fa";

function FeatureBox2() {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-3xl shadow-xl">
      {/* Header Section with Rounded Corners */}
      <div className="bg-[#213555] rounded-3xl p-4 flex items-center justify-center">
        <div className="text-white mr-2">
          {/* Using FaTheaterMasks Icon */}
          <FaTheaterMasks className="w-7 h-7" />
        </div>
        <h2 className="text-white font-semibold">Behaviour Assessment</h2>
      </div>

      {/* Body Section */}
      <div className="p-6 text-gray-600">
        <p>
          Behavioral assessment evaluates an individual's actions, interpersonal skills, and emotional responses in various situations. It provides insights into personality traits, decision-making, and adaptability, helping organizations make informed decisions about hiring, team dynamics, and leadership potential.
        </p>
      </div>

      {/* Button Section with Spacing */}
      <div className="flex justify-center mt-4 mb-6">
        <button className="bg-teal-600 text-white py-2 px-6 rounded-lg hover:bg-teal-700 mt-5 mb-5">
          Explore Now
        </button>
      </div>
    </div>
  );
}

export default FeatureBox2;
