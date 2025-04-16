import React from 'react';
import { Box, Button, Container, Typography, Avatar, Stack, Paper } from '@mui/material';

const avatars = [
  'https://www.saasable.io/assets/images/user/avatar1.png',
  'https://www.saasable.io/assets/images/user/avatar2.png',
  'https://www.saasable.io/assets/images/user/avatar3.png',
  'https://www.saasable.io/assets/images/user/avatar4.png',
  'https://www.saasable.io/assets/images/user/avatar5.png',
];

const LandingSection = () => {
  return (
    <Box sx={{ bgcolor: '#000', color: '#fff', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <Container maxWidth="lg" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
     
        <Box>
          <Stack direction="row" spacing={1} alignItems="center" mb={2}>
            {avatars.map((src, index) => (
              <Avatar key={index} src={src} sx={{ width: 40, height: 40, border: '2px solid #fff' }} />
            ))}
            <Typography variant="body1" sx={{ fontSize: '1rem', fontWeight: 'bold' }}>
              10k+ Reviews (4.5 out of 5)
            </Typography>
          </Stack>

          <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
            Ready to Get Started?
          </Typography>

          <Typography variant="body1" sx={{ mb: 3, maxWidth: '400px', color: '#b0b0b0' }}>
            Kickstart your journey towards success – click below to get started now.
          </Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Button variant="contained" sx={{ bgcolor: '#f0c949', '&:hover': { bgcolor: '#e0b839' } }}>Get Started Today</Button>
            <Button variant="outlined" sx={{ borderColor: '#f0c949', color: '#f0c949' }}>Explore Feature</Button>
          </Stack>

          <Stack direction="row" spacing={2} alignItems="center" mt={2}>
            <Typography variant="body2">No credit card required</Typography>
            <Typography variant="body2">|</Typography>
            <Typography variant="body2">14-day free trial</Typography>
          </Stack>
        </Box>

     
        <Box sx={{ position: 'relative', display: { xs: 'none', md: 'block' } }}>
          <img src="https://www.saasable.io/assets/images/graphics/pms/graphics1-dark.svg" alt="Illustration" width="450" />

        
          <Paper
            sx={{
              position: 'absolute',
              top: '10%',
              left: '-10%',
              p: 2,
              borderRadius: 2,
              bgcolor: '#181818',
            }}
          >
            <Typography variant="body2" color="#fff">Content curation app</Typography>
            <Typography variant="caption" color="#b0b0b0">Brings all your news into one place</Typography>
          </Paper>

          <Paper
            sx={{
              position: 'absolute',
              bottom: '10%',
              right: '-10%',
              p: 2,
              borderRadius: 2,
              bgcolor: '#181818',
            }}
          >
            <Typography variant="body2" color="#fff">Storage</Typography>
            <Typography variant="h6" color="#f0c949">75 GB</Typography>
            <Typography variant="caption" color="#b0b0b0">Used of 100 GB</Typography>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default LandingSection;
