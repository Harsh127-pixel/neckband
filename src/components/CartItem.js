import React, { useContext } from 'react';
import {
  Box,
  Typography,
  IconButton,
  Chip,
  Divider,
  Stack,
  Tooltip,
} from '@mui/material';
import {
  Add as AddIcon,
  Remove as RemoveIcon,
  DeleteOutline as DeleteOutlineIcon,
} from '@mui/icons-material';
import { CartContext } from '../context/CartContext';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useContext(CartContext);

  /**
   * Quantity Control Logic:
   * We use the updateQuantity function from our context. 
   * - The '+' button increments the current quantity.
   * - The '-' button decrements the current quantity. 
   * Note: Our CartContext is programmed to automatically remove the item 
   * if updateQuantity is called with 0 or less.
   */

  return (
    <Box sx={{ py: 2 }}>
      <Stack 
        direction={{ xs: 'column', sm: 'row' }} 
        spacing={2} 
        alignItems="center" 
        justifyContent="space-between"
      >
        {/* Item Info */}
        <Box sx={{ flexGrow: 1, minWidth: 200 }}>
          <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 0.5 }}>
            <Typography variant="subtitle1" fontWeight="bold">
              {item.name}
            </Typography>
            <Chip 
              label={item.tier} 
              size="small" 
              variant="outlined" 
              color="primary"
              sx={{ height: 20, fontSize: '0.65rem' }} 
            />
          </Stack>
          <Typography variant="body2" color="text.secondary">
            ₹{item.price} per device
          </Typography>
        </Box>

        {/* Quantity Controls */}
        <Stack direction="row" alignItems="center" spacing={1}>
          <IconButton 
            size="small" 
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            aria-label="decrease quantity"
            sx={{ border: '1px solid', borderColor: 'divider' }}
          >
            <RemoveIcon fontSize="small" />
          </IconButton>
          
          <Typography sx={{ width: 30, textAlign: 'center', fontWeight: 'medium' }}>
            {item.quantity}
          </Typography>

          <IconButton 
            size="small" 
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            aria-label="increase quantity"
            sx={{ border: '1px solid', borderColor: 'divider' }}
          >
            <AddIcon fontSize="small" />
          </IconButton>
        </Stack>

        {/* Totals and Delete */}
        <Stack direction="row" alignItems="center" spacing={3} sx={{ minWidth: 120, justifyContent: 'flex-end' }}>
          <Box sx={{ textAlign: 'right' }}>
            <Typography variant="subtitle1" fontWeight="bold" color="primary.main">
              ₹{(item.price * item.quantity).toFixed(2)}
            </Typography>
          </Box>
          
          <Tooltip title="Remove item">
            <IconButton 
              color="error" 
              onClick={() => removeFromCart(item.id)}
              aria-label="remove item"
            >
              <DeleteOutlineIcon />
            </IconButton>
          </Tooltip>
        </Stack>
      </Stack>
      <Divider sx={{ mt: 2, borderStyle: 'dashed' }} />
    </Box>
  );
};

export default CartItem;
