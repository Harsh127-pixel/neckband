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
} from '@mui/material';
import {
  LocationOn as LocationOnIcon,
  Favorite as FavoriteIcon,
  Thermostat as ThermostatIcon,
  DirectionsRun as DirectionsRunIcon,
  Bedtime as BedtimeIcon,
  Water as WaterIcon,
  Pets as PetsIcon,
  InfoOutlined as InfoOutlinedIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

// --- DATA ---

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
    capabilities: ["Activity"],
    rating: 4.1,
    reviews: 312
  },
  {
    id: 2,
    name: "PawTrack Plus",
    sku: "PT-PLUS-002",
    price: 3999,
    originalPrice: 5999,
    color: ["Ocean Blue", "Forest Green", "Slate Grey"],
    sizes: ["Small (2–5 kg)", "Medium (5–15 kg)", "Large (15–40 kg)"],
    inStock: true,
    image: <LocationOnIcon />,
    badge: "Sale",
    description: "GPS-enabled neckband with heart rate monitoring for active dogs.",
    capabilities: ["GPS", "Pulse", "Activity"],
    rating: 4.5,
    reviews: 891
  },
  {
    id: 3,
    name: "PawTrack Pro",
    sku: "PT-PRO-003",
    price: 7999,
    originalPrice: 9999,
    color: ["Titanium", "Matte Black"],
    sizes: ["Small (2–5 kg)", "Medium (5–15 kg)", "Large (15–40 kg)", "XL (40+ kg)"],
    inStock: true,
    image: <ThermostatIcon />,
    badge: "Most Popular",
    description: "Full health suite neckband with temperature sensing, sleep analysis, and vet reports.",
    capabilities: ["GPS", "Pulse", "Temperature", "Activity", "Sleep", "Waterproof"],
    rating: 4.8,
    reviews: 1423
  },
  {
    id: 4,
    name: "PawTrack Mini",
    sku: "PT-MINI-004",
    price: 2499,
    originalPrice: null,
    color: ["Blush Pink", "Sky Blue", "Lemon Yellow"],
    sizes: ["XS (under 2 kg)", "Small (2–5 kg)"],
    inStock: true,
    image: <PetsIcon />,
    badge: "New",
    description: "Tiny and lightweight — built specifically for small breeds and puppies.",
    capabilities: ["Activity", "Pulse"],
    rating: 4.3,
    reviews: 204
  }
];

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

const NeckbandsPage = () => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" fontWeight={700} sx={{ fontFamily: "'DM Serif Display', serif", mb: 1 }}>
          Smart Neckbands
        </Typography>
        <Typography variant="body1" color="text.secondary">
          One-time purchase. Choose the right device for your dog's size and needs. 
          All devices include basic activity tracking for free.
        </Typography>
      </Box>

      <Grid container spacing={3}>
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
              <Box sx={{ 
                height: 160, 
                bgcolor: '#f0f4f8', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: 'primary.main',
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
                
                <Box sx={{ display: 'flex', alignItems: 'center', my: 0.5, gap: 0.5 }}>
                  <Rating value={product.rating} readOnly size="small" precision={0.1} />
                  <Typography variant="caption" color="text.secondary">
                    ({product.reviews})
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, my: 1.5 }}>
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

                <Typography variant="body2" color="text.secondary" sx={{ minHeight: '3em', mb: 2 }}>
                  {product.description}
                </Typography>

                <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                  {product.color.map(c => (
                    <Box 
                      key={c}
                      sx={{ width: 14, height: 14, borderRadius: '50%', bgcolor: COLOR_MAP[c] || '#ccc', border: "1px solid #ccc" }}
                      title={c}
                    />
                  ))}
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1 }}>
                  {product.price === 0 ? (
                    <Typography variant="h6" color="success.main" fontWeight={700}>Free</Typography>
                  ) : (
                    <Typography variant="h6" fontWeight={700}>₹{product.price}</Typography>
                  )}
                  {product.originalPrice && (
                    <Typography variant="body2" color="text.disabled" sx={{ textDecoration: 'line-through' }}>
                      ₹{product.originalPrice}
                    </Typography>
                  )}
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 0.5 }}>
                  <Typography variant="caption" color="text.secondary">Subscription optional</Typography>
                  <InfoOutlinedIcon sx={{ fontSize: 12, color: 'text.secondary' }} />
                </Box>
              </CardContent>

              <CardActions sx={{ p: 2, pt: 0, flexDirection: 'column', gap: 1 }}>
                <Button variant="contained" fullWidth onClick={() => addToCart(product)}>
                  {product.price === 0 ? "Get Free Device" : "Add to Cart"}
                </Button>
                <Button 
                  variant="text" 
                  size="small" 
                  fullWidth
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  View Full Specs
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default NeckbandsPage;
