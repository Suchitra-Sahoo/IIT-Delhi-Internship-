import React from 'react';
import { MdWorkOutline } from "react-icons/md";
import { HiMiniGiftTop } from "react-icons/hi2";
import { TiPin } from "react-icons/ti";

const Section1 = () => {
    const skills = [
        "Soft Skills", 
        "Education", 
        "Abilities", 
        "Interest", 
        "Work Values", 
        "Work Styles", 
        "Technology Skills", 
        "Knowledge", 
    ];

    const testDetails = {
        Psychometric: ["Personality", "Interest", "Values"],
        Cognitive: ["Decision Making", "Problem Solving", "Adaptability","Planning", "Integrity", "Communication"],
        Behavioural: ["Situation Judgement Test", "Role Play"],
        Aptitude: ["Verbal Reasoning", "Logical Reasoning"]
    };

    const sectorPoints = [
        "Retail",
        "Manufacturing",
        "Construction",
        "Healthcare and Insurance Sector",
        "Renewable Energy Sector",
        "IT Sector/Electronics",
        "Real Estate Sector",
        "Fast-Moving Consumer Goods (FMCG)",
        "Connectivity and Mobility",
        "Agriculture"
    ];

    return (
        <div className="flex justify-center items-center bg-gray-100 pt-28 pb-20 p-4">
            <div className="w-full max-w-6xl bg-white rounded-lg shadow-md flex flex-col sm:flex-row overflow-hidden">
                {/* Column 1 */}
                <div className="flex-1 border-b border-gray-200 sm:border-b-0 sm:border-r p-4 text-xl flex flex-col justify-between items-center text-[#4F709C]">
                    <div>
                        <div className="flex items-center mb-4 font-bold">
                            <MdWorkOutline className="text-[#4F709C] mr-2 text-3xl" />
                            Occupational Interest Profile
                        </div>
                        <div className="space-y-2 text-left text-black font-bold">
                            {skills.map((skill, index) => (
                                <div key={index} className="text-base">{skill}</div>
                            ))}
                        </div>
                    </div>
                    {/* Same size button */}
                    <button className="w-40 text-lg bg-[#008080] text-white py-2 px-4 rounded-lg mt-8 hover:bg-teal-600 transition duration-300">
                        Explore Now
                    </button>
                </div>

                {/* Column 2 */}
                <div className="flex-1 border-b border-gray-200 sm:border-b-0 sm:border-r p-4 text-xl flex flex-col justify-between items-center">
                    <div>
                        <div className="flex items-center mb-4 font-bold">
                            <HiMiniGiftTop className="text-black mr-2 text-3xl " />
                            Talent Assessment
                        </div>
                        <div className="space-y-4 text-left text-black">
                            {Object.keys(testDetails).map((test, index) => (
                                <div key={index} className="mb-3">
                                    <div className="font-bold text-lg">{test}</div>
                                    <div className="space-y-1 pl-5">
                                        {testDetails[test].map((subtext, subIndex) => (
                                            <div key={subIndex} className="text-sm font-semibold">{subtext}</div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Same size button */}
                    <button className="w-40 text-lg bg-[#008080] text-white py-2 px-4 rounded-lg mt-8 hover:bg-teal-600 transition duration-300">
                        Explore Now
                    </button>
                </div>

                {/* Column 3 */}
                <div className="flex-1 p-4 font-semibold flex flex-col justify-between items-center text-[#4F709C] text-xl">
                    <div>
                        <div className="flex items-center mb-4">
                            <TiPin className="text-[#4F709C] mr-2 text-3xl" />
                            Sector Wise
                        </div>
                        <div className="space-y-2 text-left text-black font-bold">
                            {sectorPoints.map((point, index) => (
                                <div key={index} className="text-base">{point}</div>
                            ))}
                        </div>
                    </div>
                    {/* Same size button */}
                    <button className="w-40 text-lg bg-[#008080] text-white py-2 px-4 rounded-lg mt-8 hover:bg-teal-600 transition duration-300">
                        Explore Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Section1;
