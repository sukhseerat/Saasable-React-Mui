import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CRM from "../components/Crm";
import LandingAi from "./LandingAi";
import Crypto from "./Crypto";


const Navbar = () => {
  const [landingsMenuOpen, setLandingsMenuOpen] = useState(false);
  const [pagesMenuOpen, setPagesMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const showDashboard = location.pathname === "/blocks";

  // Landing pages
  const landingPages = [
    { name: "CRM", path: "/landing/crm" },
    { name: "AI", path: "/landing/landingai" },
    { name: "Crypto", path: "/landing/crypto" },
    { name: "Hosting", path: "/landing/hosting" },
    { name: "PMS", path: "/landing/pms" },
    { name: "HRM", path: "/landing/hrm" },
  ];

  const handleNavigation = (path) => {
    navigate(path);
    setLandingsMenuOpen(false);
    setPagesMenuOpen(false);
  };

  return (
    <nav className="bg-gray-50 py-2 px-4 border-b border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center text-blue-700 font-bold text-xl">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
                <path d="M12 2L4 6v12l8 4 8-4V6l-8-4zM12 18l-6-3V9l6 3v6z" />
              </svg>
              SaasAble
            </div>

            <div className="flex gap-3">
              <button 
                onClick={() => handleNavigation("/")}
                className="text-gray-600 px-3 py-1 text-sm font-medium rounded-md hover:bg-gray-100"
              >
                Home
              </button>

            
              <div className="relative">
                <button 
                  onClick={() => setLandingsMenuOpen(!landingsMenuOpen)}
                  className="text-gray-600 px-3 py-1 text-sm font-medium rounded-md hover:bg-gray-100 flex items-center"
                >
                  Landings
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {landingsMenuOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 py-1">
                    {landingPages.map((page, index) => (
                      <button
                        key={index}
                        onClick={() => handleNavigation(page.path)}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {page.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button 
                onClick={() => handleNavigation("/blocks")}
                className="text-gray-600 px-3 py-1 text-sm font-medium rounded-md hover:bg-gray-100"
              >
                Blocks
              </button>

              {showDashboard && (
                <button 
                  onClick={() => handleNavigation("/dashboard")}
                  className="text-gray-600 px-3 py-1 text-sm font-medium rounded-md hover:bg-gray-100"
                >
                  Dashboard
                </button>
              )}
            </div>
          </div>

         
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 bg-blue-700 text-white rounded-md text-sm font-medium hover:bg-blue-800">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
