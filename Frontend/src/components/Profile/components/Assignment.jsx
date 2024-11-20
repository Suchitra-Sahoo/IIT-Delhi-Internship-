import React from "react";
import { IoBagOutline } from "react-icons/io5";

function Assignment() {
  return (
    <div className="w-full bg-white rounded-3xl shadow-xl mt-10">
      {/* Header Section with Rounded Corners */}
      <div className="bg-[#6481A8] rounded-t-3xl p-4 flex  ">
        <div className="text-white mr-2">
          {/* Using IoBagOutline Icon */}
          <IoBagOutline className="w-6 h-6" />
        </div>
        <h2 className="text-white font-semibold">
          Occupational Interest Profile
        </h2>
      </div>

      {/* Body Section */}
      <div className="p-6 text-gray-600">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec
          orci nec quam placerat cursus sed suscipit purus. Curabitur dictum,
          libero non pharetra ultricies, metus libero. Ut consequat euismod
          urna, sit amet euismod felis feugiat et. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Vivamus nec orci nec quam placerat cursus
          sed suscipit purus. Curabitur dictum, libero non pharetra ultricies,
          metus libero. Ut consequat euismod urna, sit amet euismod felis
          feugiat.
        </p>
      </div>
    </div>
  );
}

export default Assignment;
