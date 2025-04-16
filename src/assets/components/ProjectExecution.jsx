import React from 'react';
import { Box, Typography, Button, LinearProgress, Avatar, Chip } from '@mui/material';

const ProjectExecutionDashboard = () => {
  return (
    <div className="bg-black text-white min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
       
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2">Step-by-Step Project Execution</h1>
          <p className="text-xl text-gray-300">Fine-tune configurations to achieve peak performance while minimizing costs.</p>
        </div>

     
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
       
          <div className="space-y-16">
        
            <div className="rounded-lg bg-gray-900 bg-opacity-60 p-6 relative">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="flex items-center mb-2">
                    <div className="bg-yellow-500 w-6 h-6 mr-2"></div>
                    <span className="text-gray-400">Use of 100 GB</span>
                  </div>
                  <div className="flex items-center">
                    <Avatar src="https://www.saasable.io/assets/images/graphics/pms/graphics2-dark.svg" className="mr-2" />
                    <span className="text-gray-400">getlayers.io</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 p-4 rounded-lg mb-4">
                <div className="flex justify-between mb-2">
                  <h3 className="text-white">Used space</h3>
                  <span className="text-gray-400">...</span>
                </div>
                <p className="text-sm text-gray-300 mb-4">Your team has used 80% of your available space. Need more?</p>
                <LinearProgress 
                  variant="determinate" 
                  value={80} 
                  className="mb-4"
                  sx={{ 
                    backgroundColor: '#333',
                    '& .MuiLinearProgress-bar': {
                      backgroundColor: '#D4AF37' 
                    },
                    height: 8,
                    borderRadius: 4
                  }}
                />
                <div className="flex">
                  <Button variant="text" className="text-gray-400 mr-2">Dismiss</Button>
                  <Button variant="text" className="text-yellow-500">Upgrade plan</Button>
                </div>
              </div>

              <div className="bg-gray-800 p-4 rounded-lg flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Behance Post</h3>
                  <span className="text-sm text-gray-400">34 MB</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-yellow-500 mr-2 w-4 h-4"></div>
                </div>
              </div>

              <div className="absolute top-4 right-4 flex items-center">
                <Avatar className="mr-2 bg-gray-700">
                  <span className="text-white">C</span>
                </Avatar>
                <span className="text-xs bg-green-700 rounded-full px-2 py-0.5">Customer</span>
              </div>
            </div>

        
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-yellow-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-3">
                  <span className="font-bold">02</span>
                </div>
                <h2 className="text-2xl font-bold">Real-Time Performance Monitoring</h2>
              </div>
              <p className="text-gray-300 mb-6">Proactively addresses issues to maintain uninterrupted operations.</p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start">
                  <div className="rounded-full border border-gray-400 p-1 mr-2 mt-1">
                    <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                  </div>
                  <span className="text-gray-300">Execute tasks according</span>
                </div>
                <div className="flex items-start">
                  <div className="rounded-full border border-gray-400 p-1 mr-2 mt-1">
                    <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                  </div>
                  <span className="text-gray-300">To track task progress.</span>
                </div>
                <div className="flex items-start">
                  <div className="rounded-full border border-gray-400 p-1 mr-2 mt-1">
                    <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                  </div>
                  <span className="text-gray-300">Communicate with team members</span>
                </div>
                <div className="flex items-start">
                  <div className="rounded-full border border-gray-400 p-1 mr-2 mt-1">
                    <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                  </div>
                  <span className="text-gray-300">To maintain uninterrupted operations.</span>
                </div>
              </div>
            </div>
          </div>

     
          <div className="space-y-16">
        
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-yellow-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-3">
                  <span className="font-bold">01</span>
                </div>
                <h2 className="text-2xl font-bold">Plan Your Project</h2>
              </div>
              <p className="text-gray-300 mb-6">Ensures optimal performance without manual intervention.</p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start">
                  <div className="rounded-full border border-gray-400 p-1 mr-2 mt-1">
                    <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                  </div>
                  <span className="text-gray-300">Outline goals, timelines, and tasks.</span>
                </div>
                <div className="flex items-start">
                  <div className="rounded-full border border-gray-400 p-1 mr-2 mt-1">
                    <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                  </div>
                  <span className="text-gray-300">Break down the projects</span>
                </div>
                <div className="flex items-start">
                  <div className="rounded-full border border-gray-400 p-1 mr-2 mt-1">
                    <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                  </div>
                  <span className="text-gray-300">To assign tasks to team members.</span>
                </div>
                <div className="flex items-start">
                  <div className="rounded-full border border-gray-400 p-1 mr-2 mt-1">
                    <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                  </div>
                  <span className="text-gray-300">Track task completion</span>
                </div>
              </div>
            </div>

            {/* Section 4 - Storage visualization */}
            <div className="rounded-lg bg-gray-900 bg-opacity-60 p-6 relative">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="mb-6">
                    <h3 className="text-sm text-gray-400 mb-1">Storage</h3>
                    <img src="https://www.saasable.io/assets/images/graphics/pms/graphics3-dark.svg" alt="Storage visualization" className="w-full h-auto" />
                  </div>
                  
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <div className="flex justify-between mb-2">
                      <h3 className="text-white">Used space</h3>
                      <span className="text-gray-400">...</span>
                    </div>
                    <p className="text-sm text-gray-300 mb-4">Your team has used 80% of your available space. Need more?</p>
                    <LinearProgress 
                      variant="determinate" 
                      value={80} 
                      className="mb-4"
                      sx={{ 
                        backgroundColor: '#333',
                        '& .MuiLinearProgress-bar': {
                          backgroundColor: '#D4AF37' 
                        },
                        height: 8,
                        borderRadius: 4
                      }}
                    />
                    <div className="flex">
                      <Button variant="text" className="text-gray-400 mr-2">Dismiss</Button>
                      <Button variant="text" className="text-yellow-500">Upgrade plan</Button>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Behance Post</h3>
                      <span className="text-sm text-gray-400">34 MB</span>
                    </div>
                    <div className="flex items-center">
                      <div className="bg-yellow-500 mr-2 w-4 h-4"></div>
                    </div>
                  </div>
                  
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="bg-gray-700 rounded-full w-8 h-8 flex items-center justify-center mr-2">
                        <span className="text-white text-xs">C</span>
                      </div>
                      <div>
                        <h4 className="text-sm">Catalog</h4>
                        <span className="text-xs text-gray-400">catalog.io</span>
                      </div>
                    </div>
                    <Chip label="Customer" size="small" className="bg-green-700 text-white text-xs" />
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-sm text-gray-400 mb-1">Storage</h3>
                    <img src="https://www.saasable.io/assets/images/graphics/pms/graphics2-dark.svg" alt="Storage visualization" className="w-full h-auto" />
                  </div>
                  
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium">Project Initial Doc</h3>
                    <span className="text-sm text-gray-400">34 MB</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-lg bg-gray-900 bg-opacity-60 p-6 relative">
            <img src="https://www.saasable.io/assets/images/graphics/pms/graphics2-dark.svg" alt="Storage visualization" className="w-full h-auto mb-6" />
            
            <div className="bg-gray-800 p-4 rounded-lg mb-4">
              <h3 className="font-medium">Behance Post</h3>
              <span className="text-sm text-gray-400">34 MB</span>
            </div>
            
            <div className="bg-gray-800 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <div className="bg-gray-700 rounded-full w-8 h-8 flex items-center justify-center mr-2">
                    <span className="text-white text-xs">C</span>
                  </div>
                  <div>
                    <h4 className="text-sm">Catalog</h4>
                    <span className="text-xs text-gray-400">catalog.io</span>
                  </div>
                </div>
                <Chip label="Customer" size="small" className="bg-green-700 text-white text-xs" />
              </div>
            </div>
          </div>
          
          <div>
            <div className="flex items-center mb-4">
              <div className="bg-yellow-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-3">
                <span className="font-bold">03</span>
              </div>
              <h2 className="text-2xl font-bold">Review and Iterate</h2>
            </div>
            <p className="text-gray-300 mb-6">Enhances flexibility and resilience in a multi-cloud environment.</p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start">
                <div className="rounded-full border border-gray-400 p-1 mr-2 mt-1">
                  <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                </div>
                <span className="text-gray-300">Review project performance</span>
              </div>
              <div className="flex items-start">
                <div className="rounded-full border border-gray-400 p-1 mr-2 mt-1">
                  <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                </div>
                <span className="text-gray-300">Reporting and analytics features</span>
              </div>
              <div className="flex items-start">
                <div className="rounded-full border border-gray-400 p-1 mr-2 mt-1">
                  <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                </div>
                <span className="text-gray-300">Adjust the project plan as needed.</span>
              </div>
              <div className="flex items-start">
                <div className="rounded-full border border-gray-400 p-1 mr-2 mt-1">
                  <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                </div>
                <span className="text-gray-300">Improvement based on the analysis.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectExecutionDashboard;