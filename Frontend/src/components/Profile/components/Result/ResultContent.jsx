import React from 'react';
import { Link } from 'react-router-dom';
import illustration1 from '../../ProfilePage-Assets/illustration1.png'; // Ensure this image is used correctly

const ResultContent = () => {
  return (
    <div className="p-1">
      <h2 className="text-3xl font-bold mb-6">Results & Reports Overview</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Aptitude Test Card */}
        <div className="bg-white shadow-md rounded-lg p-4 w-full">
          <div className="flex justify-end">
            
          </div>
          <div className="flex flex-col items-center">
            <img src={illustration1} alt="Aptitude Test" className="rounded-full w-24 h-24 mb-4" />
            <h3 className="text-lg font-medium">Aptitude Test</h3>
            <Link 
              to="/result1" // Link to Aptitude Test Result
              className="mt-4 bg-teal-500 text-white py-2 px-4 rounded-lg flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
              </svg>
              Show Results
            </Link>
          </div>
        </div>

        {/* Recognition Memory Task Card */}
        <div className="bg-white shadow-md rounded-lg p-4 w-full">
          <div className="flex justify-end">
           
          </div>
          <div className="flex flex-col items-center">
            <img src={illustration1} alt="Recognition Memory Task" className="rounded-full w-24 h-24 mb-4" />
            <h3 className="text-lg font-medium">Recognition Memory Task</h3>
            <Link 
              to="/RecognitionTest" // Link to Recognition Test Result
              className="mt-4 bg-teal-500 text-white py-2 px-4 rounded-lg flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
              </svg>
              Show Results
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultContent;
