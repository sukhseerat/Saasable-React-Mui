import React from "react";
import { Button, Box, Typography, Container, createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: '#2563EB',
    },
    background: {
      default: '#F9FAFB',
    },
    text: {
      secondary: '#6B7280',
    }
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    button: {
      textTransform: 'none'
    }
  },
});

export default function Dashboard() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        bgcolor="background.default"
        padding="0px"
        marginTop="0px"
      >
        <Box
          maxWidth="960px"
          width="100%"
          bgcolor="#F3F4F6"
          padding="40px"
          borderRadius="12px"
          boxShadow="0px 4px 12px rgba(0, 0, 0, 0.1)"
        >
    
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            margin="auto"
            borderRadius="24px"
            bgcolor="#E5EDFF"
            padding="6px 20px"
            maxWidth="300px"
            boxShadow="0px 2px 6px rgba(0, 0, 0, 0.1)"
          >
            <Typography 
              color="primary"
              fontSize="14px"
              fontWeight="400"
              textAlign="center"
            >
              New Beta Version is Released
              <a 
                href="#" 
                style={{ 
                  color: "#2563EB", 
                  textDecoration: "none",
                  fontWeight: "500"
                }}
              >
                explore now
              </a>
            </Typography>
          </Box>

      
          <Typography 
            fontSize="56px" 
            fontWeight="400" 
            fontFamily="Inter, sans-serif"
            textAlign="center" 
            lineHeight="1.1"
            letterSpacing="-0.03em"
            color="#0D0D0D"
            marginTop="16px"
          >
            AI ✧ Assistant for Smart Development
          </Typography>

  
          <Typography 
            color="text.secondary" 
            marginTop="16px" 
            maxWidth="600px" 
            margin="auto" 
            textAlign="center"
            fontSize="18px"
          >
            Navigate effortlessly with an AI assistant, a comprehensive software catalog, and custom training.
          </Typography>

  
          <Box display="flex" justifyContent="center" marginTop="24px">
            <Button 
              variant="contained" 
              color="primary" 
              style={{ 
                padding: "12px 32px", 
                fontSize: "14px", 
                borderRadius: "20px", 
                textTransform: "none",
                fontWeight: "500"
              }}
            >
              Get Started - It's Free Now
            </Button>
          </Box>

    
          <Box display="flex" justifyContent="center" marginTop="32px">
            <img 
              src="https://www.saasable.io/assets/images/graphics/ai/desktop2-light.svg" 
              alt="Dashboard Preview" 
              style={{ 
                maxWidth: "100%", 
                height: "auto", 
                borderRadius: "12px" 
              }} 
            />
          </Box>


          <Box marginTop="32px" color="text.secondary" fontSize="14px" textAlign="center">
            <Typography fontWeight="400">
              4,000+ companies already growing
            </Typography>
            <Box 
              display="flex" 
              justifyContent="center" 
              gap="24px" 
              marginTop="12px" 
              color="primary.main"
            >
              <span>Techlify</span>
              <span>Marketly</span>
              <span>Realtor</span>
              <span>Financially</span>
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
