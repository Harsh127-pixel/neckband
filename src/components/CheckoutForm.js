import React, { useState, useContext, useEffect } from 'react';
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  TextField,
  Grid,
  Paper,
  Tabs,
  Tab,
  Alert,
  Chip,
  Stack,
  Divider,
} from '@mui/material';
import {
  CheckCircleOutline as SuccessIcon,
  CreditCard as CardIcon,
  AccountBalanceWallet as UpiIcon,
} from '@mui/icons-material';
import { CartContext } from '../context/CartContext';

const steps = ['Shipping Info', 'Payment', 'Confirmation'];

const CheckoutForm = () => {
  const { cartItems, cartTotal, clearCart } = useContext(CartContext);
  const [activeStep, setActiveStep] = useState(0);
  const [paymentTab, setPaymentTab] = useState(0);
  
  // Local state for order summary (to keep after cart is cleared)
  const [orderSummary, setOrderSummary] = useState({ items: [], total: 0 });

  // Form state
  const [formData, setFormData] = useState({
    fullName: '', email: '', phone: '', address1: '', city: '', state: '', zip: '', country: 'India'
  });

  /**
   * Stepper Logic:
   * We use the activeStep state to track progress.
   * On reaching the final step (2), we save the cart summary and clear the global cart state.
   */
  const handleNext = () => {
    if (activeStep === 1) {
      // Logic for moving from Payment to Confirmation
      setOrderSummary({ items: [...cartItems], total: cartTotal });
      clearCart();
    }
    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => setActiveStep((prev) => prev - 1);

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Simple validation to ensure shipping info is filled
  const isShippingValid = () => {
    return formData.fullName && formData.email && formData.address1 && formData.city && formData.zip;
  };

  return (
    <Box sx={{ width: '100%', py: 4 }}>
      <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 4 }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Paper variant="outlined" sx={{ p: { xs: 2, md: 4 }, borderRadius: 2 }}>
        
        {/* STEP 1: SHIPPING INFO */}
        {activeStep === 0 && (
          <Box component="form">
            <Typography variant="h6" gutterBottom>Shipping Address</Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField required fullWidth label="Full Name" name="fullName" variant="outlined" value={formData.fullName} onChange={handleFormChange} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField required fullWidth label="Email Address" name="email" variant="outlined" value={formData.email} onChange={handleFormChange} />
              </Grid>
              <Grid item xs={12}>
                <TextField required fullWidth label="Address Line 1" name="address1" variant="outlined" value={formData.address1} onChange={handleFormChange} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="City" name="city" variant="outlined" value={formData.city} onChange={handleFormChange} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="State/Province" name="state" variant="outlined" value={formData.state} onChange={handleFormChange} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="ZIP / Postal Code" name="zip" variant="outlined" value={formData.zip} onChange={handleFormChange} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Country" name="country" variant="outlined" value={formData.country} disabled />
              </Grid>
            </Grid>
          </Box>
        )}

        {/* STEP 2: PAYMENT PLACEHOLDER */}
        {activeStep === 1 && (
          <Box>
            <Typography variant="h6" gutterBottom>Payment Method</Typography>
            <Alert severity="warning" sx={{ mb: 3 }}>
              Payment gateway integration is in development. This is a UI placeholder.
            </Alert>
            
            <Tabs value={paymentTab} onChange={(e, val) => setPaymentTab(val)} sx={{ mb: 3 }}>
              <Tab icon={<CardIcon />} label="Credit / Debit Card" iconPosition="start" />
              <Tab icon={<UpiIcon />} label="UPI" iconPosition="start" />
            </Tabs>

            {paymentTab === 0 ? (
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField fullWidth label="Card Number" placeholder="XXXX XXXX XXXX XXXX" disabled />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Expiry Date" placeholder="MM/YY" disabled />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="CVV" placeholder="***" disabled />
                </Grid>
              </Grid>
            ) : (
              <Box>
                <TextField fullWidth label="UPI ID" placeholder="username@upi" disabled sx={{ mb: 2 }} />
                <Stack direction="row" spacing={1}>
                  <Chip label="Google Pay" variant="outlined" size="small" />
                  <Chip label="PhonePe" variant="outlined" size="small" />
                  <Chip label="Paytm" variant="outlined" size="small" />
                </Stack>
              </Box>
            )}
          </Box>
        )}

        {/* STEP 3: CONFIRMATION */}
        {activeStep === 2 && (
          <Box sx={{ textAlign: 'center', py: 2 }}>
            <SuccessIcon sx={{ fontSize: 80, color: 'success.main', mb: 2 }} />
            <Typography variant="h4" gutterBottom sx={{ fontFamily: "'DM Serif Display', serif" }}>
              Order Placed! 🎉
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Thank you, {formData.fullName}. Your PawTrack device will ship within 2-3 business days.
            </Typography>
            
            <Paper variant="outlined" sx={{ p: 2, mt: 3, textAlign: 'left', bgcolor: 'background.default' }}>
              <Typography variant="subtitle2" gutterBottom>Order Summary:</Typography>
              <Divider sx={{ mb: 1 }} />
              {orderSummary.items.map((item) => (
                <Box key={item.id} sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                  <Typography variant="body2">{item.name} x {item.quantity}</Typography>
                  <Typography variant="body2">${(item.price * item.quantity).toFixed(2)}</Typography>
                </Box>
              ))}
              <Divider sx={{ my: 1 }} />
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="subtitle1" fontWeight="bold">Total Paid:</Typography>
                <Typography variant="subtitle1" fontWeight="bold">${orderSummary.total.toFixed(2)}</Typography>
              </Box>
            </Paper>
          </Box>
        )}

        {/* NAVIGATION BUTTONS */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4 }}>
          {activeStep !== 2 && (
            <Button disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
              Back
            </Button>
          )}
          {activeStep === 0 && (
            <Button variant="contained" onClick={handleNext} disabled={!isShippingValid()}>
              Next
            </Button>
          )}
          {activeStep === 1 && (
            <Button variant="contained" color="primary" onClick={handleNext}>
              Place Order
            </Button>
          )}
          {activeStep === 2 && (
            <Button variant="contained" href="/">
              Return Home
            </Button>
          )}
        </Box>
      </Paper>
    </Box>
  );
};

export default CheckoutForm;
