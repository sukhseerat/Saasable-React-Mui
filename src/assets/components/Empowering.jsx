import React from 'react';
import { 
  Box, 
  Typography, 
  Grid, 
  Paper, 
  Button, 
  LinearProgress, 
  Chip,
  Container
} from '@mui/material';
import { styled } from '@mui/material/styles';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';


const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: 'rgba(30, 30, 30, 0.6)',
  color: '#fff',
  borderRadius: 12,
  padding: theme.spacing(2),
  height: '100%',
}));

const CircularStorage = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: 400,
  height: 100,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '&::before': {
    content: '""',
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    background: 'conic-gradient(#c9a866 0% 75%, #333 75% 100%)',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    width: '90%',
    height: '70%',
    borderRadius: '50%',
    backgroundColor: 'rgba(30, 30, 30, 0.8)',
  },
}));

const StorageText = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  textAlign: 'center',
}));

const AppItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(1),
}));

const AppIcon = styled(Box)(({ theme }) => ({
  width: 30,
  height: 30,
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: theme.spacing(1),
}));

// Main component
const BusinessDashboard = () => {
  return (
    <Box sx={{ p: 1, backgroundColor: '#121212', minHeight: '100%' }}>
      <Container maxWidth="lg"> {/* Changed from sm to md for slightly more width */}
        {/* Main Heading */}
        <Typography 
          variant="h3"
          component="h1" 
          sx={{ 
            textAlign: 'center', 
            mb: 2,
            color: '#f0f0f0',
            fontWeight: 'normal',
          }}
        >
          Empowering Businesses to Succeed
        </Typography>

      
        <Paper 
          elevation={0}
          sx={{ 
            backgroundColor: 'rgba(20, 20, 20, 0.7)', 
            borderRadius: 3,
            p: 2,
            mb: 2,
            maxWidth: '860px', 
            mx: 'auto', 
          }}
        >
          {/* Top Section */}
          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={12} md={5}>
              <Box sx={{ p: 1 }}>
                <Typography variant="body2" color="#f0f0f0">
                  Empower your business with our PMS platform, streamlining
                  sales, marketing, and service processes to drive growth.
                </Typography>
              </Box>
            </Grid>
            
            <Grid item xs={12} md={2}>
              {/* Center space for SVG */}
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center',
                height: '100%'
              }}>
                <Box 
                  component="img" 
                  src="https://www.saasable.io/assets/images/graphics/pms/graphics3-dark.svg"
                  alt="Business graphic"
                  sx={{ maxWidth: '100%', height: 'auto', maxHeight: '60px' }}
                />
              </Box>
            </Grid>

            <Grid item xs={12} md={5}>
              <Box sx={{ p: 1 }}>
                <Typography variant="body2" color="#f0f0f0">
                  Discover our PMS platform's intuitive features, robust
                  analytics, and seamless integrations.
                </Typography>
              </Box>
            </Grid>
          </Grid>

          {/* Dashboard Elements */}
          <Grid container spacing={2}>
            {/* Storage Meter */}
            <Grid item xs={12} md={4}>
              <StyledPaper>
                <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <CircularStorage>
                      <StorageText>
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                          75 GB
                        </Typography>
                        <Typography variant="caption" color="#aaa" sx={{ fontSize: '0.7rem' }}>
                          Use of 100 GB
                        </Typography>
                      </StorageText>
                    </CircularStorage>
                  </Box>

                  <Box sx={{ mt: 1 }}>
                    <AppItem>
                      <AppIcon sx={{ backgroundColor: '#4b97d2' }}>
                        <Typography variant="caption">H</Typography>
                      </AppIcon>
                      <Box>
                        <Typography variant="caption" sx={{ fontWeight: 'bold' }}>
                          Hourglass
                        </Typography>
                        <Typography variant="caption" color="#aaa" sx={{ display: 'block', fontSize: '0.65rem' }}>
                          hourglass.app
                        </Typography>
                      </Box>
                    </AppItem>
                    
                    <AppItem>
                      <AppIcon sx={{ backgroundColor: '#9c68d7' }}>
                        <Typography variant="caption">L</Typography>
                      </AppIcon>
                      <Box>
                        <Typography variant="caption" sx={{ fontWeight: 'bold' }}>
                          Layers
                        </Typography>
                        <Typography variant="caption" color="#aaa" sx={{ display: 'block', fontSize: '0.65rem' }}>
                          getlayers.io
                        </Typography>
                      </Box>
                    </AppItem>
                  </Box>
                </Box>
              </StyledPaper>
            </Grid>

            {/* Behance Post */}
            <Grid item xs={12} md={4}>
              <StyledPaper>
                <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <FolderOutlinedIcon sx={{ color: '#c9a866', mr: 1, fontSize: '1rem' }} />
                  </Box>

                  <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Typography variant="subtitle1" sx={{ mb: 1 }}>
                      Behance Post
                    </Typography>
                    <Typography variant="caption" color="#aaa">
                      34 MB
                    </Typography>
                  </Box>
                </Box>
              </StyledPaper>
            </Grid>

            {/* Used Space */}
            <Grid item xs={12} md={4}>
              <StyledPaper>
                <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <Typography variant="subtitle2" sx={{ mb: 1 }}>
                    Used space
                  </Typography>
                  <Typography variant="caption" color="#f0f0f0" sx={{ mb: 1 }}>
                    Your team has used 80% of your available space. Need more?
                  </Typography>
                  
                  <LinearProgress 
                    variant="determinate" 
                    value={80} 
                    sx={{ 
                      mb: 1,
                      height: 6,
                      borderRadius: 3,
                      backgroundColor: '#333',
                      '& .MuiLinearProgress-bar': {
                        backgroundColor: '#c9a866',
                      }
                    }} 
                  />
                  
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 'auto' }}>
                    <Button 
                      variant="text" 
                      sx={{ color: '#aaa', fontSize: '0.7rem', padding: '2px 8px' }}
                    >
                      Dismiss
                    </Button>
                    <Button 
                      variant="text" 
                      sx={{ color: '#c9a866', fontSize: '0.7rem', padding: '2px 8px' }}
                    >
                      Upgrade plan
                    </Button>
                  </Box>
                </Box>
              </StyledPaper>
            </Grid>

            {/* Catalog Section */}
            <Grid item xs={12} md={8}>
              <StyledPaper>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <AppIcon sx={{ backgroundColor: '#6b8ad9' }}>
                    <Typography variant="caption">C</Typography>
                  </AppIcon>
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="caption" sx={{ fontWeight: 'bold' }}>
                      Catalog
                    </Typography>
                    <Typography variant="caption" color="#aaa" sx={{ display: 'block', fontSize: '0.65rem' }}>
                      catalogapp.io
                    </Typography>
                  </Box>
                  <Chip 
                    label="Customer" 
                    size="small" 
                    sx={{ 
                      backgroundColor: 'rgba(0, 150, 100, 0.2)', 
                      color: '#00b379',
                      borderRadius: '4px',
                      height: '18px',
                      fontSize: '0.65rem',
                    }} 
                  />
                </Box>
              </StyledPaper>
            </Grid>

            {/* Final Storage Section */}
            <Grid item xs={12} md={4}>
              <StyledPaper>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="caption" sx={{ fontWeight: 'bold' }}>
                      Storage
                    </Typography>
                    <FolderOutlinedIcon sx={{ color: '#c9a866', fontSize: '1rem' }} />
                  </Box>

                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <CircularStorage sx={{ width: 80, height: 80 }}>
                      <StorageText>
                        <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                          75 GB
                        </Typography>
                      </StorageText>
                    </CircularStorage>
                  </Box>
                </Box>
              </StyledPaper>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default BusinessDashboard;