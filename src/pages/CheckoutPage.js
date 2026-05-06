import React, { useContext, useEffect, useMemo } from 'react';
import {
  Container,
  Grid,
  Typography,
  Box,
  Paper,
  Button,
  Divider,
  Stack,
  Alert,
} from '@mui/material';
import {
  ArrowBack as ArrowBackIcon,
  InfoOutlined as InfoIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import CheckoutForm from '../components/CheckoutForm';

/**
 * CheckoutPage
 * 
 * This page provides a full-width experience for finalizing the order.
 * It combines the multi-step CheckoutForm with a sticky Order Summary panel.
 */
const CheckoutPage = () => {
  const navigate = useNavigate();
  const { cartItems, cartTotal } = useContext(CartContext);

  // Redirect if cart is empty (unless we are on the final confirmation step)
  // Note: CheckoutForm handles clearing the cart at the end, so we only 
  // check this on initial load.
  useEffect(() => {
    if (cartItems.length === 0) {
      // Small delay to allow the "Order Placed" state to show if they just finished
      const timer = setTimeout(() => {
        // Only redirect if there's no active order being displayed
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [cartItems, navigate]);

  // Calculate monthly recurring total
  const monthlyTotal = useMemo(() => {
    return cartItems.reduce((total, item) => total + (item.monthlyFee * item.quantity), 0);
  }, [cartItems]);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Back Button */}
      <Button 
        startIcon={<ArrowBackIcon />} 
        onClick={() => navigate('/')}
        sx={{ mb: 4 }}
      >
        Back to Products
      </Button>

      <Grid container spacing={4}>
        {/* LEFT COLUMN: Checkout Stepper Form */}
        <Grid item xs={12} md={7}>
          <CheckoutForm />
        </Grid>

        {/* RIGHT COLUMN: Order Summary Panel */}
        <Grid item xs={12} md={5}>
          <Paper 
            variant="outlined" 
            sx={{ 
              p: 3, 
              borderRadius: 2, 
              position: 'sticky', 
              top: 100,
              bgcolor: 'background.default'
            }}
          >
            <Typography variant="h6" gutterBottom fontWeight="bold">
              Order Summary
            </Typography>
            <Divider sx={{ mb: 2 }} />

            {/* List Items */}
            <Stack spacing={2} sx={{ mb: 3 }}>
              {cartItems.map((item) => (
                <Box key={item.id} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Box>
                    <Typography variant="body2" fontWeight="medium">{item.name}</Typography>
                    <Typography variant="caption" color="text.secondary">Qty: {item.quantity}</Typography>
                  </Box>
                  <Typography variant="body2">${(item.price * item.quantity).toFixed(2)}</Typography>
                </Box>
              ))}
              {cartItems.length === 0 && (
                <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                  Processing order...
                </Typography>
              )}
            </Stack>

            <Divider sx={{ mb: 2 }} />

            {/* Price Totals */}
            <Stack spacing={1} sx={{ mb: 3 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body2" color="text.secondary">Device Subtotal</Typography>
                <Typography variant="body2" fontWeight="bold">${cartTotal.toFixed(2)}</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body2" color="text.secondary">Monthly Subscription</Typography>
                <Typography variant="body2" color="secondary.main" fontWeight="bold">
                  +${monthlyTotal.toFixed(2)}/mo
                </Typography>
              </Box>
            </Stack>

            {/* Billing Note */}
            <Alert 
              icon={<InfoIcon fontSize="small" />} 
              severity="info" 
              variant="outlined"
              sx={{ bgcolor: 'white', borderRadius: 2 }}
            >
              <Typography variant="caption" sx={{ display: 'block', lineHeight: 1.4 }}>
                <strong>Activation Note:</strong> Your monthly subscription begins only after 
                you receive your device and activate it in the app.
              </Typography>
            </Alert>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CheckoutPage;
