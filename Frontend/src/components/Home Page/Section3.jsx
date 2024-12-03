import React from 'react';

const Section3 = () => {
  const boxes = [
    { heading: "Soft Skills", paragraph: "Soft skills are interpersonal attributes like communication, teamwork, adaptability, and problem-solving that enable effective collaboration and personal growth. They are essential for thriving in both professional and everyday interactions." },
    { heading: "Education", paragraph: "Education is the foundation for personal growth and societal progress, fostering knowledge, critical thinking, and skills for lifelong success. It empowers individuals to explore opportunities, adapt to change, and contribute meaningfully to the world." },
    { heading: "Abilities", paragraph: "Abilities are the innate talents and acquired skills that enable individuals to perform tasks, solve problems, and achieve goals effectively. They reflect a combination of knowledge, practice, and adaptability in various situations." },
    { heading: "Interest", paragraph: "Interests are the passions and pursuits that captivate our curiosity and drive engagement, shaping our goals and motivations. They reflect what we find meaningful and inspiring in both personal and professional life." },
    { heading: "Work Values", paragraph: "Work values are the principles and priorities that guide individuals in their professional lives, such as integrity, teamwork, growth, and work-life balance. They influence job satisfaction, decision-making, and career fulfillment." },
    { heading: "Work Styles", paragraph: "Work styles refer to the unique approaches individuals take to complete tasks, solve problems, and collaborate. They encompass traits like independence, teamwork, attention to detail, and adaptability, shaping how people perform and thrive in the workplace." },
    { heading: "Technology Skills", paragraph: "Technology skills are the expertise and proficiency in using digital tools, software, and systems to perform tasks, solve problems, and innovate. They include coding, data analysis, cybersecurity, and proficiency with modern applications essential in today’s digital landscape." },
    { heading: "Knowledge", paragraph: "Knowledge is the understanding and awareness gained through study, experience, and learning. It serves as the foundation for decision-making, problem-solving, and innovation across all areas of life. This understanding enables individuals to interpret and interact effectively with the world around them." },
    
  ];

  return (
    <div className="bg-white p-6 min-h-[800px]"> {/* Set the outer background to white and add padding */}
      <div className="bg-gray-200 rounded-3xl p-6 mx-4 min-h-[700px]"> {/* Increased height for the gray div */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"> {/* Responsive grid with gaps */}
          {boxes.map((box, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow min-h-[200px]"> {/* Use min-h instead of fixed height */}
              <h3 className="text-lg font-semibold mb-2">{box.heading}</h3>
              <p className="mb-4">{box.paragraph}</p>
              <div className="flex justify-center ">
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

export default Section3;
