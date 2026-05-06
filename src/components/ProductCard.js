import React, { useContext } from 'react';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
  Chip,
  Tooltip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material';
import {
  LocationOn as LocationOnIcon,
  Favorite as FavoriteIcon,
  Thermostat as ThermostatIcon,
  DirectionsRun as DirectionsRunIcon,
  Bedtime as BedtimeIcon,
  Water as WaterIcon,
  Check as CheckIcon,
  Star as StarIcon,
} from '@mui/icons-material';
import { CartContext } from '../context/CartContext';

/**
 * capabilityIconMap
 * This object maps product capability strings (from our data) to specific 
 * MUI Icons and colors. This ensures a consistent look across all cards.
 */
const capabilityIconMap = {
  GPS: { icon: LocationOnIcon, color: '#2070B0', label: 'GPS Tracking' },
  Pulse: { icon: FavoriteIcon, color: '#E91E63', label: 'Pulse Monitoring' },
  Temperature: { icon: ThermostatIcon, color: '#FF9800', label: 'Temperature Sensor' },
  Activity: { icon: DirectionsRunIcon, color: '#4CAF50', label: 'Activity Tracking' },
  Sleep: { icon: BedtimeIcon, color: '#9C27B0', label: 'Sleep Analysis' },
  Waterproof: { icon: WaterIcon, color: '#00BCD4', label: 'Waterproof' },
};

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  // Helper to determine tier chip styles
  const getTierChip = (tier) => {
    switch (tier) {
      case 'Free':
        return <Chip label="Free Version" size="small" sx={{ mb: 1 }} />;
      case 'Tier 1':
        return <Chip label="Advanced" color="primary" variant="outlined" size="small" sx={{ mb: 1 }} />;
      case 'Tier 2':
        return <Chip label="Premium Elite" color="primary" size="small" sx={{ mb: 1 }} />;
      default:
        return null;
    }
  };

  return (
    <Card 
      sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        position: 'relative',
        transition: 'transform 0.2s',
        '&:hover': { transform: 'scale(1.02)' }
      }}
    >
      {/* "Most Popular" Ribbon for Tier 2 products */}
      {product.tier === 'Tier 2' && (
        <Box
          sx={{
            position: 'absolute',
            top: 15,
            right: -30,
            bgcolor: 'secondary.main',
            color: 'white',
            px: 5,
            py: 0.5,
            transform: 'rotate(45deg)',
            zIndex: 1,
            boxShadow: 2,
          }}
        >
          <Typography variant="caption" fontWeight="bold">POPULAR</Typography>
        </Box>
      )}

      <CardContent sx={{ flexGrow: 1 }}>
        {/* Capability Icons Header */}
        <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
          {product.capabilities.map((cap) => {
            const config = capabilityIconMap[cap];
            if (!config) return null;
            const Icon = config.icon;
            return (
              <Tooltip key={cap} title={config.label} arrow>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    bgcolor: `${config.color}20`, // 20% opacity background
                    color: config.color,
                  }}
                >
                  <Icon sx={{ fontSize: 18 }} />
                </Box>
              </Tooltip>
            );
          })}
        </Box>

        {getTierChip(product.tier)}

        <Typography variant="h5" component="div" gutterBottom>
          {product.name}
        </Typography>

        <Typography variant="body2" color="text.secondary" paragraph>
          {product.description}
        </Typography>

        <Divider sx={{ my: 1.5 }} />

        <Typography variant="subtitle2" gutterBottom>Key Features:</Typography>
        <List dense sx={{ p: 0 }}>
          {product.features.map((feature, index) => (
            <ListItem key={index} disableGutters sx={{ py: 0.25 }}>
              <ListItemIcon sx={{ minWidth: 28 }}>
                <CheckIcon color="secondary" sx={{ fontSize: 16 }} />
              </ListItemIcon>
              <ListItemText 
                primary={feature} 
                primaryTypographyProps={{ variant: 'body2' }} 
              />
            </ListItem>
          ))}
        </List>
      </CardContent>

      <Box sx={{ p: 2, bgcolor: 'background.default' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <Box>
            <Typography variant="caption" color="text.secondary">Device Price</Typography>
            <Typography variant="h6" color="primary.main" fontWeight="bold">
              ${product.price}
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'right' }}>
            <Typography variant="caption" color="text.secondary">Subscription</Typography>
            <Typography variant="body1" fontWeight="600">
              ${product.monthlyFee}/mo
            </Typography>
          </Box>
        </Box>
      </Box>

      <CardActions sx={{ p: 2, pt: 0 }}>
        <Button 
          fullWidth 
          variant="contained" 
          startIcon={<StarIcon />}
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
