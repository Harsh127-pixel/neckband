import React, { useContext, useMemo, useState, useEffect } from 'react';
import {
  Box,
  Typography,
  IconButton,
  Button,
  Stack,
  Divider,
  Alert,
  Paper,
  Backdrop,
  useMediaQuery,
  GlobalStyles,
} from '@mui/material';
import {
  Close as CloseIcon,
  ShoppingCartOutlined as EmptyCartIcon,
  InfoOutlined as InfoIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { CartContext } from '../context/CartContext';
import CartItem from '../components/CartItem';

const CartPage = ({ open, onClose }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const { cartItems, cartTotal } = useContext(CartContext);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (!open) {
      setIsClosing(false);
    }
  }, [open]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 250);
  };

  const monthlyTotal = useMemo(() => {
    return cartItems.reduce((total, item) => total + ((item.monthlyFee || 0) * item.quantity), 0);
  }, [cartItems]);

  const handleCheckout = () => {
    onClose();
    navigate('/checkout');
  };

  if (!open && !isClosing) return null;

  const cartContent = (
    <>
      {/* HEADER */}
      <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          Your Cart ({cartItems.length})
        </Typography>
        <IconButton onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </Box>

      <Divider />

      {/* BODY */}
      <Box sx={{ flexGrow: 1, overflowY: 'auto', p: 2 }}>
        {cartItems.length === 0 ? (
          <Box sx={{ py: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', opacity: 0.6 }}>
            <EmptyCartIcon sx={{ fontSize: 60, mb: 2 }} />
            <Typography variant="subtitle1">Your cart is empty</Typography>
          </Box>
        ) : (
          <Stack spacing={0}>
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
            <Alert icon={<InfoIcon fontSize="inherit" />} severity="info" sx={{ mt: 3, mb: 1, borderRadius: 2 }}>
              Subscription billing begins only after device activation.
            </Alert>
          </Stack>
        )}
      </Box>

      {/* FOOTER */}
      {cartItems.length > 0 && (
        <Box sx={{ p: 3, bgcolor: 'background.paper', borderTop: '1px solid #eee' }}>
          <Stack spacing={1} sx={{ mb: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography color="text.secondary">Device Subtotal</Typography>
              <Typography fontWeight="bold">₹{cartTotal.toFixed(2)}</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography color="text.secondary">Monthly Total</Typography>
              <Typography color="secondary.main" fontWeight="bold">+₹{monthlyTotal.toFixed(2)}/mo</Typography>
            </Box>
          </Stack>

          <Stack spacing={2}>
            <Button variant="contained" fullWidth size="large" onClick={handleCheckout} sx={{ py: 1.5, fontWeight: 'bold' }}>
              Proceed to Checkout
            </Button>
            <Button variant="text" fullWidth onClick={handleClose} sx={{ color: 'text.secondary' }}>
              Continue Shopping
            </Button>
          </Stack>
        </Box>
      )}
    </>
  );

  return (
    <>
      <GlobalStyles styles={{
        '@keyframes fadeInScale': {
          from: { opacity: 0, transform: 'translate(-50%, -48%) scale(0.96)' },
          to: { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
        },
        '@keyframes slideDown': {
          from: { opacity: 0, transform: 'translateY(-12px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        '@keyframes slideUp': {
          from: { transform: 'translateY(100%)' },
          to: { transform: 'translateY(0)' },
        },
        '@keyframes slideDown_mobile': {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(100%)' },
        },
        '@keyframes fadeIn': {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        '@keyframes fadeOut': {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
      }} />

      <Backdrop 
        open={open && !isClosing} 
        onClick={handleClose}
        sx={{ 
          zIndex: 1200, 
          bgcolor: 'rgba(0,0,0,0.4)',
          animation: isClosing ? 'fadeOut 0.25s forwards' : 'fadeIn 0.2s forwards'
        }}
      />

      {isMobile ? (
        <Paper
          elevation={24}
          sx={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            width: '100%',
            maxHeight: '85vh',
            overflowY: 'auto',
            borderRadius: "20px 20px 0 0",
            zIndex: 1300,
            display: 'flex',
            flexDirection: 'column',
            animation: isClosing 
              ? 'slideDown_mobile 0.25s ease-in forwards' 
              : 'slideUp 0.28s cubic-bezier(0.32, 0.72, 0, 1) forwards'
          }}
        >
          <Box sx={{ width: 40, height: 4, borderRadius: 2, bgcolor: "#e0e0e0", margin: "12px auto 4px" }} />
          {cartContent}
        </Paper>
      ) : (
        <Paper
          elevation={12}
          sx={{
            position: 'fixed',
            top: 74,
            left: 0,
            right: 0,
            margin: '0 auto',
            width: 999,
            maxHeight: '80vh',
            overflowY: 'auto',
            borderRadius: 3,
            zIndex: 1300,
            display: 'flex',
            flexDirection: 'column',
            animation: isClosing 
              ? 'fadeOut 0.2s forwards' 
              : 'slideDown 0.2s ease-out forwards'
          }}
        >
          {cartContent}
        </Paper>
      )}
    </>
  );
};

export default CartPage;
