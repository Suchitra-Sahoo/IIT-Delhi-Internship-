import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { IoMdHome } from "react-icons/io";
import { IoDocumentText } from "react-icons/io5";
import { TbReport } from "react-icons/tb";
import { HiOutlineCube } from "react-icons/hi";
import { IoMdSettings } from "react-icons/io";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (e) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleMenuItemClick = () => {
    setIsOpen(false); // Close sidebar when a menu item is clicked
  };

  return (
    <div className="flex">
      {/* Toggle Button */}
      <div className="md:hidden p-2" onClick={toggleSidebar}>
        <button className="relative group">
          <div className="relative flex items-center justify-center w-[18px] h-[18px] duration-200">
            <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 group-focus:-rotate-[45deg] origin-center">
              <div className="bg-black h-[2px] w-1/2 rounded transform transition-all duration-300 group-focus:-rotate-90 group-focus:h-[1px] origin-right delay-75 group-focus:-translate-y-[1px]"></div>
              <div className="bg-black h-[1px] rounded"></div>
              <div className="bg-black h-[2px] w-1/2 rounded self-end transform transition-all duration-300 group-focus:-rotate-90 group-focus:h-[1px] origin-left delay-75 group-focus:translate-y-[1px]"></div>
            </div>
          </div>
        </button>
      </div>

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`bg-[#6481A8] min-h-screen w-64 text-white fixed md:relative transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out z-50`}
      >
        {/* Menu Items */}
        <Link to="/profile" onClick={handleMenuItemClick} className="flex items-center p-4 hover:bg-[#213555] cursor-pointer mb-4">
          <IoMdHome className="text-2xl" />
          <span className="ml-2 text-lg">Home</span>
        </Link>
        <Link to="/assessment" onClick={handleMenuItemClick} className="flex items-center p-4 hover:bg-[#213555] cursor-pointer mb-4">
          <IoDocumentText className="text-2xl" />
          <span className="ml-2 text-lg">My Assessments</span>
        </Link>
        <Link to="/reports" onClick={handleMenuItemClick} className="flex items-center p-4 hover:bg-[#213555] cursor-pointer mb-4">
          <TbReport className="text-2xl" />
          <span className="ml-2 text-lg">Results & Reports</span>
        </Link>
        <Link to="/resources" onClick={handleMenuItemClick} className="flex items-center p-4 hover:bg-[#213555] cursor-pointer mb-4">
          <HiOutlineCube className="text-2xl" />
          <span className="ml-2 text-lg">Resources</span>
        </Link>
        <Link to="/settings" onClick={handleMenuItemClick} className="flex items-center p-4 hover:bg-[#213555] cursor-pointer mb-4">
          <IoMdSettings className="text-2xl" />
          <span className="ml-2 text-lg">Settings</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
