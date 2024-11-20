import React, { useState, useEffect } from 'react';
import Assignment from './Assignment';

function Profile() {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  return (
    <div className="w-full p-6">
      {/* Profile Card */}
      <div className="bg-gray-100 p-4 rounded-lg shadow-md flex flex-col sm:flex-row justify-center items-center md:h-40 lg:h-44 xl:h-48 mb-6">
        {/* Avatar Section */}
        <div className="avatar w-24 h-24 sm:w-30 sm:h-30 mb-4 sm:mb-0 sm:mr-4 ml-6">
          <div className="w-full h-full rounded-lg overflow-hidden">
            <img
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              alt="Profile Avatar"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-center w-full text-center sm:text-left ml-4">
          <h1 className="text-2xl sm:text-3xl text-gray-700">Welcome Back 👋</h1>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-700 mt-2">{username}</h2>
        </div>
      </div>

      {/* Upcoming Assignment Section */}
      <div className="mb-6">
        <h3 className="lg:text-2xl sm:text-lg md:text-xl font-semibold text-gray-800">Upcoming Assignment</h3>
        <Assignment />
      </div>
    </div>
  );
}

export default Profile;
