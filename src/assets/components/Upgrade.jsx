import { Box, Button, Container, Typography } from "@mui/material";

const UpgradeHosting = () => {
  return (
    <Box sx={{ backgroundColor: "#0B0B13", color: "white", py: 8, textAlign: "center" }}>
      <Container maxWidth="md">
        <Box display="flex" justifyContent="center" mb={4}>
          <img
            src="https://www.saasable.io/assets/images/graphics/hosting/graphics2-dark.svg"
            alt="Hosting Graphic"
            style={{ width: "100%", maxWidth: "600px" }}
          />
        </Box>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Upgrade Your Hosting Experience
        </Typography>
        <Typography variant="body1" sx={{ opacity: 0.8, mb: 3 }}>
          Transform your website into a powerhouse. Sign up now and take your online presence to the next level.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#A3A3FF",
            color: "black",
            fontWeight: "bold",
            borderRadius: "30px",
            padding: "12px 24px",
            textTransform: "none",
            "&:hover": { backgroundColor: "#8F8FFF" },
          }}
        >
          Get Started – It’s Free Now
        </Button>
      </Container>
    </Box>
  );
};

export default UpgradeHosting;
