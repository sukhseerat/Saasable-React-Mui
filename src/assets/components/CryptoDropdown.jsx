import { Box, Typography, Container, Accordion, AccordionSummary, AccordionDetails, Button, Grid } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqs = [
  {
    question: "How do I create an account on crypto wallet app?",
    answer: "Yes, a Crypto system can be a powerful tool for marketing. It helps track customer interactions, segment your audience, and automate marketing campaigns. By analyzing customer data, you can create personalized marketing strategies that improve engagement and conversion rates.",
  },
  {
    question: "What cryptocurrencies are supported by the wallet app?",
    answer: "Our wallet supports Bitcoin, Ethereum, Litecoin, and many other popular cryptocurrencies.",
  },
  {
    question: "Is the wallet app compatible with multiple devices?",
    answer: "Crypto systems offer significant benefits to sales teams by centralizing customer data, automating tasks, and providing insights into sales activities. This helps sales reps focus on building relationships and closing deals more efficiently.",
  },
  {
    question: "How can I secure my crypto assets in the wallet?",
    answer: "Utilize AI to predict customer behavior, sales trends, and identify opportunities. Leverage Crypto’s reporting and analytics tools, identify opportunities, and take action based on data.",
  },
  {
    question: "Can I transfer funds between different wallets using this app?",
    answer: "A Crypto system typically includes several key components such as contact management, lead and opportunity tracking, sales automation, and analytics. These features work together to provide a comprehensive view of customer interactions and support business growth.",
  },
];

export default function FAQSection() {
  return (
    <Container maxWidth="xl" sx={{ mt: 6 }}>
      <Box textAlign="left" mb={6}>
        <Typography variant="h4" fontWeight={600} gutterBottom>
          Frequently Asked Questions
        </Typography>
        <Typography variant="body1" color="text.secondary">
          With advanced analytics and reporting, you can track customer behavior, sales trends, & many more.
        </Typography>
      </Box>
      <Grid container spacing={4}>
        <Grid item xs={12} md={5}>
          <Box sx={{ backgroundColor: "#F4F7F4", borderRadius: "10px", p: 4, textAlign: "left" }}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Still Have a Question?
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={3}>
              Can’t find what you’re looking for? Contact us, and we’ll be happy to help!
            </Typography>
            <Button
              variant="contained"
              sx={{ backgroundColor: "#006400", color: "#ffffff", borderRadius: "50px", px: 4, py: 1 }}
            >
              Get In Touch
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={7}>
          {faqs.map((faq, index) => (
            <Accordion key={index} sx={{ backgroundColor: "#F4F7F4", borderRadius: "10px", mb: 2 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6" fontWeight={500}>{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" color="text.secondary">{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}
