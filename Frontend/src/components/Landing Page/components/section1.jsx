import React from "react";
import image1 from "../Landing-Page-Assets/illustration.png";
import image2 from "../Landing-Page-Assets/illustration2.png";

function Section1() {
  return (
    <section className="bg-[#4F709C] pl-4 md:pl-16 w-full h-[650px] mx-auto flex items-center justify-start mt-20 flex-col md:flex-row">
      {/* White Circle */}
      <div className="lg:ml-16 relative w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[350px] md:h-[350px] bg-white rounded-full flex items-center justify-center mt-16">
        {/* Image inside the circle with negative margin */}
        <img
          src={image1}
          alt="Illustration"
          className="absolute w-[250px] h-[225px] sm:w-[350px] sm:h-[325px] md:w-[500px] md:h-[450px] -top-10 sm:-top-16 md:-top-24 left-4 sm:left-6 md:left-8 transform"
        />
      </div>

      {/* Spacer for Flex Alignment */}
      <div className="lg:w-[350px] md:w-[50px]"></div>

      {/* Text Section with reduced gap for small screens */}
      <div className="md:ml-8 flex flex-col justify-center text-center md:text-left mt-4 md:mt-16">
        <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
          Transform Your Hiring
          <br />
          <span className="block">Employee Wellness</span>
          <span className="block">with Our Comprehensive</span>
          <span className="block">Assessment Tool</span>
          <div className="h-[10px]"></div>
        </h1>

        {/* New Plain Text Below the Title */}
        <p className="text-white mt-4 text-base md:text-lg lg:text-xl mr-5">
          <span className="block">
            Evaluate behavior, cognition, mental health, and
          </span>
          <span className="block">
            attitude at recruitment and during tenure
          </span>
        </p>

        {/* Button and Learn More Section */}
        <div className="flex items-center mt-6">
          {/* Get Started Button */}
          <button className="bg-[#007373] text-white font-semibold py-2 px-4 rounded">
            Get Started
          </button>
          {/* Learn More Link */}
          <span className="ml-4 text-white font-semibold underline cursor-pointer">
            Learn More
          </span>
        </div>

        {/* Illustration2 Below Get Started Button */}
        <img
          src={image2}
          alt="Illustration 2"
          className="mt-6 w-[22px] h-[22px] " // Adjust size and alignment to be smaller and towards the left
        />
      </div>
      <div></div>
    </section>
  );
}

export default Section1;
