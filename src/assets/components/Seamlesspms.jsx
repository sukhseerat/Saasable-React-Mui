import React from 'react';
import { 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  Grid, 
  Button, 
  Container,
  useTheme,
  createTheme,
  ThemeProvider,
  CssBaseline
} from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import WorkIcon from '@mui/icons-material/Work';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import TuneIcon from '@mui/icons-material/Tune';
import AssessmentIcon from '@mui/icons-material/Assessment';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FFD700',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
  },
  typography: {
    h2: {
      fontWeight: 700,
      marginBottom: 1,
    },
    h5: {
      fontWeight: 600,
      marginBottom: 2,
    },
    body1: {
      color: '#cccccc',
    },
  },
});

const CollaborationTools = () => {
  const theme = useTheme();
  
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ py: 8 }}>
       
        <Box mb={6}>
          <Typography variant="h3" component="h1">
            Seamless Collaboration Tools
          </Typography>
          <Typography variant="body1">
            Facilitate teamwork and communication with integrated chat, file sharing, and commenting features.
          </Typography>
        </Box>

       
        <Grid container spacing={4} mb={4}>
       
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%', borderRadius: 2 }}>
              <CardContent>
                <Box mb={2}>
                  <SettingsIcon sx={{ fontSize: 40, color: '#cccccc' }} />
                </Box>
                <Typography variant="h5" component="h2">
                  Automated Resource
                </Typography>
                <Typography variant="body1">
                  AI-driven resource allocation productivity by dynamically assigning tasks based on availability, skills, and project needs.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%', borderRadius: 2 }}>
              <CardContent>
                <Box mb={2}>
                  <WorkIcon sx={{ fontSize: 40, color: '#cccccc' }} />
                </Box>
                <Typography variant="h5" component="h2">
                  Virtual Workspace
                </Typography>
                <Typography variant="body1">
                  Integrate VR/AR for remote team collaboration in immersive virtual workspaces.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

     
        <Grid container spacing={4} mb={4}>
       
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%', borderRadius: 2 }}>
              <CardContent>
                <Box mb={2}>
                  <EmojiEventsIcon sx={{ fontSize: 40, color: '#cccccc' }} />
                </Box>
                <Typography variant="h5" component="h2">
                  Gamified Task
                </Typography>
                <Typography variant="body1">
                  Motivate and engage team members with gamified task management features, where completing tasks earns rewards.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%', borderRadius: 2 }}>
              <CardContent>
                <Box mb={2}>
                  <TuneIcon sx={{ fontSize: 40, color: '#cccccc' }} />
                </Box>
                <Typography variant="h5" component="h2">
                  Adaptive Workflow
                </Typography>
                <Typography variant="body1">
                  Automate workflows that adapt dynamically to changing project conditions, priorities, or constraints, ensuring flexibility.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

    
        <Card sx={{ borderRadius: 2 }}>
          <CardContent>
            <Grid container spacing={4}>
             
              <Grid item xs={12} md={5}>
                <Box mb={2}>
                  <AssessmentIcon sx={{ fontSize: 40, color: '#cccccc' }} />
                </Box>
                <Typography variant="h5" component="h2">
                  Predictive Risk
                </Typography>
                <Typography variant="body1" mb={3}>
                  Utilize machine learning algorithms to analyze historical project data and predict potential risks and challenges.
                </Typography>
                <Button 
                  variant="contained" 
                  color="primary"
                  sx={{ 
                    borderRadius: 28,
                    textTransform: 'none',
                    fontWeight: 'bold',
                    px: 3
                  }}
                >
                  Get Started
                </Button>
              </Grid>
              
            
              <Grid item xs={12} md={7}>
                <Box 
                  component="img"
                  src="https://www.saasable.io/assets/images/graphics/pms/desktop1-dark.svg"
                  alt="Dashboard Preview"
                  sx={{ 
                    width: '100%',
                    height: 'auto',
                    maxHeight: 300,
                    objectFit: 'contain'
                  }}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </ThemeProvider>
  );
};

export default CollaborationTools;