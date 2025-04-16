import React from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography, Button, Box, Container } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQ = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 5, display: "flex", gap: 4 }}>

    <Box
      flex={1}
      sx={{
        bgcolor: "#f3f4f6",
        p: 4,
        borderRadius: 3,
        backgroundImage: "url(https://www.saasable.io/assets/images/graphics/ai/background1.svg)",
        backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "rgba(255, 255, 255, 0.6)", 
          backgroundBlendMode: "lighten", 
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Typography variant="h6" fontWeight={600} mb={1}>
        Still Have a Question?
      </Typography>
      <Typography variant="body2" color="text.secondary" mb={3}>
        If you have any further questions or need assistance, our team is ready to help.
      </Typography>
      <Button variant="contained" color="primary" sx={{ borderRadius: 5 }}>
        Get In Touch
      </Button>
    </Box>
      {/* Right Section */}
      <Box flex={2}>
        <Typography variant="h4" fontWeight={600} gutterBottom>
          Frequently Asked Questions
        </Typography>
        <Typography variant="body1" color="text.secondary" gutterBottom>
          With advanced analytics and reporting, you can track customer behavior, sales trends, & many more to make.
        </Typography>
        
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight={500}>What are developer AI tools?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Developer AI tools are software solutions that utilize machine learning and artificial intelligence to assist in various stages of the development process. They can generate code, debug, and provide intelligent recommendations to improve productivity and code quality.
            </Typography>
          </AccordionDetails>
        </Accordion>
        
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight={500}>How do developer AI tools work?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Developer AI tools offer several benefits, including improved productivity, faster development cycles, better
              code quality, reduced manual effort, and enhanced collaboration.
            </Typography>
            <Box component="ul" sx={{ pl: 2, mt: 1 }}>
              <Typography component="li">They help automate repetitive coding tasks, allowing developers to focus on solving complex problems.</Typography>
              <Typography component="li">Provide real-time guidance and suggestions to help developers avoid common mistakes and improve their skills.</Typography>
              <Typography component="li">Enable teams to leverage data insights for better decision-making and business outcomes.</Typography>
            </Box>
          </AccordionDetails>
        </Accordion>
        
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight={500}>How does AI benefit sales teams?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              AI tools help sales teams by providing predictive analytics, personalized recommendations, and automated outreach strategies. This helps teams focus on high-priority leads and optimize customer interactions, resulting in better sales performance.
            </Typography>
          </AccordionDetails>
        </Accordion>
        
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight={500}>What are the benefits of using developer AI tools?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              The benefits of using developer AI tools include increased productivity, faster development cycles, improved code quality, reduced manual effort, and enhanced collaboration.
            </Typography>
            <Box component="ul" sx={{ pl: 2, mt: 1 }}>
              <Typography component="li">Cycles, improved code quality, reduced manual effort, enhanced collaboration.</Typography>
              <Typography component="li">It acts as a virtual guide, offering insights, tips, and solutions to common challenges faced during the development journey.</Typography>
              <Typography component="li">Take action based on the data to enhance relationships, sales, and business success.</Typography>
            </Box>
          </AccordionDetails>
        </Accordion>
        
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight={500}>Can developer AI tools replace human developers?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              While AI tools can assist in the development process and improve efficiency, they cannot replace human developers. These tools enhance human capabilities by automating repetitive tasks and providing smart suggestions, but creativity, critical thinking, and complex problem-solving still require human expertise.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Container>
  );
};

export default FAQ;