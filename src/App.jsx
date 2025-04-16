import React from "react"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./assets/components/Navbar";
import HeroSection from "./assets/components/HeroSection";
import WorkflowSection from "./assets/components/WorkflowSection";
import AiSection from "./assets/components/AiSection";
import Integrate from "./assets/components/Integrate";
import Reviews from "./assets/components/Reviews";
import ResourceCenter from "./assets/components/ResourceCenter";
import Frequently from "./assets/components/Frequently";
import Footer from "./assets/components/Footer";
import Blocks from "./assets/components/Blocks";
import Dashboard from "./assets/components/Dashboard";
import Landing from "./assets/components/Landings";
import Features from "./assets/components/Features";  
import Seamless from "./assets/components/Seamless";
import Secure from "./assets/components/Secure";
import Insights from "./assets/components/Insights";
import Flexible from "./assets/components/Flexible";
import CryptoDropdown from "./assets/components/CryptoDropdown";
import Launch from "./assets/components/Launch";
import Unmatched from "./assets/components/Unmatched";
import Intelli from "./assets/components/Intelli";
import Simple from "./assets/components/Simple";
import Tailored from "./assets/components/Tailored";
import Real from "./assets/components/Real";
import Upgrade from "./assets/components/Upgrade";
import Affordable from "./assets/components/Affordable";
import ResCenter from "./assets/components/ResCenter";
import FrequentlyTwo from "./assets/components/FrequentlyTwo";
import English from "./assets/components/English";
import Trusted from "./assets/components/Trusted";
import Empowering from "./assets/components/Empowering";
import Seamlesspms from "./assets/components/Seamlesspms";
import ProjectExecution from "./assets/components/ProjectExecution";
import Unleash from "./assets/components/Unleash";
import UserExperience from "./assets/components/UserExperience"
import Start from "./assets/components/Start"
import Unlock from "./assets/components/Unlock"
import GetStarted from "./assets/components/GetStarted"
import FrequentlyThree from "./assets/components/FrequentlyTwo"
import Ready from "./assets/components/Ready"
import Future from "./assets/components/Future"
import Hear from "./assets/components/Hear"
import Press from "./assets/components/Press"


const HomePage = () => {
  return (
    <>
      <HeroSection />
      <WorkflowSection />
      <AiSection />
      <Integrate />
      <Reviews />
      <ResourceCenter />
      <Frequently />
      <Seamless/>
    
    </>
  );
};

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blocks" element={<Blocks />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/landing/:landingType" element={<Landing />} />
          <Route path="/landing/:landingType/features" element={<Features />} />
          <Route path="/seamless" element={<Seamless />} />
        
          <Route path="/secure" element={<Secure />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/flexible" element={<Flexible />} />
          <Route path="/cryptodropdown" element={<CryptoDropdown />} />
          
          <Route path="/launch" element={<Launch />} />
          <Route path="/unmatched" element={<Unmatched />} />
          <Route path="/intelli" element={<Intelli/>} />
          <Route path="/simple" element={<Simple />} />
          <Route path="/tailored" element={<Tailored/>} />
          <Route path="/real" element={<Real />} />
          <Route path="/upgrade" element={<Upgrade />} />
          <Route path="/affordable" element={<Affordable />} />
          <Route path="/rescenter" element={<ResCenter />} />
          <Route path="/frequentlytwo" element={<FrequentlyTwo />} />
          <Route path="/english" element={<English />} />
          <Route path="/trusted" element={<Trusted/>} />
          <Route path="/empowering" element={<Empowering />} />
          <Route path="/seamlesspms" element={<Seamlesspms />} />
          {/* <Route path="/execution" element={<Execution/>} /> */}
          <Route path="/projectexecution" element={<ProjectExecution />} />
          <Route path="/unleash" element={<Unleash />} />
          <Route path="/userexperience" element={<UserExperience />} />
          <Route path="/start" element={<Start />} />
          <Route path="/unlock" element={<Unlock />} />
          <Route path="/getstarted" element={<GetStarted />} />
          <Route path="/frequentlythree" element={<FrequentlyThree />} />
          <Route path="/ready" element={<Ready />} />
          <Route path="/future" element={<Future />} />
          <Route path="/hear" element={<Hear />} />
          <Route path="/press" element={<Press/>} />

         
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
