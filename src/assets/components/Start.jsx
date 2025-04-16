import React from "react";
import { Container, Typography, Box, Button } from "@mui/material";

const CallToAction = () => {
  return (
    <Container maxWidth="lg" sx={{
      py: 3,
      px: 4,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background: "linear-gradient(to right, #111, #111)",
      borderRadius: "20px",
      color: "white",
      boxShadow: "0px 0px 10px rgba(255, 215, 0, 0.1)",
    }}>
      <Box>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          <span style={{ color: "white" }}>Start</span> <span style={{ color: "#FFD700" }}>your journey</span> <br />
          <span style={{ color: "#FFD700" }}>towards growth and</span> <br />
          <span style={{ color: "white" }}>success with just a click</span>
        </Typography>
      </Box>
      <Box textAlign="right" sx={{ maxWidth: "40%" }}>
        <Typography variant="body1" sx={{ mb: 2, color: "rgba(255, 255, 255, 0.8)" }}>
          Take advantage of our risk-free trial and see the difference for yourself.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#FFD700",
            color: "black",
            borderRadius: "30px",
            px: 3,
            py: 1.5,
            fontWeight: "bold",
            textTransform: "none",
            boxShadow: "0px 4px 10px rgba(255, 215, 0, 0.3)",
            "&:hover": {
              backgroundColor: "#E6C200",
            },
          }}
        >
          Get Started – It’s Free
        </Button>
      </Box>
    </Container>
  );
};

export default CallToAction;
