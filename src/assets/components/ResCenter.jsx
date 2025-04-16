import React from "react";
import { Box, Typography, Card, CardMedia, CardContent, Button } from "@mui/material";

const articles = [
  {
    title: "The Ultimate Guide to Website Security: Best...",
    date: "28 Jan 2024",
    readTime: "5 Min Read",
    image: "https://www.saasable.io/assets/images/blog/blog15.jpg",
  },
  {
    title: "SEO Strategies for Boosting Your Website..",
    date: "10 Feb 2024",
    readTime: "8 Min Read",
    image: "https://www.saasable.io/assets/images/blog/blog14.jpg",
  },
  {
    title: "The Importance of Website Speed and How..",
    date: "25 Feb 2024",
    readTime: "10 Min Read",
    image: "https://www.saasable.io/assets/images/blog/blog13.jpg",
  },
];

const ResourceCenter = () => {
  return (
    <Box sx={{ textAlign: "center", bgcolor: "#0A0A0A", color: "white", py: 6 }}>
      <Typography variant="h4" fontWeight="bold">Resource Center</Typography>
      <Typography variant="subtitle1" sx={{ mt: 1, mb: 4 }}>
        Discover the features that will transform your customer relationships
      </Typography>
      
      <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 3 }}>
        {/* Main Article Card */}
        <Card sx={{ bgcolor: "#111", color: "white", borderRadius: "16px", width: 380 }}>
          <CardMedia component="img" image={articles[0].image} height="200" sx={{ borderRadius: "16px 16px 0 0" }} />
          <CardContent>
            <Typography variant="body2" color="gray">
              {articles[0].date} • {articles[0].readTime}
            </Typography>
            <Typography variant="h6" sx={{ mt: 1 }}>{articles[0].title}</Typography>
          </CardContent>
        </Card>

       
        <Box sx={{ width: 380 }}>
          {articles.slice(1).map((article, index) => (
            <Card 
              key={index} 
              sx={{ bgcolor: "#111", color: "white", borderRadius: "16px", mb: 2, display: "flex" }}
            >
              <CardMedia 
                component="img" 
                image={article.image} 
                height="80" 
                sx={{ width: 80, borderRadius: "16px 0 0 16px" }} 
              />
              <CardContent sx={{ flex: 1 }}>
                <Typography variant="body2" color="gray">
                  {article.date} • {article.readTime}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>{article.title}</Typography>
              </CardContent>
            </Card>
          ))}

   
          <Button
            sx={{
              bgcolor: "#111",
              color: "white",
              borderRadius: "16px",
              width: "100%",  
              height: "60px",  
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: 3,
              mt: 2,
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
              '&:hover': {
                backgroundColor: "rgba(255,255,255,0.2)"
              }
            }}
          >
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              View All
            </Typography>
            <Box
              sx={{
                width: "60px",
                height: "60px",
                borderRadius: "12px",
                bgcolor: "rgba(255,255,255,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                '&:hover': {
                  backgroundColor: "rgba(255,255,255,0.3)"
                }
              }}
            >
              →
            </Box>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ResourceCenter;
