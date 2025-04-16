import React from "react";
import { Container, Box, Typography, Grid } from "@mui/material";

const features = [
  { title: "Reliability", description: "Hosting platforms offer reliable uptime guarantees, ensuring that your website remains accessible to visitors around the clock.", icon: "🔗" },
  { title: "Scalability", description: "Most hosting platforms allow for easy scalability, enabling you to upgrade your resources.", icon: "📈" },
  { title: "Performance", description: "Infrastructure, including SSD storage and optimized servers, to ensure fast loading times.", icon: "⚡" },
  { title: "Security", description: "DDoS protection, and malware scanning to safeguard your website and data from online threats.", icon: "🛡️" }
];

const LandingPage = () => {
  return (
    <Container maxWidth="lg" style={{ backgroundColor: "#131417", color: "white", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <Grid container spacing={4} style={{ maxWidth: "80%" }}>
      
        <Grid item xs={12} textAlign="center">
          <Typography variant="body1" fontWeight="bold" color="gray">Trusted by 10,000+ companies around the world</Typography>
        </Grid>

        <Grid container item spacing={6} alignItems="center" sx={{ backgroundColor: "#1a1b1f", padding: 2, borderRadius: "10px" }}>
      
          <Grid item xs={12} md={6}>
            <Typography variant="h3" fontWeight="bold" gutterBottom>
              Unmatched Reliability
            </Typography>
            <Typography variant="body1" color="gray" paragraph>
              Experience peace of mind with our 99.9% uptime guarantee. Your website stays online when it matters most.
            </Typography>
            <Grid container spacing={2}>
              {features.map((feature, index) => (
                <Grid item xs={12} key={index}>
                  <Box display="flex" alignItems="center" gap={2} sx={{ backgroundColor: "#131417", padding: 2, borderRadius: "10px" }}>
                    <Typography variant="h4">{feature.icon}</Typography>
                    <Box>
                      <Typography variant="h6" fontWeight="bold">{feature.title}</Typography>
                      <Typography variant="body2" color="gray">{feature.description}</Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>

        
          <Grid item xs={12} md={6} display="flex" justifyContent="center">
            <Box>
              <img src="https://www.saasable.io/assets/images/graphics/hosting/graphics4-dark.svg" alt="Hosting Graphic" style={{ width: "100%", maxWidth: "400px" }} />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LandingPage;