// LandingPage.js — Marketing homepage. 
// No cart or auth logic here — purely informational with CTAs.

import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  Chip,
  Card,
  Divider,
  Rating,
  Avatar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
} from '@mui/material';
import {
  LocationOn as LocationOnIcon,
  Favorite as FavoriteIcon,
  Thermostat as ThermostatIcon,
  Bedtime as BedtimeIcon,
  DirectionsRun as DirectionsRunIcon,
  Assignment as AssignmentIcon,
  ExpandMore as ExpandMoreIcon,
  CheckCircle as CheckCircleIcon,
  CancelOutlined as CancelOutlinedIcon,
  InfoOutlined as InfoIcon,
  Instagram,
  Twitter,
  Facebook,
  LocalShippingOutlined as ShippingIcon,
  AppShortcutOutlined as AppIcon,
  PetsOutlined as PetsIcon,
} from '@mui/icons-material';

// --- MOCK DATA ---

const STATS = [
  { value: "10,000+", label: "Happy Pet Owners" },
  { value: "4.8★", label: "Average Rating" },
  { value: "50+", label: "Supported Breeds" },
  { value: "99.9%", label: "Device Uptime" }
];

const FEATURES = [
  {
    icon: <LocationOnIcon />,
    color: "#1565c0",
    bg: "#e3f2fd",
    title: "Real-Time GPS",
    description: "Know exactly where your dog is at all times. Get instant alerts if they leave a safe zone."
  },
  {
    icon: <FavoriteIcon />,
    color: "#c62828",
    bg: "#fce4ec",
    title: "Heart Rate Monitor",
    description: "Track resting and active heart rate. Spot health anomalies before they become serious."
  },
  {
    icon: <ThermostatIcon />,
    color: "#e65100",
    bg: "#fff8e1",
    title: "Temperature Sensing",
    description: "Real-time body temperature monitoring with alerts for fever or hypothermia risk."
  },
  {
    icon: <BedtimeIcon />,
    color: "#4527a0",
    bg: "#ede7f6",
    title: "Sleep Analysis",
    description: "Understand your dog's sleep patterns and get tips to improve their rest quality."
  },
  {
    icon: <DirectionsRunIcon />,
    color: "#2e7d32",
    bg: "#e8f5e9",
    title: "Activity Tracking",
    description: "Daily step counts, calories burned, and activity goals tailored to your dog's breed."
  },
  {
    icon: <AssignmentIcon />,
    color: "#6a1b9a",
    bg: "#f3e5f5",
    title: "Vet Health Reports",
    description: "Auto-generated monthly health summaries ready to share with your veterinarian."
  }
];

const TESTIMONIALS = [
  {
    name: "Priya Menon",
    location: "Bangalore",
    dog: "Max — Golden Retriever",
    avatar: "PM",
    avatarColor: "#1976d2",
    rating: 5,
    text: "PawTrack Pro literally saved Max's life. The fever alert went off at 2am and we rushed him to the vet. Cannot recommend this enough."
  },
  {
    name: "Arjun Kapoor",
    location: "Mumbai",
    dog: "Luna — Beagle",
    avatar: "AK",
    avatarColor: "#2e7d32",
    rating: 5,
    text: "The GPS geo-fence alert is a game changer. Luna escaped the garden twice last month and I found her within minutes both times."
  },
  {
    name: "Sneha Reddy",
    location: "Hyderabad",
    dog: "Bruno — Labrador",
    avatar: "SR",
    avatarColor: "#6a1b9a",
    rating: 4,
    text: "Setup was under 10 minutes. The app is clean, data is easy to read, and the vet report feature saves me so much time every month."
  }
];

const FAQS = [
  {
    question: "Does PawTrack work without a subscription?",
    answer: "Yes. The Basic plan is completely free and includes activity tracking and mobile app sync. Subscriptions unlock GPS, health alerts, and vet reports."
  },
  {
    question: "When does subscription billing start?",
    answer: "Billing only begins after you activate your device at home. If your device never ships or you never activate it, you are never charged."
  },
  {
    question: "Which dog breeds is PawTrack compatible with?",
    answer: "PawTrack works with all breeds. The Pro model supports breed-specific health baselines for 50+ breeds including Labradors, Beagles, Pugs, German Shepherds, and more."
  },
  {
    question: "Is the neckband safe for puppies?",
    answer: "PawTrack Mini is specifically designed for puppies and small breeds under 5kg. All devices use hypoallergenic, skin-safe silicone straps."
  },
  {
    question: "Can I track multiple dogs?",
    answer: "Yes. One account supports unlimited dogs. Each dog needs its own PawTrack device but shares the same mobile app and subscription dashboard."
  }
];

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ width: '100%', overflowX: 'hidden' }}>
      
      {/* SECTION 1: HERO */}
      <Box sx={{ 
        background: 'linear-gradient(135deg, #0d47a1 0%, #1565c0 40%, #0d7560 100%)',
        minHeight: '92vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        color: 'white',
        textAlign: 'center',
        p: 4
      }}>
        {/* Decorative Circles */}
        <Box sx={{ position: 'absolute', width: 500, height: 500, borderRadius: '50%', bgcolor: 'rgba(255,255,255,0.05)', top: -100, right: -100 }} />
        <Box sx={{ position: 'absolute', width: 300, height: 300, borderRadius: '50%', bgcolor: 'rgba(255,255,255,0.05)', bottom: -80, left: -60 }} />

        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Chip 
            label="Now Available in India 🇮🇳" 
            sx={{ 
              bgcolor: 'rgba(255,255,255,0.15)', 
              color: 'white', 
              border: '1px solid rgba(255,255,255,0.3)', 
              mb: 3 
            }} 
          />
          
          <Typography variant="h2" sx={{ fontFamily: "'DM Serif Display', serif", lineHeight: 1.15, mb: 2 }}>
            Your Dog's Health,<br />
            <em style={{ fontStyle: 'italic' }}>Always in Your Hands.</em>
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: 300, opacity: 0.85, maxWidth: 520, mx: 'auto', mb: 4 }}>
            PawTrack smart neckbands monitor GPS location, heart rate, temperature, 
            and sleep — all from one app. Peace of mind for every pet owner.
          </Typography>

          <Stack direction="row" spacing={2} justifyContent="center">
            <Button 
              variant="contained" 
              size="large" 
              sx={{ bgcolor: 'white', color: '#1565c0', fontWeight: 700, '&:hover': { bgcolor: '#f5f5f5' } }}
              onClick={() => navigate('/neckbands')}
            >
              Shop Now
            </Button>
            <Button 
              variant="outlined" 
              size="large" 
              sx={{ borderColor: 'rgba(255,255,255,0.6)', color: 'white', '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.1)' } }}
              onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}
            >
              See How It Works
            </Button>
          </Stack>

          <Typography variant="caption" sx={{ opacity: 0.6, mt: 3, display: 'block' }}>
            Free shipping on all orders • 30-day return policy • 1-year device warranty
          </Typography>

          <Paper sx={{ 
            borderRadius: 4, 
            p: 4, 
            mt: 5, 
            display: 'inline-block',
            bgcolor: 'rgba(255,255,255,0.12)',
            border: '1px solid rgba(255,255,255,0.2)',
            elevation: 0
          }}>
            <Box sx={{ display: 'flex', gap: 4, justifyContent: 'center', mb: 2, '& svg': { fontSize: 40 } }}>
              <DirectionsRunIcon />
              <LocationOnIcon />
              <ThermostatIcon />
              <PetsIcon />
            </Box>
            <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.7)', letterSpacing: 1, fontWeight: 'bold' }}>
              LITE • PLUS • PRO • MINI — FIND YOUR PERFECT FIT
            </Typography>
          </Paper>
        </Box>
      </Box>

      {/* SECTION 2: STATS BAR */}
      <Box sx={{ bgcolor: '#1565c0', color: 'white', py: { xs: 4, sm: 3 } }}>
        <Container maxWidth="lg">
          <Grid container justifyContent="center" spacing={{ xs: 2, sm: 0 }}>
            {STATS.map((stat, idx) => (
              <Grid 
                item 
                xs={6} 
                sm={3} 
                key={stat.label} 
                sx={{ 
                  textAlign: 'center', 
                  py: 2,
                  borderRight: { 
                    xs: idx % 2 === 0 ? '1px solid rgba(255,255,255,0.2)' : 'none',
                    sm: idx < STATS.length - 1 ? '1px solid rgba(255,255,255,0.2)' : 'none' 
                  },
                  borderBottom: {
                    xs: idx < 2 ? '1px solid rgba(255,255,255,0.2)' : 'none',
                    sm: 'none'
                  }
                }}
              >
                <Typography 
                  variant="h4" 
                  sx={{ 
                    fontWeight: 700, 
                    fontFamily: "'DM Serif Display', serif",
                    fontSize: { xs: '1.75rem', sm: '2.125rem' }
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.8, fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
                  {stat.label}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* SECTION 3: FEATURES */}
      <Box id="features" sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="overline" color="primary" sx={{ letterSpacing: 3, fontWeight: 'bold' }}>WHAT PAWTRACK MONITORS</Typography>
          <Typography variant="h4" sx={{ fontFamily: "'DM Serif Display', serif", mb: 1 }}>Built for Every Breed, Every Need</Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 520, mb: 5 }}>
            Six sensors in one lightweight neckband. Data that actually helps you be a better pet owner.
          </Typography>

          <Grid container spacing={3}>
            {FEATURES.map((feature) => (
              <Grid item key={feature.title} xs={12} sm={6} md={4}>
                <Card sx={{ 
                  elevation: 0, 
                  border: '1px solid #e0e0e0', 
                  borderRadius: 3, 
                  p: 3, 
                  height: '100%',
                  transition: 'box-shadow 0.2s, transform 0.2s',
                  '&:hover': { boxShadow: '0 8px 24px rgba(0,0,0,0.10)', transform: 'translateY(-4px)' }
                }}>
                  <Box sx={{ 
                    width: 48, height: 48, borderRadius: 2, bgcolor: feature.bg, 
                    display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2, color: feature.color 
                  }}>
                    {React.cloneElement(feature.icon, { sx: { fontSize: 24 } })}
                  </Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>{feature.title}</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>{feature.description}</Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* SECTION 4: HOW IT WORKS */}
      <Box sx={{ bgcolor: '#f5f7fa', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="overline" color="primary" sx={{ letterSpacing: 3, fontWeight: 'bold' }}>SIMPLE SETUP</Typography>
          <Typography variant="h4" sx={{ fontFamily: "'DM Serif Display', serif", mb: 4 }}>Up and Running in 3 Steps</Typography>

          <Grid container spacing={4} sx={{ position: 'relative' }} justifyContent="center">
            {/* Step 1 */}
            <Grid item xs={12} md={4} sx={{ position: 'relative', zIndex: 1 }}>
              <Stack spacing={2} alignItems={{ xs: 'center', md: 'flex-start' }} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                <Box sx={{ width: 56, height: 56, borderRadius: '50%', bgcolor: '#1565c0', color: 'white', fontSize: 24, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>1</Box>
                <ShippingIcon sx={{ fontSize: 48, color: 'primary.main' }} />
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>Order Your Device</Typography>
                <Typography variant="body2" color="text.secondary">Choose the right PawTrack neckband for your dog's size and breed. Free delivery across India.</Typography>
              </Stack>
            </Grid>

            {/* Step 2 */}
            <Grid item xs={12} md={4} sx={{ position: 'relative', zIndex: 1 }}>
              <Stack spacing={2} alignItems={{ xs: 'center', md: 'flex-start' }} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                <Box sx={{ width: 56, height: 56, borderRadius: '50%', bgcolor: '#1565c0', color: 'white', fontSize: 24, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '4px solid #f5f7fa' }}>2</Box>
                <AppIcon sx={{ fontSize: 48, color: 'primary.main' }} />
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>Set Up the App</Typography>
                <Typography variant="body2" color="text.secondary">Download the free PawTrack app, create your account, and register your dog's profile in under 5 minutes.</Typography>
              </Stack>
            </Grid>

            {/* Step 3 */}
            <Grid item xs={12} md={4} sx={{ position: 'relative', zIndex: 1 }}>
              <Stack spacing={2} alignItems={{ xs: 'center', md: 'flex-start' }} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                <Box sx={{ width: 56, height: 56, borderRadius: '50%', bgcolor: '#1565c0', color: 'white', fontSize: 24, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>3</Box>
                <PetsIcon sx={{ fontSize: 48, color: 'primary.main' }} />
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>Start Monitoring</Typography>
                <Typography variant="body2" color="text.secondary">Clip the neckband on your dog and go. Data syncs automatically. Alerts are instant. Activation starts your subscription.</Typography>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* SECTION 5: TESTIMONIALS */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="overline" color="primary" sx={{ letterSpacing: 3, fontWeight: 'bold' }}>REAL STORIES</Typography>
          <Typography variant="h4" sx={{ fontFamily: "'DM Serif Display', serif", mb: 4 }}>Pet Owners Love PawTrack</Typography>

          <Grid container spacing={3}>
            {TESTIMONIALS.map((review) => (
              <Grid item key={review.name} xs={12} md={4}>
                <Card sx={{ elevation: 0, border: '1px solid #e0e0e0', borderRadius: 3, p: 3, height: '100%' }}>
                  <Rating value={review.rating} readOnly size="small" sx={{ mb: 1.5 }} />
                  <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic', lineHeight: 1.8, mb: 2 }}>
                    "{review.text}"
                  </Typography>
                  <Stack direction="row" spacing={1.5} alignItems="center">
                    <Avatar sx={{ width: 38, height: 38, bgcolor: review.avatarColor, fontSize: 14, fontWeight: 700 }}>{review.avatar}</Avatar>
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>{review.name}</Typography>
                      <Typography variant="caption" color="text.secondary">{review.dog} • {review.location}</Typography>
                    </Box>
                  </Stack>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* SECTION 6: PRICING TEASER */}
      <Box sx={{ background: 'linear-gradient(135deg, #f3e5f5 0%, #e3f2fd 100%)', py: 8 }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="overline" color="secondary" sx={{ letterSpacing: 3, fontWeight: 'bold' }}>TRANSPARENT PRICING</Typography>
          <Typography variant="h4" sx={{ fontFamily: "'DM Serif Display', serif", mb: 1 }}>Devices from ₹0. Plans from ₹0.</Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            No hidden fees. No upfront subscription. Pay only for the device — activate a plan whenever you're ready.
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <Paper variant="outlined" sx={{ borderRadius: 3, p: 3, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <DirectionsRunIcon sx={{ fontSize: 40, mb: 1, color: 'text.secondary' }} />
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>PawTrack Lite</Typography>
                <Typography color="success.main" sx={{ fontWeight: 700, variant: 'h6' }}>Free Device</Typography>
                <Typography variant="caption" color="text.secondary">No subscription required</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Paper variant="outlined" sx={{ borderRadius: 3, p: 3, height: '100%', border: '2px solid #1565c0', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Chip label="Popular" size="small" color="primary" sx={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', fontWeight: 'bold' }} />
                <LocationOnIcon sx={{ fontSize: 40, mb: 1, color: 'primary.main' }} />
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>PawTrack Plus</Typography>
                <Typography sx={{ fontWeight: 700, variant: 'h6' }}>₹3,999</Typography>
                <Typography variant="caption" color="primary">+ ₹399/mo optional</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Paper variant="outlined" sx={{ borderRadius: 3, p: 3, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <ThermostatIcon sx={{ fontSize: 40, mb: 1, color: 'secondary.main' }} />
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>PawTrack Pro</Typography>
                <Typography sx={{ fontWeight: 700, variant: 'h6' }}>₹7,999</Typography>
                <Typography variant="caption" color="text.secondary">+ ₹799/mo optional</Typography>
              </Paper>
            </Grid>
          </Grid>

          <Button 
            variant="contained" 
            size="large" 
            sx={{ px: 5, mt: 5, bgcolor: '#1565c0' }}
            onClick={() => navigate('/neckbands')}
          >
            View All Plans & Devices
          </Button>
        </Container>
      </Box>

      {/* SECTION 7: FAQ */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="md">
          <Typography variant="overline" color="primary" sx={{ letterSpacing: 3, fontWeight: 'bold' }}>FAQ</Typography>
          <Typography variant="h4" sx={{ fontFamily: "'DM Serif Display', serif", mb: 4 }}>Common Questions</Typography>
          
          {FAQS.map((faq) => (
            <Accordion key={faq.question} elevation={0} variant="outlined" sx={{ borderRadius: 2, mb: 1, '&:before': { display: 'none' } }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Container>
      </Box>

      {/* SECTION 8: FINAL CTA */}
      <Box sx={{ background: 'linear-gradient(135deg, #0d47a1, #0d7560)', color: 'white', textAlign: 'center', py: 8, px: 3 }}>
        <Typography variant="h4" sx={{ fontFamily: "'DM Serif Display', serif", mb: 1 }}>Give Your Dog the Care They Deserve</Typography>
        <Typography variant="body1" sx={{ opacity: 0.8, maxWidth: 480, mx: 'auto', mb: 4 }}>
          Join over 10,000 pet owners using PawTrack to monitor, protect, and understand their dogs better every day.
        </Typography>

        <Stack direction="row" spacing={2} justifyContent="center" flexWrap="wrap">
          <Button variant="contained" size="large" sx={{ bgcolor: 'white', color: '#0d47a1', fontWeight: 700 }} onClick={() => navigate('/neckbands')}>
            Shop Neckbands
          </Button>
          <Button variant="outlined" size="large" sx={{ borderColor: 'rgba(255,255,255,0.5)', color: 'white' }} onClick={() => navigate('/account')}>
            Create Free Account
          </Button>
        </Stack>

        <Typography variant="caption" sx={{ opacity: 0.5, mt: 3, display: 'block' }}>
          Free shipping • 30-day returns • 1-year warranty
        </Typography>
      </Box>

      {/* FOOTER */}
      <Box sx={{ bgcolor: '#0a1929', color: 'rgba(255,255,255,0.7)', py: 6, px: 4 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" sx={{ fontFamily: "'DM Serif Display', serif", color: 'white', mb: 1 }}>🐾 PawTrack</Typography>
              <Typography variant="body2" sx={{ opacity: 0.6, mb: 2 }}>Smart health monitoring for every dog, every breed, every home.</Typography>
              <Stack direction="row" spacing={1}>
                <IconButton size="small" sx={{ color: 'white', opacity: 0.6 }}><Instagram /></IconButton>
                <IconButton size="small" sx={{ color: 'white', opacity: 0.6 }}><Twitter /></IconButton>
                <IconButton size="small" sx={{ color: 'white', opacity: 0.6 }}><Facebook /></IconButton>
              </Stack>
            </Grid>
            <Grid item xs={6} md={2}>
              <Typography variant="subtitle2" color="white" sx={{ mb: 2 }}>Product</Typography>
              {['Neckbands', 'Subscriptions', 'Mobile App', 'Vet Reports'].map(link => (
                <Typography key={link} variant="body2" sx={{ cursor: 'pointer', mb: 1, '&:hover': { color: 'white' } }}>{link}</Typography>
              ))}
            </Grid>
            <Grid item xs={6} md={2}>
              <Typography variant="subtitle2" color="white" sx={{ mb: 2 }}>Company</Typography>
              {['About Us', 'Blog', 'Careers', 'Press'].map(link => (
                <Typography key={link} variant="body2" sx={{ cursor: 'pointer', mb: 1, '&:hover': { color: 'white' } }}>{link}</Typography>
              ))}
            </Grid>
            <Grid item xs={6} md={2}>
              <Typography variant="subtitle2" color="white" sx={{ mb: 2 }}>Support</Typography>
              {['Help Center', 'Contact Us', 'Shipping', 'Returns'].map(link => (
                <Typography key={link} variant="body2" sx={{ cursor: 'pointer', mb: 1, '&:hover': { color: 'white' } }}>{link}</Typography>
              ))}
            </Grid>
            <Grid item xs={6} md={2}>
              <Typography variant="subtitle2" color="white" sx={{ mb: 2 }}>Legal</Typography>
              {['Privacy', 'Terms', 'Cookies'].map(link => (
                <Typography key={link} variant="body2" sx={{ cursor: 'pointer', mb: 1, '&:hover': { color: 'white' } }}>{link}</Typography>
              ))}
            </Grid>
          </Grid>
          <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)', my: 4 }} />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2 }}>
            <Typography variant="caption" sx={{ opacity: 0.4 }}>© 2024 PawTrack Technologies Pvt. Ltd. All rights reserved.</Typography>
            <Typography variant="caption" sx={{ opacity: 0.4 }}>Made with ❤️ for dogs and their humans.</Typography>
          </Box>
        </Container>
      </Box>

    </Box>
  );
};

export default LandingPage;
