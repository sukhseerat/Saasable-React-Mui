import React from "react";
import { Box, Button, Typography } from "@mui/material";

const integrations = [
  "https://www.saasable.io/assets/images/integration/asana.png",
  "https://www.saasable.io/assets/images/integration/dropbox.png",
  "https://www.saasable.io/assets/images/integration/google-drive.png",
  "https://www.saasable.io/assets/images/integration/intercom.png",
  "https://www.saasable.io/assets/images/integration/jira.png",
  "https://www.saasable.io/assets/images/integration/loom.png",
  "https://www.saasable.io/assets/images/integration/mail-chimp.png",
  "https://www.saasable.io/assets/images/integration/master-card.png",
  "https://www.saasable.io/assets/images/integration/messenger-facebook.png",
  "https://www.saasable.io/assets/images/integration/notion.png",
  "https://www.saasable.io/assets/images/integration/paypal.png",
  "https://www.saasable.io/assets/images/integration/skype.png",
  "https://www.saasable.io/assets/images/integration/slack.png",
  "https://www.saasable.io/assets/images/integration/trip-advicer.png",
  "https://www.saasable.io/assets/images/integration/zoom.png",
];

const IntegrationSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#121217",
        color: "white",
        textAlign: "center",
        padding: { xs: "40px 20px", md: "80px 40px" },
        borderRadius: "16px",
        position: "relative",
        overflow: "hidden",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
   
      <Typography variant="h5" fontWeight="bold">
        Tailored Integration Solutions
      </Typography>
      <Typography sx={{ marginTop: 1, opacity: 0.7 }}>
        Customize your experience with tailored integration solutions that fit
        your unique needs and requirements
      </Typography>

    
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#A6A3FF",
          color: "#000",
          fontWeight: "bold",
          marginTop: 3,
          padding: "8px 20px",
          borderRadius: "24px",
          textTransform: "none",
          "&:hover": { backgroundColor: "#8D89F2" },
        }}
      >
        See All Integration
      </Button>

     
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "40px 50px", 
          marginTop: 6,
          maxWidth: "650px",
          marginX: "auto",
        }}
      >
        {integrations.map((icon, index) => (
          <Box
            key={index}
            sx={{
              width: 60,
              height: 60,
              backgroundColor: "rgba(255,255,255,0.08)",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
              transform: `translateY(${index % 2 === 0 ? "-12px" : "12px"})`, 
            }}
          >
            <img src={icon} alt="integration" style={{ width: 32, height: 32 }} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default IntegrationSection;
