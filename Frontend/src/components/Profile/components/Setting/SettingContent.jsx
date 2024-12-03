import React from 'react';
import illustration1 from '../../ProfilePage-Assets/illustration1.png';

const SettingContent = () => {
  return (
    <div className="p-1">
      <h2 className="text-3xl font-bold mb-6">Admin Settings</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((item) => (
          <div key={item} className="bg-white shadow-md rounded-lg p-4 w-full">
            <div className="flex justify-end">
              <button className="text-red-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex flex-col items-center">
              <img src={illustration1} alt="Heema Sharma" className="rounded-full w-24 h-24 mb-4" />
              <h3 className="text-lg font-medium">Heema Sharma</h3>
              <button className="mt-4 bg-teal-500 text-white py-2 px-4 rounded-lg flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                </svg>
                Manage
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SettingContent;
