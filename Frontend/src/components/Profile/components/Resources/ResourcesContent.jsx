import React from "react";
import { useNavigate } from "react-router-dom";
import image1 from '../../ProfilePage-Assets/illustration2.png'; // Correct path to your image
import image2 from '../../ProfilePage-Assets/illustration3.jpg'
import image3 from '../../ProfilePage-Assets/illustration4.png'
import image4 from '../../ProfilePage-Assets/illustration5.png'
import image5 from '../../ProfilePage-Assets/illustration6.png'
import image6 from '../../ProfilePage-Assets/illustration7.png'

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
