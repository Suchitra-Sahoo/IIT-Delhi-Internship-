import React from "react";
import { useNavigate } from "react-router-dom";
import { TfiArrowLeft } from "react-icons/tfi"; // Importing the arrow icon

const StroopTest = () => {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen relative">
      {/* Fullscreen Iframe */}
      <iframe
        src="http://localhost:3009/"
        title="Stroop Test"
        className="w-full h-full"
     
      ></iframe>

      {/* Back to Home Button */}
      <button
        onClick={() => navigate("/resources")}
        className="absolute bottom-4 left-4 bg-[#008080] text-white p-3 rounded-full text-base hover:bg-[#005f5f] transition flex items-center justify-center"
      >
        <TfiArrowLeft className="text-xl" />
      </button>
    </div>
  );
};

export default StroopTest;
