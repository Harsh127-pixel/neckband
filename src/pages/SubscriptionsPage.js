import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  CardActions,
  Chip,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Alert,
  Paper,
} from '@mui/material';
import {
  InfoOutlined as InfoOutlinedIcon,
  CheckCircle as CheckCircleIcon,
  CancelOutlined as CancelOutlinedIcon,
} from '@mui/icons-material';

// --- DATA ---

const SUBSCRIPTIONS = [
  {
    id: "sub-free",
    name: "Basic",
    monthlyFee: 0,
    annualFee: 0,
    color: "#607d8b",
    tagline: "Always free. No card needed.",
    compatibleWith: ["All Devices"],
    features: [
      "7-day activity history",
      "Step and distance tracking",
      "Mobile app access",
      "Email support"
    ],
    notIncluded: [
      "Live GPS tracking",
      "Health alerts",
      "Vet reports",
      "Cloud history beyond 7 days"
    ]
  },
  {
    id: "sub-standard",
    name: "Standard",
    monthlyFee: 399,
    annualFee: 3999,
    color: "#1976d2",
    tagline: "Best for GPS and health tracking.",
    compatibleWith: ["Plus", "Pro"],
    badge: null,
    features: [
      "Everything in Basic",
      "Live GPS tracking",
      "30-day health history",
      "Heart rate and activity alerts",
      "Geo-fence zone alerts",
      "Priority email support"
    ],
    notIncluded: [
      "Vet health reports",
      "Temperature monitoring",
      "Sleep analysis"
    ]
  },
  {
    id: "sub-premium",
    name: "Premium",
    monthlyFee: 799,
    annualFee: 7999,
    color: "#6a1b9a",
    tagline: "Complete health monitoring for serious pet owners.",
    compatibleWith: ["Pro"],
    badge: "Best Value",
    features: [
      "Everything in Standard",
      "Unlimited health history",
      "Monthly vet-ready health reports",
      "Temperature and sleep analysis",
      "Breed-specific health insights",
      "WhatsApp and phone support",
      "Free collar replacement once a year"
    ],
    notIncluded: []
  }
];

const SubscriptionsPage = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" fontWeight={700} sx={{ fontFamily: "'DM Serif Display', serif", mb: 1 }}>
          Subscription Plans
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Unlock the full power of your PawTrack device. Plans are flexible, transparent, and can be activated anytime.
        </Typography>
      </Box>

      <Alert severity="info" icon={<InfoOutlinedIcon />} sx={{ mb: 6, borderRadius: 2 }}>
        <strong>Transparency Note:</strong> Subscription billing starts ONLY after you activate your device at home. 
        You can buy a device today and choose a plan later.
      </Alert>

      <Grid container spacing={4} alignItems="stretch">
        {SUBSCRIPTIONS.map((plan) => {
          const savings = plan.annualFee > 0 
            ? Math.round((plan.monthlyFee * 12 - plan.annualFee) / (plan.monthlyFee * 12) * 100) 
            : 0;

          return (
            <Grid item key={plan.id} xs={12} md={4}>
              <Box sx={{ position: 'relative', height: '100%' }}>
                {plan.badge && (
                  <Chip 
                    label={plan.badge} 
                    color="secondary" 
                    size="small" 
                    sx={{ 
                      position: 'absolute', 
                      top: -12, 
                      left: '50%', 
                      transform: 'translateX(-50%)', 
                      fontWeight: 'bold', 
                      px: 2,
                      zIndex: 10
                    }}
                  />
                )}
                
                <Card sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  elevation: 0,
                  borderRadius: 4,
                  border: plan.badge === "Best Value" ? "2px solid #6a1b9a" : "1px solid #e0e0e0",
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <Box sx={{ 
                    height: 10, 
                    bgcolor: plan.color, 
                    position: 'absolute', 
                    top: 0, 
                    left: 0, 
                    right: 0,
                    zIndex: 2
                  }} />
                  
                  <CardContent sx={{ flexGrow: 1, pt: 5 }}>
                    <Typography variant="h5" fontWeight={800} sx={{ color: plan.color, mb: 1 }}>{plan.name}</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>{plan.tagline}</Typography>
                  
                  <Paper sx={{ p: 2.5, bgcolor: 'rgba(0,0,0,0.02)', borderRadius: 3, mb: 4, border: '1px hide' }}>
                    {plan.monthlyFee === 0 ? (
                      <Typography variant="h5" color="success.main" fontWeight="bold">Free Forever</Typography>
                    ) : (
                      <>
                        <Typography variant="h4" fontWeight={800}>
                          ₹{plan.monthlyFee}
                          <Typography component="span" variant="subtitle1" color="text.secondary" sx={{ ml: 0.5 }}>/mo</Typography>
                        </Typography>
                        <Typography variant="caption" color="text.secondary" display="block" sx={{ mt: 0.5 }}>
                          or ₹{plan.annualFee} billed annually {savings > 0 && <Box component="span" sx={{ color: 'success.main', fontWeight: 'bold' }}>(save {savings}%)</Box>}
                        </Typography>
                      </>
                    )}
                  </Paper>

                  <Typography variant="caption" fontWeight="bold" display="block" sx={{ mb: 1.5, textTransform: 'uppercase', letterSpacing: 1 }}>Includes:</Typography>
                  <List dense sx={{ p: 0, mb: 3 }}>
                    {plan.features.map(f => (
                      <ListItem key={f} sx={{ px: 0, py: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 32 }}>
                          <CheckCircleIcon color="success" sx={{ fontSize: 18 }} />
                        </ListItemIcon>
                        <ListItemText primary={f} primaryTypographyProps={{ variant: 'body2', fontWeight: 500 }} />
                      </ListItem>
                    ))}
                    {plan.notIncluded.map(f => (
                      <ListItem key={f} sx={{ px: 0, py: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 32 }}>
                          <CancelOutlinedIcon color="disabled" sx={{ fontSize: 18 }} />
                        </ListItemIcon>
                        <ListItemText 
                          primary={f} 
                          primaryTypographyProps={{ variant: 'body2', color: 'text.disabled' }} 
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>

                <CardActions sx={{ p: 3, pt: 0 }}>
                  <Button 
                    fullWidth 
                    variant={plan.monthlyFee === 0 ? "outlined" : "contained"}
                    size="large"
                    sx={{ 
                      borderRadius: 2,
                      py: 1.5,
                      fontWeight: 'bold',
                      bgcolor: plan.monthlyFee > 0 ? plan.color : 'transparent',
                      '&:hover': {
                        bgcolor: plan.monthlyFee > 0 ? plan.color : 'rgba(0,0,0,0.04)',
                        opacity: 0.9
                      }
                    }}
                  >
                    {plan.monthlyFee === 0 ? "Get Started" : "Choose " + plan.name}
                  </Button>
                </CardActions>
              </Card>
            </Box>
          </Grid>
          );
        })}
      </Grid>

      <Box sx={{ mt: 8, p: 4, bgcolor: '#f5f7fa', borderRadius: 4, textAlign: 'center' }}>
        <Typography variant="h6" fontWeight={700} gutterBottom>Still have questions?</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Our team is here to help you choose the best plan for your furry friend.
        </Typography>
        <Button variant="outlined" color="inherit">Contact Support</Button>
      </Box>
    </Container>
  );
};

export default SubscriptionsPage;
