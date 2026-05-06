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
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
} from '@mui/material';
import {
  Pets as PetsIcon,
  ShoppingCartOutlined as CartIcon,
  Menu as MenuIcon,
  Close as CloseIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Navbar = ({ onCartOpen }) => {
  const navigate = useNavigate();
  const { cartCount } = useContext(CartContext);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: 'Neckbands', path: '/neckbands' },
    { text: 'Subscriptions', path: '/subscriptions' },
    { text: 'Account', path: '/account' },
  ];

  const drawer = (
    <Box sx={{ width: 250, p: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h6" sx={{ fontFamily: "'DM Serif Display', serif", color: 'primary.main' }}>
          PawTrack
        </Typography>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton 
              onClick={() => {
                navigate(item.path);
                handleDrawerToggle();
              }}
              sx={{ borderRadius: 2, mb: 1 }}
            >
              <ListItemText 
                primary={item.text} 
                primaryTypographyProps={{ fontWeight: 600 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar 
      position="sticky" 
      elevation={0} 
      sx={{ 
        bgcolor: 'white', 
        borderBottom: '1px solid', 
        borderColor: 'divider',
        color: 'text.primary',
        zIndex: 1100
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {/* Mobile Menu Icon */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 1, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>

            <Box 
              sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
              onClick={() => navigate('/')}
            >
              <PetsIcon sx={{ color: 'primary.main', mr: 1, fontSize: { xs: 24, sm: 30 } }} />
              <Box>
                <Typography 
                  variant="h5" 
                  sx={{ 
                    fontFamily: "'DM Serif Display', serif", 
                    lineHeight: 1,
                    color: 'primary.main',
                    fontWeight: 'bold',
                    fontSize: { xs: '1.2rem', sm: '1.5rem' }
                  }}
                >
                  PawTrack
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Desktop Navigation */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, sm: 2 } }}>
            <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2 }}>
              {menuItems.map((item) => (
                <Button 
                  key={item.text}
                  color="inherit" 
                  onClick={() => navigate(item.path)}
                  sx={{ fontWeight: 600 }}
                >
                  {item.text}
                </Button>
              ))}
            </Box>
            
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

          {/* Mobile Drawer */}
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{ keepMounted: true }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 },
            }}
          >
            {drawer}
          </Drawer>

        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
