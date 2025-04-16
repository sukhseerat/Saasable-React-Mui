import React from 'react';
import { Card, CardContent, CardMedia, Typography, Avatar } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const InsightsHub = () => {
  const insights = [
    {
      title: 'Navigating the Crypto Landscape: A Guide to Wallet Security',
      author: 'Tricia Wolf',
      role: 'Content Strategy Lead',
      image: 'https://www.saasable.io/assets/images/blog/blog16.png',
      icon: 'https://www.saasable.io/assets/images/user/avatar1.png'
    },
    {
      title: 'Crypto Wallet Essentials: What Every User Should Know',
      author: 'James Wilson',
      role: 'Sales Operations Manager',
      image: 'https://www.saasable.io/assets/images/blog/blog17.png',
      icon: 'https://www.saasable.io/assets/images/user/avatar1.png'
    }
  ];

  return (
    <div className=" bg-gray-50 p-8 ">
      <div className="max-w-6xl mx-auto">
        <Typography 
          variant="h4" 
          className="text-center mb-8 font-bold text-gray-800"
        >
          Insights and Knowledge Hub
        </Typography>
        <Typography 
          variant="subtitle1" 
          className="text-center mb-12 text-gray-600"
        >
          Discover the features that will transform your customer relationships
        </Typography>

        <div className="grid md:grid-cols-2 gap-6">
          {insights.map((insight, index) => (
            <Card 
              key={index} 
              className="transition-all duration-300 hover:shadow-lg"
              sx={{ 
                borderRadius: 3,
                '&:hover': {
                  transform: 'scale(1.02)'
                }
              }}
            >
              <CardMedia
                component="img"
                alt={insight.title}
                height="240"
                image={insight.image}
                className="h-48 object-cover"
              />
              <CardContent className="relative p-6">
                <Typography 
                  variant="h6" 
                  className="font-semibold text-gray-800 mb-4 pr-8"
                >
                  {insight.title}
                </Typography>
                
                <div className="flex items-center mt-4">
                  <Avatar 
                    src={insight.icon} 
                    alt={insight.author} 
                    className="mr-4"
                  />
                  <div>
                    <Typography variant="body1" className="font-medium text-gray-700">
                      {insight.author}
                    </Typography>
                    <Typography variant="body2" className="text-gray-500">
                      {insight.role}
                    </Typography>
                  </div>
                  
                  <ArrowForwardIosIcon 
                    className="absolute right-6 top-1/2 transform -translate-y-1/2 text-blue-500"
                    fontSize="small"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InsightsHub;