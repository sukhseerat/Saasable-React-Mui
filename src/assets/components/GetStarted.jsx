import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  Container, 
  Paper, 
  Grid,
  ToggleButtonGroup,
  ToggleButton,
  IconButton,
  Chip,
  Stack
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const PricingPlans = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [counters, setCounters] = useState({ dreamer: 1, founder: 3, teamPro: 8 });

  const handleBillingChange = (event, newValue) => {
    if (newValue !== null) {
      setBillingCycle(newValue);
    }
  };

  const handleIncrement = (plan) => {
    setCounters({...counters, [plan]: counters[plan] + 1});
  };

  const handleDecrement = (plan) => {
    if (counters[plan] > 1) {
      setCounters({...counters, [plan]: counters[plan] - 1});
    }
  };

  const plans = [
    {
      id: 'free',
      name: 'Free Plan',
      price: 'Free',
      description: 'Get to know ideabuddy, choose a plan later',
      features: [
        'Unlimited members',
        '250 issues',
        'Import and export',
        'All intergation, API, Webhooks',
        '250 issues',
        'Import and export',
        'All intergation, API, Webhooks',
      ],
      featureType: 'Free features',
      buttonText: 'Start For Free',
      counter: null
    },
    {
      id: 'dreamer',
      name: 'Dreamer',
      price: '$29',
      description: 'Get to know ideabuddy, choose a plan later',
      features: [
        'Unlimited members',
        '250 issues',
        'Import and export',
        'All intergation, API, Webhooks',
        '250 issues',
        'Import and export',
        'All intergation, API, Webhooks',
      ],
      featureType: 'Features included',
      buttonText: 'Choose Plan',
      counter: 'dreamer'
    },
    {
      id: 'founder',
      name: 'Founder',
      price: '$49',
      description: 'Get to know ideabuddy, choose a plan later',
      features: [
        'Unlimited members',
        '250 issues',
        'Import and export',
        'All intergation, API, Webhooks',
        '250 issues',
        'Import and export',
        'All intergation, API, Webhooks',
      ],
      featureType: 'Premium features',
      buttonText: 'Choose Plan',
      counter: 'founder',
      popular: true
    },
    {
      id: 'teamPro',
      name: 'Team Pro',
      price: '$99',
      description: 'Get to know ideabuddy, choose a plan later',
      features: [
        'Unlimited members',
        '250 issues',
        'Import and export',
        'All intergation, API, Webhooks',
        '250 issues',
        'Import and export',
        'All intergation, API, Webhooks',
      ],
      featureType: 'Extended features',
      buttonText: 'Choose Plan',
      counter: 'teamPro'
    }
  ];

  return (
    <Box sx={{ backgroundColor: '#141414', minHeight: '100vh', color: 'white', py: 6 }}>
      <Container maxWidth="md">
        <Typography variant="h4" component="h3" gutterBottom align="left" sx={{ fontWeight: 'bold', mb: 1 }}>
          Get Started with right plan
        </Typography>
        <Typography variant="h6" gutterBottom align="left" sx={{ color: '#c0c0c0', mb: 5 }}>
          All paid plan come with a 15-day money back guarantee
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 4 }}>
          <ToggleButtonGroup
            color="primary"
            value={billingCycle}
            exclusive
            onChange={handleBillingChange}
            sx={{
              backgroundColor: '#1e1e1e',
              borderRadius: '30px',
              '& .MuiToggleButton-root': {
                border: 'none',
                color: 'white',
                '&.Mui-selected': {
                  backgroundColor: '#333',
                  borderRadius: '30px',
                  color: 'white',
                }
              }
            }}
          >
            <ToggleButton value="monthly" sx={{ px: 3 }}>
              Monthly
            </ToggleButton>
            <ToggleButton value="yearly" sx={{ px: 3 }}>
              Yearly
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>

        <Grid container spacing={2}>
          {plans.map((plan) => (
            <Grid item xs={12} sm={6} md={3} key={plan.id}>
              <Paper 
                elevation={0} 
                sx={{ 
                  backgroundColor: plan.popular ? '#1a1a00' : '#1e1e1e', 
                  color: 'white',
                  height: '100%',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: plan.popular ? '1px solid #f0be00' : 'none',
                  position: 'relative',
                  p: 3
                }}
              >
                {plan.popular && (
                  <Chip 
                    label="POPULAR" 
                    sx={{ 
                      position: 'absolute', 
                      top: 8, 
                      right: 8,
                      backgroundColor: '#f0be00',
                      color: 'black',
                      fontWeight: 'bold',
                      fontSize: '0.7rem'
                    }} 
                  />
                )}
                
                <Typography variant="h6" component="div" gutterBottom>
                  {plan.name}
                </Typography>
                
                <Typography variant="body2" sx={{ mb: 3, color: '#a0a0a0' }}>
                  {plan.description}
                </Typography>
                
                <Typography variant="h3" component="div" sx={{ fontWeight: 'bold', mb: 3, color: plan.id === 'free' ? '#f0be00' : 'white' }}>
                  {plan.price}
                </Typography>
                
                <Box sx={{ mb: 2 }}>
                  <Typography variant="body2" sx={{ color: '#a0a0a0', display: 'flex', alignItems: 'center' }}>
                    {plan.counter ? (
                      <>
                        Number of <span style={{ color: '#f0be00', margin: '0 4px' }}>idea</span> & 
                        <span style={{ color: '#f0be00', margin: '0 0 0 4px' }}>collaboration</span>
                      </>
                    ) : (
                      <>
                        Idea & <span style={{ color: '#f0be00' }}>collabration</span>
                      </>
                    )}
                  </Typography>
                </Box>
                
                {plan.counter && (
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                    <IconButton 
                      sx={{ 
                        backgroundColor: '#141414', 
                        color: 'white',
                        '&:hover': { backgroundColor: '#333' }
                      }}
                      onClick={() => handleDecrement(plan.counter)}
                    >
                      <RemoveIcon />
                    </IconButton>
                    
                    <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                      {counters[plan.counter]}
                    </Typography>
                    
                    <IconButton 
                      sx={{ 
                        backgroundColor: '#141414', 
                        color: 'white',
                        '&:hover': { backgroundColor: '#333' }
                      }}
                      onClick={() => handleIncrement(plan.counter)}
                    >
                      <AddIcon />
                    </IconButton>
                  </Box>
                )}
                
                <Button 
                  variant="contained" 
                  fullWidth
                  sx={{ 
                    mb: 4,
                    py: 1.5,
                    backgroundColor: plan.popular ? '#f0be00' : 'transparent',
                    color: plan.popular ? 'black' : 'white',
                    border: !plan.popular ? '1px solid #333' : 'none',
                    borderRadius: '30px',
                    '&:hover': {
                      backgroundColor: plan.popular ? '#d9aa00' : '#333',
                    }
                  }}
                >
                  {plan.buttonText}
                </Button>
                
                <Typography variant="body2" sx={{ mb: 2, fontWeight: 'bold' }}>
                  {plan.featureType}
                </Typography>
                
                <Stack spacing={1.5}>
                  {plan.features.map((feature, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start' }}>
                      <CheckIcon sx={{ color: '#f0be00', mr: 1, fontSize: 18, mt: 0.3 }} />
                      <Typography variant="body2" sx={{ color: '#a0a0a0' }}>
                        {feature}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default PricingPlans;