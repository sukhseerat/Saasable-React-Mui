import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { styled } from '@mui/material/styles';

// Icons for integration points
import MessageIcon from '@mui/icons-material/Message';
import GridViewIcon from '@mui/icons-material/GridView';
import AltRouteIcon from '@mui/icons-material/AltRoute';
import WebIcon from '@mui/icons-material/Web';
import SlackIcon from '@mui/icons-material/Code'; // Using Code as replacement for Slack
import NavigationIcon from '@mui/icons-material/Navigation';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import ViewStreamIcon from '@mui/icons-material/ViewStream';
import VideocamIcon from '@mui/icons-material/Videocam';

// Custom styled components
const DarkContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#121212',
  borderRadius: '24px',
  padding: theme.spacing(5),
  color: '#fff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  maxWidth: '900px', // Reduced from 100% to a fixed width
  margin: '0 auto',
}));

const IntegrationButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#EBCB38',
  color: '#000',
  borderRadius: '50px',
  padding: theme.spacing(1.5, 4),
  textTransform: 'none',
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: '#D4B835',
  },
}));

const IntegrationIcon = styled(Box)(({ theme, active }) => ({
  backgroundColor: active ? '#EBCB38' : 'rgba(255, 255, 255, 0.05)',
  color: active ? '#000' : '#fff',
  width: 46, 
  height: 46, 
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  zIndex: 2,
}));

const ConnectorLine = styled(Box)({
  position: 'absolute',
  borderTop: '2px dashed rgba(255, 255, 255, 0.15)',
  width: '100%',
  height: 1,
  top: '50%',
  zIndex: 1,
});

const IntegrationHub = () => {
  return (
    <Container maxWidth="md" sx={{ bgcolor: '#0A0A0A', py: 4, minHeight: '100vh' }}>
      <DarkContainer>
        <Box sx={{ maxWidth: '350px' }}> 
          <Typography 
            variant="h2" 
            sx={{ 
              fontWeight: 'bold', 
              color: '#E6D59E',
              fontSize: { xs: '2rem', md: '2.75rem' }, 
              lineHeight: 1.2,
              mb: 2 
            }}
          >
            Unleash the Power of Integration
          </Typography>
          <Typography variant="body1" sx={{ color: '#B0B0B0', mb: 3, fontSize: '1rem' }}>
            Connect with your favorite tools effortlessly for enhanced productivity.
          </Typography>
          <IntegrationButton>
            See All Integration
          </IntegrationButton>
        </Box>

        <Box sx={{ position: 'relative', width: 350, height: 350, display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center' }}> {/* Reduced from 450x450 */}
        
          <IntegrationIcon active={true} sx={{ width: 66, height: 66, position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}> {/* Reduced from 80x80 */}
            <NavigationIcon sx={{ fontSize: 32 }} /> 
          </IntegrationIcon>

       
          <Box sx={{ position: 'absolute', width: '100%', height: '100%' }}>
            <ConnectorLine sx={{ transform: 'rotate(0deg)' }} />
            <ConnectorLine sx={{ transform: 'rotate(45deg)' }} />
            <ConnectorLine sx={{ transform: 'rotate(90deg)' }} />
            <ConnectorLine sx={{ transform: 'rotate(135deg)' }} />
          </Box>

      
          <IntegrationIcon sx={{ position: 'absolute', left: '50%', top: 0, transform: 'translateX(-50%)' }}>
            <GridViewIcon fontSize="small" />
          </IntegrationIcon>
          
       
          <IntegrationIcon sx={{ position: 'absolute', right: 30, top: 65 }}> 
            <ViewStreamIcon fontSize="small" />
          </IntegrationIcon>
          
      
          <IntegrationIcon sx={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)' }}>
            <MessageIcon fontSize="small" />
          </IntegrationIcon>
          
         
          <IntegrationIcon sx={{ position: 'absolute', right: 30, bottom: 65 }}> 
            <VideocamIcon fontSize="small" />
          </IntegrationIcon>
          
         
          <IntegrationIcon sx={{ position: 'absolute', left: '50%', bottom: 0, transform: 'translateX(-50%)' }}>
            <WebIcon fontSize="small" />
          </IntegrationIcon>
          
  
          <IntegrationIcon sx={{ position: 'absolute', left: 30, bottom: 65 }}> 
            <AltRouteIcon fontSize="small" />
          </IntegrationIcon>
          
        
          <IntegrationIcon sx={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)' }}>
            <IntegrationInstructionsIcon fontSize="small" />
          </IntegrationIcon>
          
       
          <IntegrationIcon sx={{ position: 'absolute', left: 30, top: 65 }}> 
            <SlackIcon fontSize="small" />
          </IntegrationIcon>
        </Box>
      </DarkContainer>
    </Container>
  );
};

export default IntegrationHub;