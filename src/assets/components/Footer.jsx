import React from 'react';
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  IconButton,
  Divider,
  MenuItem,
  Select,
  useTheme,
} from '@mui/material';
import { FaLinkedin, FaFacebook, FaYoutube, FaGithub } from 'react-icons/fa';
import { BsSlack } from 'react-icons/bs';
import { IoMdSend } from 'react-icons/io';

const Footer = () => {
  const theme = useTheme();
  return (
    <Box component="footer" bgcolor="#f7f9fb" py={6} px={{ xs: 2, md: 6, lg: 10 }}>

  
      <Box
        maxWidth="lg"
        mx="auto"
        mb={6}
        display="flex"
        flexDirection={{ xs: 'column', md: 'row' }}
        justifyContent="space-between"
        alignItems="center"
        p={4}
        bgcolor="#f1f5f9"
        borderRadius={2}
        boxShadow={1}
      >
        <Box mb={{ xs: 2, md: 0 }}>
          <Typography variant="h6" fontWeight="bold" color="text.primary">
            Join our newsletter
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Discover the features that will transform your customer relationships
          </Typography>
        </Box>
        <Box display="flex" width={{ xs: '100%', md: 'auto' }}>
          <TextField
            placeholder="Enter your email address"
            size="small"
            variant="outlined"
            sx={{
              bgcolor: '#fff',
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              flex: 1
            }}
          />
          <Button
            variant="contained"
            sx={{
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
              bgcolor: '#0d6efd',
              '&:hover': { bgcolor: '#0b5ed7' }
            }}
          >
            <IoMdSend style={{ color: '#fff' }} />
          </Button>
        </Box>
      </Box>

      
      <Grid container spacing={4} maxWidth="lg" mx="auto">
        <Grid item xs={12} md={6} lg={3}>
          <Box display="flex" alignItems="center" mb={2}>
            <Box color="primary.main" mr={1}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" />
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Box>
            <Typography variant="h6" color="primary.main" fontWeight="bold">
              SaasAble
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary" mb={3}>
            Empower your HR team with our comprehensive platform for seamless HR management
          </Typography>
          <Select
            value="ENG"
            size="small"
            variant="outlined"
            sx={{ minWidth: 100 }}
          >
            <MenuItem value="ENG">ENG</MenuItem>
          </Select>
        </Grid>

        <Grid item xs={12} md={6} lg={3}>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            Use Case
          </Typography>
          {['Business Analytics', 'Marketing Automation', 'Collaboration Suites', 'Project Management'].map(text => (
            <Typography key={text} variant="body2" color="text.secondary" sx={{ mb: 1, '&:hover': { color: 'primary.main', cursor: 'pointer' } }}>
              {text}
            </Typography>
          ))}
        </Grid>

        <Grid item xs={12} md={6} lg={3}>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            Support
          </Typography>
          {['Pricing', 'FAQ', 'Support', 'License Terms', 'Discord'].map(text => (
            <Typography key={text} variant="body2" color="text.secondary" sx={{ mb: 1, '&:hover': { color: 'primary.main', cursor: 'pointer' } }}>
              {text}
            </Typography>
          ))}
        </Grid>

        <Grid item xs={12} md={6} lg={3}>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            Company
          </Typography>
          {['Why Phoenixcoded?', 'About', 'Contact Us'].map(text => (
            <Typography key={text} variant="body2" color="text.secondary" sx={{ mb: 1, '&:hover': { color: 'primary.main', cursor: 'pointer' } }}>
              {text}
            </Typography>
          ))}
        </Grid>
      </Grid>

      
      <Box maxWidth="lg" mx="auto" mt={6}>
        <Typography variant="subtitle1" fontWeight="bold" mb={2}>
          Follow Us on
        </Typography>
        <Box display="flex" gap={2}>
          {[<FaLinkedin />, <FaFacebook />, <FaYoutube />, <FaGithub />, <BsSlack />].map((icon, idx) => (
            <IconButton
              key={idx}
              sx={{ bgcolor: '#f1f5f9', '&:hover': { bgcolor: '#e2e8f0' }, p: 1.5 }}
            >
              {React.cloneElement(icon, { color: '#0d6efd' })}
            </IconButton>
          ))}
        </Box>
      </Box>

      <Divider sx={{ my: 4 }} />

      
      <Box
        maxWidth="lg"
        mx="auto"
        display="flex"
        flexDirection={{ xs: 'column', md: 'row' }}
        justifyContent="space-between"
        alignItems="center"
        color="text.secondary"
        fontSize="0.875rem"
      >
        <Typography>Copyright © 2025 Phoenixcoded</Typography>
        <Box display="flex" gap={3} mt={{ xs: 2, md: 0 }}>
          <Typography sx={{ '&:hover': { color: 'primary.main', cursor: 'pointer' } }}>Privacy Policy</Typography>
          <Typography sx={{ '&:hover': { color: 'primary.main', cursor: 'pointer' } }}>Terms & Conditions</Typography>
        </Box>
      </Box>

    
      <Box position="fixed" bottom={16} right={16}>
        <Button
          variant="contained"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          sx={{
            bgcolor: '#0d6efd',
            '&:hover': { bgcolor: '#0b5ed7' },
            p: 1.5,
            minWidth: 0,
            borderRadius: '50%'
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 15l-6-6-6 6" /></svg>
        </Button>
      </Box>
    </Box>
  );
};

export default Footer;