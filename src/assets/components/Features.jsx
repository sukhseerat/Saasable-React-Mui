import React from "react";
import { Card, CardContent, Typography, Box, Grid, Container } from "@mui/material";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import SettingsIcon from "@mui/icons-material/Settings";

import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";

const features = [
  { icon: <WorkspacesIcon fontSize="large" />, title: "Collaboration Tools", description: "Enhance teamwork with collaboration tools." },
  { icon: <SettingsIcon fontSize="large" />, title: "Workflow Automation", description: "Improve efficiency with task automation." },

  { icon: <IntegrationInstructionsIcon fontSize="large" />, title: "Integration Capabilities", description: "Effortlessly integrate with other platforms." },
  { icon: <LeaderboardIcon fontSize="large" />, title: "Lead Management", description: "Track and nurture leads throughout the sales funnel." },
  { icon: <AttachEmailIcon fontSize="large" />, title: "Email Integration", description: "Effortlessly track and manage email communications within the CRM." },
  { icon: <SupportAgentIcon fontSize="large" />, title: "Support Ticketing", description: "Efficiently handle customer inquiries and support tickets within the CRM." },
];

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white p-6 flex flex-col items-center">
      <Box sx={{ textAlign: "center", mt: 4, maxWidth: "80%", mx: "auto" }}>
        <Typography variant="h4" fontWeight="bold">
          Unlock Peak Efficiency with Our CRM Solution
        </Typography>
        <Typography variant="body1" sx={{ color: "gray", mt: 1 }}>
          Experience peak efficiency with our CRM solution, revolutionizing productivity and success.
        </Typography>
      </Box>
      
  
      <Box sx={{ textAlign: "center", mt: 8, maxWidth: "80%", mx: "auto" }}>
        <Typography variant="h4" fontWeight="bold">
          Explore our robust CRM features
        </Typography>
        <Typography variant="body1" sx={{ color: "gray", mt: 1 }}>
          Automate repetitive tasks and streamline processes for increased efficiency.
        </Typography>

        <Grid container spacing={4} sx={{ mt: 4 }}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ backgroundColor: "#faf5ff", p: 3, textAlign: "left", height: "100%", borderRadius: 3 }}>
                <CardContent>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                    {feature.icon}
                  </Box>
                  <Typography variant="h6" fontWeight="bold">{feature.title}</Typography>
                  <Typography variant="body2" color="gray">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

     
      <Box sx={{ textAlign: "center", mt: 8, maxWidth: "80%", mx: "auto" }}>
        <Typography variant="h4" fontWeight="bold">
          Why Choose Our CRM?
        </Typography>
        <Typography variant="body1" sx={{ color: "gray", mt: 1 }}>
          Discover the advantages of using our CRM to streamline your business operations.
        </Typography>
      </Box>
    </div>
  );
};

export default LandingPage;
