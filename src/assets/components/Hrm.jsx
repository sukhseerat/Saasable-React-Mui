import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";

const HRDashboard = () => {
  return (
    <Box sx={{ backgroundColor: "#EDF7ED", pt: 10, pb: 5, minHeight: "50vh" }}>
      <Container maxWidth="lg" sx={{ textAlign: "center" }}>
      
        <Typography variant="subtitle2" color="text.secondary">
          HR Solutions Made Easy
        </Typography>
        <Typography variant="h3" fontWeight={600} sx={{ mt: 1 }}>
          Simplify HR Tasks, Prioritize <br /> Your Workforce
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mt: 2, maxWidth: "600px", mx: "auto" }}>
          Empower your HR team with our comprehensive platform for seamless HR management
        </Typography>
        <Button variant="contained" sx={{ mt: 3 }}>Try Predictive Cost Analytics</Button>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 2, color: "text.secondary" }}>
          <Typography variant="body2">⚙️ Automated Scaling for Efficiency</Typography>
          <Typography variant="body2">📊 Real-time Performance Insights</Typography>
        </Box>
      </Container>

   
      <Box sx={{ backgroundColor: "white", borderRadius: 3, boxShadow: 3, mt: 5, mx: "auto", width: "90%", p: 3 }}>
        <img 
          src="https://www.saasable.io/assets/images/graphics/hrm/desktop1-light.svg" 
          alt="HR Dashboard"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </Box>
    </Box>
  );
};

export default HRDashboard;
