import React from 'react';
import { Typography, Button, LinearProgress, Avatar, Chip } from '@mui/material';

const ProjectExecutionDashboard = () => {
  return (
    <div className="bg-black text-white min-h-screen p-6">

      <div className="text-center mb-16">
        <h1 className="text-5xl font-light mb-3">Step-by-Step Project Execution</h1>
        <p className="text-lg text-gray-300">Fine-tune configurations to achieve peak performance while minimizing costs.</p>
      </div>

      <div className="max-w-6xl mx-auto">
    
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
   
          <div className="space-y-24">
          
            <div className="rounded-2xl bg-gray-900 bg-opacity-60 p-8 relative">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-500 w-6 h-6 mr-2"></div>
                <span className="text-gray-400 text-sm">Use of 100 GB</span>
              </div>
              
              <div className="flex items-center mb-8">
                <Avatar 
                  src="https://www.saasable.io/assets/images/graphics/pms/graphics2-dark.svg" 
                  sx={{ width: 24, height: 15, bgcolor: 'transparent' }}
                  className="mr-2"
                />
                <span className="text-gray-400 text-sm">getlayers.io</span>
              </div>

              <div className="bg-gray-800 bg-opacity-80 p-4 rounded-lg mb-4">
                <div className="flex justify-between mb-1">
                  <h3 className="text-white text-sm">Used space</h3>
                  <span className="text-gray-400">...</span>
                </div>
                <p className="text-xs text-gray-300 mb-4">Your team has used 80% of your available space. Need more?</p>
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
                  <Button size="small" variant="text" className="text-gray-400 text-xs mr-2">Dismiss</Button>
                  <Button size="small" variant="text" className="text-yellow-500 text-xs">Upgrade plan</Button>
                </div>
              </div>

              <div className="bg-gray-800 bg-opacity-80 p-4 rounded-lg flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-sm">Behance Post</h3>
                  <span className="text-xs text-gray-400">34 MB</span>
                </div>
                <div className="bg-yellow-500 w-4 h-4"></div>
              </div>
              
              <div className="absolute bottom-8 left-8">
                <div className="flex items-center">
                  <Avatar sx={{ width: 30, height: 30 }} className="mr-2 bg-blue-900">C</Avatar>
                  <div>
                    <h4 className="text-sm">Catalog</h4>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-8 right-8">
                <Chip label="Customer" size="small" sx={{ bgcolor: '#10B981', color: 'white', fontSize: '0.65rem', height: 20 }} />
              </div>
            </div>

         
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-yellow-600 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4">
                  <span className="font-bold text-lg">02</span>
                </div>
                <h2 className="text-2xl font-light">Real-Time Performance Monitoring</h2>
              </div>
              <p className="text-gray-300 mb-8 ml-16">Proactively addresses issues to maintain uninterrupted operations.</p>
              
              <div className="grid grid-cols-2 gap-6 ml-16">
                <div className="flex items-start">
                  <div className="rounded-full border border-gray-400 p-1 mr-2 mt-1 flex items-center justify-center" style={{ width: 24, height: 24 }}>
                    <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                  </div>
                  <span className="text-gray-300 text-sm">Execute tasks according</span>
                </div>
                <div className="flex items-start">
                  <div className="rounded-full border border-gray-400 p-1 mr-2 mt-1 flex items-center justify-center" style={{ width: 24, height: 24 }}>
                    <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                  </div>
                  <span className="text-gray-300 text-sm">To track task progress.</span>
                </div>
                <div className="flex items-start">
                  <div className="rounded-full border border-gray-400 p-1 mr-2 mt-1 flex items-center justify-center" style={{ width: 24, height: 24 }}>
                    <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                  </div>
                  <span className="text-gray-300 text-sm">Communicate with team members</span>
                </div>
                <div className="flex items-start">
                  <div className="rounded-full border border-gray-400 p-1 mr-2 mt-1 flex items-center justify-center" style={{ width: 24, height: 24 }}>
                    <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                  </div>
                  <span className="text-gray-300 text-sm">To maintain uninterrupted operations.</span>
                </div>
              </div>
            </div>
          </div>

      
          <div className="space-y-24">
          
            <div>
              <div className="flex mb-4">
                <div className="bg-yellow-600 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4">
                  <span className="font-bold text-lg">01</span>
                </div>
                <div>
                  <h2 className="text-2xl font-light">Plan Your Project</h2>
                  <p className="text-gray-300 mt-2">Ensures optimal performance without manual intervention.</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6 ml-16 mt-8">
                <div className="flex items-start">
                  <div className="rounded-full border border-gray-400 p-1 mr-2 mt-1 flex items-center justify-center" style={{ width: 24, height: 24 }}>
                    <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                  </div>
                  <span className="text-gray-300 text-sm">Outline goals, timelines, and tasks.</span>
                </div>
                <div className="flex items-start">
                  <div className="rounded-full border border-gray-400 p-1 mr-2 mt-1 flex items-center justify-center" style={{ width: 24, height: 24 }}>
                    <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                  </div>
                  <span className="text-gray-300 text-sm">Break down the projects</span>
                </div>
                <div className="flex items-start">
                  <div className="rounded-full border border-gray-400 p-1 mr-2 mt-1 flex items-center justify-center" style={{ width: 24, height: 24 }}>
                    <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                  </div>
                  <span className="text-gray-300 text-sm">To assign tasks to team members.</span>
                </div>
                <div className="flex items-start">
                  <div className="rounded-full border border-gray-400 p-1 mr-2 mt-1 flex items-center justify-center" style={{ width: 24, height: 24 }}>
                    <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                  </div>
                  <span className="text-gray-300 text-sm">Track task completion</span>
                </div>
              </div>
            </div>

            {/* Storage Details Section */}
            <div className="rounded-2xl bg-gray-900 bg-opacity-60 p-6 relative">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="mb-4">
                    <h3 className="text-xs text-gray-400 mb-1">Storage</h3>
                    <img src="https://www.saasable.io/assets/images/graphics/pms/graphics3-dark.svg" alt="Storage visualization" className="w-full h-auto" />
                  </div>
                  
                  <div className="bg-gray-800 bg-opacity-80 p-4 rounded-lg">
                    <div className="flex justify-between mb-1">
                      <h3 className="text-white text-sm">Used space</h3>
                      <span className="text-gray-400">...</span>
                    </div>
                    <p className="text-xs text-gray-300 mb-4">Your team has used 80% of your available space. Need more?</p>
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
                      <Button size="small" variant="text" className="text-gray-400 text-xs mr-2">Dismiss</Button>
                      <Button size="small" variant="text" className="text-yellow-500 text-xs">Upgrade plan</Button>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="mb-4 flex items-center justify-between bg-gray-800 bg-opacity-80 p-4 rounded-lg">
                    <div>
                      <h3 className="font-medium text-sm">Behance Post</h3>
                      <span className="text-xs text-gray-400">34 MB</span>
                    </div>
                    <div className="bg-yellow-500 w-4 h-4"></div>
                  </div>
                  
                  <div className="mb-4 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Avatar sx={{ width: 30, height: 30 }} className="mr-2 bg-blue-900">C</Avatar>
                        <div>
                          <h4 className="text-xs">Catalog</h4>
                          <span className="text-xs text-gray-400">catalog.io</span>
                        </div>
                      </div>
                      <Chip label="Customer" size="small" sx={{ bgcolor: '#10B981', color: 'white', fontSize: '0.65rem', height: 20 }} />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h3 className="text-xs text-gray-400 mb-1">Storage</h3>
                    <img src="https://www.saasable.io/assets/images/graphics/pms/graphics2-dark.svg" alt="Storage visualization" className="w-full h-30" />
                  </div>
                  
                  <div className="bg-gray-800 bg-opacity-80 p-4 rounded-lg">
                    <h3 className="font-medium text-sm">Project Initial Doc</h3>
                    <span className="text-xs text-gray-400">34 MB</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Storage Section */}
          <div className="rounded-2xl bg-gray-900 bg-opacity-60 p-6 relative">
            <div className="mb-2">
              <h3 className="text-xs text-gray-400 mb-1">Storage</h3>
              <img src="https://www.saasable.io/assets/images/graphics/pms/graphics2-dark.svg" alt="Storage visualization" className="w-full h-auto" />
            </div>
            
            <div className="bg-gray-800 bg-opacity-80 p-4 rounded-lg mb-4">
              <div className="flex justify-between">
                <div>
                  <h3 className="font-medium text-sm">Behance Post</h3>
                  <span className="text-xs text-gray-400">34 MB</span>
                </div>
                <div className="bg-yellow-500 w-4 h-4"></div>
              </div>
            </div>
            
            <div className="bg-gray-800 bg-opacity-80 p-4 rounded-lg mb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Avatar sx={{ width: 30, height: 30 }} className="mr-2 bg-blue-900">C</Avatar>
                  <div>
                    <h4 className="text-xs">Catalog</h4>
                    <span className="text-xs text-gray-400">catalog.io</span>
                  </div>
                </div>
                <Chip label="Customer" size="small" sx={{ bgcolor: '#10B981', color: 'white', fontSize: '0.65rem', height: 20 }} />
              </div>
            </div>
            
            <div className="bg-gray-800 bg-opacity-80 p-4 mt-4 rounded-lg mb-4">
              <h3 className="text-xs text-gray-400 mb-1">Content curation set</h3>
              <div className="text-xs text-gray-400 mb-4">Range of the most influential early wins</div>
              <div className="flex -space-x-2">
                <Avatar sx={{ width: 24, height: 24 }} className="border-2 border-gray-800 bg-gray-600">A</Avatar>
                <Avatar sx={{ width: 24, height: 24 }} className="border-2 border-gray-800 bg-gray-600">B</Avatar>
                <Avatar sx={{ width: 24, height: 24 }} className="border-2 border-gray-800 bg-gray-600">C</Avatar>
                <Avatar sx={{ width: 24, height: 24 }} className="border-2 border-gray-800 bg-gray-600">D</Avatar>
                <Avatar sx={{ width: 24, height: 24 }} className="border-2 border-gray-800 bg-gray-600">+</Avatar>
              </div>
            </div>
            
            <div className="mb-4">
              <LinearProgress 
                variant="determinate" 
                value={80} 
                sx={{ 
                  backgroundColor: '#333',
                  '& .MuiLinearProgress-bar': {
                    backgroundColor: '#D4AF37' 
                  },
                  height: 8,
                  borderRadius: 4
                }}
              />
            </div>
          </div>
          
        
          <div>
            <div className="flex items-center mb-4">
              <div className="bg-yellow-600 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4">
                <span className="font-bold text-lg">03</span>
              </div>
              <h2 className="text-2xl font-light">Review and Iterate</h2>
            </div>
            <p className="text-gray-300 mb-8 ml-16">Enhances flexibility and resilience in a multi-cloud environment.</p>
            
            <div className="grid grid-cols-2 gap-6 ml-16">
              <div className="flex items-start">
                <div className="rounded-full border border-gray-400 p-1 mr-2 mt-1 flex items-center justify-center" style={{ width: 24, height: 24 }}>
                  <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                </div>
                <span className="text-gray-300 text-sm">Review project performance</span>
              </div>
              <div className="flex items-start">
                <div className="rounded-full border border-gray-400 p-1 mr-2 mt-1 flex items-center justify-center" style={{ width: 24, height: 24 }}>
                  <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                </div>
                <span className="text-gray-300 text-sm">Reporting and analytics features</span>
              </div>
              <div className="flex items-start">
                <div className="rounded-full border border-gray-400 p-1 mr-2 mt-1 flex items-center justify-center" style={{ width: 24, height: 24 }}>
                  <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                </div>
                <span className="text-gray-300 text-sm">Adjust the project plan as needed.</span>
              </div>
              <div className="flex items-start">
                <div className="rounded-full border border-gray-400 p-1 mr-2 mt-1 flex items-center justify-center" style={{ width: 24, height: 24 }}>
                  <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                </div>
                <span className="text-gray-300 text-sm">Improvement based on the analysis.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectExecutionDashboard;