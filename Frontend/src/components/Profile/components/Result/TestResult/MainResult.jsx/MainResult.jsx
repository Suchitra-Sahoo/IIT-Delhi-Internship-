// MainResult.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import generatePDF from './generatePDF'; // Import the generatePDF function

const MainResult = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Mapping database names to user-friendly test names
  const testNamesMapping = {
    'AnalysisLoginSignup': 'Aptitude Test',
    'MemoryGameLoginSignup': 'Recognition Memory Test',
    'basicmathsLoginSignup': 'Analytics Reasoning Test',
    'IDSSTSLogInSignUp': 'Attention Test',
    'LoginSignup': 'Deduction Test',
    'CareerPathFinderTestLoginSignup': 'Emotional Intelligence Test',
    'StroopTestLoginSignup': 'Stroop Test',
    'ResilienceLogInSignUp': 'Resilience Test',
    'SituationalJudgementLoginSignup': 'Situational Judgment Test',
    'SocialEmotionalLoginSignup': 'Social Emotional Test',
    'TowerofHanoi': 'Tower of Hanoi Test',
    'VerbalReasoningLoginSignup': 'Verbal Reasoning Test'
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    setError('');
    try {
      const databases = Object.keys(testNamesMapping);

      const aggregatedData = [];

      for (const dbName of databases) {
        try {
          const response = await axios.get(`http://localhost:5005/api/${dbName}/loginconnections`);
          
          if (Array.isArray(response.data)) {
            response.data.forEach(user => {
              if (user.results && user.results.length > 0) {
                const existingUser = aggregatedData.find(u => u.name === user.name);
                if (existingUser) {
                  existingUser.tests.push({ testName: testNamesMapping[dbName], results: user.results });
                } else {
                  aggregatedData.push({
                    name: user.name,
                    email: user.email,
                    tests: [{ testName: testNamesMapping[dbName], results: user.results }],
                  });
                }
              }
            });
          }
        } catch (err) {
          console.error(`Error fetching data from ${dbName}:`, err.message);
        }
      }

      if (aggregatedData.length === 0) {
        setError('No data found for users with test results.');
      } else {
        setData(aggregatedData);
      }
    } catch (err) {
      console.error('Error in fetchData:', err.message);
      setError('Error fetching data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const downloadUserPDF = (user) => {
    generatePDF(user); // Use the imported generatePDF function
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold text-center mb-6">Performance Analysis</h1>
      {loading && <div>Loading...</div>}
      {error && <div className="text-red-500 mb-6">{error}</div>}
      {data.length > 0 && (
        <div>
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-[#4F709C]">
                <th className="border border-gray-300 px-4 py-2 text-white">Name</th>
                <th className="border border-gray-300 px-4 py-2 text-white">Email</th>
                <th className="border border-gray-300 px-4 py-2 text-white">Download Report</th>
              </tr>
            </thead>
            <tbody>
              {data.map((user, index) => (
                <tr key={index} className="text-center">
                  <td className="border border-gray-300 px-4 py-2">{user.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{user.email}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <button
                      onClick={() => downloadUserPDF(user)}
                      className="bg-[#37a4a4] text-white px-4 py-2 rounded "
                    >
                      Download PDF
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MainResult;
