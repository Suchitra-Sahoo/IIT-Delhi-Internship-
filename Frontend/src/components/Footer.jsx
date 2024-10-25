import React from 'react';
import illustration12 from './Landing Page/Landing-Page-Assets/illustration12.png';
import { FiInstagram } from "react-icons/fi";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#4f709c] py-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Left Section: Logo and Company Name */}
        <div className="flex items-center space-x-2">
          {/* Logo */}
          <img src={illustration12} alt="Logo" className="h-28 cursor-pointer" />
          {/* Company Name */}
          
        </div>

        {/* Right Section: Links */}
        <div className="mt-4 md:mt-0 flex flex-col md:flex-row md:space-x-8 text-white text-lg text-center md:text-left">
          <div className="flex flex-col space-y-2 md:space-y-0">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms and Conditions
            </a>
            <a href="#" className="hover:underline">
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="border-t border-gray-400 mt-4"></div>

      {/* Bottom Section: Social Media Icons and Rights */}
      <div className="max-w-7xl mx-auto px-8 mt-4 flex flex-col md:flex-row justify-between items-center text-white text-sm">
        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a href="#">
            <FiInstagram className="h-8 w-8 text-white" /> 
          </a>
          <a href="#">
            <FaFacebook className="h-8 w-8 text-white" /> 
          </a>
          <a href="#">
            <FaXTwitter className="h-8 w-8 text-white" />
          </a>
        </div>
        {/* Rights Reserved Text */}
        <div className="mt-4 md:mt-0 text-lg mr-4">All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
