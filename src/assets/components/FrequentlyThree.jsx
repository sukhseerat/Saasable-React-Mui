import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Paper, 
  Accordion, 
  AccordionSummary, 
  AccordionDetails,
  Button,
  ThemeProvider
} from '@mui/material';
import { Add, Remove } from '@mui/icons-material';
import { createTheme } from '@mui/material/styles';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#d4af37' },
    secondary: { main: '#70e1b0' },
    background: { default: '#121212', paper: '#1e1e1e' },
    text: { primary: '#e0e0e0', secondary: '#b0b0b0' },
  }
});


const faqItems = [
  { id: 'panel1', question: 'How do I sign up for the Software?', answer: 'You can sign up on our website.' },
  { id: 'panel2', question: 'Is there a free trial available?', answer: 'Sassable use advanced automation tools to facilitate scaling your operations effortlessly' },
    { id: 'panel3', question: 'What payment methods do you accept?', answer: 'We accept Visa, PayPal, etc.' },
    { id: 'panel4', question: 'Is the Software compatible with Mobile devices?', answer: 'Yes our software is fully responsive and can be accessed on any device.' },
    { id: 'panel3', question: 'How often is the Software Updated?', answer: 'SaasAble prioritizes data security by implementing industry-leading practices, including end-to-end encryption, regular security audits, and compliance with global data protection regulations. This ensures that your data is safeguarded against unauthorized access and breaches' },
  
];

function FAQ() {
  const [expanded, setExpanded] = useState('panel1');

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', py: 6, px: 2 }}>
        <Container maxWidth="md">
          <Paper elevation={0} sx={{ bgcolor: 'rgba(30, 30, 30, 0.7)', p: { xs: 3, md: 5 }, borderRadius: 4 }}>
            <Typography variant="h3" align="center">Frequently Asked Questions</Typography>
            <Typography variant="subtitle1">Discover how our product integrates seamlessly.</Typography>

            {faqItems.map((item) => (
              <Accordion key={item.id} expanded={expanded === item.id} onChange={handleChange(item.id)} sx={{ mb: 2 }}>
                <AccordionSummary expandIcon={expanded === item.id ? <Remove /> : <Add />}>                  
                  <Typography variant="h6" sx={{ color: expanded === item.id ? 'primary.main' : 'text.primary' }}>
                    {item.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{ color: 'text.secondary' }}>{item.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}

          
            <Paper elevation={0} sx={{ bgcolor: '#2a2a2a', p: 3, borderRadius: 2, mt: 3, display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: { xs: 'stretch', sm: 'center' }, justifyContent: 'space-between' }}>
              <Box sx={{ mb: { xs: 2, sm: 0 } }}>
                <Typography variant="h6">Still Have a Question?</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>Contact us directly if you need help.</Typography>
              </Box>
              <Button variant="contained" sx={{ bgcolor: '#f0c949', '&:hover': { bgcolor: '#e0b839' }, minWidth: { xs: '100%', sm: '150px' }, py: 1.5 }}>
                Get In Touch
              </Button>
            </Paper>
          </Paper>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default FAQ;