import React, { useContext } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Box,
  Button,
  Container,
} from '@mui/material';
import {
  Pets as PetsIcon,
  ShoppingCartOutlined as CartIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

/**
 * Navbar Component
 * 
 * Provides global navigation and access to the shopping cart.
 * Uses Material UI AppBar for a sticky, consistent top-of-page experience.
 */
const Navbar = ({ onCartOpen }) => {
  const navigate = useNavigate();
  const { cartCount } = useContext(CartContext);

  return (
    <AppBar 
      position="sticky" 
      elevation={0} 
      sx={{ 
        bgcolor: 'white', 
        borderBottom: '1px solid', 
        borderColor: 'divider',
        color: 'text.primary'
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          
          {/* LEFT SECTION: Logo and Branding */}
          <Box 
            sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
            onClick={() => navigate('/')}
          >
            <PetsIcon sx={{ color: 'primary.main', mr: 1, fontSize: 30 }} />
            <Box>
              <Typography 
                variant="h5" 
                sx={{ 
                  fontFamily: "'DM Serif Display', serif", 
                  lineHeight: 1,
                  color: 'primary.main',
                  fontWeight: 'bold'
                }}
              >
                PawTrack
              </Typography>
              <Typography 
                variant="caption" 
                sx={{ color: 'text.secondary', display: { xs: 'none', sm: 'block' } }}
              >
                Smart Neckband System
              </Typography>
            </Box>
          </Box>

          {/* RIGHT SECTION: Navigation and Actions */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Button 
              color="inherit" 
              onClick={() => navigate('/neckbands')}
              sx={{ fontWeight: 600, display: { xs: 'none', sm: 'block' } }}
            >
              Neckbands
            </Button>

            <Button 
              color="inherit" 
              onClick={() => navigate('/subscriptions')}
              sx={{ fontWeight: 600, display: { xs: 'none', sm: 'block' } }}
            >
              Subscriptions
            </Button>

            <Button 
              color="inherit" 
              onClick={() => navigate('/account')}
              sx={{ fontWeight: 600, display: { xs: 'none', sm: 'block' } }}
            >
              Account
            </Button>
            
            <IconButton 
              color="inherit" 
              onClick={onCartOpen}
              aria-label="open cart"
            >
              <Badge 
                badgeContent={cartCount} 
                color="secondary"
                sx={{ 
                  '& .MuiBadge-badge': { 
                    fontWeight: 'bold' 
                  } 
                }}
              >
                <CartIcon />
              </Badge>
            </IconButton>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
