import React from 'react';
import { 
  Box, 
  Typography, 
  TextField, 
  Button, 
  Container, 
  Grid, 
  MenuItem, 
  Select, 
  InputAdornment,
  FormControl,
  InputLabel,
  OutlinedInput
} from '@mui/material';

const ContactForm = () => {
  return (
    <Box sx={{ 
      bgcolor: '#191919', 
      color: 'white', 
      p: 4, 
      borderRadius: 4,
      width: '100%',
      maxWidth: '1000px',
      mx: 'auto',
      my: 2
    }}>
      <Container>
        <Typography 
          variant="h3" 
          align="center" 
          sx={{ 
            color: 'white', 
            fontWeight: 500,
            mb: 1
          }}
        >
          We'd love to hear from you
        </Typography>
        
        <Typography 
          variant="subtitle1" 
          align="center" 
          sx={{ 
            color: '#D4B859', 
            mb: 6,
            maxWidth: '700px',
            mx: 'auto'
          }}
        >
          Explore key statistics and trends shaping our understanding of the current landscape.
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography sx={{ mb: 1, color: '#D4B859' }}>First Name</Typography>
            <TextField
              fullWidth
              placeholder="First Name"
              variant="outlined"
              InputProps={{
                sx: {
                  bgcolor: 'transparent',
                  border: '1px solid #333',
                  borderRadius: 2,
                  color: 'white',
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#333'
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#444'
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#D4B859'
                  }
                }
              }}
            />
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Typography sx={{ mb: 1, color: '#D4B859' }}>Last Name</Typography>
            <TextField
              fullWidth
              placeholder="Last Name"
              variant="outlined"
              InputProps={{
                sx: {
                  bgcolor: 'transparent',
                  border: '1px solid #333',
                  borderRadius: 2,
                  color: 'white',
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#333'
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#444'
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#D4B859'
                  }
                }
              }}
            />
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Typography sx={{ mb: 1, color: '#D4B859' }}>Email</Typography>
            <TextField
              fullWidth
              placeholder="example@gmail.com"
              variant="outlined"
              InputProps={{
                sx: {
                  bgcolor: 'transparent',
                  border: '1px solid #333',
                  borderRadius: 2,
                  color: 'white',
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#333'
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#444'
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#D4B859'
                  }
                }
              }}
            />
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Typography sx={{ mb: 1, color: '#D4B859' }}>Phone number</Typography>
            <Box sx={{ display: 'flex' }}>
              <FormControl sx={{ width: '80px', mr: 1 }}>
                <Select
                  defaultValue="+91"
                  input={
                    <OutlinedInput
                      sx={{
                        bgcolor: 'transparent',
                        borderRadius: 2,
                        color: 'white',
                        height: '56px',
                        border: '1px solid #333',
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#333'
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#444'
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#D4B859'
                        }
                      }}
                    />
                  }
                >
                  <MenuItem value="+91">+91</MenuItem>
                  <MenuItem value="+1">+1</MenuItem>
                  <MenuItem value="+44">+44</MenuItem>
                </Select>
              </FormControl>
              
              <TextField
                fullWidth
                placeholder="Phone number"
                variant="outlined"
                InputProps={{
                  sx: {
                    bgcolor: 'transparent',
                    border: '1px solid #333',
                    borderRadius: 2,
                    color: 'white',
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#333'
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#444'
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#D4B859'
                    }
                  }
                }}
              />
            </Box>
          </Grid>
          
          <Grid item xs={12}>
            <Typography sx={{ mb: 1, color: '#D4B859' }}>Message</Typography>
            <TextField
              fullWidth
              multiline
              rows={4}
              placeholder="Please type your message here.."
              variant="outlined"
              InputProps={{
                sx: {
                  bgcolor: 'transparent',
                  border: '1px solid #333',
                  borderRadius: 2,
                  color: 'white',
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#333'
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#444'
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#D4B859'
                  }
                }
              }}
            />
          </Grid>
          
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <Button 
              variant="contained"
              sx={{
                bgcolor: '#E9D758',
                color: '#222',
                borderRadius: '30px',
                px: 4,
                py: 1.5,
                fontWeight: 'bold',
                '&:hover': {
                  bgcolor: '#d4c24e'
                }
              }}
            >
              Send Message
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactForm;