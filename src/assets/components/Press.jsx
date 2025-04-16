import React from 'react';
import { Box, Container, Grid, Typography, Button, Link, Stack } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import BookIcon from '@mui/icons-material/Book';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import CodeIcon from '@mui/icons-material/Code';
import ArticleIcon from '@mui/icons-material/Article';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#121212', color: 'white', pt: 4, pb: 2 }}>
    
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Grid container spacing={3}>
        
          <Grid item xs={12} md={4}>
            <Box sx={{ bgcolor: '#1A1A1A', borderRadius: 3, p: 3, height: '100%' }}>
              <Box 
                sx={{ 
                  bgcolor: 'rgba(231, 207, 29, 0.1)', 
                  borderRadius: '50%', 
                  width: 40, 
                  height: 40, 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  mb: 2
                }}
              >
                <PhoneIcon sx={{ color: '#E7CF1D' }} />
              </Box>
              <Typography variant="h6" sx={{ mb: 1, color: 'white' }}>
                Contact Sale
              </Typography>
              <Typography variant="body2" sx={{ mb: 3, color: '#999' }}>
                Speak to someone from our sales team.
              </Typography>
              <Button 
                variant="outlined" 
                sx={{ 
                  borderColor: '#E7CF1D', 
                  color: '#E7CF1D', 
                  borderRadius: 5,
                  '&:hover': {
                    borderColor: '#b8a619',
                    bgcolor: 'rgba(231, 207, 29, 0.05)'
                  }
                }}
              >
                Contact Sales
              </Button>
            </Box>
          </Grid>

          {/* Have a Question Card */}
          <Grid item xs={12} md={4}>
            <Box sx={{ bgcolor: '#1A1A1A', borderRadius: 3, p: 3, height: '100%' }}>
              <Box 
                sx={{ 
                  bgcolor: 'rgba(231, 207, 29, 0.1)', 
                  borderRadius: '50%', 
                  width: 40, 
                  height: 40, 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  mb: 2
                }}
              >
                <QuestionAnswerIcon sx={{ color: '#E7CF1D' }} />
              </Box>
              <Typography variant="h6" sx={{ mb: 1, color: 'white' }}>
                Have a Question
              </Typography>
              <Typography variant="body2" sx={{ mb: 3, color: '#999' }}>
                See our frequently asked question
              </Typography>
              <Button 
                variant="outlined" 
                sx={{ 
                  borderColor: '#E7CF1D', 
                  color: '#E7CF1D', 
                  borderRadius: 5,
                  '&:hover': {
                    borderColor: '#b8a619',
                    bgcolor: 'rgba(231, 207, 29, 0.05)'
                  }
                }}
              >
                Get Answers
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box sx={{ bgcolor: '#1A1A1A', borderRadius: 3, p: 3, height: '100%' }}>
              <Box 
                sx={{ 
                  bgcolor: 'rgba(231, 207, 29, 0.1)', 
                  borderRadius: '50%', 
                  width: 40, 
                  height: 40, 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  mb: 2
                }}
              >
                <NewspaperIcon sx={{ color: '#E7CF1D' }} />
              </Box>
              <Typography variant="h6" sx={{ mb: 1, color: 'white' }}>
                Press & Media
              </Typography>
              <Typography variant="body2" sx={{ mb: 3, color: '#999' }}>
                Get in touch with our PR team
              </Typography>
              <Button 
                variant="outlined" 
                sx={{ 
                  borderColor: '#E7CF1D', 
                  color: '#E7CF1D', 
                  borderRadius: 5,
                  '&:hover': {
                    borderColor: '#b8a619',
                    bgcolor: 'rgba(231, 207, 29, 0.05)'
                  }
                }}
              >
                Press Contact
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>

    
      <Container maxWidth="lg">
        <Grid container spacing={4}>
      
          <Grid item xs={12} md={3}>
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" sx={{ color: '#E7CF1D', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
                <span style={{ marginRight: '5px' }}>📦</span> SaasAble
              </Typography>
            </Box>
            <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1 }}>
              v1.0.0
            </Typography>
            <Typography variant="body2" sx={{ color: '#999', mb: 3 }}>
              Explore the different versions of our SaasAble template.
            </Typography>

         
            <Stack spacing={2}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <DesignServicesIcon sx={{ color: '#666', mr: 1, fontSize: 18 }} />
                <Link href="#" underline="hover" sx={{ color: '#999' }}>
                  Figma Version 1.0.0
                </Link>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <CodeIcon sx={{ color: '#666', mr: 1, fontSize: 18 }} />
                <Link href="#" underline="hover" sx={{ color: '#999' }}>
                  React Material UI v6.1.4
                </Link>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <ArticleIcon sx={{ color: '#666', mr: 1, fontSize: 18 }} />
                <Link href="#" underline="hover" sx={{ color: '#999' }}>
                  Documentation
                </Link>
              </Box>
            </Stack>
          </Grid>

        
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ mb: 3 }}>
              Company
            </Typography>
            <Stack spacing={2}>
              <Link href="#" underline="hover" sx={{ color: '#999' }}>
                Why Phoenixcoded?
              </Link>
              <Link href="#" underline="hover" sx={{ color: '#999' }}>
                About
              </Link>
              <Link href="#" underline="hover" sx={{ color: '#999' }}>
                Contact Us
              </Link>
            </Stack>
          </Grid>

       
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ mb: 3 }}>
              Support
            </Typography>
            <Stack spacing={2}>
              <Link href="#" underline="hover" sx={{ color: '#999' }}>
                Pricing
              </Link>
              <Link href="#" underline="hover" sx={{ color: '#999' }}>
                FAQ
              </Link>
              <Link href="#" underline="hover" sx={{ color: '#E7CF1D' }}>
                Support
              </Link>
              <Link href="#" underline="hover" sx={{ color: '#999' }}>
                License Terms
              </Link>
            </Stack>
          </Grid>

   
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ mb: 3 }}>
              Resources
            </Typography>
            <Stack spacing={2}>
              <Link href="#" underline="hover" sx={{ color: '#999' }}>
                Freebies
              </Link>
              <Link href="#" underline="hover" sx={{ color: '#999' }}>
                Documentation
              </Link>
              <Link href="#" underline="hover" sx={{ color: '#999' }}>
                Blog
              </Link>
              <Link href="#" underline="hover" sx={{ color: '#999' }}>
                Privacy Policy
              </Link>
              <Link href="#" underline="hover" sx={{ color: '#999' }}>
                Refund Policy
              </Link>
            </Stack>
          </Grid>
        </Grid>
      </Container>

    
      <Container maxWidth="lg" sx={{ mt: 8, pt: 3, borderTop: '1px solid #333' }}>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography variant="body2" sx={{ color: '#999' }}>
              Copyright © 2024 Phoenixcoded
            </Typography>
          </Grid>
          <Grid item>
            <Stack direction="row" spacing={2}>
              <Link href="#" color="inherit">
                <LinkedInIcon sx={{ color: '#E7CF1D' }} />
              </Link>
              <Link href="#" color="inherit">
                <FacebookIcon sx={{ color: '#E7CF1D' }} />
              </Link>
              <Link href="#" color="inherit">
                <YouTubeIcon sx={{ color: '#E7CF1D' }} />
              </Link>
              <Link href="#" color="inherit">
                <BookIcon sx={{ color: '#E7CF1D' }} />
              </Link>
              <Link href="#" color="inherit">
                <Box component="span" sx={{ color: '#E7CF1D', fontSize: '24px' }}>
                  🎨
                </Box>
              </Link>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;