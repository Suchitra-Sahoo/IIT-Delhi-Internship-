import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { IoDocumentText } from "react-icons/io5";
import { TbReport } from "react-icons/tb";
import { HiOutlineCube } from "react-icons/hi";
import { IoMdSettings } from "react-icons/io";


const Sidebar = ({ isSidebarOpen, closeSidebar }) => {
  const sidebarRef = useRef(null);

  const handleClickOutside = (e) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      closeSidebar(); // Close the sidebar when clicking outside
    }
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => document.removeEventListener("click", handleClickOutside);
  }, [isSidebarOpen]);

  return (
    <aside
      ref={sidebarRef}
      className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } sm:translate-x-0`}
      aria-label="Sidebar"
    >
      <div
        className="h-full px-3 py-4 overflow-y-auto mt-[74px]"
        style={{ backgroundColor: "#6481A8" }}
      >
        <ul className="space-y-4 font-medium">
          <li>
            <Link
              to="/profile"
              onClick={closeSidebar}
              className="flex items-center p-4 text-white rounded-lg hover:bg-[#213555] mt-10"
            >
              <IoMdHome className="text-2xl" />
              <span className="ml-2">Home</span>
            </Link>
          </li>
          <li>
            <Link
              to="/assessment"
              onClick={closeSidebar}
              className="flex items-center p-4 text-white rounded-lg hover:bg-[#213555]"
            >
              <IoDocumentText className="text-2xl" />
              <span className="ml-2">My Assessments</span>
            </Link>
          </li>
          <li>
          <Link
              to="/results" 
              onClick={closeSidebar}
              className="flex items-center p-4 text-white rounded-lg hover:bg-[#213555]"
            >
              <TbReport className="text-2xl" />
              <span className="ml-2">Results & Reports</span>
            </Link>
          </li>
          <li>
            <Link
              to="/resources"
              onClick={closeSidebar}
              className="flex items-center p-4 text-white rounded-lg hover:bg-[#213555]"
            >
              <HiOutlineCube className="text-2xl" />
              <span className="ml-2">Resources</span>
            </Link>
          </li>
          <li>
            <Link
              to="/setting"
              onClick={closeSidebar}
              className="flex items-center p-4 text-white rounded-lg hover:bg-[#213555]"
            >
              <IoMdSettings className="text-2xl" />
              <span className="ml-2">Settings</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
