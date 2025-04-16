import React from 'react';
import { FaArrowRight, FaReddit, FaDribbble, FaDev, FaEnvelope } from 'react-icons/fa';
import {
  Container,
  Typography,
  Grid,
  Paper,
  Button,
  Box,
  Chip,
  IconButton,
  Card,
  CardContent,
} from '@mui/material';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import CodeIcon from '@mui/icons-material/Code';
import WalletIcon from "@mui/icons-material/Folder";
import TransactionIcon from "@mui/icons-material/TouchApp";
import MiningIcon from "@mui/icons-material/AllInclusive";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SavingsIcon from '@mui/icons-material/Savings';
import RedeemIcon from '@mui/icons-material/Redeem';
import LockIcon from '@mui/icons-material/Lock';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import StorageIcon from '@mui/icons-material/Storage';
import QueryStatsIcon from '@mui/icons-material/QueryStats';

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Seamless from '../components/Seamless';

import Secure from '../components/Secure';
import Insights from '../components/Insights';
import Flexible from '../components/Flexible';
import CryptoDropdown from '../components/CryptoDropdown';
// Original features
const features = [
  {
    icon: <WalletIcon style={{ color: "#6dbf91" }} />,
    title: "Wallet Information",
    description: "The app has its own wallet functionality, unconnected to the server."
  },
  {
    icon: <TransactionIcon style={{ color: "#6dbf91" }} />,
    title: "Transactions",
    description: "Operated as a multi-chain wallet makes Pools Wallet process transactions"
  },
  {
    icon: <MiningIcon style={{ color: "#6dbf91" }} />,
    title: "Token Mining",
    description: "Mining without any hardware requirements, Pools Wallet allows users"
  }
];


const additionalFeatures = [
  {
    icon: <LockIcon style={{ color: "#6dbf91" }} />,
    title: "Security Features",
    description: "Encryption and secure key management. Two-factor authentication (2FA) for additional security."
  },
  {
    icon: <CurrencyExchangeIcon style={{ color: "#6dbf91" }} />,
    title: "Multi-Currency Support",
    description: "Capability to store and manage various cryptocurrencies. Biometric authentication (fingerprint, face recognition)."
  },
  {
    icon: <QueryStatsIcon style={{ color: "#6dbf91" }} />,
    title: "Real-Time Market Data",
    description: "Display of real-time cryptocurrency market prices. Conveniently scan QR codes for transactions."
  },
  {
    icon: <StorageIcon style={{ color: "#6dbf91" }} />,
    title: "Offline Storage (Cold Wallet)",
    description: "Accessible through various devices, such as desktop and hardware wallets. Option for offline storage to enhance security"
  }
];

const RewardCard = ({ icon: Icon, title, description, imgUrl }) => (
  <Card sx={{ p: 3, borderRadius: 3, bgcolor: '#F5F7F2', minHeight: 180, textAlign: 'center' }}>
    <CardContent>
      {imgUrl ? (
        <img src={imgUrl} alt={title} style={{ width: 50, height: 50, marginBottom: 10 }} />
      ) : (
        <Icon sx={{ fontSize: 40, color: '#556B2F', mb: 1 }} />
      )}
      <Typography variant="h6" fontWeight="bold">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </CardContent>
  </Card>
);

const RewardsSection = () => {
  return (
    <Box sx={{ textAlign: 'center', p: 5, bgcolor: "white" }}>
      <Typography variant="h4" fontWeight="bold">
        Earn Weekly & Monthly Rewards
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Upon signing up, earn rewards by completing the courses below.
      </Typography>
      <Grid container spacing={1} justifyContent="center">
        
        <Grid item xs={12} sm={6} md={3}>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <RewardCard
                icon={WalletIcon}
                title="Create a Wallet"
                description="Create or connect a wallet by installing the app."
              />
            </Grid>
            <Grid item>
              <RewardCard
                icon={AttachMoneyIcon}
                title="Deposit Assets to a wallet"
                description="Transfer your digital assets to your wallet easily and quickly."
              />
            </Grid>
          </Grid>
        </Grid>

  
        <Grid item xs={12} md={2} sx={{ display: "flex", justifyContent: "center" }}>
          <Box component="a" href="https://www.saasable.io/assets/videos/test.mp4" target="_blank" rel="noopener noreferrer">
            <img src="https://www.saasable.io/assets/images/graphics/crypto/banner.png" alt="Video Thumbnail" style={{ width: "100%", maxWidth: 500, height: '100%', borderRadius: 8, cursor: "pointer" }} />
          </Box>
        </Grid>

      
        <Grid item xs={12} sm={6} md={3}>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <RewardCard
                icon={SavingsIcon}
                title="Hold the assets to wallet"
                description="Store your digital assets safely and securely, allowing you the freedom."
              />
            </Grid>

            <Grid item>
              <RewardCard
                icon={RedeemIcon}
                title="More points on ref. codes"
                description="When your friends enter their referral codes they will earn points for them."
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};


const theme = createTheme({
  palette: {
    primary: {
      main: '#10b981', 
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
  },
});


const LogoContainer = styled(Box)({
  display: 'flex',
  gap: '10px',
  justifyContent: 'center',
  flexWrap: 'wrap',
});

const LogoButton = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  background: 'rgba(245, 248, 242, 0.8)',
  padding: '10px 20px',
  borderRadius: '20px',
  fontWeight: 600,
  fontSize: '14px',
});

const ContentWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '40px',
  maxWidth: '1100px',
  padding: '40px 20px',
  margin: '0 auto', 
  borderRadius: '20px',
  backgroundColor: '#ECF1E9',
});

const LeftContent = styled(Box)({
  flex: 1,
  textAlign: 'left',
});

const RightContent = styled(Box)({
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const StyledImage = styled('img')({  
  width: '100%',
  maxWidth: '400px',
  borderRadius: '10px',
});

const GreenButton = styled(Button)({
  backgroundColor: '#0C6D3D',
  color: 'white',
  padding: '10px 20px',
  borderRadius: '20px',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#0A5C32',
  },
});

const CardStyled = styled(Card)({
  borderRadius: '15px',
  background: '#E4F5E7',
  padding: '15px',
  display: 'inline-block',
  boxShadow: 'none',
});

const PricingCard = ({ amount, label }) => (
  <CardStyled>
    <CardContent>
      <Typography variant="h6" fontWeight="bold">
        {amount}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {label}
      </Typography>
    </CardContent>
  </CardStyled>
);


const FeaturesSection = () => {
  return (
    <Box sx={{ textAlign: "center", py: 1, px: 3, bgcolor: "white" }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Robust Uncommon Functionality
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Experience a platform with features that redefine the norm.
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {additionalFeatures.map((feature, index) => (
          <Grid item xs={8} sm={6} md={index >= 4 ? 12 : 6} key={index}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                p: 3,
                minHeight: 150,
                bgcolor: "#F5F7F2",
                borderRadius: 1,
                boxShadow: "none",
              }}
            >
              <CardContent sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                {feature.icon}
                <Box>
                  <Typography variant="h6" fontWeight="bold">
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const IntegrationSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#F5F7F2",
        borderRadius: 3,
        p: 3,
        maxWidth: "1100px",
        mx: "auto",
      }}
    >
      <Grid container spacing={3} alignItems="center">
   
        <Grid item xs={12} md={5}>
          <Typography variant="h5" fontWeight="bold">
            Integration with Exchanges
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ my: 1 }}>
            Ability to link with cryptocurrency exchanges for trading. Secure backup options for private keys.
          </Typography>

        
          <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
            <Button
              variant="contained"
              startIcon={<AccessTimeIcon />}
              sx={{ bgcolor: "#1F6D37", "&:hover": { bgcolor: "#16522A" } }}
            >
              Install Now
            </Button>
            <Button variant="outlined" startIcon={<PlayArrowIcon />} sx={{ borderColor: "#1F6D37", color: "#1F6D37" }}>
              Install Now
            </Button>
          </Box>
        </Grid>

      
        <Grid item xs={12} md={7}>
          <Box
            component="img"
            src="https://www.saasable.io/assets/images/graphics/crypto/crypto_exchange_light.png"
            alt="Exchange Integration"
            sx={{
              width: "100%",
              borderRadius: 2,
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

const CryptoWalletLanding = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: 'background.default', Height: '100vh' }}>
        <Container maxWidth="lg" sx={{ py: 8 }}>
       
          <Typography
            variant="h2"
            component="h1"
            align="center"
            gutterBottom
            sx={{
              fontWeight: 700,
              mb: 6,
              lineHeight: 1.2,
            }}
          >
            The Ultimate All → in → One Decentralized
            <br />
            wallet for Quick Transactions
          </Typography>

      
          <Grid container spacing={3} sx={{ mb: 8 }}>
         
            <Grid item xs={12} md={4}>
              <Paper elevation={1} sx={{ p: 3, bgcolor: '#f9fafb' }}>
                <Box
                  component="img"
                  src="https://www.saasable.io/assets/images/graphics/crypto/dashboard1-light.svg"
                  alt="Crypto Dashboard"
                  sx={{ width: '100%', height: 'auto' }}
                />
              </Paper>
            </Grid>

         
            <Grid item xs={12} md={4}>
              <Paper elevation={1} sx={{ p: 3, bgcolor: '#f9fafb' }}>
                <Box
                  component="img"
                  src="https://www.saasable.io/assets/images/graphics/crypto/dashboard1-light.svg"
                  alt="Crypto Dashboard"
                  sx={{ width: '100%', height: 'auto' }}
                />

                <Box sx={{ mt: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                    <Typography variant="h6">Deposit</Typography>
                    <IconButton size="small">
                      <FaArrowRight />
                    </IconButton>
                  </Box>

                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                    <Typography variant="h6">Transfer</Typography>
                    <IconButton size="small">
                      <FaArrowRight />
                    </IconButton>
                  </Box>

                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="h6">Wallet Management</Typography>
                    <IconButton size="small">
                      <FaArrowRight />
                    </IconButton>
                  </Box>
                </Box>
              </Paper>
            </Grid>

         
            <Grid item xs={12} md={4}>
              <Paper elevation={1} sx={{ p: 3, bgcolor: '#f9fafb' }}>
                <Box
                  component="img"
                  src="https://www.saasable.io/assets/images/graphics/crypto/dashboard1-light.svg"
                  alt="Crypto Dashboard"
                  sx={{ width: '100%', height: 'auto' }}
                />

                <Box sx={{ mt: 2, textAlign: 'center' }}>
                  <Typography variant="h6" gutterBottom>
                    Empowering Businesses with a Customizable,
                    <br />
                    Data-Driven CRYPTO Solution.
                  </Typography>

                  <Button
                    variant="outlined"
                    color="primary"
                    fullWidth
                    sx={{
                      mt: 2,
                      borderRadius: 28,
                      py: 1.5,
                      textTransform: 'none',
                      fontSize: '1rem',
                    }}
                  >
                    Explore
                  </Button>
                </Box>
              </Paper>
            </Grid>
          </Grid>

      
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom sx={{ mb: 4 }}>
              4,000+ companies already growing
            </Typography>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2 }}>
              <Chip
                icon={<FaReddit />}
                label="Reddit"
                variant="outlined"
                sx={{ bgcolor: '#f9fafb', px: 2, py: 3, borderRadius: 28 }}
              />

              <Chip
                icon={<CodeIcon />}
                label="MUI"
                variant="outlined"
                sx={{ bgcolor: '#f9fafb', px: 2, py: 3, borderRadius: 28 }}
              />

              <Chip
                icon={<FaDribbble />}
                label="Dribbble"
                variant="outlined"
                sx={{ bgcolor: '#f9fafb', px: 2, py: 3, borderRadius: 28 }}
              />

              <Chip
                icon={<FaDev />}
                label="dev.to"
                variant="outlined"
                sx={{ bgcolor: '#f9fafb', px: 2, py: 3, borderRadius: 28 }}
              />

              <Chip
                icon={<FaEnvelope />}
                label="envato"
                variant="outlined"
                sx={{ bgcolor: '#f9fafb', px: 2, py: 3, borderRadius: 28 }}
              />
            </Box>
          </Box>
        </Container>

      
        <Container sx={{ mt: 8, mb: 8 }}>
          <Typography variant="body2" color="text.secondary" align="center" gutterBottom>
            4,000+ companies already growing
          </Typography>

          <LogoContainer sx={{ mb: 4 }}>
            {["Dribbble", "dev.to", "envato", "Reddit", "MUI"].map((logo, index) => (
              <LogoButton key={index}>{logo}</LogoButton>
            ))}
          </LogoContainer>

          <ContentWrapper>
            <LeftContent>
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                Access top-tier tools through our interface
              </Typography>
              <Typography variant="body1" color="text.secondary" gutterBottom>
                Discover the features that will transform your customer relationships.
              </Typography>
              <GreenButton>Explore Features</GreenButton>
            </LeftContent>

            <RightContent>
              <Box>
                <StyledImage src="https://www.saasable.io/assets/images/graphics/crypto/graphic1-light.svg" alt="Portfolio UI" />
                <Box display="flex" gap={2} mt={2} justifyContent="center">
                  <PricingCard amount="$49,329.77" label="Your balance is equivalent" />
                  <PricingCard amount="$56.98" label="Total Portfolio" />
                </Box>
              </Box>
            </RightContent>
          </ContentWrapper>
        </Container>
        <RewardsSection />
        <FeaturesSection />
        <IntegrationSection />
      <Box sx={{ textAlign: "center", p: 4 }}>
        <Typography variant="h4" fontWeight={600}>
          Cryptocurrency platforms to make Earn safely
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mt: 1, mb: 4 }}>
          With advanced analytics and reporting, you can track customer behavior, sales trends
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
          <img
            src="https://www.saasable.io/assets/images/graphics/crypto/crypto-dashboard.png"
            alt="Crypto Dashboard"
            style={{ width: "75%", height: "auto", borderRadius: "12px" }}
          />
        </Box>
        <Grid container spacing={2} justifyContent="center">
          {features.map((feature, index) => (
            <Grid item xs={12} md={3} key={index}>
              <Card sx={{ p: 2, textAlign: "left", backgroundColor: "#f3f7f2",  boxShadow: 'none' }}>
                <CardContent sx={{display: 'flex', alignItems: 'center', gap: 2 }}>
                  {feature.icon}
                  <Box>
                    <Typography variant="h6" fontWeight={600} sx={{ mt: 1 }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                      {feature.description}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
            
        </Grid>
        </Box>
  
      </Box>
  
      <Seamless />
      <Secure />
      <Insights />
      <Flexible />
      <CryptoDropdown/>
    </ThemeProvider>
    
  );
};

export default CryptoWalletLanding;