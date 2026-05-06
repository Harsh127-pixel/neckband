// App.js — Root component. Composes theme, routing, and global cart state.

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';

// Theme and Context
import theme from './theme/theme';
import { CartProvider } from './context/CartContext';

// Components
import Navbar from './components/Navbar';

// Pages
import LandingPage from './pages/LandingPage';
import NeckbandsPage from './pages/NeckbandsPage';
import SubscriptionsPage from './pages/SubscriptionsPage';
import CartPage from './pages/CartPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CheckoutPage from './pages/CheckoutPage';
import AccountPage from './pages/AccountPage';

function App() {
  /**
   * Cart Drawer State:
   * We manage the open/close state of the Cart Drawer here at the root
   * so that it can be triggered from the Navbar (header) regardless of
   * which page the user is currently on.
   */
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline kicks off MUI's default CSS reset */}
      <CssBaseline />
      
      <CartProvider>
        <Router>
          <Box 
            sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              minHeight: '100vh',
              bgcolor: 'background.default' 
            }}
          >
            {/* Navigation Header */}
            <Navbar onCartOpen={() => setIsCartOpen(true)} />

            {/* Shopping Cart Sidebar (Drawer) */}
            <CartPage 
              open={isCartOpen} 
              onClose={() => setIsCartOpen(false)} 
            />

            {/* Main Content Area */}
            <Box component="main" sx={{ flexGrow: 1 }}>
              <Routes>
                {/* Marketing Homepage */}
                <Route path="/" element={<LandingPage />} />
                
                {/* Shop / Product Catalog */}
                <Route path="/neckbands" element={<NeckbandsPage />} />
                <Route path="/product/:id" element={<ProductDetailPage />} />
                <Route path="/subscriptions" element={<SubscriptionsPage />} />
                
                {/* Checkout Flow */}
                <Route path="/checkout" element={<CheckoutPage />} />
                
                {/* User Account / Profile */}
                <Route path="/account" element={<AccountPage />} />
              </Routes>
            </Box>

            {/* Note: The Footer is integrated directly into the LandingPage for this marketing-heavy design. 
                Global footer could be added here if needed for all pages. */}
          </Box>
        </Router>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
