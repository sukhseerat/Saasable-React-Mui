import React from "react";
import { Container, Box, Typography, TextField, Button, Grid } from "@mui/material";

const avatars = [
  "https://www.saasable.io/assets/images/user/avatar1.png",
  "https://www.saasable.io/assets/images/user/avatar2.png",
  "https://www.saasable.io/assets/images/user/avatar3.png",
  "https://www.saasable.io/assets/images/user/avatar4.png",
  "https://www.saasable.io/assets/images/user/avatar5.png"
];

const LandingPage = () => {
  return (
    <Container maxWidth="lg" style={{ backgroundColor: "#131417", color: "white", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <Grid container spacing={4} style={{ maxWidth: "80%" }}>
   
        <Grid container item spacing={6} alignItems="center" sx={{ backgroundColor: "#1a1b1f", padding: 4, borderRadius: "10px" }}>
     
          <Grid item xs={12} md={7}>
            <Box display="flex" alignItems="center" gap={1} mb={2}>
              {avatars.map((src, index) => (
                <img key={index} src={src} alt="avatar" style={{ width: 30, height: 30, borderRadius: "50%" }} />
              ))}
              <Typography variant="body1" style={{ fontSize: "1rem", fontWeight: "bold" }}>⭐⭐⭐⭐⭐ 5.0 from 200+ reviews</Typography>
            </Box>
            <Typography variant="h3" fontWeight="bold" gutterBottom>
              Launch Your Website, with Confidence
            </Typography>
            <Typography variant="body1" color="gray" paragraph>
              From shared hosting to dedicated servers, we've got your digital success covered. Let's make your website shine.
            </Typography>
            <Box display="flex" alignItems="center" gap={2}>
              <TextField
                variant="outlined"
                placeholder="Enter your email address"
                sx={{ backgroundColor: "white", borderRadius: "5px", width: "60%" }}
              />
              <Button variant="contained" sx={{ backgroundColor: "#8b5cf6", color: "white", padding: "10px 20px" }}>
                Get Started
              </Button>
            </Box>
            <Typography variant="caption" color="gray">
              Get Started, you are one step away to host your idea!
            </Typography>
          </Grid>
       
          <Grid item xs={12} md={5}>
            <Box textAlign="center" p={3} sx={{ backgroundColor: "#131417", borderRadius: "10px" }}>
              <Typography variant="h4" fontWeight="bold">99.9%</Typography>
              <Typography variant="body2" color="gray">Uptime Guarantee</Typography>
              <Typography variant="h4" fontWeight="bold" mt={2}>24/7+</Typography>
              <Typography variant="body2" color="gray">Expert Support</Typography>
              <Box mt={3}>
                <img src="https://www.saasable.io/assets/images/graphics/hosting/graphics1-dark.svg" alt="Hosting Illustration" style={{ width: "100%", maxWidth: "250px" }} />
              </Box>
            </Box>
          </Grid>
        </Grid>

       
        <Grid container item spacing={4} sx={{ backgroundColor: "#1a1b1f", padding: 3, borderRadius: "10px", marginTop: 3 }}>
          <Grid item xs={12} textAlign="center">
            <Typography variant="body1" fontWeight="bold" color="gray">
              Adaptive Workflow
            </Typography>
          </Grid>
          {[
            { icon: "🔗", text: "Centralized Project Hub" },
            { icon: "👥", text: "Effortless Team Collaboration" },
            { icon: "🔄", text: "Real-time Syncing for Projects" },
            { icon: "📜", text: "Detailed Version History" },
            { icon: "⚙️", text: "Customizable Workflows" }
          ].map((feature, index) => (
            <Grid item xs={12} sm={4} md={2.4} key={index} textAlign="center">
              <Box p={2} sx={{ backgroundColor: "#131417", borderRadius: "8px" }}>
                <Typography variant="h4">{feature.icon}</Typography>
                <Typography variant="body2" color="gray">{feature.text}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default LandingPage;
