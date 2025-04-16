import { Box, Typography, Container, Grid, Button, Card } from "@mui/material";

const pricingPlans = [
  {
    title: "Basic Plan",
    description: "Ideal for individuals and small businesses with basic data needs.",
    price: "$19",
    features: [
      "Access to Basic Feature",
      "Basic Reporting & Analytics",
      "Up to 10 Individual Users",
      "5 GB Individual Data Users",
      "100 Visitor",
    ],
    buttonText: "Best For Individuals",
  },
  {
    title: "Pro Plan (Recommended)",
    description: "Designed for growing businesses and teams with moderate data requirements.",
    price: "$49",
    features: [
      "Access to Basic Feature",
      "Basic Reporting & Analytics",
      "Up to 100 Individual Users",
      "15 GB Individual Data Users",
      "1,000 Visitor",
    ],
    buttonText: "Designed For Growing Businesses",
  },
  {
    title: "Enterprises Plan",
    description: "Tailored for large enterprises with high-volume data needs and specialized requirements.",
    price: "$99",
    features: [
      "Access to Basic Feature",
      "Basic Reporting & Analytics",
      "Up to 1k Individual Users",
      "40 GB Individual Data Users",
      "10,000 Visitor",
    ],
    buttonText: "Best For Individuals",
  },
];

export default function PricingSection() {
  return (
    <Container maxWidth="xl" sx={{ mt: 6 }}>
      <Box textAlign="center" mb={4}>
        <Typography variant="h4" fontWeight={600} gutterBottom sx={{ lineHeight: 2.5 }}>
          Flexible Pricing Plans
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 2.5 }}>
          Choose a plan that suits your needs and scale with flexibility.
        </Typography>
      </Box>
      <Grid container spacing={4} justifyContent="center">
        {pricingPlans.map((plan, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card sx={{ p: 4, borderRadius: "20px", backgroundColor: "#F4F7F4", textAlign: "center" }}>
              <Typography variant="h6" fontWeight={600} mb={1} sx={{ lineHeight: 2.5 }}>
                {plan.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" mb={2} sx={{ lineHeight: 2.5 }}>
                {plan.description}
              </Typography>
              <Typography variant="h4" fontWeight={700} mb={2} sx={{ lineHeight: 2.5 }}>
                {plan.price}
                <Typography component="span" variant="h6">
                  /month
                </Typography>
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: index === 1 ? "#006400" : "#ffffff",
                  color: index === 1 ? "#ffffff" : "#006400",
                  borderRadius: "50px",
                  px: 4,
                  py: 1,
                  mb: 2,
                }}
              >
                {plan.buttonText}
              </Button>
              <Box textAlign="left" mt={2}>
                {plan.features.map((feature, i) => (
                  <Typography key={i} variant="body2" mb={1} sx={{ lineHeight: 2.5 }}>
                    ✅ {feature}
                  </Typography>
                ))}
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
