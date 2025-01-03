import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/Landing Page/LandingPage";
import HomePage from "./components/Home Page/HomePage";
import Login from "./components/Landing Page/components/Login";
import Signup from "./components/Landing Page/components/Signup";
import Features from "./components/Features/Features";
import Profile from './components/Profile/Profile'
import Assessment from "./components/Profile/components/Assessment/Assessment";
import Results from "./components/Profile/components/Result/Results"
import Resources from "./components/Profile/components/Resources/Resources";
import AnalyticsReasoning from "./components/Profile/components/Resources/AnalyticsReasoning"
import Aptitude from './components/Profile/components/Resources/Aptitude' 
import Situational_Judgement from "./components/Profile/components/Resources/SitutationalJudgement";
import SocialEmotionalCognitionTest from "./components/Profile/components/Resources/SocialEmotionalCognitionTest";
import VerbalReasoning from "./components/Profile/components/Resources/VerbalReasoning";
import TowerofHanoi from './components/Profile/components/Resources/TowerofHanoi'
import AttentionTest from "./components/Profile/components/Resources/AttentionTest";
import RecognitionMemoryTask from "./components/Profile/components/Resources/RecognitionMemoryTask";
import ResilienceTest from "./components/Profile/components/Resources/ResilienceTest";
import DeductionTest from "./components/Profile/components/Resources/DeductionTest";
import Settings from "./components/Profile/components/Setting/Settings";
import Form from './components/Profile/components/Assessment/AssessmentForm';
import Result1 from "./components/Profile/components/Result/TestResult/AptitudeTestDashboard/maindashboard";
import RecognitionTest from "./components/Profile/components/Result/TestResult/RecognitionMemoryDashboard/maindashboard";
import EmotionalIntelligenceTest from "./components/Profile/components/Resources/EmotionalIntelligenceTest";
import StroopTest from "./components/Profile/components/Resources/StroopTest";
import MainDashboard from "./components/Profile/components/Result/TestResult/MainResult.jsx/maindashboard";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />     
        <Route path="/login" element={<Login />} />
        <Route path="/features" element={<Features />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/assessment" element={<Assessment />} />
        <Route path="/results" element={<Results />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/analytics-reasoning" element={<AnalyticsReasoning />} />
        <Route path="/aptitude" element={<Aptitude />} />
        <Route path="/situational" element={<Situational_Judgement />} />
        <Route path="/socialemotionaltest" element={<SocialEmotionalCognitionTest />} />
        <Route path="/verbalreasoning" element={<VerbalReasoning />} />
        <Route path="/towerofhanoi" element={<TowerofHanoi />} />
        <Route path="/attention" element={<AttentionTest />} />
        <Route path="/recognition" element={<RecognitionMemoryTask />} />
        <Route path="/resilience" element={<ResilienceTest />} />
        <Route path="/deduction" element={<DeductionTest />} />
        <Route path="/setting" element={<Settings />} />
        <Route path="/form" element={<Form />} />
        <Route path="/Result1" element={<Result1 />} />
        <Route path="/RecognitionTest" element={<RecognitionTest />} />
        <Route path="/Emotional" element={<EmotionalIntelligenceTest />} />
        <Route path="stroop" element={<StroopTest />} />
        <Route path="MainDashboard" element={<MainDashboard />} />
         
        </Routes>
    </Router>
  );
}

export default App;
