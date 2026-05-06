import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Grid,
  Typography,
  Box,
  Button,
  Chip,
  Rating,
  Divider,
  Paper,
  Stack,
  Breadcrumbs,
  Link,
} from '@mui/material';
import {
  LocationOn as LocationOnIcon,
  Favorite as FavoriteIcon,
  Thermostat as ThermostatIcon,
  DirectionsRun as DirectionsRunIcon,
  Bedtime as BedtimeIcon,
  Water as WaterIcon,
  Pets as PetsIcon,
  ArrowBack as ArrowBackIcon,
  CheckCircle as CheckCircleIcon,
  LocalShipping as ShippingIcon,
  Verified as VerifiedIcon,
} from '@mui/icons-material';
import { CartContext } from '../context/CartContext';

// Re-using the same data structure for consistency
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
    description: "A lightweight starter neckband for basic daily tracking. Perfect for indoor pets or budget-conscious owners.",
    longDescription: "The PawTrack Lite is our entry-level smart neckband designed to give you essential insights into your pet's activity levels without any recurring fees. It's built from medical-grade silicone and features a 7-day battery life.",
    capabilities: ["Activity"],
    specs: {
      battery: "7 Days",
      weight: "22g",
      waterproof: "IP65 (Splash proof)",
      connectivity: "Bluetooth 5.0",
      material: "Hypoallergenic Silicone"
    },
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
    description: "GPS-enabled neckband with heart rate monitoring for active dogs.",
    longDescription: "Step up to real-time tracking with the PawTrack Plus. Featuring high-precision GPS and a continuous pulse monitor, you'll always know where your dog is and how their heart is performing during exercise.",
    capabilities: ["GPS", "Pulse", "Activity"],
    specs: {
      battery: "5 Days",
      weight: "28g",
      waterproof: "IP67 (Submersible)",
      connectivity: "LTE-M + GPS + Bluetooth",
      material: "Reinforced TPU"
    },
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
    description: "Full health suite neckband with temperature sensing, sleep analysis, and vet reports.",
    longDescription: "Our flagship device. The PawTrack Pro is a medical-grade health monitor for your dog. It tracks everything from internal temperature shifts to deep sleep cycles, providing you with monthly reports you can share directly with your vet.",
    capabilities: ["GPS", "Pulse", "Temperature", "Activity", "Sleep", "Waterproof"],
    specs: {
      battery: "10 Days",
      weight: "32g",
      waterproof: "IP68 (Swimming safe)",
      connectivity: "LTE-M + GPS + WiFi + BT",
      material: "Aerospace Titanium + Silicone"
    },
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
    description: "Tiny and lightweight — built specifically for small breeds and puppies.",
    longDescription: "Finally, a smart neckband for the little ones. The PawTrack Mini weighs less than an ounce but packs a punch with activity and pulse tracking tailored for smaller hearts and faster metabolisms.",
    capabilities: ["Activity", "Pulse"],
    specs: {
      battery: "4 Days",
      weight: "12g",
      waterproof: "IP67 (Submersible)",
      connectivity: "Bluetooth 5.0 + GPS",
      material: "Ultra-soft Silk Silicone"
    },
    rating: 4.3,
    reviews: 204
  }
];

const CAPABILITY_ICONS = {
  GPS: <LocationOnIcon />,
  Pulse: <FavoriteIcon />,
  Temperature: <ThermostatIcon />,
  Activity: <DirectionsRunIcon />,
  Sleep: <BedtimeIcon />,
  Waterproof: <WaterIcon />,
};

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const product = NECKBANDS.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <Container sx={{ py: 10, textAlign: 'center' }}>
        <Typography variant="h5">Product not found</Typography>
        <Button onClick={() => navigate('/neckbands')} sx={{ mt: 2 }}>Back to Neckbands</Button>
      </Container>
    );
  }

  return (
    <Box sx={{ bgcolor: '#f8fafc', minHeight: '100vh', pb: 10 }}>
      <Container maxWidth="lg" sx={{ pt: 4 }}>
        <Breadcrumbs sx={{ mb: 4 }}>
          <Link underline="hover" color="inherit" href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>Home</Link>
          <Link underline="hover" color="inherit" href="/neckbands" onClick={(e) => { e.preventDefault(); navigate('/neckbands'); }}>Neckbands</Link>
          <Typography color="text.primary">{product.name}</Typography>
        </Breadcrumbs>

        <Grid container spacing={6}>
          {/* LEFT: IMAGE AREA */}
          <Grid item xs={12} md={6}>
            <Paper 
              elevation={0} 
              sx={{ 
                borderRadius: 4, 
                bgcolor: 'white', 
                p: 8, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                border: '1px solid #e2e8f0',
                position: 'sticky',
                top: 100,
                color: 'primary.main',
                '& svg': { fontSize: 240, filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.1))' }
              }}
            >
              {product.image}
            </Paper>
          </Grid>

          {/* RIGHT: DETAILS AREA */}
          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant="overline" color="primary" sx={{ fontWeight: 800, letterSpacing: 2 }}>
                SMART HARDWARE
              </Typography>
              <Typography variant="h3" sx={{ fontFamily: "'DM Serif Display', serif", mb: 1, mt: 1 }}>
                {product.name}
              </Typography>
              
              <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Rating value={product.rating} readOnly precision={0.1} />
                  <Typography variant="subtitle2">({product.reviews} verified reviews)</Typography>
                </Box>
                <Divider orientation="vertical" flexItem />
                <Typography variant="caption" color="text.secondary">SKU: {product.sku}</Typography>
              </Stack>

              <Box sx={{ mb: 4 }}>
                <Stack direction="row" spacing={2} alignItems="baseline">
                  {product.price === 0 ? (
                    <Typography variant="h4" color="success.main" fontWeight={800}>Free Device</Typography>
                  ) : (
                    <Typography variant="h4" fontWeight={800}>₹{product.price}.00</Typography>
                  )}
                  {product.originalPrice && (
                    <Typography variant="h6" color="text.disabled" sx={{ textDecoration: 'line-through' }}>
                      ₹{product.originalPrice}
                    </Typography>
                  )}
                </Stack>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  * Subscription plans sold separately. Starts only after device activation.
                </Typography>
              </Box>

              <Typography variant="body1" sx={{ color: '#475569', lineHeight: 1.8, mb: 4 }}>
                {product.longDescription}
              </Typography>

              <Divider sx={{ mb: 4 }} />

              {/* COLORS & SIZES */}
              <Grid container spacing={4} sx={{ mb: 4 }}>
                <Grid item xs={6}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 2 }}>Available Colors</Typography>
                  <Stack direction="row" spacing={1}>
                    {product.color.map(c => (
                      <Box 
                        key={c} 
                        sx={{ 
                          width: 32, 
                          height: 32, 
                          borderRadius: '50%', 
                          border: '2px solid white', 
                          boxShadow: '0 0 0 1px #cbd5e1',
                          bgcolor: c.toLowerCase().includes('blue') ? '#1565c0' : 
                                   c.toLowerCase().includes('black') ? '#1a1a1a' :
                                   c.toLowerCase().includes('white') ? '#f8fafc' :
                                   c.toLowerCase().includes('green') ? '#2e7d32' :
                                   c.toLowerCase().includes('pink') ? '#f48fb1' :
                                   c.toLowerCase().includes('yellow') ? '#fdd835' : '#ccc'
                        }} 
                        title={c}
                      />
                    ))}
                  </Stack>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 2 }}>Sizes</Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {product.sizes.map(s => (
                      <Chip key={s} label={s.split(' ')[0]} variant="outlined" size="small" />
                    ))}
                  </Box>
                </Grid>
              </Grid>

              {/* TECHNICAL SPECS */}
              <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 2 }}>Technical Specifications</Typography>
              <Paper variant="outlined" sx={{ borderRadius: 3, p: 0, overflow: 'hidden', mb: 4 }}>
                {Object.entries(product.specs).map(([key, val], idx) => (
                  <Box 
                    key={key} 
                    sx={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      p: 1.5, 
                      bgcolor: idx % 2 === 0 ? 'transparent' : '#f8fafc',
                      borderBottom: idx === Object.entries(product.specs).length - 1 ? 'none' : '1px solid #e2e8f0'
                    }}
                  >
                    <Typography variant="body2" sx={{ color: 'text.secondary', textTransform: 'capitalize' }}>{key}</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>{val}</Typography>
                  </Box>
                ))}
              </Paper>

              {/* ADD TO CART */}
              <Stack direction="row" spacing={2}>
                <Button 
                  variant="contained" 
                  size="large" 
                  fullWidth 
                  sx={{ py: 2, borderRadius: 2, fontWeight: 700, fontSize: '1.1rem' }}
                  onClick={() => addToCart(product)}
                >
                  Add to Cart — ₹{product.price}
                </Button>
                <Button 
                  variant="outlined" 
                  size="large" 
                  sx={{ px: 4, borderRadius: 2 }}
                >
                  Save
                </Button>
              </Stack>

              <Stack direction="row" spacing={3} sx={{ mt: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <ShippingIcon sx={{ color: 'success.main', fontSize: 20 }} />
                  <Typography variant="caption" sx={{ fontWeight: 600 }}>Free Shipping</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <VerifiedIcon sx={{ color: 'success.main', fontSize: 20 }} />
                  <Typography variant="caption" sx={{ fontWeight: 600 }}>1-Year Warranty</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <CheckCircleIcon sx={{ color: 'success.main', fontSize: 20 }} />
                  <Typography variant="caption" sx={{ fontWeight: 600 }}>30-Day Returns</Typography>
                </Box>
              </Stack>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 10 }} />

        {/* FREQUENTLY BOUGHT TOGETHER */}
        <Box sx={{ mb: 10 }}>
          <Typography variant="h5" sx={{ fontFamily: "'DM Serif Display', serif", mb: 4 }}>
            Frequently Bought Together
          </Typography>
          <Grid container spacing={3}>
            {NECKBANDS.filter(p => p.id !== product.id).slice(0, 3).map((item) => (
              <Grid item key={item.id} xs={12} sm={4}>
                <Paper 
                  elevation={0} 
                  sx={{ 
                    p: 3, 
                    border: '1px solid #e2e8f0', 
                    borderRadius: 4, 
                    textAlign: 'center',
                    cursor: 'pointer',
                    '&:hover': { borderColor: 'primary.main', bgcolor: '#f1f5f9' }
                  }}
                  onClick={() => { navigate(`/product/${item.id}`); window.scrollTo(0,0); }}
                >
                  <Box sx={{ color: 'primary.main', mb: 2, '& svg': { fontSize: 40 } }}>{item.image}</Box>
                  <Typography variant="subtitle2" fontWeight={700}>{item.name}</Typography>
                  <Typography variant="body2" color="primary" fontWeight={600} sx={{ mt: 1 }}>₹{item.price}</Typography>
                  <Button size="small" sx={{ mt: 2 }}>Add Bundle</Button>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* REVIEWS & RATINGS */}
        <Grid container spacing={8}>
          {/* Rating Breakdown */}
          <Grid item xs={12} md={4}>
            <Box>
              <Typography variant="h5" sx={{ fontFamily: "'DM Serif Display', serif", mb: 2 }}>
                Customer Reviews
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1, mb: 1 }}>
                <Typography variant="h2" fontWeight={800}>{product.rating}</Typography>
                <Typography variant="h6" color="text.secondary">/ 5</Typography>
              </Box>
              <Rating value={product.rating} readOnly precision={0.1} sx={{ mb: 1 }} />
              <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
                Based on {product.reviews} verified reviews
              </Typography>

              {[5, 4, 3, 2, 1].map((star) => (
                <Box key={star} sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1.5 }}>
                  <Typography variant="caption" sx={{ minWidth: 40 }}>{star} Stars</Typography>
                  <Box sx={{ flexGrow: 1, height: 8, bgcolor: '#e2e8f0', borderRadius: 4, overflow: 'hidden' }}>
                    <Box sx={{ 
                      width: star === 5 ? '70%' : star === 4 ? '20%' : '5%', 
                      height: '100%', 
                      bgcolor: star >= 4 ? 'warning.main' : '#cbd5e1' 
                    }} />
                  </Box>
                  <Typography variant="caption" color="text.secondary" sx={{ minWidth: 30 }}>
                    {star === 5 ? '72%' : star === 4 ? '18%' : '2%'}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Individual Reviews */}
          <Grid item xs={12} md={8}>
            <Stack spacing={4}>
              {[
                { name: "Rahul S.", date: "2 days ago", comment: "Best smart collar I've used. The GPS is incredibly accurate even in dense areas.", rating: 5 },
                { name: "Priya K.", date: "1 week ago", comment: "Setup was a breeze. Love the design and it fits my Golden Retriever perfectly.", rating: 5 },
                { name: "Anish M.", date: "2 weeks ago", comment: "Good features for the price. Battery life is decent, lasts about 5 days.", rating: 4 }
              ].map((rev, i) => (
                <Box key={i}>
                  <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 1 }}>
                    <Rating value={rev.rating} size="small" readOnly />
                    <Typography variant="subtitle2" fontWeight={700}>{rev.name}</Typography>
                    <Typography variant="caption" color="text.secondary">• {rev.date}</Typography>
                  </Stack>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                    "{rev.comment}"
                  </Typography>
                  {i < 2 && <Divider sx={{ mt: 4 }} />}
                </Box>
              ))}
              <Button variant="outlined" sx={{ alignSelf: 'flex-start' }}>View All Reviews</Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProductDetailPage;
