import React from 'react';
import { motion } from 'framer-motion';

const IntegrationSection = () => {
  
  const topRow = [
    { 
      name: 'Master Card', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <circle cx="9" cy="12" r="3" />
          <circle cx="15" cy="12" r="3" />
        </svg>
      )
    },
    { 
      name: 'Skype', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M18 8a6 6 0 0 0-6-6 6 6 0 0 0-6 6 6 6 0 0 0 6 6 6 6 0 0 0 6-6Z" />
          <path d="M12 16v6" />
        </svg>
      )
    },
    { 
      name: 'Google Drive', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="m9 3 .866 1.5M4 15l.866 1.5M15 4l-3.46 6M4 13l4.33 1M20 13l-3.46 6M9.5 9l-3.46 6M7.5 4l9 15M16 4H8M13 7l4.5 7.5M16 18H8" />
        </svg>
      )
    }
  ];

 
  const middleRow = [
    { 
      name: 'Abstract', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M2 12h20M2 12a10 10 0 0 1 20 0M2 12a10 10 0 0 0 20 0" />
        </svg>
      )
    },
    { 
      name: 'Slack', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
        </svg>
      )
    },
    { 
      name: 'Paypal', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M10 13h2.5a2.5 2.5 0 0 0 0-5H6" />
          <path d="M9 18h6.5a2.5 2.5 0 0 0 0-5H4" />
        </svg>
      )
    },
    { 
      name: 'Facebook', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      )
    }
  ];


  const bottomRow = [
    { 
      name: 'Tripadvisor', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="12" r="3" />
          <path d="M7 17 H 17 M 9 9 H 15" />
        </svg>
      )
    },
    { 
      name: 'Abstract', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M2 12h20M2 12a10 10 0 0 1 20 0M2 12a10 10 0 0 0 20 0" />
        </svg>
      )
    },
    { 
      name: 'Asana', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <circle cx="12" cy="12" r="3" />
          <path d="M6.5 12a5.5 5.5 0 1 0 11 0 5.5 5.5 0 1 0-11 0Z" />
        </svg>
      )
    }
  ];

  
  const fourthRow = [
    { 
      name: 'Skype', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M18 8a6 6 0 0 0-6-6 6 6 0 0 0-6 6 6 6 0 0 0 6 6 6 6 0 0 0 6-6Z" />
          <path d="M12 16v6" />
        </svg>
      )
    },
    { 
      name: 'Paypal', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M10 13h2.5a2.5 2.5 0 0 0 0-5H6" />
          <path d="M9 18h6.5a2.5 2.5 0 0 0 0-5H4" />
        </svg>
      )
    },
    { 
      name: 'Master Card', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <circle cx="9" cy="12" r="3" />
          <circle cx="15" cy="12" r="3" />
        </svg>
      )
    }
  ];

  return (
    <div className="flex flex-col md:flex-row bg-gray-50 rounded-lg overflow-hidden w-full max-w-6xl mx-auto">
      
      <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Integrate smoothly with the tools you adore.
        </h2>
        <p className="text-gray-600 mb-8">
          The central hub where all the different parts of softwares are managed together.
        </p>
        <div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full transition-colors">
            See All Integration
          </button>
        </div>
      </div>

     
      <div className="md:w-1/2 bg-white p-8 flex items-center justify-center">
        <div className="w-full h-full flex flex-col gap-4">
      
          <div className="flex justify-center gap-4">
            {topRow.map((integration, index) => (
              <motion.div
                key={`top-${integration.name}-${index}`}
                className="bg-gray-50 hover:bg-gray-100 rounded-full p-4 flex items-center justify-center"
                initial={{ x: 0 }}
                animate={{ 
                  x: [0, 15, 0, -15, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.3,
                }}
              >
                <div className="flex flex-col items-center space-y-1">
                  <div className="text-gray-700">
                    {integration.icon}
                  </div>
                  <span className="text-xs text-gray-700">{integration.name}</span>
                </div>
              </motion.div>
            ))}
          </div>

     
          <div className="flex justify-center gap-4">
            {middleRow.map((integration, index) => (
              <motion.div
                key={`middle-${integration.name}-${index}`}
                className="bg-gray-50 hover:bg-gray-100 rounded-full p-4 flex items-center justify-center"
                initial={{ x: 0 }}
                animate={{ 
                  x: [0, 15, 0, -15, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.3 + 0.5,
                }}
              >
                <div className="flex flex-col items-center space-y-1">
                  <div className="text-gray-700">
                    {integration.icon}
                  </div>
                  <span className="text-xs text-gray-700">{integration.name}</span>
                </div>
              </motion.div>
            ))}
          </div>

   
          <div className="flex justify-center gap-4">
            {bottomRow.map((integration, index) => (
              <motion.div
                key={`bottom-${integration.name}-${index}`}
                className="bg-gray-50 hover:bg-gray-100 rounded-full p-4 flex items-center justify-center"
                initial={{ x: 0 }}
                animate={{ 
                  x: [0, 15, 0, -15, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.3 + 0.2,
                }}
              >
                <div className="flex flex-col items-center space-y-1">
                  <div className="text-gray-700">
                    {integration.icon}
                  </div>
                  <span className="text-xs text-gray-700">{integration.name}</span>
                </div>
              </motion.div>
            ))}
          </div>

        
          <div className="flex justify-center gap-4">
            {fourthRow.map((integration, index) => (
              <motion.div
                key={`fourth-${integration.name}-${index}`}
                className="bg-gray-50 hover:bg-gray-100 rounded-full p-4 flex items-center justify-center"
                initial={{ x: 0 }}
                animate={{ 
                  x: [0, 15, 0, -15, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.3 + 0.7,
                }}
              >
                <div className="flex flex-col items-center space-y-1">
                  <div className="text-gray-700">
                    {integration.icon}
                  </div>
                  <span className="text-xs text-gray-700">{integration.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegrationSection;