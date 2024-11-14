import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/Landing Page/LandingPage";
import HomePage from "./components/Home Page/HomePage";
import Login from "./components/Landing Page/components/Login";
import Signup from "./components/Landing Page/components/Signup";
import Features from "./components/Features/Features";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />     
        <Route path="/login" element={<Login />} />
        <Route path="/features" element={<Features />} />
        </Routes>
    </Router>
  );
}

export default App;
