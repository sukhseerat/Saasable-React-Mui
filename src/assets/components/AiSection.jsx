import React from 'react'
import  {
  Container,
 Typography,
Box,
 Grid,
 Card,
 CardContent
} from "@mui/material";

const DocumentIcon = () => (
  <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
  </svg>
);

const DatabaseIcon = () => (
  <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
  </svg>
);

const ChartIcon = () => (
  <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
);

const NoQueriesIcon = () => (
  <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
  </svg>
);

const ScorecardsIcon = () => (
  <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="3" width="20" height="18" rx="2" ry="2" />
  </svg>
);

const DeveloperIcon = () => (
  <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M7 8l-4 4l4 4" />
  </svg>
);

const FeaturesSection = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 10 }}>
      <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
        Meet Your AI Assistant’s Superpowers
      </Typography>

      <Typography
        variant="body1"
        color="text.secondary"
        align="center"
        sx={{ mb: 6 }}
      >
        We’ve seamlessly connected with your go-to tools to give you a smarter, faster way to access knowledge.
      </Typography>

      <Box
        sx={{
          backgroundColor: "#f3f4f6",
          borderRadius: 5,
          p: 4,
          mb: 6,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box sx={{ maxWidth: 600, width: "100%" }}>
          <img
            src="https://www.saasable.io/assets/images/graphics/ai/graphics19-light.svg"
            alt="AI Assistant"
            style={{ width: "100%", borderRadius: 16 }}
          />
        </Box>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ backgroundColor: "#f3f4f6", borderRadius: 4 }}>
            <CardContent>
              <Box display="flex" justifyContent="center" mb={2} color="text.secondary">
                <DocumentIcon />
              </Box>
              <Typography variant="h6" fontWeight="bold" align="center">
                Software Catalog
              </Typography>
              <Typography variant="body2" color="text.secondary" align="center">
                Quickly find everything you need about your software – all in one place.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ backgroundColor: "#f3f4f6", borderRadius: 4 }}>
            <CardContent>
              <Box display="flex" justifyContent="center" mb={2} color="text.secondary">
                <DatabaseIcon />
              </Box>
              <Typography variant="h6" fontWeight="bold" align="center">
                Smart Data Model
              </Typography>
              <Typography variant="body2" color="text.secondary" align="center">
              Use a flexible model that adapts to your needs—right out of the box.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ backgroundColor: "#f3f4f6", borderRadius: 4 }}>
            <CardContent>
              <Box display="flex" justifyContent="center" mb={2} color="text.secondary">
                <ChartIcon />
              </Box>
              <Typography variant="h6" fontWeight="bold" align="center">
                AI Assignment
              </Typography>
              <Typography variant="body2" color="text.secondary" align="center">
                Teach your AI using your company’s knowledge and let it do the heavy lifting.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ backgroundColor: "#f3f4f6", borderRadius: 4 }}>
            <CardContent>
              <Box display="flex" justifyContent="center" mb={2} color="text.secondary">
                <NoQueriesIcon />
              </Box>
              <Typography variant="h6" fontWeight="bold" align="center">
                No More Queries
              </Typography>
              <Typography variant="body2" color="text.secondary" align="center">
                Just type and find—no need to write complex queries ever again.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ backgroundColor: "#f3f4f6", borderRadius: 4 }}>
            <CardContent>
              <Box display="flex" justifyContent="center" mb={2} color="text.secondary">
                <ScorecardsIcon />
              </Box>
              <Typography variant="h6" fontWeight="bold" align="center">
                Scorecards
              </Typography>
              <Typography variant="body2" color="text.secondary" align="center">
                Keep tabs on subscriptions and track performance effortlessly.
            </Typography>
        </CardContent>
        </Card>
      </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ backgroundColor: "#f3f4f6", borderRadius: 4 }}>
            <CardContent>
              <Box display="flex" justifyContent="center" mb={2} color="text.secondary">
                <DeveloperIcon />
              </Box>
              <Typography variant="h6" fontWeight="bold" align="center">
            Developer self-service
              </Typography>
              <Typography variant="body2" color="text.secondary" align="center">
                Give your team the power to build and manage—while staying complaint.
             </Typography>
           </CardContent>
        </Card>
        </Grid>
     </Grid>
</Container>
  );
};

export default FeaturesSection;
