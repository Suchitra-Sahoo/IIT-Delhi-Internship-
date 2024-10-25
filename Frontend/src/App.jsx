import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/Landing Page/LandingPage";
import HomePage from "./components/Home Page/HomePage";
import Login from "./components/Landing Page/components/Login";
import Signup from "./components/Landing Page/components/Signup";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />     
        <Route path="/login" element={<Login />} />
        </Routes>
    </Router>
  );
}

export default App;
