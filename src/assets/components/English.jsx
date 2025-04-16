import { useState } from "react";
import { Menu, MenuItem, Button, Typography, Box, Container } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";

export default function HostingUpgrade() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ bgcolor: "#141218", color: "white", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Container maxWidth="md" sx={{ textAlign: "center", position: "relative" }}>
        <Box sx={{ position: "absolute", top: 65, right: 20 }}>
          <Button
            aria-controls={open ? "language-menu" : undefined}
            aria-haspopup="true"
            onClick={handleClick}
            sx={{
              color: "white",
              backgroundColor: "#1E1B26",
              border: "1px solid #333",
              borderRadius: "12px",
              padding: "6px 16px",
              textTransform: "none",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              gap: "8px"
            }}
            endIcon={<ExpandMoreIcon />}
          >
            ENG
          </Button>
          <Menu anchorEl={anchorEl} open={open} onClose={handleClose} sx={{ mt: 1 }}>
            <MenuItem onClick={handleClose}>English (UK)</MenuItem>
            <MenuItem onClick={handleClose}>Arabic (عربى)</MenuItem>
            <MenuItem onClick={handleClose}>Chinese (中国人)</MenuItem>
            <MenuItem onClick={handleClose}>French (français)</MenuItem>
          </Menu>
        </Box>
        
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Upgrade to premium hosting today.
        </Typography>
        <Typography variant="h5" gutterBottom>
          Sign up now and enjoy faster speed, better support, and more.
        </Typography>
        <Typography variant="h6" color="gray" gutterBottom>
          Let’s bring this into the <b>Real-World ✦</b>
        </Typography>

        <Button variant="outlined" sx={{ color: "white", borderColor: "white", borderRadius: "20px", mt: 2, px: 3 }}>
          Get Started – It’s Free Now
        </Button>

        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 5 }}>
          <LinkedInIcon fontSize="large" />
          <TwitterIcon fontSize="large" />
          <YouTubeIcon fontSize="large" />
          <GitHubIcon fontSize="large" />
          <SportsBasketballIcon fontSize="large" />
        </Box>

        <Typography variant="body2" color="gray" sx={{ mt: 5 }}>
          Copyright © 2024 Phoenixcoded | Privacy Policy | Terms & Conditions
        </Typography>
      </Container>
    </Box>
  );
}
