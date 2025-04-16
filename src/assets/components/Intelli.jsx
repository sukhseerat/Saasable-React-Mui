import React from "react";
import { Container, Box, Typography, Grid } from "@mui/material";

const features = [
  { title: "Uptime Guarantee", description: "Ensures your website is accessible to visitors with minimal downtime.", icon: "🔗" },
  { title: "SSD Storage", description: "High-speed solid-state drives for improved website performance.", icon: "💾" },
  { title: "Security Measures", description: "Firewalls, DDoS protection, and malware scanning safeguard.", icon: "🔒" },
  { title: "Domain Registration", description: "Register and manage domains directly from your hosting platform.", icon: "🌐" },
  { title: "Automated Backups", description: "Regular backups ensure your website's data is safe & recoverable.", icon: "🔄" },
  { title: "Marketing Tools", description: "Tools and analytics to enhance your website’s visibility and reach.", icon: "📊" }
];

const stats = [
  { value: "0.5s", description: "Lightning-fast load times for user experience." },
  { value: "99.9%", description: "Almost all the time, maximizing accessibility." },
  { value: "1-Click", description: "Effortlessly set up popular applications." },
  { value: "50k+", description: "Satisfied customer base trusting our hosting services." }
];

const LandingPage = () => {
  return (
    <Container maxWidth={false} style={{ backgroundColor: "#131417", color: "white", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "40px 0" }}>
      <Grid container style={{ maxWidth: "1600px", width: "95%" }}>
      
        <Grid item xs={12} textAlign="center" mb={2}>
          <Typography variant="h3" fontWeight="bold">
            Intelligent Data Compression
          </Typography>
        </Grid>

        <Grid item xs={12} display="flex" justifyContent="center" mb={2}>
          <Box>
            <img src="https://www.saasable.io/assets/images/graphics/hosting/graphics3-dark.svg" alt="Hosting Graphic" style={{ width: "100%", maxWidth: "700px", marginBottom: "-50px" }} />
          </Box>
        </Grid>

      
        <Grid container item alignItems="center" sx={{ backgroundColor: "#1a1b1f", borderRadius: "16px", width: "100%" }}>
         
          <Grid container spacing={0}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <Box display="flex" flexDirection="column" alignItems="flex-start" gap={1} sx={{ backgroundColor: "#131417", padding: 3, borderRadius: "0", minHeight: "150px", width: "100%", border: "1px solid #1a1b1f" }}>
                  <Typography variant="h4">{feature.icon}</Typography>
                  <Typography variant="h6" fontWeight="bold">{feature.title}</Typography>
                  <Typography variant="body2" color="gray">{feature.description}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      
    
      <Box mt={5} textAlign="center">
        <Typography variant="h4" fontWeight="bold">
          Transparency in Action
        </Typography>
        <Typography variant="body1" color="gray" mt={1}>
          See the real-time data that highlights our dedication to transparency and trustworthiness.
        </Typography>
      </Box>
      <Grid container spacing={2} justifyContent="center" mt={3} maxWidth="1200px">
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={3} key={index}>
            <Box textAlign="center" sx={{ backgroundColor: "#1a1b1f", padding: 3, borderRadius: "16px" }}>
              <Typography variant="h3" fontWeight="bold">{stat.value}</Typography>
              <Typography variant="body2" color="gray">{stat.description}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default LandingPage;