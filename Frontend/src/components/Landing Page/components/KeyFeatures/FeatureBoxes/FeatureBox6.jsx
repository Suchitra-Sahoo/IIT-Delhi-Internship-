import React from 'react';
import { PiBrain } from "react-icons/pi";

function FeatureBox3() {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-3xl shadow-xl">
      {/* Header Section with Rounded Corners */}
      <div className="bg-[#6481A8] rounded-3xl p-4 flex items-center justify-center">
        <div className="text-white mr-2">
          {/* Icon */}
          <PiBrain className="w-7 h-7" />
        </div>
        <h2 className="text-white font-semibold">Detailed Reporting</h2>
      </div>

      {/* Body Section */}
      <div className="p-6 text-gray-600">
        <p>
        Detailed reporting involves providing comprehensive, data-driven insights into an individual’s performance, behavior, and progress over time. It offers in-depth analysis, highlighting strengths, areas for improvement and trends.
        </p>
      </div>

      {/* Button Section with Spacing */}
      <div className="flex justify-center mt-4 mb-6">
        <button className="bg-teal-600 text-white py-2 px-6 rounded-lg hover:bg-teal-700 mt-8 mb-1">
          Explore Now
        </button>
      </div>
    </div>
  );
}

export default FeatureBox3;
