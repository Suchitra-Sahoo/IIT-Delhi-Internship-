import React, { useState } from 'react';
import { auth, googleProvider } from '../../firebase'; // Import Firebase config
import { signInWithPopup, signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import googleIcon from "../Landing-Page-Assets/illustration13.png"; 
import image1 from '../Landing-Page-Assets/illustration14.png';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [resetEmail, setResetEmail] = useState(''); // State for reset email
  const [isResetModalOpen, setIsResetModalOpen] = useState(false); // Modal state
  const navigate = useNavigate();

  // Handle Google login
  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log('User logged in with Google:', user);
        
        // Store the username in localStorage
        localStorage.setItem('username', user.displayName);

        navigate('/'); // Redirect to homepage after successful login
      })
      .catch((error) => {
        console.log('Error during Google login:', error.message);
      });
  };

  // Handle email and password login
  const handleLoginWithEmailPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        console.log('User logged in:', data.user);
        
        // Store the username in localStorage
        localStorage.setItem('username', data.user.email);

        navigate('/'); // Redirect to homepage after successful login
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError('Error during login. Please try again.');
      console.log('Error during login:', error.message);
    }
  };

  // Handle password reset
  const handlePasswordReset = (e) => {
    e.preventDefault();
    sendPasswordResetEmail(auth, resetEmail)
      .then(() => {
        alert('Password reset email sent! Check your inbox.');
        setIsResetModalOpen(false); // Close modal after sending email
      })
      .catch((error) => {
        setError('Failed to send password reset email. Please try again.');
        console.log('Error during password reset:', error.message);
      });
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
      {/* Centering the login section */}
      <div className="flex flex-grow items-center justify-center">
        <div className="p-8 max-w-md w-full">
          <h2 className="text-3xl font-semibold mb-6 text-center">Log In</h2>
          <div className="text-center mb-4">
            <p className="text-gray-600">
              New user? <a href="/signup" className="text-[#4F709C] hover:underline">Create an account</a>
            </p>
          </div>

          {/* Login with email and password */}
          <form onSubmit={handleLoginWithEmailPassword}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 mb-4 border rounded"
              placeholder="Email"
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 mb-4 border rounded"
              placeholder="Password"
              required
            />
            
            {/* Forgot Password Section */}
            <div className="mt-1 mb-3">
              <p className="text-gray-500 cursor-pointer underline" onClick={() => setIsResetModalOpen(true)}>
                Forget Password?
              </p>
            </div>
            <button
              type="submit"
              className="w-full bg-[#008080] text-white py-2 rounded-lg"
            >
              Log In
            </button>
            <div className="flex items-center my-4">
              <hr className="flex-grow border-gray-500" />
              <span className="mx-4 text-gray-500">Or</span>
              <hr className="flex-grow border-gray-500" />
            </div>
            
            {/* Google Login Button */}
            <button
              onClick={handleGoogleLogin}
              className="flex items-center justify-center w-full bg-white text-gray-800 border border-black py-2 rounded-lg hover:bg-gray-100 mt-4"
            >
              <img src={googleIcon} alt="Google icon" className="w-6 h-6 mr-2" />
              Log In with Google
            </button>
          </form>

          {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
        </div>
      </div>

      {/* Password Reset Modal */}
      {isResetModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg max-w-sm w-full">
            <h2 className="text-lg font-semibold mb-4">Reset Password</h2>
            <p className="text-gray-600 mb-4">Enter your email to receive a password reset link.</p>
            <input
              type="email"
              value={resetEmail}
              onChange={(e) => setResetEmail(e.target.value)}
              className="w-full p-2 mb-4 border rounded"
              placeholder="Your email"
              required
            />
            <button
              onClick={handlePasswordReset}
              className="w-full bg-[#008080] text-white py-2 rounded-lg"
            >
              Send Reset Link
            </button>
            <button
              onClick={() => setIsResetModalOpen(false)}
              className="w-full bg-red-500 text-white py-2 rounded-lg mt-2"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
