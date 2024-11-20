import React, { useState, useEffect } from 'react';
import logo from '../assets/LandingPage/Logo.png';
import { Link } from 'react-router-dom';
import { IoMdArrowDropdown } from 'react-icons/io';


function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [username, setUsername] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('username');
    setUsername(null);
    setIsDropdownOpen(false);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/">
          <img
            src={logo}
            className="h-8 md:h-11 flex items-center space-x-3 rtl:space-x-reverse cursor-pointer"
            alt="Logo"
          />
        </Link>

        <div className="flex items-center space-x-3 md:order-2">
          {username ? (
            <div className="relative flex items-center space-x-2">
              <div className="avatar">
                <div className="w-9 rounded">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="User Avatar" />
                </div>
              </div>
              <span className="hidden md:block text-gray-900 dark:text-white font-semibold">
                {username}
              </span>
              <IoMdArrowDropdown
                onClick={toggleDropdown}
                className="ml-2 text-gray-700 cursor-pointer"
              />
              
              {/* Dropdown menu */}
              {isDropdownOpen && (
  <ul className="absolute top-full mt-2 left-0 menu bg-base-100 rounded-box w-52 p-2 shadow">
    <li>
      <Link to="/profile" onClick={() => setIsDropdownOpen(false)}>Profile</Link>
    </li>
    <li>
      <button onClick={handleLogout}>Logout</button>
    </li>
  </ul>
)}

            </div>
          ) : (
            <Link
              to="/signup"
              className="text-white bg-teal-600 hover:bg-teal-700 font-medium rounded-lg text-sm px-4 py-2 text-center md:px-6 md:py-3 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
            >
              Sign Up
            </Link>
          )}
          <button
            type="button"
            onClick={toggleMenu}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <div
          className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1 md:flex-row`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link to="/about" className="block py-2 px-3 text-gray-900 rounded md:p-0 dark:text-white font-semibold" aria-current="page">
                About
              </Link>
            </li>
            <li>
              <Link to="/features" className="block py-2 px-3 text-gray-900 rounded md:p-0 dark:text-white font-semibold">
                Features
              </Link>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded md:p-0 dark:text-white font-semibold">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded md:p-0 dark:text-white font-semibold">
                Contact
              </a>
            </li>
            {username && (
              <li>
                <button onClick={handleLogout} className="block py-2 px-2 text-gray-900 rounded md:p-0 dark:text-white font-semibold">
                  Logout
                </button>
              </li>
            )}
            {!username && (
              <li>
                <Link to="/login" className="block py-2 px-3 text-gray-900 rounded md:p-0 dark:text-white font-semibold">
                  Login
                </Link>
              </li>
            )}
          </ul> 
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
