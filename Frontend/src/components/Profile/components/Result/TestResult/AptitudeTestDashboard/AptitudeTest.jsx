import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Result1 = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:5000/api/loginconnections')
      .then(response => {
        setData(response.data); // Save data to state
        setLoading(false); // Stop loading
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setLoading(false); // Stop loading on error
      });
  }, []);

  // Function to normalize score to a scale of 10
  const normalizeScore = (score) => {
    return ((score / 33) * 10).toFixed(2); // Normalize to 10, rounded to 2 decimal places
  };

  // Function to get the best score for a user
  const getBestScore = (results) => {
    return Math.max(...results.map(result => result.score));
  };

  // Function to get remark based on normalized score
  const getRemark = (normalizedScore) => {
    if (normalizedScore >= 9) {
      return "Excellent!";
    } else if (normalizedScore >= 7) {
      return "Good";
    } else if (normalizedScore >= 5) {
      return "Average";
    } else {
      return "Needs Improvement";
    }
  };

  // Function to get text color for remark
  const getRemarkTextColor = (remark) => {
    switch (remark) {
      case "Excellent!":
        return "text-green-600"; // Green for Excellent
      case "Good":
        return "text-yellow-600"; // Yellow for Good
      case "Average":
        return "text-orange-600"; // Orange for Average
      case "Needs Improvement":
        return "text-red-600"; // Red for Needs Improvement
      default:
        return "text-gray-600"; // Default color
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold text-center mb-6">Aptitude Test Results</h1>
      
      {loading ? (
        <div className="text-center text-xl">Loading...</div>
      ) : (
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg">
          <thead>
            <tr className="bg-gray-100 text-gray-700 text-left">
              <th className="py-3 px-4 border-b">Name</th>
              <th className="py-3 px-4 border-b">Email</th>
              <th className="py-3 px-4 border-b">Best Score (Out of 10)</th>
              <th className="py-3 px-4 border-b">Remark</th>
              <th className="py-3 px-4 border-b">Date</th>
              <th className="py-3 px-4 border-b">Time</th>
            </tr>
          </thead>
          <tbody>
            {data.map(user => {
              // Get the best score from the user's results
              const bestScore = getBestScore(user.results);
              // Normalize the best score
              const normalizedScore = normalizeScore(bestScore);
              // Get remark based on normalized score
              const remark = getRemark(normalizedScore);
              // Get text color for the remark
              const remarkColor = getRemarkTextColor(remark);

              return (
                <tr key={user._id} className="hover:bg-gray-50">
                  <td className="py-3 px-4 border-b">{user.name}</td>
                  <td className="py-3 px-4 border-b">{user.email}</td>
                  <td className="py-3 px-4 border-b">{normalizedScore} / 10</td>
                  <td className={`py-3 px-4 border-b ${remarkColor}`}>{remark}</td>
                  <td className="py-3 px-4 border-b">{new Date(user.results[0].date).toLocaleDateString()}</td>
                  <td className="py-3 px-4 border-b">{new Date(user.results[0].date).toLocaleTimeString()}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Result1;
