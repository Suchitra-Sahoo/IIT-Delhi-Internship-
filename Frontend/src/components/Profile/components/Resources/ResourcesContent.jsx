import React from "react";
import { useNavigate } from "react-router-dom";
import image1 from '../../ProfilePage-Assets/illustration2.png'; // Correct path to your image
import image2 from '../../ProfilePage-Assets/illustration3.jpg'
import image3 from '../../ProfilePage-Assets/illustration4.png'
import image4 from '../../ProfilePage-Assets/illustration5.png'
import image5 from '../../ProfilePage-Assets/illustration6.png'
import image6 from '../../ProfilePage-Assets/illustration7.png'
import image7 from '../../ProfilePage-Assets/illustration8.png'
import image8 from '../../ProfilePage-Assets/illustration9.jpg'
import image9 from '../../ProfilePage-Assets/illustration10.jpg'
import image10 from '../../ProfilePage-Assets/illustration 11.jpg'
import image11 from '../../ProfilePage-Assets/illustration12.jpg'
import image12 from '../../ProfilePage-Assets/illustration13.jpg'

const testingGames = [
  {
    name: "Aptitude",
    description: "Enhance your problem-solving and logical reasoning skills.",
    route: "/aptitude",
    image: image1,
  },
  {
    name: "Situational Judgement",
    description: "Test your ability to handle real-world scenarios effectively.",
    route: "/situational",
    image: image2,
  },
  {
    name: "Social Emotional Cognition Test",
    description: "Assess your social and emotional understanding.",
    route: "/socialemotionaltest",
    image: image3,
  },
  {
    name: "Analytics Reasoning",
    description: "Challenge your analytical reasoning with engaging problems.",
    route: "/analytics-reasoning",
    image: image4,
  },
  {
    name: "Verbal Reasoning",
    description: "Improve your comprehension and verbal reasoning skills.",
    route: "/verbalreasoning",
    image: image5,
  },
  {
    name: "Tower of Hanoi",
    description: "Test your strategic thinking and problem-solving abilities.",
    route: "/towerofhanoi",
    image: image6,
  },
    {
      name: "Attention Test",
      description: "Enhance your problem-solving and logical reasoning skills by focusing on your attention span and concentration.",
      route: "/attention",
      image: image7,
    },
    {
      name: "Resilience Test",
      description: "Improve your mental strength and adaptability by solving challenges that test your ability to recover from setbacks.",
      route: "/resilience",
      image: image8,
    },
    {
      name: "Recognition Memory Task",
      description: "Boost your memory retention and recognition abilities by recalling visual and verbal information.",
      route: "/recognition",
      image: image9,
    },
    {
      "name": "Problem-Solving & Deduction Test",
      "description": "Sharpen your analytical and logical thinking by solving challenging puzzles and testing your deduction skills to identify patterns and solutions.",
      "route": "/deduction",
      "image": image10
    },   
    {
      "name": "Emotional Intelligence Test",
      "description": "Assess your ability to recognize, understand, and manage emotions in yourself and others through scenarios and questions designed to enhance emotional awareness and empathy.",
      "route": "/emotional",
      "image": image11
    },    
    {
      "name": "Stroop Test",
      "description": "Test your cognitive control and reaction time by identifying the color of words that may not match their meaning, challenging your brain's ability to process conflicting information.",
      "route": "/stroop",
      "image": image12
    }
       
    
 
];

const ResourcesContent = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4 sm:p-6 w-full">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 ml-10 ">
      
      </h1>

      {/* List of Testing Games */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testingGames.map((game, index) => (
          <div
            key={index}
            className="border p-4 rounded-lg shadow-md bg-white flex flex-col justify-between"
          >
            <div>
              <h2 className="font-bold text-lg sm:text-xl mb-2">{game.name}</h2>
              <p className="text-gray-600 text-sm sm:text-base">
                {game.description}
              </p>
            </div>
            {/* Increased image area height */}
            <div className="relative w-full h-64 mb-4">
              <img
                src={game.image}
                alt={game.name}
                className="absolute top-0 left-0 w-full h-full object-cover rounded-lg mt-3"
              />
            </div>
            <button
              onClick={() => navigate(game.route)}
              className="bg-[#008080] text-white mt-4 py-2 px-4 rounded text-sm sm:text-base hover:bg-[#005f5f] transition"
            >
              Start Test
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourcesContent;
