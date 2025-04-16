import { Box, Button, Typography, Grid, Paper, Container } from "@mui/material";
import { styled } from "@mui/system";


const integrations = [
  { name: "Slack" },
  { name: "Abstract" },
  { name: "Asana" },
  { name: "Back Bone" },
  { name: "Intercom" },
  { name: "Master Card" },
  { name: "Skype" },
  { name: "Google Drive" },
  { name: "Tripadvisor" },
  { name: "Facebook Messenger" },
  { name: "Paypal" },
];

const IntegrationButton = styled(Paper)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(1.5, 3),
  borderRadius: "25px",
  boxShadow: "none",
  border: "1px solid #ddd",
  cursor: "pointer",
  fontSize: "16px",
  fontWeight: 500,
  minWidth: "150px",
}));

export default function Integrations() {
  return (
    <Container>
      <Box
        sx={{
          backgroundColor: "#F4F7F4",
          borderRadius: "20px",
          padding: "50px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h4" fontWeight={600} gutterBottom>
          Seamless Coinomi Mobile App Integration
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={4}>
          The Coinomi Mobile ecosystem for a unified and streamlined experience
        </Typography>
        <Grid container spacing={2} justifyContent="center" maxWidth="md">
          {integrations.map((item, index) => (
            <Grid item key={index}>
              <IntegrationButton>{item.name}</IntegrationButton>
            </Grid>
          ))}
        </Grid>
        <Button
          variant="contained"
          sx={{
            mt: 4,
            backgroundColor: "#008000",
            borderRadius: "25px",
            padding: "12px 32px",
            fontSize: "16px",
            fontWeight: "bold",
            "&:hover": { backgroundColor: "#006400" },
          }}
        >
          See All Integration
        </Button>
      </Box>
    </Container>
  );
}