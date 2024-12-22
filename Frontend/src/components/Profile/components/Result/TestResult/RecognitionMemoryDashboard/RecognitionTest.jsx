import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RecognitionTest = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:5000/api/memorygame-loginconnections') // Ensure the correct API endpoint
      .then(response => {
        setData(response.data); // Save data to state
        setLoading(false); // Stop loading
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setLoading(false); // Stop loading on error
      });
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold text-center mb-6">Recognition Memory Test Results</h1>
      
      {loading ? (
        <div className="text-center text-xl">Loading...</div>
      ) : (
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg">
          <thead>
            <tr className="bg-gray-100 text-gray-700 text-left">
              <th className="py-3 px-4 border-b">Name</th>
              <th className="py-3 px-4 border-b">Email</th>
              <th className="py-3 px-4 border-b">Score</th>
              <th className="py-3 px-4 border-b">Date</th>
              <th className="py-3 px-4 border-b">Time</th>
            </tr>
          </thead>
          <tbody>
            {data.map(user => {
              return (
                <tr key={user._id} className="hover:bg-gray-50">
                  <td className="py-3 px-4 border-b">{user.name}</td>
                  <td className="py-3 px-4 border-b">{user.email}</td>
                  <td className="py-3 px-4 border-b">
                    {user.results.map(result => (
                      <div key={result._id}>Score: {result.scoretest2}</div>
                    ))}
                  </td>
                  <td className="py-3 px-4 border-b">
                    {user.results.map(result => (
                      <div key={result._id}>{new Date(result.date).toLocaleDateString()}</div>
                    ))}
                  </td>
                  <td className="py-3 px-4 border-b">
                    {user.results.map(result => (
                      <div key={result._id}>{new Date(result.date).toLocaleTimeString()}</div>
                    ))}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default RecognitionTest;
