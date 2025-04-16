import React, { useState } from "react";
import { Box, Typography, Avatar, IconButton } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

const testimonials = [
  {
    name: "John Smith",
    role: "Small Business Owner",
    title: "Thanks for the service!",
    text: "As a small business owner, finding a reliable hosting platform was crucial for my online presence. I'm so glad I found this platform. It's easy to use, and my website has never experienced any downtime.",
    avatar: "https://www.saasable.io/assets/images/user/avatar1.png",
    company: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    name: "Emily Davis",
    role: "Digital Marketer",
    title: "Highly recommended!",
    text: "I've tried various hosting platforms in the past, but none have matched the level of service and support provided by this platform. The integration options are fantastic, and the performance is top-notch.",
    avatar: "https://www.saasable.io/assets/images/user/avatar2.png",
    company: "svg"
  },
  {
    name: "Michael Johnson",
    role: "Software Engineer",
    title: "Outstanding security and uptime!",
    text: "The level of security and uptime this hosting service provides is outstanding. I have peace of mind knowing my projects are in safe hands.",
    avatar: "https://www.saasable.io/assets/images/user/avatar1.png",
    company: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
  },
  {
    name: "Sarah Lee",
    role: "Entrepreneur",
    title: "Incredible journey!",
    text: "I switched to this hosting platform after having reliability issues elsewhere, and I haven't looked back. It's been an incredible journey!",
    avatar: "https://www.saasable.io/assets/images/user/avatar2.png",
    company: "svg"
  }
];

const TestimonialsSection = () => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 2 : prevIndex - 2));
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex >= testimonials.length - 2 ? 0 : prevIndex + 2));
  };

  return (
    <Box sx={{ textAlign: "center", backgroundColor: "#121217", color: "white", padding: "50px 20px", borderRadius: "16px", position: "relative" }}>
      <Typography variant="h4" fontWeight="normal">Real Stories, Real Results</Typography>
      <Typography sx={{ opacity: 0.7, marginBottom: 4 }}>
        Get inspired by real stories of success and achievement from our valued clients.
      </Typography>

    
      <Box sx={{ position: "absolute", top: 20, right: 40, display: "flex", gap: "10px" }}>
        <IconButton onClick={handlePrev} sx={{ backgroundColor: "rgba(255,255,255,0.1)", color: "white", '&:hover': { backgroundColor: "rgba(255,255,255,0.2)" } }}>
          <ArrowBack />
        </IconButton>
        <IconButton onClick={handleNext} sx={{ backgroundColor: "rgba(255,255,255,0.1)", color: "white", '&:hover': { backgroundColor: "rgba(255,255,255,0.2)" } }}>
          <ArrowForward />
        </IconButton>
      </Box>

  
      <Box sx={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap", marginTop: "20px" }}>
        {[index, index + 1].map((i) => (
          testimonials[i] && (
            <Box
              key={i}
              sx={{
                backgroundColor: "#1E1E24",
                borderRadius: "16px",
                padding: "30px",
                maxWidth: "500px",
                textAlign: "left",
                position: "relative",
                boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
                display: "flex",
                flexDirection: "column"
              }}
            >
              <Avatar src={testimonials[i].avatar} sx={{ width: 50, height: 50, position: "absolute", top: 20, left: 20 }} />
              <Typography variant="h6" fontWeight="bold" sx={{ marginTop: 6 }}>{testimonials[i].title}</Typography>
              <Typography variant="h6" fontWeight="normal" sx={{ marginTop: 1 }}>{testimonials[i].text}</Typography>
              <Box sx={{ marginTop: 3, paddingTop: 2, borderTop: "1px solid rgba(255,255,255,0.2)" }}>
                <Typography fontWeight="bold">{testimonials[i].name}</Typography>
                <Typography sx={{ opacity: 0.7 }}>{testimonials[i].role}</Typography>
              </Box>
            </Box>
          )
        ))}
      </Box>
    </Box>
  );
};

export default TestimonialsSection;
