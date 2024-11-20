import React from 'react';
import Navbar from '../../../Navbar';
import Footer from '../../../Footer';
import Sidebar from '../Sidebar';
import AssessmentContent from './AssessmentContent'; // Rename imported Profile component

function Assessment() {
  return (
    <>
      {/* Navbar is fixed at the top */}
      <Navbar />
      
      <div className="min-h-screen flex flex-col pt-16 mt-2 ">
        <div className="flex flex-grow">
          {/* Sidebar only visible on medium and larger screens */}
          <Sidebar className="hidden md:block flex-none w-64 h-96 overflow-y-auto" /> 
          
          {/* ProfileContent centered on smaller screens */}
          <div className="flex-1 flex justify-center md:ml-4">
            <AssessmentContent /> {/* Display the Profile component here */}
          </div>
        </div>
        
        {/* Footer is fixed at the bottom */}
        <Footer />
      </div>
    </>
  );
}

export default Assessment;
