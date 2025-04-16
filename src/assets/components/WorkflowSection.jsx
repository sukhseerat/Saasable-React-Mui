import React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import StorageIcon from '@mui/icons-material/Storage';
import LinkIcon from '@mui/icons-material/Link';
import ListAltIcon from '@mui/icons-material/ListAlt';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const WorkflowSection = () => {
  return (
    <Box sx={{ 
      padding: '60px 20px', 
      textAlign: 'center', 
      backgroundColor: '#f2f4f7', 
      width: '100%'
    }}>
    
      <Typography 
        variant="h3" 
        sx={{
          fontWeight: 700,
          fontSize: '2.5rem',
          color: '#000',
          marginBottom: '16px'
        }}
      >
        Made to fit your workflow
      </Typography>
      
      <Typography 
        variant="body1" 
        sx={{
          color: '#666',
          fontSize: '1.1rem',
          maxWidth: '800px',
          margin: '0 auto 60px'
        }}
      >
        Seamlessly integrate, map assets, and auto-update your software catalog.
      </Typography>

      
      <Box sx={{ 
        maxWidth: '1200px', 
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '24px',
        justifyContent: 'center'
      }}>
      
        <Box sx={{
          width: '300px',
          backgroundColor: '#f9fafb',
          borderRadius: '16px',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          alignItems: 'center',
          boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
        }}>
      
          <Box sx={{
            width: '100%',
            backgroundColor: '#F4EBFF',
            borderRadius: '8px',
            padding: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            textAlign: 'left'
          }}>
            <Box sx={{
              backgroundColor: '#F4EBFF',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <ChatIcon sx={{ fontSize: 18, color: '#666' }} />
            </Box>
            <Typography sx={{ fontSize: '14px', color: '#333', fontWeight: 500 }}>
              Chat with assistant
            </Typography>
          </Box>

        
          <Box sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>
            <Box sx={{
              backgroundColor: '#fff',
              padding: '12px 16px',
              borderRadius: '8px',
              textAlign: 'left'
            }}>
              <Typography sx={{ fontSize: '13px', color: '#666' }}>
                You're welcome! If you need any more help, just ask.
              </Typography>
            </Box>

            <Box sx={{
              backgroundColor: '#fff',
              padding: '12px 16px',
              borderRadius: '8px',
              textAlign: 'left'
            }}>
              <Typography sx={{ fontSize: '13px', color: '#666' }}>
                Ask something...
              </Typography>
            </Box>

            <Box sx={{
              backgroundColor: '#fff',
              padding: '12px 16px',
              borderRadius: '8px',
              textAlign: 'left'
            }}>
              <Typography sx={{ fontSize: '13px', color: '#666' }}>
                Consider checking important information...
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          width: '300px'
        }}>
          
          <Box sx={{
            backgroundColor: '#f9fafb',
            borderRadius: '16px',
            padding: '24px',
            textAlign: 'left',
            height: '180px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
          }}>
            <Box sx={{
              backgroundColor: '#f0f1f5',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '16px'
            }}>
              <StorageIcon sx={{ fontSize: 20, color: '#666' }} />
            </Box>
            <Typography sx={{ fontWeight: 600, fontSize: '16px', marginBottom: '8px', color: '#333' }}>
              Bring your Data Model
            </Typography>
            <Typography sx={{ fontSize: '14px', color: '#666', lineHeight: 1.5 }}>
              Collect relevant customer information efficiently.
            </Typography>
          </Box>

      
          <Box sx={{
            backgroundColor: '#f9fafb',
            borderRadius: '16px',
            padding: '24px',
            textAlign: 'left',
            height: '180px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
          }}>
            <Box sx={{
              backgroundColor: '#f0f1f5',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '16px'
            }}>
              <ListAltIcon sx={{ fontSize: 20, color: '#666' }} />
            </Box>
            <Typography sx={{ fontWeight: 600, fontSize: '16px', marginBottom: '8px', color: '#333' }}>
              Discover & populate
            </Typography>
            <Typography sx={{ fontSize: '14px', color: '#666', lineHeight: 1.5 }}>
              Enhance customer interactions for lasting relationships.
            </Typography>
          </Box>
        </Box>

      
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          width: '300px'
        }}>
      
          <Box sx={{
            backgroundColor: '#f9fafb',
            borderRadius: '16px',
            padding: '24px',
            textAlign: 'left',
            height: '180px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
          }}>
            <Box sx={{
              backgroundColor: '#f0f1f5',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '16px'
            }}>
              <LinkIcon sx={{ fontSize: 20, color: '#666' }} />
            </Box>
            <Typography sx={{ fontWeight: 600, fontSize: '16px', marginBottom: '8px', color: '#333' }}>
              Connect to tech stack
            </Typography>
            <Typography sx={{ fontSize: '14px', color: '#666', lineHeight: 1.5 }}>
              Derive insights from data and implement strategic actions.
            </Typography>
          </Box>

          
          <Box sx={{
            backgroundColor: '#f9fafb',
            borderRadius: '16px',
            padding: '24px',
            textAlign: 'left',
            height: '180px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
          }}>
            <Box sx={{
              backgroundColor: '#f0f1f5',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '16px'
            }}>
              <AutoAwesomeIcon sx={{ fontSize: 20, color: '#666' }} />
            </Box>
            <Typography sx={{ fontWeight: 600, fontSize: '16px', marginBottom: '8px', color: '#333' }}>
              Train your AI assistant
            </Typography>
            <Typography sx={{ fontSize: '14px', color: '#666', lineHeight: 1.5 }}>
              Empower your AI assistant to enhance customer interactions.
            </Typography>
          </Box>
        </Box>
      </Box>

  
      
      <Box 
        sx={{
          marginTop: '60px',
          backgroundColor: '#EBF3FC',
          padding: '40px 30px',
          borderRadius: '12px',
          maxWidth: '1100px',
          margin: '60px auto 0',
          textAlign: 'center',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.03)',
          backgroundImage: 'url(https://www.saasable.io/assets/images/graphics/ai/background1.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: "rgba(255, 255, 255, 0.6)", 
          backgroundBlendMode: "lighten"
        }}
      >
        <Typography 
          variant="h4" 
          sx={{ 
            fontWeight: 700, 
            fontSize: '1.75rem',
            color: '#000',
            marginBottom: '24px',
            maxWidth: '800px',
            margin: '0 auto 24px'
          }}
        >
          Maximize Efficiency and Productivity with Our Comprehensive AI Solution
        </Typography>
        <Button 
          variant="contained" 
          sx={{ 
            backgroundColor: '#1a73e8',
            color: '#fff',
            fontWeight: 500,
            fontSize: '1rem',
            padding: '12px 32px',
            borderRadius: '50px',
            textTransform: 'none',
            boxShadow: '0 4px 12px rgba(26, 115, 232, 0.3)',
            '&:hover': {
              backgroundColor: '#0f62d9',
              boxShadow: '0 6px 16px rgba(26, 115, 232, 0.4)'
            }
          }}
        >
          Get Started - It's Free Now
        </Button>
      </Box>
    </Box>
  );
};

export default WorkflowSection;