import React from 'react';
import { PiBrain } from "react-icons/pi";

function FeatureBox3() {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-3xl shadow-xl">
      {/* Header Section with Rounded Corners */}
      <div className="bg-[#6481A8] rounded-3xl p-4 flex items-center justify-center">
        <div className="text-white mr-2">
          {/* Icon */}
          <PiBrain className="w-8 h-8" />
        </div>
        <h2 className="text-white font-semibold">Cognitive Skill Testing</h2>
      </div>

      {/* Body Section */}
      <div className="p-6 text-gray-600">
        <p>
        Cognitive skill testing measures an individual’s mental abilities, such as memory, reasoning, problem-solving, and attention. It provides insights into how effectively a person processes information and learns, aiding in identifying potential and suitability for specific roles.
        </p>
      </div>

      {/* Button Section with Spacing */}
      <div className="flex justify-center mt-4 mb-6">
        <button className="bg-teal-600 text-white py-2 px-6 rounded-lg hover:bg-teal-700 mt-7 mb-3">
          Explore Now
        </button>
      </div>
    </div>
  );
}

export default FeatureBox3;
