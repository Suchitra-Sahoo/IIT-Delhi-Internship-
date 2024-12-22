import React from 'react';
import { FaTheaterMasks } from "react-icons/fa";

function FeatureBox2() {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-3xl shadow-xl">
      {/* Header Section with Rounded Corners */}
      <div className="bg-[#213555] rounded-3xl p-4 flex items-center justify-center">
        <div className="text-white mr-2">
          {/* Using FaTheaterMasks Icon */}
          <FaTheaterMasks className="w-8 h-8" />
        </div>
        <h2 className="text-white font-semibold">Continuous Monitoring</h2>
      </div>

      {/* Body Section */}
      <div className="p-6 text-gray-600">
        <p>
        Continuous monitoring involves the regular assessment of an individual's performance, behavior, and well-being throughout their tenure. It helps organizations identify trends, address issues proactively, and foster ongoing development for sustained growth and success.
        </p>
      </div>

      {/* Button Section with Spacing */}
      <div className="flex justify-center mt-4 mb-6">
        <button className="bg-teal-600 text-white py-2 px-6 rounded-lg hover:bg-teal-700 mt-7 mb-1">
          Explore Now
        </button>
      </div>
    </div>
  );
}

export default FeatureBox2;
