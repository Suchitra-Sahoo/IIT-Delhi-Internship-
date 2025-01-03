import React from 'react';

const Section5 = () => {
  const boxes = [
    { heading: "Psychometric Tests", paragraph: "A psychometric test measures an individual's cognitive abilities, personality traits, and behavioral patterns. It helps assess skills, aptitude, and suitability for specific roles, providing valuable insights for recruitment, development, and personal growth." },
    { heading: "Cognitive Tests", paragraph: "A cognitive test evaluates an individual's mental abilities, including reasoning, problem-solving, memory, and attention. It helps measure intelligence, learning capacity, and how effectively a person processes information, aiding in recruitment and personal development." },
    { heading: "Behavioral Tests", paragraph: "A behavioral test assesses an individual's actions, reactions, and interpersonal skills in various situations. It helps evaluate personality traits, decision-making, and emotional responses, providing insights into how someone may perform in a work environment or handle specific challenges." },
    { heading: "Aptitude Tests", paragraph: "An aptitude test measures an individual's natural abilities and potential to learn new skills. It assesses areas such as logical reasoning, numerical ability, problem-solving, and verbal skills, helping to determine suitability for specific roles or tasks." },
    
    
  ];

  return (
    <div className="bg-white p-6 min-h-[500px]"> 
      <div className="bg-gray-200 rounded-3xl p-6 mx-4 min-h-[600px]"> 
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"> 
          {boxes.map((box, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow min-h-[200px]"> 
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
