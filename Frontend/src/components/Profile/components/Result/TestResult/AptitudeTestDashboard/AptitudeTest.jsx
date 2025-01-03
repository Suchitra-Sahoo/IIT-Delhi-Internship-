import React, { useEffect, useState } from 'react';
import axios from 'axios';
import generatePDF from './generatePDF'; // Import the generatePDF function

const Result1 = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/loginconnections')
      .then((response) => {
        setData(response.data); // Save data to state
        setLoading(false); // Stop loading
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false); // Stop loading on error
      });
  }, []);

  const getBestScore = (results) => {
    return Math.max(...results.map((result) => result.score));
  };

  const getRemark = (score) => {
    if (score >= 30) return 'Excellent!';
    if (score >= 23) return 'Good';
    if (score >= 17) return 'Average';
    return 'Needs Improvement';
  };

  const getRemarkTextColor = (remark) => {
    switch (remark) {
      case 'Excellent!':
        return 'text-green-600';
      case 'Good':
        return 'text-yellow-600';
      case 'Average':
        return 'text-orange-600';
      case 'Needs Improvement':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold text-center mb-6">Aptitude Test Results</h1>
      {loading ? (
        <div className="text-center text-xl">Loading...</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg">
            <thead>
              <tr className="bg-gray-100 text-gray-700 text-left">
                <th className="py-3 px-4 border-b">Name</th>
                <th className="py-3 px-4 border-b">Email</th>
                <th className="py-3 px-4 border-b">Best Score (Out of 33)</th>
                <th className="py-3 px-4 border-b">Remark</th>
                <th className="py-3 px-4 border-b">Date</th>
                <th className="py-3 px-4 border-b">Time</th>
                <th className="py-3 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((user) => {
                const bestScore = getBestScore(user.results);
                const remark = getRemark(bestScore);
                const remarkColor = getRemarkTextColor(remark);

                return (
                  <tr key={user._id} className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">{user.name}</td>
                    <td className="py-3 px-4 border-b">{user.email}</td>
                    <td className="py-3 px-4 border-b">{bestScore} / 33</td>
                    <td className={`py-3 px-4 border-b ${remarkColor}`}>{remark}</td>
                    <td className="py-3 px-4 border-b">
                      {new Date(user.results[0].date).toLocaleDateString()}
                    </td>
                    <td className="py-3 px-4 border-b">
                      {new Date(user.results[0].date).toLocaleTimeString()}
                    </td>
                    <td className="py-3 px-4 border-b">
                      <button
                        onClick={() => generatePDF(user)}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                      >
                        Download PDF
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Result1;
