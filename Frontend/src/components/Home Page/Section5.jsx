import React from 'react';

const Section5 = () => {
  const boxes = [
    { heading: "Psychometric Tests", paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
    { heading: "Cognitive Tests", paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
    { heading: "Behavioral Tests", paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
    { heading: "Aptitude Tests", paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
    
    
  ];

  return (
    <div className="bg-white p-6 min-h-[500px]"> {/* Set the outer background to white and add padding */}
      <div className="bg-gray-200 rounded-3xl p-6 mx-4 min-h-[600px]"> {/* Increased height for the gray div */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"> {/* Responsive grid with gaps */}
          {boxes.map((box, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow min-h-[200px]"> {/* Use min-h instead of fixed height */}
              <h3 className="text-lg font-semibold mb-2">{box.heading}</h3>
              <p className="mb-4">{box.paragraph}</p>
              <div className="flex justify-center">
                <button className="bg-[#008080] text-white py-2 px-4 rounded">
                  Explore Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section5;
