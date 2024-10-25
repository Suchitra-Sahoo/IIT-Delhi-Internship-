import React, { useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../firebase"; // Firebase config
import { useNavigate } from "react-router-dom";
import googleIcon from "../Landing-Page-Assets/illustration13.png"; // Path to your Google icon image
import image1 from '../Landing-Page-Assets/illustration14.png'; // Your illustration image

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Handle Google Signup
  const handleGoogleSignup = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log("Signed up with Google:", result.user);
        navigate("/login");
      })
      .catch((error) => {
        console.log("Error during Google signup:", error.message);
      });
  };

  // Handle traditional signup
  const handleSignup = (e) => {
    e.preventDefault();
    if (!email || !password || !username) {
      setError("Please fill out all fields.");
      return;
    }

    // Add your signup logic here, such as using Firebase's createUserWithEmailAndPassword
    console.log("User signed up:", { username, email, password });
    navigate("/login"); // Redirect to login after signup
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Navbar Section */}
      <div className="bg-[#4F709C] h-16 flex items-center justify-center relative">
        <img 
          src={image1} 
          alt="Illustration" 
          className="h-12 cursor-pointer" 
          onClick={() => navigate("/")} // Redirect to landing page on click
        />
      </div>

      <div className="flex flex-col justify-center items-center flex-grow"> {/* Center the content */}
        <h2 className="text-3xl mb-6 text-center font-semibold text-gray-800">Sign Up</h2>
        <p className="text-center text-gray-600 mb-4">
          Already have an account?{" "}
          <button
            onClick={() => navigate("/login")} // Redirect to login page
            className="text-blue-800 hover:underline"
          >
            Login
          </button>
        </p>
        {/* Sign-up Form */}
        <form onSubmit={handleSignup} className="w-full max-w-md px-8">
          {/* Username Input */}
          <label htmlFor="username" className="block mb-2 text-gray-700">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none transition duration-200"
          />
          {/* Email Input */}
          <label htmlFor="email" className="block mb-2 text-gray-700">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none transition duration-200"
          />
          {/* Password Input */}
          <label htmlFor="password" className="block mb-2 text-gray-700">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none transition duration-200"
          />
          {/* Error message */}
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button
            type="submit"
            className=" mt-5 w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 mb-4"
          >
            Sign Up
          </button>
          {/* Or Divider */}
          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-500" />
            <span className="mx-4 text-gray-500">Or</span>
            <hr className="flex-grow border-gray-500" />
          </div>
          {/* Google Sign-up Button */}
          <button
            onClick={handleGoogleSignup}
            className="flex items-center justify-center w-full bg-white text-gray-800 border border-black py-2 rounded-lg hover:bg-gray-100 mt-4"
          >
            <img src={googleIcon} alt="Google icon" className="w-6 h-6 mr-2" />
            Sign Up with Google
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
