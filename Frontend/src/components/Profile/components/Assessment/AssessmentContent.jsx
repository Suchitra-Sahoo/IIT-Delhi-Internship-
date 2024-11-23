import React from 'react';
import { CiCirclePlus } from "react-icons/ci"; // Import the icon
import { HiPencilSquare } from "react-icons/hi2";
import { MdDelete } from "react-icons/md";

const AssessmentContent = () => {
  return (
    <div className="p-4 sm:p-6 w-full">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 ml-10 ">Assessment Overview</h1>

      {/* Create New Assessment Button */}
      <div className="mb-6">
        <button className="bg-[#4F709C] text-white py-2 px-4 rounded-xl w-full flex items-center justify-between text-lg sm:text-xl md:text-2xl lg:text-2xl font-semibold">
          <span>Create New Assessment</span>
          <CiCirclePlus className="text-white text-3xl sm:text-4xl" />
        </button>
      </div>

      {/* Drafts Section */}
      <div className="mb-6">
        <h2 className="font-semibold mb-2 text-xl sm:text-2xl">Drafts:</h2>

        {/* Draft Item */}
        <div className="border p-4 mb-4 rounded flex flex-wrap justify-between items-center space-y-4 sm:space-y-0 sm:flex-nowrap">
          <div>
            <p className="font-semibold text-lg sm:text-xl">Cognitive Skills Testing</p>
            <p className="text-sm text-gray-500">4 hours ago</p>
          </div>
          <div className="flex space-x-2">
          <button
  className="bg-[#008080] text-white py-1 px-3 rounded text-sm sm:text-base"
  onClick={() => window.open('http://127.0.0.1:5500/Aptitude/Test3/index.html', '_blank')}
>
  Mark Completed
</button>

            <button className="text-3xl sm:text-4xl pl-6 sm:pl-8">
              <HiPencilSquare />
            </button>
            <button className="text-3xl sm:text-4xl text-red-600">
              <MdDelete />
            </button>
          </div>
        </div>

        {/* Another Draft Item */}
        <div className="border p-4 mb-4 rounded flex flex-wrap justify-between items-center space-y-4 sm:space-y-0 sm:flex-nowrap">
          <div>
            <p className="font-semibold text-lg sm:text-xl">Cognitive Skills Testing</p>
            <p className="text-sm text-gray-500">2 days ago</p>
          </div>
          <div className="flex space-x-2">
          <button
  className="bg-[#008080] text-white py-1 px-3 rounded text-sm sm:text-base"
  onClick={() => window.open('http://127.0.0.1:5500/Situational_Judgement/SJ/index.html', '_blank')}
>
  Mark Completed
</button>
            <button className="text-3xl sm:text-4xl pl-6 sm:pl-8">
              <HiPencilSquare />
            </button>
            <button className="text-3xl sm:text-4xl text-red-600">
              <MdDelete />
            </button>
          </div>
        </div>
      </div>

      {/* Completed Section */}
      <div>
        <h2 className="font-semibold mb-2 text-xl sm:text-2xl">Completed:</h2>

        {/* Completed Item */}
        <div className="bg-green-100 border p-4 mb-4 rounded flex flex-wrap justify-between items-center space-y-4 sm:space-y-0 sm:flex-nowrap">
          <div>
            <p className="font-semibold text-[#008080] text-lg sm:text-xl">Cognitive Skills Testing</p>
          </div>
          <div className="flex space-x-2">
            <button className="bg-[#008080] text-white py-1 px-3 rounded text-sm sm:text-base">View Results</button>
            <button className="text-3xl sm:text-4xl pl-6 sm:pl-8">
              <HiPencilSquare />
            </button>
            <button className="text-3xl sm:text-4xl text-red-600">
              <MdDelete />
            </button>
          </div>
        </div>

        {/* Another Completed Item */}
        <div className="bg-green-100 border p-4 mb-4 rounded flex flex-wrap justify-between items-center space-y-4 sm:space-y-0 sm:flex-nowrap">
          <div>
            <p className="font-semibold text-[#008080] text-lg sm:text-xl">Cognitive Skills Testing</p>
          </div>
          <div className="flex space-x-2">
            <button className="bg-[#008080] text-white py-1 px-3 rounded text-sm sm:text-base">View Results</button>
            <button className="text-3xl sm:text-4xl pl-6 sm:pl-8">
              <HiPencilSquare />
            </button>
            <button className="text-3xl sm:text-4xl text-red-600">
              <MdDelete />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssessmentContent;
