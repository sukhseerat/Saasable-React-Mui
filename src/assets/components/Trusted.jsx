import React from 'react';
import { Box, Typography, Grid, Paper, Stack, Container } from '@mui/material';
import { styled } from '@mui/material/styles';


const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: '#1a1a1a',
  color: '#fff',
  borderRadius: 16,
  padding: theme.spacing(5, 3),
  width: '100%',
  maxWidth: '2000px', 
  margin: '0 auto',
}));

const LogoBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: theme.spacing(4),
  marginBottom: theme.spacing(2),
}));

const Logo = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  color: '#c9a866',
  marginRight: theme.spacing(3),
  '& svg': {
    marginRight: theme.spacing(1),
  },
}));

const StatNumber = styled(Typography)(({ theme }) => ({
  fontSize: '3.5rem',
  fontWeight: 700,
  color: '#f0f0f0',
  marginBottom: theme.spacing(1),
}));

const StatDescription = styled(Typography)(({ theme }) => ({
  fontSize: '0.9rem',
  textAlign: 'center',
  color: '#c9a866',
}));


const QuantitativeFindings = () => {
  return (
    <Box sx={{ p: 2, backgroundColor: '#121212', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Container maxWidth="md">
     
        <Box sx={{ mb: 2, textAlign: 'center' }}>
          <Typography variant="subtitle1" color="#f0f0f0">
            Trusted by 10,000+ companies around the world
          </Typography>
          
         
          <LogoBox>
            <Logo>
              <Box component="span" sx={{ mr: 1 }}>🔷</Box>
              <Typography>Techlify</Typography>
            </Logo>
            <Logo>
              <Box component="span" sx={{ mr: 1 }}>📊</Box>
              <Typography>Marketly</Typography>
            </Logo>
            <Logo>
              <Box component="span" sx={{ mr: 1 }}>🏠</Box>
              <Typography>Realtor</Typography>
            </Logo>
            <Logo>
              <Box component="span" sx={{ mr: 1 }}>💰</Box>
              <Typography>Financely</Typography>
            </Logo>
          </LogoBox>
          
        
          <LogoBox>
            <Logo>
              <Box component="span" sx={{ mr: 1 }}>🏠</Box>
              <Typography>Realtor</Typography>
            </Logo>
            <Logo>
              <Box component="span" sx={{ mr: 1 }}>💰</Box>
              <Typography>Financely</Typography>
            </Logo>
            <Logo>
              <Box component="span" sx={{ mr: 1 }}>🔷</Box>
              <Typography>Techlify</Typography>
            </Logo>
            <Logo>
              <Box component="span" sx={{ mr: 1 }}>📊</Box>
              <Typography>Marketly</Typography>
            </Logo>
          </LogoBox>
        </Box>

      
        <StyledPaper elevation={3}>
          <Typography 
            variant="h4" 
            component="h2" 
            sx={{ textAlign: 'center', mb: 5, color: '#f0f0f0' }}
          >
            Quantitative Findings Overview
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Stack alignItems="center">
                <StatNumber>90%</StatNumber>
                <StatDescription>
                  Efficient and intelligent sales communication.
                </StatDescription>
              </Stack>
            </Grid>

            <Grid item xs={12} md={4} sx={{ 
              position: 'relative',
              '&::before, &::after': {
                content: '""',
                position:'relative',
                top: '10%',
                bottom: '10%',
                width: '1px',
                backgroundColor: '#333',
                display: { xs: 'none', md: 'block' }
              },
              '&::before': { left: 0 },
              '&::after': { right: 0 }
            }}>
              <Stack alignItems="center">
                <StatNumber>10x</StatNumber>
                <StatDescription>
                  Increase in productivity, demonstrating the significant.
                </StatDescription>
              </Stack>
            </Grid>

            <Grid item xs={12} md={4}>
              <Stack alignItems="center">
                <StatNumber>110%</StatNumber>
                <StatDescription>
                  Increase in the adoption of collaboration tools.
                </StatDescription>
              </Stack>
            </Grid>
          </Grid>
        </StyledPaper>
      </Container>
    </Box>
  );
};

export default QuantitativeFindings;