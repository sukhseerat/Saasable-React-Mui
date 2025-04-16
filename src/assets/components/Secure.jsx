import { Box, Typography, Avatar, IconButton, Container, Grid, Button } from "@mui/material";
import { useState } from "react";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

const testimonials = [
  {
    text: "It has truly simplified my workflow and enhanced productivity. Kudos to the team!",
    name: "Sarah Thompson",
    role: "Direct Optimization Executive",
    avatar: "https://www.saasable.io/assets/images/user/avatar1.png",
    rating: 4.5,
  },
  {
    text: "The intuitive design and powerful features have made managing my projects a breeze.",
    name: "James Rodriguez",
    role: "Direct Optimization Executive",
    avatar: "https://www.saasable.io/assets/images/user/avatar2.png",
    rating: 4.5,
  },
  {
    text: "This platform has transformed the way I collaborate with my team!",
    name: "Emma Wilson",
    role: "Project Manager",
    avatar: "https://www.saasable.io/assets/images/user/avatar1.png",
    rating: 5,
  },
  {
    text: "An absolute game-changer for productivity and task management.",
    name: "John Doe",
    role: "Senior Developer",
    avatar: "https://www.saasable.io/assets/images/user/avatar2.png",
    rating: 4,
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? Math.floor(testimonials.length / 2) - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex === Math.floor(testimonials.length / 2) - 1 ? 0 : prevIndex + 1));
  };

  return (
    <Container>
      <Box textAlign="center" mb={4}>
        <Typography variant="h4" fontWeight={600} gutterBottom>
          Voices of Satisfaction
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Listen to the voices of satisfaction as users share their positive encounters with our platform.
        </Typography>
      </Box>
      <Box sx={{ position: "relative" }}>
        <Box display="flex" justifyContent="center" mb={2}>
          <IconButton
            onClick={handlePrev}
            sx={{
              backgroundColor: "white",
              border: "1px solid #ccc",
              borderRadius: "50%",
              mx: 1,
            }}
          >
            <ArrowBack />
          </IconButton>
          <IconButton
            onClick={handleNext}
            sx={{
              backgroundColor: "white",
              border: "1px solid #ccc",
              borderRadius: "50%",
              mx: 1,
            }}
          >
            <ArrowForward />
          </IconButton>
        </Box>
        <Grid container spacing={3} maxWidth="lg" margin="auto">
          {[testimonials[index * 2], testimonials[index * 2 + 1]].map((testimonial, i) => (
            <Grid item xs={12} md={6} key={i}>
              <Box
                sx={{
                  backgroundColor: "#F4F7F4",
                  borderRadius: "20px",
                  padding: "30px",
                  minHeight: "250px",
                }}
              >
                <Box display="flex" alignItems="center" mb={2}>
                  {[...Array(5)].map((_, i) => (
                    <Typography key={i} sx={{ color: i < testimonial.rating ? "#008000" : "#ccc" }}>
                      ★
                    </Typography>
                  ))}
                </Box>
                <Typography variant="h6" mb={2}>
                  "{testimonial.text}"
                </Typography>
                <Box display="flex" alignItems="center" mt={2}>
                  <Avatar src={testimonial.avatar} sx={{ width: 50, height: 50, mr: 2 }} />
                  <Box>
                    <Typography fontWeight={600}>{testimonial.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {testimonial.role}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box
        sx={{
          backgroundImage: "url(https://www.saasable.io/assets/images/graphics/crypto/cta_banner.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "20px",
          textAlign: "center",
          padding: "40px 20px",
          mt: 6,
        }}
      >
        <Typography variant="h5" fontWeight={600} gutterBottom>
          Secure Your Assets and Dive into the Future – Download Coinomi Wallet Now!
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#008000",
            color: "white",
            borderRadius: "50px",
            padding: "10px 20px",
            mt: 2,
          }}
        >
          Install Now
        </Button>
      </Box>
    </Container>
  );
}
