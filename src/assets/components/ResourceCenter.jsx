import React from 'react';
import { Card, CardContent, Typography, Avatar, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
 
const ResourceCenter = () => {
  const resources = [
    {
      id: 1,
      title: 'The power of SaaS and how it can revolutionize.',
      image: 'https://www.saasable.io/assets/images/blog/blog11.png',
      author: {
        name: 'Tricia Wolf',
        position: 'Direct Optimization Executive',
        avatar: 'https://www.saasable.io/assets/images/user/avatar1.png'
      }
    },
    {
      id: 2,
      title: 'Optimizing Sales Processes with Data-Driven Insights.',
      image: 'https://www.saasable.io/assets/images/blog/blog12.png',
      author: {
        name: 'Bruno Mota',
        position: 'Sales Operations Manager',
        avatar: 'https://www.saasable.io/assets/images/user/avatar2.png'
      }
    }
  ];
 
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Resource Center</h1>
          <p className="text-xl text-gray-600">Discover the features that will transform your customer relationships</p>
        </div>
 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resources.map((resource) => (
            <Card key={resource.id} className="rounded-lg overflow-hidden shadow-none bg-gray-50 hover:shadow-md transition-shadow duration-300">
              <div className="h-64 overflow-hidden">
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-8">
                  <Typography variant="h5" component="h2" className="text-2xl font-medium text-gray-800">
                    {resource.title}
                  </Typography>
                  <Button
                    className="min-w-0 p-0"
                    color="inherit"
                  >
                    <ArrowForwardIcon className="text-gray-800" />
                  </Button>
                </div>
                <div className="flex items-center">
                  <Avatar
                    src={resource.author.avatar}
                    alt={resource.author.name}
                    className="mr-4"
                  />
                  <div>
                    <Typography variant="subtitle1" className="font-medium text-gray-800">
                      {resource.author.name}
                    </Typography>
                    <Typography variant="body2" className="text-gray-600">
                      {resource.author.position}
                    </Typography>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
 
      <div className="fixed bottom-6 right-6">
        <Button
          variant="contained"
          color="primary"
          className="w-12 h-12 rounded-full"
          style={{ backgroundColor: '#0077B6' }}
        >
          <KeyboardArrowUpIcon />
        </Button>
      </div>
    </div>
  );
};
 
export default ResourceCenter;