import React, { useState, useEffect, useRef } from 'react';
import Result from './SettingContent';
import Navbar from '../../../Navbar'
import Footer from '../../../Footer';
import Sidebar from '../Sidebar'; // Assuming Sidebar is a separate component
import { TfiMenuAlt } from 'react-icons/tfi';

function Settings() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const sidebarButtonRef = useRef(null);
  const sidebarRef = useRef(null);

  // Toggle Sidebar open/close state
  const toggleSidebar = () => {
    setSidebarOpen((prevState) => !prevState);
  };

  // Close Sidebar if clicked outside
  const closeSidebar = (e) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(e.target) &&
      !sidebarButtonRef.current.contains(e.target)
    ) {
      setSidebarOpen(false);
    }
  };

  // Add and remove event listener for outside clicks
  useEffect(() => {
    if (isSidebarOpen) {
      document.addEventListener("click", closeSidebar);
    } else {
      document.removeEventListener("click", closeSidebar);
    }

    return () => document.removeEventListener("click", closeSidebar);
  }, [isSidebarOpen]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar stays on top */}
      <Navbar toggleSidebar={toggleSidebar} />

      {/* Main content area */}
      <div className="flex flex-grow mt-16 relative">
        {/* Sidebar component */}
        {isSidebarOpen && (
          <Sidebar
            ref={sidebarRef}
            isSidebarOpen={isSidebarOpen}
            closeSidebar={closeSidebar}
            className="fixed top-0 left-0 z-50 bg-gray-800 bg-opacity-75 w-64 lg:w-64"
          />
        )}

        {/* Profile content on the right side */}
        <div className={`flex-1 bg-gray-100 ${isSidebarOpen ? "ml-0" : ""} w-full`}>
          <div className="w-full max-w-6xl mx-auto p-4">
            <Result />
          </div>
        </div>
      </div>

      {/* Footer at the bottom */}
      <div className={`mt-auto ${isSidebarOpen ? "ml-0" : ""} w-full`}>
        <Footer />
      </div>

      {/* Menu Icon Below Navbar on the Left */}
      <div className="fixed top-16 left-4 z-50 lg:block mb-10">
        <button
          ref={sidebarButtonRef}
          onClick={toggleSidebar}
          className="p-2 text-gray-600 rounded-md mt-5"
        >
          <TfiMenuAlt className="text-2xl" />
        </button>
      </div>
    </div>
  );
}

export default Settings;
