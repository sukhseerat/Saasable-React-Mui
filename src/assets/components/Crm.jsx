import React from "react";
import { Card, CardContent, Typography, Button, Box, Chip, Grid, Container } from "@mui/material";
import Features from "../components/Features";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import SettingsIcon from "@mui/icons-material/Settings";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import MouseIcon from "@mui/icons-material/Mouse";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import MastercardIcon from "@mui/icons-material/CreditCard";
import IntercomIcon from "@mui/icons-material/Headset";
import GoogleDriveIcon from "@mui/icons-material/Cloud";
import FacebookIcon from "@mui/icons-material/Facebook";
import TripAdvisorIcon from "@mui/icons-material/TravelExplore";
import BackupIcon from "@mui/icons-material/BackupTable";
import AsanaIcon from "@mui/icons-material/AssignmentTurnedIn";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqData = [
  {
    question: "How to integrate our latest business report with SaasAble?",
    answer: (
      <Typography>
        Integrating your business reports with SaasAble is simple. Our platform supports various data formats and can seamlessly import reports from multiple sources, allowing you to centralize your business intelligence for enhanced decision-making.
      </Typography>
    ),
  },
  {
    question: "Is there any mobile app version of SaasAble?",
    answer: (
      <>
        <Typography>
          Yes, SaasAble offers a mobile app version that allows you to stay connected on the go. The app supports key features, including customer management, reporting, and real-time insights.
        </Typography>
        <ul>
          <li>Manage your CRM from anywhere with our intuitive mobile app.</li>
          <li>Access reports and analytics for performance tracking on the go.</li>
          <li>Stay updated on sales trends, customer interactions, and more with mobile notifications.</li>
        </ul>
      </>
    ),
  },
  {
    question: "What is a CRM platform, and why do I need it?",
    answer: (
      <Typography>
        A CRM platform helps you manage and analyze customer interactions throughout their lifecycle. With SaasAble's CRM, you can streamline processes, improve customer relationships, and increase profitability by staying organized and responsive to your customers' needs.
      </Typography>
    ),
  },
  {
    question: "Are our customer data will be safe by using SaasAble?",
    answer: (
      <Typography>
        SaasAble offers robust security measures, including data encryption, secure access controls, and regular security audits to ensure your customer data remains safe and protected against unauthorized access.
      </Typography>
    ),
  },
  {
    question: "What kind of analytics and reporting does your CRM provide?",
    answer: (
      <Typography>
        SaasAble offers robust analytics and reporting capabilities, including detailed customer behavior analysis, sales tracking, and custom report generation. These insights allow you to make data-driven decisions to improve your business strategy.
      </Typography>
    ),
  },
];

const plans = [
  {
    title: "Basic Plan",
    description: "Ideal for individuals and small businesses with basic data needs.",
    price: "$19",
    features: [
      "Email marketing",
      "Marketing, sales, workflow",
      "Up to 10 Individual Users",
      "Up to 3 seats",
      "Lead managements",
    ],
    note: "*For smaller teams seeking to streamline sales, marketing, and basic business processes through automation, a user-friendly CRM solution is ideal.",
    buttonText: "Best For Individuals",
    highlighted: false,
  },
  {
    title: "Pro Plan (Recommended)",
    description: "Designed for growing businesses and teams with moderate data requirements.",
    price: "$49",
    features: [
      "Advanced lead optimization",
      "Enhanced landing pages & sales",
      "Ecommerce tools",
      "Advanced reporting",
      "No seat limits",
    ],
    note: "**For teams aiming to expand rapidly and requiring sophisticated ecommerce and reporting functionalities, a CRM solution with advanced features is indispensable.",
    buttonText: "Designed For Growing Businesses",
    highlighted: true,
  },
  {
    title: "Enterprises Plan",
    description: "Tailored for large enterprises with high-volume data needs and specialized requirements.",
    price: "$99",
    features: [
      "Premium CRM & sales manage",
      "Advanced marketing & sales tools",
      "Custom user access control",
      "Affiliate management & Collaboration",
      "Priority Support",
    ],
    note: "*For large enterprises with high-volume data needs and specialized requirements, our Enterprise Plan offers unlimited data usage and 24/7 dedicated support.",
    buttonText: "Best For Individuals",
    highlighted: false,
  },]

const features = [
  { icon: <WorkspacesIcon fontSize="large" />, title: "Collaboration Tools", description: "Enhance teamwork with collaboration tools." },
  { icon: <SettingsIcon fontSize="large" />, title: "Workflow Automation", description: "Improve efficiency with task automation." },
  { icon: <IntegrationInstructionsIcon fontSize="large" />, title: "Integration Capabilities", description: "Effortlessly integrate with other platforms." },
  { icon: <LeaderboardIcon fontSize="large" />, title: "Lead Management", description: "Track and nurture leads throughout the sales funnel." },
  { icon: <AttachEmailIcon fontSize="large" />, title: "Email Integration", description: "Effortlessly track and manage email communications within the CRM." },
  { icon: <SupportAgentIcon fontSize="large" />, title: "Support Ticketing", description: "Efficiently handle customer inquiries and support tickets within the CRM." },
];

// IntegrationsSection component
const IntegrationsSection = () => {
  const integrations = [
    { icon: <TripAdvisorIcon fontSize="medium" />, name: "Tripadvisor" },
    { icon: <FacebookIcon fontSize="medium" />, name: "Facebook Messenger" },
    { icon: <MastercardIcon fontSize="medium" />, name: "Master Card" },
    { icon: <IntercomIcon fontSize="medium" />, name: "Intercom" },
    { icon: <BackupIcon fontSize="medium" />, name: "Back Bone" },
    { icon: <GoogleDriveIcon fontSize="medium" />, name: "Google Drive" },
    { icon: <IntercomIcon fontSize="medium" />, name: "Intercom" },
    { icon: <MastercardIcon fontSize="medium" />, name: "Master Card" },
    { icon: <FacebookIcon fontSize="medium" />, name: "Facebook Messenger" },
    { icon: <BackupIcon fontSize="medium" />, name: "Back Bone" },
    { icon: <AsanaIcon fontSize="medium" />, name: "Asana" },
  ];
  
  
  return (
    <Box
      sx={{
        backgroundColor: "#f8f4fc",
        borderRadius: "20px",
        padding: "40px",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
        }}
      >
        
        <Box sx={{ flex: 1 }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Effortless integrations for your stack
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, color: "text.secondary" }}>
            Effortlessly integrate your stack with our seamless integrations.
          </Typography>
          <Button
            variant="contained"
            sx={{
              borderRadius: "30px",
              px: 4,
              py: 1,
              backgroundColor: "#7B2CBF",
              fontWeight: "bold",
              textTransform: "none",
              "&:hover": { backgroundColor: "#6A24A6" },
            }}
          >
            See All Integration
          </Button>
        </Box>

        
        <Box sx={{ flex: 1.5 }}>
          <Grid container spacing={2}>
            {integrations.map((integration, index) => (
              <Grid item key={index} xs={6} sm={4} md={3}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    backgroundColor: "white",
                    borderRadius: "10px",
                    padding: "8px 12px",
                    boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
                    fontSize: "14px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {integration.icon}
                  <Typography variant="body2" fontWeight="medium" noWrap>
                    {integration.name}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

// Knowledge Center component
const KnowledgeCenter = () => {
  const slides = [
    { src: "https://www.saasable.io/assets/images/blog/blog1.png", title: "The Role of AI in Modern CRM Systems" },
    { src: "https://www.saasable.io/assets/images/blog/blog2.jpg", title: "Selecting the ideal SaasAble for precise estimates." },
    { src: "https://www.saasable.io/assets/images/blog/blog3.jpg", title: "Unlocking Success: Your Essential CRM Guide" },
    { src: "https://www.saasable.io/assets/images/blog/blog5.png", title: "The Road to CRM Success" },
 
      { src: "https://www.saasable.io/assets/images/blog/blog1.png", title: "The Role of AI in Modern CRM Systems" },
      { src: "https://www.saasable.io/assets/images/blog/blog2.jpg", title: "Selecting the ideal SaasAble for precise estimates." },
      { src: "https://www.saasable.io/assets/images/blog/blog3.jpg", title: "Unlocking Success: Your Essential CRM Guide" },
      { src: "https://www.saasable.io/assets/images/blog/blog5.png", title: "The Road to CRM Success" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 5,
    slidesToScroll: 7,
    swipeToSlide: true,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3} },
      { breakpoint: 600, settings: { slidesToShow: 3} },
    ],
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" fontWeight="bold">Knowledge Center</Typography>
      <Typography color="textSecondary" mb={2}>
        Uncover the Features That Will Revolutionize Your Customer Relationships
      </Typography>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <Box key={index} sx={{ position: "relative", p: 1 }}>
            <img
              src={slide.src}
              alt={slide.title}
              style={{
                width: "100%",
                borderRadius: "12px",
                objectFit: "cover",
                height: "250px",
              }}
            />
            <Typography
              variant="body1"
              sx={{
                position: "absolute",
                bottom: 10,
                left: 10,
                color: "white",
                fontWeight: "bold",
                background: "rgba(0, 0, 0, 0.5)",
                padding: "5px 10px",
                borderRadius: "8px",
              }}
            >
              {slide.title}
            </Typography>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white p-6 flex flex-col items-center">
    
      {/* Hero Section */}
      <Box sx={{ textAlign: "center", py: 5, backgroundColor: "#F9F5FF", mt: 8 }}>
        <Chip label="New Beta Version is Released - Explore Now" sx={{ backgroundColor: "#E5D4FA", color: "#5A189A", fontSize: "12px", fontWeight: "bold", borderRadius: "16px", px: 2, py: 1 }} />
        <Typography variant="h3" fontWeight="bold" sx={{ mt: 2 }}>
          Effortless CRM Management, <br /> Seamless Business 🚀 Growth
        </Typography>
        <Typography variant="body1" sx={{ color: "gray", mt: 1 }}>
          Empowering Businesses with a Customizable, <br /> Data-Driven CRM Solution.
        </Typography>
        <Box sx={{ mt: 3, display: "flex", justifyContent: "center" }}>
          <Box sx={{ backgroundColor: "white", borderRadius: "12px", p: 2, boxShadow: 3, maxWidth: "75%", overflow: "hidden", position: "relative", height: "700px" }}>
            <Box component="img" src="https://www.saasable.io/assets/images/graphics/crm/desktop1-light.svg" alt="CRM Dashboard Preview" sx={{ width: "100%", height: "auto", objectFit: "cover", objectPosition: "top" }} />
          </Box>
        </Box>
      </Box>

      {/* Key Stats Section */}
      <Box sx={{ background: "linear-gradient(to right, #dae2f8, #d6a4a4)", borderRadius: "20px", textAlign: "center", padding: { xs: "40px 20px", md: "60px 40px" }, maxWidth: "50%", margin: "auto", mt: 6 }}>
        <Typography variant="h5" fontWeight={600} gutterBottom>Connect, Engage, Succeed: CRM Unleashed</Typography>
        <Typography variant="body1" color="textSecondary" maxWidth={700} margin="auto">
          With advanced analytics and reporting, you can track customer behavior, sales trends, & many more to make informed decisions.
        </Typography>
        <Container sx={{ mt: 4 }}>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6} textAlign="center">
              <Typography variant="h3" fontWeight={600} color="primary">90%</Typography>
              <Typography variant="body2">Power of AI for navigation and communication</Typography>
            </Grid>
            <Grid item xs={12} sm={6} textAlign="center">
              <Typography variant="h3" fontWeight={600} color="primary">10x</Typography>
              <Typography variant="body2">Achieving faster sales through streamlined processes.</Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

     
      <Box sx={{ textAlign: "center", mt: 4, maxWidth: "80%", mx: "auto" }}>
        <Typography variant="h4" fontWeight="bold">Unlock Peak Efficiency with Our CRM Solution</Typography>
        <Typography variant="body1" sx={{ color: "gray", mt: 1 }}>
          Experience peak efficiency with our CRM solution, revolutionizing productivity and success.
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", backgroundColor: "#F4ECFD", borderRadius: "16px", padding: "40px", mt: 4, maxWidth: "90%", mx: "auto" }}>
          <Box sx={{ width: "68%", display: "flex", justifyContent: "center" }}>
            <img src="https://www.saasable.io/assets/images/graphics/crm/graphics1-light.svg" alt="CRM Graphic 1" style={{ width: "100%", objectFit: "cover" }} />
          </Box>
          <Box sx={{ width: "48%", display: "flex", justifyContent: "center" }}>
            <img src="https://www.saasable.io/assets/images/graphics/crm/graphics1-light.svg" alt="CRM Graphic 2" style={{ width: "100%", objectFit: "cover" }} />
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mt: 6,
          maxWidth: "100%",
          mx: "auto",
        }}
      >
   
        <Box sx={{ width: "90%" }}>
          <Typography variant="h4" fontWeight="bold" color="gray.800">
            Increase your revenue
          </Typography>
          <Typography variant="body1" color="gray.600" sx={{ mt: 2 }}>
            Boost your earnings and expand your financial growth.
          </Typography>
          <button
            className="mt-6 bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700"
          >
            Get Started
          </button>
        </Box>

        <Box sx={{ width: "60%", position: "relative", overflow: "hidden", height: "300px" }}>
          <img
            src="https://www.saasable.io/assets/images/graphics/crm/desktop1-light.svg"
            alt="Dashboard Preview"
            className="w-full h-full object-cover"
          />
        </Box>
        
      </Box>

      
      <Box sx={{ textAlign: "center", mt: 8, maxWidth: "70%", mx: "auto" }}>
        <Typography variant="h4" fontWeight="bold">
          Explore our robust CRM features
        </Typography>
        <Typography variant="body1" sx={{ color: "gray", mt: 1 }}>
          Automate repetitive tasks and streamline processes for increased efficiency.
        </Typography>

        
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ backgroundColor: "#faf5ff", p: 6, textAlign: "left", height: "100%", borderRadius: 4, boxShadow: "none" }}>
                <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 1 }}>
                  <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", width: 60, height: 60, borderRadius: "50%", backgroundColor: "#f3e8ff" }}>
                    {feature.icon}
                  </Box>
                  <Typography variant="h6" fontWeight="bold">{feature.title}</Typography>
                  <Typography variant="body2" color="gray">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

     
      <Box display="flex" flexDirection="column" alignItems="center" p={5} bgcolor="#FAF6FF">
       
        <Typography variant="h4" fontWeight="bold" textAlign="center" mb={1}>
          Made to fit your workflow
        </Typography>
        <Typography variant="body1" color="text.secondary" textAlign="center" mb={5}>
          With advanced analytics and reporting, you can track customer behavior, sales trends
        </Typography>

      
        <Box display="flex" alignItems="center" justifyContent="center" width="80%" gap={6}>
          
          <Box flex={0.9}>
    
            <Card variant="outlined" sx={{ mb: 3, p: 3, backgroundColor: "#f8f4ff", borderRadius: 3 }}>
              <CardContent>
                <Typography fontWeight="bold">Data Gathering</Typography>
                <Typography variant="body2" color="text.secondary">
                  Collect relevant customer information efficiently.
                </Typography>
              </CardContent>
            </Card>

          
            <Card variant="outlined" sx={{ mb: 3, p: 3, backgroundColor: "#f8f4ff", borderRadius: 3 }}>
              <CardContent>
                <Typography fontWeight="bold" color="primary">Insight and Action</Typography>
                <Typography variant="body2" color="text.secondary" mb={1}>
                  Derive insights from data and implement strategic actions.
                </Typography>
                <List>
                  <ListItem disablePadding>
                    <ListItemIcon><CheckCircleIcon color="primary" /></ListItemIcon>
                    <ListItemText primary="Analyze customer data to identify key trends and opportunities." />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon><CheckCircleIcon color="primary" /></ListItemIcon>
                    <ListItemText primary="Generate detailed reports that highlight performance metrics and areas for improvement." />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon><CheckCircleIcon color="primary" /></ListItemIcon>
                    <ListItemText primary="Develop and implement strategies based on data-driven insights to drive growth." />
                  </ListItem>
                </List>
              </CardContent>
            </Card>

          
            <Card variant="outlined" sx={{ p: 3, backgroundColor: "#f8f4ff", borderRadius: 3 }}>
              <CardContent>
                <Typography fontWeight="bold">User Engagement</Typography>
                <Typography variant="body2" color="text.secondary">
                  Enhance customer interactions for lasting relationships.
                </Typography>
              </CardContent>
            </Card>
          </Box>

          <Box flex={1} display="flex" justifyContent="center">
            <img
              src="https://www.saasable.io/assets/images/graphics/crm/desktop1-light.svg"
              alt="Dashboard UI"
              style={{
                width: "90%",
                maxWidth: "450px",
                height: "700px",
                objectFit: "cover",
                borderRadius: 20
              }}
            />
          </Box>
        </Box>
      </Box>
      {/* Integrations Section */}
      <Box sx={{ mt: 8, maxWidth: "80%", mx: "auto", width: "100%" }}>
        <IntegrationsSection />
      </Box>
      
     


      {/* //bg */}

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          backgroundImage: "url(https://www.saasable.io/assets/images/graphics/crm/background1.svg)", // Update with correct path
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          maxWidth: "1100px",
          borderRadius: "20px",
          p: 5,
          m: "auto",
        }}
      >
        {/* Title */}
        <Typography variant="h5" fontWeight="bold" color="black" mb={3}>
          Try our services risk-free with a trial, including migration assistance and support
        </Typography>

        {/* Button */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#6C40E0",
            color: "white",
            textTransform: "none",
            fontWeight: "bold",
            borderRadius: "50px",
            px: 3,
            py: 1,
            ":hover": { backgroundColor: "#5A35C6" },
          }}
        >
          Begin Immediately, At No Cost!
        </Button>
      </Box>

     
      <Container maxWidth="lg" sx={{ py: 5 }}>
        <Grid container spacing={3} justifyContent="center" alignItems="stretch">
          {plans.map((plan, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  width: "320px", 
                  height: "100%", 
                  textAlign: "center",
                  padding: "20px",
                  borderRadius: "10px",
                  boxShadow: "none",
                  backgroundColor: "#fff",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" fontWeight="bold">
                    {plan.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
                    {plan.description}
                  </Typography>
                  <Typography variant="h4" fontWeight="bold" sx={{ my: 2 }}>
                    {plan.price}
                  </Typography>

              
                  <div style={{ textAlign: "left", marginLeft: "30px", marginTop: "10px" }}>
                    {plan.features.map((feature, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                        <CheckCircleIcon sx={{ color: "#4caf50", fontSize: "24px" }} />
                        <Typography variant="body2">{feature}</Typography>
                      </div>
                    ))}
                  </div>
                </CardContent>

                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: index === 1 ? "#5e2ced" : "#d4b3ff",
                    color: "white",
                    borderRadius: "20px",
                    padding: "10px 15px",
                    fontWeight: "bold",
                    marginBottom: "10px",
                    "&:hover": { backgroundColor: index === 1 ? "#4a22c3" : "#c49eff" },
                  }}
                >
                  {plan.buttonText}
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

   
      <Box sx={{ mt: 8, maxWidth: "80%", mx: "auto", width: "100%" }}>
        <KnowledgeCenter />
      </Box>

   
      <div style={{ maxWidth: "1100px", margin: "auto" }}>
        <Typography variant="h4" gutterBottom>
          Frequently Asked Questions
        </Typography>
        <Typography variant="body1" gutterBottom>
          With advanced analytics and reporting, you can track customer behavior,
          sales trends, & many more to make
        </Typography>
        {faqData.map((item, index) => (
          <Accordion key={index} sx={{ backgroundColor: "#faf5ff", boxShadow: "none", borderRadius: "8px", marginBottom: "8px" }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>{item.question}</Typography>
            </AccordionSummary>
            {item.answer && <AccordionDetails>{item.answer}</AccordionDetails>}
          </Accordion>
        )
        )
        }
      </div>
  </div>
  )
}
export default LandingPage