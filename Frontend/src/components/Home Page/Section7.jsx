import React from 'react';

const Section7 = () => {
  const boxes = [
    { heading: "Retail", paragraph: "Retail sector test is designed to assess skills and competencies essential for success in the retail industry. It evaluates areas such as customer service, sales aptitude, communication, problem-solving, and adaptability." },
    { heading: "Manufacturing", paragraph: "Manufacturing sector test helps organizations assess candidates' ability to perform efficiently in roles like production, quality control, and equipment maintenance, ensuring they meet the industry's operational standards." },
    { heading: "Construction", paragraph: "Construction sector test evaluates skills such as project management, technical knowledge, and safety compliance, helping organizations identify candidates suited for roles in site management, planning, and quality assurance." },
    { heading: "Health & Indurance Sector", paragraph: "Health and insurance sector test helps organizations evaluate candidates for roles in healthcare administration, claims processing, and customer support, ensuring they can meet industry standards and provide quality service." },
    { heading: "Renewable Energy Sector", paragraph: "Renewable energy sector test helps organizations assess candidates for roles in solar, wind, and other renewable energy projects, ensuring they have the knowledge and capabilities to drive sustainable energy initiatives." },
    { heading: "IT Sector/Electronics", paragraph: "IT and electronics sector test helps organizations assess candidates for roles in software development, network administration, electronics engineering, and technical support, ensuring they have the expertise to thrive in the fast-paced tech industry." },
    { heading: "Real Estate Sector", paragraph: "Real estate sector test helps organizations evaluate candidates for roles in real estate sales, property management, and investment analysis, ensuring they are equipped to navigate the complexities of the real estate market." },
    { heading: "Fast Moving Consumer Goods", paragraph: "Fast moving consumer goods sector test helps organizations assess candidates for roles in product management, distribution, and customer engagement, ensuring they can thrive in the dynamic FMCG industry." },
    { heading: "Connectivity & Mobility", paragraph: "Connectivity and mobility sector test helps organizations evaluate candidates for roles in telecommunications, smart mobility solutions, and logistics planning, ensuring they are equipped to innovate and perform in this fast-evolving industry." },
    { heading: "Agriculture", paragraph: "Agriculture sector test evaluates skills in areas such as crop management, sustainability practices, farm operations, and market analysis. It helps organizations assess candidates for roles in agronomy, farm management, and agricultural technology, ensuring they are equipped to contribute effectively to the agricultural industry." },
  ];

  return (
    <div className="bg-white p-6 min-h-[800px]"> {/* Set the outer background to white and add padding */}
      <div className="bg-gray-200 rounded-3xl p-6 mx-4 min-h-[700px]"> {/* Increased height for the gray div */}
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

export default Section7;
