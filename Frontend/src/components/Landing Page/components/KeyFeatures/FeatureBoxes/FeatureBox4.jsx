import React from 'react';
import { IoBagOutline } from "react-icons/io5";

function FeatureBox1() {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-3xl shadow-xl">
      {/* Header Section with Rounded Corners */}
      <div className="bg-[#6481A8] rounded-3xl p-4 flex items-center justify-center">
        <div className="text-white mr-2">
          {/* Using IoBagOutline Icon */}
          <IoBagOutline className="w-6 h-6" />
        </div>
        <h2 className="text-white font-semibold">Attitude Evaluation</h2>
      </div>

      {/* Body Section */}
      <div className="p-6 text-gray-600">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec orci nec quam placerat
          cursus sed suscipit purus. Curabitur dictum, libero non pharetra ultricies, metus libero.
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

export default FeatureBox1;
