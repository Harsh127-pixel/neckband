import React, { useContext } from 'react';
import {
  Container,
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  CardActions,
  Chip,
  Rating,
  Button,
  Divider,
  Alert,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
} from '@mui/material';
import {
  LocationOn as LocationOnIcon,
  Favorite as FavoriteIcon,
  Thermostat as ThermostatIcon,
  DirectionsRun as DirectionsRunIcon,
  Bedtime as BedtimeIcon,
  Water as WaterIcon,
  InfoOutlined as InfoOutlinedIcon,
  CheckCircle as CheckCircleIcon,
  CancelOutlined as CancelOutlinedIcon,
  Pets as PetsIcon,
} from '@mui/icons-material';
import { CartContext } from '../context/CartContext';

// --- DATA ARRAYS ---

const NECKBANDS = [
  {
    id: 1,
    name: "PawTrack Lite",
    sku: "PT-LITE-001",
    price: 0,
    originalPrice: null,
    color: ["Midnight Black", "Cloud White"],
    sizes: ["Small (2–5 kg)", "Medium (5–15 kg)", "Large (15–40 kg)"],
    inStock: true,
    image: <DirectionsRunIcon />,
    badge: null,
    description: "A lightweight starter neckband for basic daily tracking. No subscription needed.",
    specs: [
      "Plastic body, soft silicone strap",
      "Battery life: 7 days",
      "Water resistant: IPX4 splash proof",
      "Bluetooth sync only",
      "Weight: 28g"
    ],
    capabilities: ["Activity"],
    rating: 4.1,
    reviews: 312
  },
  {
    id: 2,
    name: "PawTrack Plus",
    sku: "PT-PLUS-002",
    price: 49,
    originalPrice: 69,
    color: ["Ocean Blue", "Forest Green", "Slate Grey"],
    sizes: ["Small (2–5 kg)", "Medium (5–15 kg)", "Large (15–40 kg)"],
    inStock: true,
    image: <LocationOnIcon />,
    badge: "Sale",
    description: "GPS-enabled neckband with heart rate monitoring for active dogs.",
    specs: [
      "Aluminium shell, reinforced strap",
      "Battery life: 5 days",
      "Water resistant: IPX6",
      "GPS + Bluetooth",
      "Weight: 38g"
    ],
    capabilities: ["GPS", "Pulse", "Activity"],
    rating: 4.5,
    reviews: 891
  },
  {
    id: 3,
    name: "PawTrack Pro",
    sku: "PT-PRO-003",
    price: 99,
    originalPrice: 129,
    color: ["Titanium", "Matte Black"],
    sizes: ["Small (2–5 kg)", "Medium (5–15 kg)", "Large (15–40 kg)", "XL (40+ kg)"],
    inStock: true,
    image: <ThermostatIcon />,
    badge: "Most Popular",
    description: "Full health suite neckband with temperature sensing, sleep analysis, and vet reports.",
    specs: [
      "Titanium alloy shell, medical-grade strap",
      "Battery life: 4 days",
      "Fully waterproof: IP68",
      "GPS + Bluetooth + LTE",
      "Weight: 45g"
    ],
    capabilities: ["GPS", "Pulse", "Temperature", "Activity", "Sleep", "Waterproof"],
    rating: 4.8,
    reviews: 1423
  },
  {
    id: 4,
    name: "PawTrack Mini",
    sku: "PT-MINI-004",
    price: 35,
    originalPrice: null,
    color: ["Blush Pink", "Sky Blue", "Lemon Yellow"],
    sizes: ["XS (under 2 kg)", "Small (2–5 kg)"],
    inStock: true,
    image: <PetsIcon />,
    badge: "New",
    description: "Tiny and lightweight — built specifically for small breeds and puppies.",
    specs: [
      "Ultra-light plastic body",
      "Battery life: 6 days",
      "Water resistant: IPX4",
      "Bluetooth sync only",
      "Weight: 18g"
    ],
    capabilities: ["Activity", "Pulse"],
    rating: 4.3,
    reviews: 204
  }
];

const SUBSCRIPTIONS = [
  {
    id: "sub-free",
    name: "Basic",
    monthlyFee: 0,
    annualFee: 0,
    color: "#607d8b",
    tagline: "Always free. No card needed.",
    compatibleWith: ["PawTrack Lite", "PawTrack Mini", "PawTrack Plus", "PawTrack Pro"],
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
    monthlyFee: 4.99,
    annualFee: 49.99,
    color: "#1976d2",
    tagline: "Best for GPS and health tracking.",
    compatibleWith: ["PawTrack Plus", "PawTrack Pro"],
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
    monthlyFee: 9.99,
    annualFee: 99.99,
    color: "#6a1b9a",
    tagline: "Complete health monitoring for serious pet owners.",
    compatibleWith: ["PawTrack Pro"],
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

// --- HELPERS ---

const COLOR_MAP = {
  "Midnight Black": "#1a1a1a",
  "Cloud White": "#f5f5f5",
  "Ocean Blue": "#1565c0",
  "Forest Green": "#2e7d32",
  "Slate Grey": "#546e7a",
  "Titanium": "#78909c",
  "Matte Black": "#212121",
  "Blush Pink": "#f48fb1",
  "Sky Blue": "#81d4fa",
  "Lemon Yellow": "#fff176",
};

const CAPABILITY_ICONS = {
  GPS: <LocationOnIcon fontSize="inherit" />,
  Pulse: <FavoriteIcon fontSize="inherit" />,
  Temperature: <ThermostatIcon fontSize="inherit" />,
  Activity: <DirectionsRunIcon fontSize="inherit" />,
  Sleep: <BedtimeIcon fontSize="inherit" />,
  Waterproof: <WaterIcon fontSize="inherit" />,
};

const ProductListing = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      
      {/* SECTION 1: NECKBAND DEVICES */}
      <Box sx={{ mb: 2 }}>
        <Typography variant="h5" fontWeight={600}>Smart Neckbands</Typography>
        <Typography variant="body2" color="text.secondary">
          One-time purchase. Choose the right device for your dog's size and needs.
        </Typography>
      </Box>

      <Grid container spacing={3} sx={{ mt: 1 }}>
        {NECKBANDS.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={3}>
            <Card sx={{ 
              height: '100%', 
              display: 'flex', 
              flexDirection: 'column', 
              elevation: 0, 
              border: "1px solid #e0e0e0", 
              borderRadius: 3,
              position: 'relative'
            }}>
              {/* Card Top: Image & Badge */}
              <Box sx={{ 
                height: 140, 
                bgcolor: '#f0f4f8', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: 'primary.main',
                position: 'relative',
                '& svg': { fontSize: 64 }
              }}>
                {product.image}
                {product.badge && (
                  <Chip 
                    label={product.badge}
                    color={
                      product.badge === "Most Popular" ? "warning" : 
                      product.badge === "Sale" ? "error" : "success"
                    }
                    size="small"
                    sx={{ position: 'absolute', top: 10, left: 10, fontWeight: 'bold' }}
                  />
                )}
              </Box>

              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="subtitle1" fontWeight={700}>{product.name}</Typography>
                <Typography variant="caption" color="text.disabled" display="block">
                  SKU: {product.sku}
                </Typography>

                {/* Rating */}
                <Box sx={{ display: 'flex', alignItems: 'center', my: 0.5, gap: 0.5 }}>
                  <Rating value={product.rating} readOnly size="small" precision={0.1} />
                  <Typography variant="caption" color="text.secondary">
                    ({product.reviews} reviews)
                  </Typography>
                </Box>

                {/* Capability Chips */}
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, my: 1 }}>
                  {product.capabilities.map(cap => (
                    <Chip 
                      key={cap} 
                      label={cap} 
                      size="small" 
                      variant="outlined" 
                      icon={CAPABILITY_ICONS[cap]} 
                      sx={{ height: 20, fontSize: '0.65rem' }}
                    />
                  ))}
                </Box>

                <Typography 
                  variant="body2" 
                  color="text.secondary" 
                  sx={{ 
                    overflow: 'hidden', 
                    display: '-webkit-box', 
                    WebkitLineClamp: 2, 
                    WebkitBoxOrient: 'vertical',
                    minHeight: '2.5em',
                    mb: 1.5
                  }}
                >
                  {product.description}
                </Typography>

                {/* Colors */}
                <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                  {product.color.map(c => (
                    <Box 
                      key={c}
                      sx={{ 
                        width: 14, 
                        height: 14, 
                        borderRadius: '50%', 
                        bgcolor: COLOR_MAP[c] || '#ccc',
                        border: "1px solid #ccc"
                      }}
                      title={c}
                    />
                  ))}
                </Box>

                {/* Price */}
                <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1 }}>
                  {product.price === 0 ? (
                    <Typography variant="h6" color="success.main" fontWeight={700}>Free</Typography>
                  ) : (
                    <Typography variant="h6" fontWeight={700}>${product.price}</Typography>
                  )}
                  {product.originalPrice && (
                    <Typography variant="body2" color="text.disabled" sx={{ textDecoration: 'line-through' }}>
                      ${product.originalPrice}
                    </Typography>
                  )}
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 0.5 }}>
                  <Typography variant="caption" color="text.secondary">Subscription optional</Typography>
                  <InfoOutlinedIcon sx={{ fontSize: 12, color: 'text.secondary' }} />
                </Box>
              </CardContent>

              <CardActions sx={{ p: 2, pt: 0, flexDirection: 'column', gap: 1 }}>
                <Button 
                  variant="outlined" 
                  size="small" 
                  fullWidth 
                  onClick={() => console.log('Details for:', product.id)}
                >
                  View Details
                </Button>
                <Button 
                  variant="contained" 
                  size="small" 
                  fullWidth 
                  color="primary"
                  onClick={() => addToCart(product)}
                >
                  {product.price === 0 ? "Get Free Device" : "Add to Cart"}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* SECTION DIVIDER */}
      <Box sx={{ my: 6 }}>
        <Divider>
          <Chip label="Subscription Plans" sx={{ bgcolor: 'background.paper' }} />
        </Divider>
      </Box>

      {/* SECTION 2: SUBSCRIPTION PLANS */}
      <Box id="subscriptions-section" sx={{ mb: 2 }}>
        <Typography variant="h5" fontWeight={600}>Subscription Plans</Typography>
        <Typography variant="body2" color="text.secondary">
          Activate a plan after your device arrives. Billing starts only on activation. Cancel anytime.
        </Typography>
      </Box>

      <Alert severity="info" icon={<InfoOutlinedIcon />} sx={{ mb: 4, borderRadius: 2 }}>
        Subscriptions are optional. Your neckband works without a plan using Basic (free) features.
      </Alert>

      <Grid container spacing={3} alignItems="stretch">
        {SUBSCRIPTIONS.map((plan) => {
          const savings = plan.annualFee > 0 
            ? Math.round((plan.monthlyFee * 12 - plan.annualFee) / (plan.monthlyFee * 12) * 100) 
            : 0;

          return (
            <Grid item key={plan.id} xs={12} md={4}>
              <Card sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                elevation: 0,
                borderRadius: 3,
                border: plan.badge === "Best Value" ? "2px solid #6a1b9a" : "1px solid #e0e0e0",
                position: 'relative'
              }}>
                <Box sx={{ height: 6, borderRadius: "3px 3px 0 0", bgcolor: plan.color }} />
                
                {plan.badge && (
                  <Chip 
                    label={plan.badge} 
                    color="secondary" 
                    size="small" 
                    sx={{ position: 'absolute', top: 14, right: 14, fontWeight: 'bold' }}
                  />
                )}

                <CardContent sx={{ flexGrow: 1, pt: 3 }}>
                  <Typography variant="h6" fontWeight={700} sx={{ color: plan.color }}>{plan.name}</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>{plan.tagline}</Typography>
                  
                  <Box sx={{ p: 2, bgcolor: 'rgba(0,0,0,0.02)', borderRadius: 2, mb: 2 }}>
                    {plan.monthlyFee === 0 ? (
                      <Typography variant="h6" color="success.main" fontWeight="bold">Free Forever</Typography>
                    ) : (
                      <>
                        <Typography variant="h5" fontWeight={700}>${plan.monthlyFee} <Typography variant="caption" color="text.secondary">/ month</Typography></Typography>
                        <Typography variant="caption" color="text.secondary" display="block">
                          or ${plan.annualFee} / year {savings > 0 && <Typography variant="caption" color="success.main">(save {savings}%)</Typography>}
                        </Typography>
                      </>
                    )}
                  </Box>

                  <Typography variant="caption" fontWeight="bold" display="block" sx={{ mb: 1 }}>Works with:</Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
                    {plan.compatibleWith.map(device => (
                      <Chip key={device} label={device} size="small" sx={{ height: 20, fontSize: '0.6rem' }} />
                    ))}
                  </Box>

                  <List dense sx={{ p: 0 }}>
                    {plan.features.map(f => (
                      <ListItem key={f} sx={{ px: 0, py: 0.25 }}>
                        <ListItemIcon sx={{ minWidth: 28 }}>
                          <CheckCircleIcon color="success" sx={{ fontSize: 16 }} />
                        </ListItemIcon>
                        <ListItemText primary={f} primaryTypographyProps={{ variant: 'body2' }} />
                      </ListItem>
                    ))}
                    {plan.notIncluded.map(f => (
                      <ListItem key={f} sx={{ px: 0, py: 0.25 }}>
                        <ListItemIcon sx={{ minWidth: 28 }}>
                          <CancelOutlinedIcon color="disabled" sx={{ fontSize: 16 }} />
                        </ListItemIcon>
                        <ListItemText 
                          primary={f} 
                          primaryTypographyProps={{ variant: 'body2', color: 'text.disabled' }} 
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>

                <CardActions sx={{ p: 2, mt: 'auto' }}>
                  <Button 
                    fullWidth 
                    variant={plan.monthlyFee === 0 ? "outlined" : "contained"}
                    sx={{ 
                      bgcolor: plan.monthlyFee > 0 ? plan.color : 'transparent',
                      '&:hover': {
                        bgcolor: plan.monthlyFee > 0 ? plan.color : 'rgba(0,0,0,0.04)',
                        opacity: 0.9
                      }
                    }}
                    onClick={() => console.log('Plan selected:', plan.id)}
                  >
                    {plan.monthlyFee === 0 ? "Start Free" : "Choose Plan"}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>

      {/* BOTTOM NOTE */}
      <Paper variant="outlined" sx={{ p: 2, mt: 4, borderRadius: 2, bgcolor: 'background.default' }}>
        <Typography variant="body2" color="text.secondary" textAlign="center">
          🔒 No payment required upfront. Subscriptions are activated from your account dashboard 
          after your device is delivered and set up.
        </Typography>
      </Paper>

    </Container>
  );
};

export default ProductListing;
