import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import StorageIcon from "@mui/icons-material/Storage";
import WebIcon from "@mui/icons-material/Web";
import HowToRegIcon from "@mui/icons-material/HowToReg";

const steps = [
  {
    icon: <HowToRegIcon fontSize="large" />, 
    title: "Sign Up",
    description: "Create an account with just a few clicks. Choose your desired hosting plan based on your needs and budget."
  },
  {
    icon: <WebIcon fontSize="large" />,
    title: "Set Up Your Website",
    description: "Access your hosting control panel/dashboard. Install your preferred website builder or CMS with one-click options."
  },
  {
    icon: <StorageIcon fontSize="large" />,
    title: "Go Live",
    description: "Perform final checks to ensure everything looks and functions as expected. Launch your website to the world."
  }
];

const StepsSection = () => {
  return (
    <Box sx={{ backgroundColor: "#0B0B0D", color: "white", textAlign: "center", py: 9, px: 9, maxWidth: "1200px", margin: "0 auto" }}>
      <Typography variant="h4" fontWeight="bold">
        Simple Steps, Big Results
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Follow our easy-to-understand process and watch as your website takes shape with minimal effort.
      </Typography>
      
      <Grid container spacing={4} justifyContent="center">
        <Grid item md={5} sm={12}>
          <img 
            src="https://www.saasable.io/assets/images/graphics/hosting/desktop1-dark.svg" 
            alt="Dashboard Screenshot" 
            width="100%" 
          />
        </Grid>
        <Grid item md={5} sm={12}>
          <img 
            src="https://www.saasable.io/assets/images/graphics/hosting/graphics3-dark.svg" 
            alt="Storage Illustration" 
            width=" 100%" 
          />
        </Grid>
      </Grid>
      
      <Grid container spacing={3} justifyContent="center" sx={{ mt: 4 }}>
        {steps.map((step, index) => (
          <Grid item md={3} sm={12} key={index}>
            <Card sx={{ backgroundColor: "#121212", color: "white", textAlign: "center", p: 3 }}>
              <CardContent>
                <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>{step.icon}</Box>
                <Typography variant="h6" fontWeight="bold">{step.title}</Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>{step.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default StepsSection;
