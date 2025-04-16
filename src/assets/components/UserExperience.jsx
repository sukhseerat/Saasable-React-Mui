import React from "react";
import { Container, Typography, Box, Card, CardContent, Avatar, Grid } from "@mui/material";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Maria S.",
    role: "Project Coordinator",
    feedback: "Outstanding customer support! They're responsive and go above and beyond to ensure a smooth experience.",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "Emily P.",
    role: "Project Manager",
    feedback: "What I love most is the seamless integration with other tools. It streamlines our workflow and saves us time.",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Brian C.",
    role: "Operations Lead",
    feedback: "Our team's productivity soared after adopting this platform. It's a reliable solution that brings tangible results.",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Kevin R.",
    role: "Business Analyst",
    feedback: "This platform transformed the way we work. It's scalable and adapts seamlessly to our evolving needs.",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
  },
];

const UserExperiences = () => {
  return (
    <Container maxWidth="lg" sx={{ textAlign: "center", py: 5, color: "white" }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ color: "white" }}>
        User Experiences Unveiled
      </Typography>
      <Typography variant="subtitle1" gutterBottom sx={{ color: "white" }}>
        Get insights into the features and aspects of our platform that users appreciate the most.
      </Typography>
      <Box sx={{ overflow: "hidden", py: 3 }}>
        {[0, 1].map((row) => (
          <motion.div
            key={row}
            animate={{ x: row % 2 === 0 ? ["0%", "-100%", "0%"] : ["0%", "100%", "0%"] }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            style={{ display: "flex", gap: "20px" }}
          >
            {testimonials.map((testimonial, index) => (
              <Card key={index} sx={{ backgroundColor: "#111", minWidth: "300px", height: "140px", p: 2, color: "white" }}>
                <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "start", height: "100%", justifyContent: "center" }}>
                  <Box display="flex" alignItems="center" mb={1}>
                    <Avatar src={testimonial.avatar} sx={{ mr: 1 }} />
                    <Box>
                      <Typography fontWeight="bold" sx={{ color: "white" }}>{testimonial.name}</Typography>
                      <Typography variant="body2" sx={{ color: "gray" }}>{testimonial.role}</Typography>
                    </Box>
                  </Box>
                  <Typography variant="body2" sx={{ color: "white" }}>{testimonial.feedback}</Typography>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        ))}
      </Box>
    </Container>
  );
};

export default UserExperiences;
