import React from "react";
import { Box, Typography, Button, Card, CardContent, ToggleButton, ToggleButtonGroup } from "@mui/material";

const plans = [
  {
    title: "Free",
    price: "Free for everyone",
    users: "Best for 1-50 users",
    features: [
      "Limited members",
      "50 issues (+unlimited archived)",
      "No Import and No export",
      "All integration, API, Webhooks",
    ],
    buttonText: "Get Started With Free",
  },
  {
    title: "Standard",
    price: "$8 per user/month",
    users: "Best for 1-50 users",
    features: [
      "Unlimited members",
      "150 issues (+unlimited archived)",
      "Import and No export",
      "All integration, API, Webhooks",
    ],
    toggle: true,
    buttonText: "Get Started With Standard",
  },
  {
    title: "Plus",
    price: "$12 per user/month",
    users: "Best for 1-50 users",
    features: [
      "Unlimited members",
      "250+ issues (+unlimited archived)",
      "Import and export",
      "All integration, API, Webhooks",
    ],
    buttonText: "Get Started With Plus",
    contact: "or Contact Us",
  },
];

const Pricing = () => {
  return (
    <Box sx={{ textAlign: "center", bgcolor: "#0A0A0A", color: "white", py: 6 }}>
      <Typography variant="h4" fontWeight="bold">
        The Affordable Unfair Advantage
      </Typography>
      <Typography variant="subtitle1" sx={{ mt: 1, mb: 4 }}>
        Choose the plan that aligns with your cloud management requirements.
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 3, flexWrap: "wrap" }}>
        {plans.map((plan, index) => (
          <Card
            key={index}
            sx={{
              bgcolor: "#111",
              color: "white",
              width: 320,
              p: 2,
              borderRadius: "16px", 
              border: index === 1 ? "2px solid #8884FF" : "none",
            }}
          >
            <CardContent>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                {plan.title}
              </Typography>
              <Typography variant="h5" fontWeight="bold">{plan.price}</Typography>
              <Typography variant="body2" color="gray" sx={{ my: 1 }}>{plan.users}</Typography>
              {plan.toggle && (
                <ToggleButtonGroup exclusive sx={{ my: 2, bgcolor: "#222", borderRadius: 2 }}>
                  <ToggleButton value="monthly" sx={{ color: "white" }}>Monthly</ToggleButton>
                  <ToggleButton value="yearly" sx={{ color: "white" }}>Yearly</ToggleButton>
                </ToggleButtonGroup>
              )}
              <Box sx={{ textAlign: "left", mt: 2 }}>
                {plan.features.map((feature, i) => (
                  <Typography key={i} variant="body2" sx={{ mb: 1 }}>
                    ✓ {feature}
                  </Typography>
                ))}
              </Box>
              <Button
                variant="contained"
                sx={{ mt: 3, bgcolor: "#8884FF", color: "white", borderRadius: 2, textTransform: "none" }}
                fullWidth
              >
                {plan.buttonText}
              </Button>
              {plan.contact && (
                <Typography variant="body2" color="gray" sx={{ mt: 2 }}>{plan.contact}</Typography>
              )}
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Pricing;
