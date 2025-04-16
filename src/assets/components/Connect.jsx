import React from "react";
import { Box, Typography, Grid, Container } from "@mui/material";

const Connect = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(to right, #dae2f8, #d6a4a4)",
        borderRadius: "20px",
        textAlign: "center",
        padding: { xs: "40px 20px", md: "60px 40px" },
        maxWidth: "90%",
        margin: "auto",
        mt: 4,
      }}
    >
      <Typography variant="h5" fontWeight={600} gutterBottom>
        Connect, Engage, Succeed: CRM Unleashed
      </Typography>
      <Typography variant="body1" color="textSecondary" maxWidth={600} margin="auto">
        With advanced analytics and reporting, you can track customer behavior, sales trends, &
        many more to make
      </Typography>
      <Container sx={{ mt: 4 }}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} textAlign="center">
            <Typography variant="h3" fontWeight={600} color="primary">
              90%
            </Typography>
            <Typography variant="body2">Power of AI for navigation and communication</Typography>
          </Grid>
          <Grid item xs={12} sm={6} textAlign="center">
            <Typography variant="h3" fontWeight={600} color="primary">
              10x
            </Typography>
            <Typography variant="body2">Achieving faster sales through streamlined processes.</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Connect;
