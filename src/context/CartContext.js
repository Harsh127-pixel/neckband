import React, { createContext, useState, useMemo } from 'react';

/**
 * CartContext is the central storage for our shopping cart data.
 * It allows components anywhere in the app to access and modify the cart.
 */
export const CartContext = createContext();

/**
 * CartProvider is a wrapper component that provides the cart state and functions
 * to all child components using the React Context API.
 */
export const CartProvider = ({ children }) => {
  // State to store the list of products in the cart
  // Each item object structure: { id, name, tier, price, monthlyFee, quantity }
  const [cartItems, setCartItems] = useState([]);

  /**
   * addToCart(product)
   * Adds a product to the cart.
   * If the product already exists (checked by ID), it increments the quantity.
   * Otherwise, it adds the new product with a starting quantity of 1.
   */
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        // Increment quantity if item is already in the cart
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      // Add new item if it doesn't exist
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  /**
   * removeFromCart(id)
   * Removes a product entirely from the cart using its unique ID.
   */
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  /**
   * updateQuantity(id, quantity)
   * Updates the quantity of a specific item.
   * If the quantity is set to 0 or less, the item is removed from the cart.
   */
  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: quantity } : item
      )
    );
  };

  /**
   * clearCart()
   * Clears all items from the cart, resetting it to an empty array.
   */
  const clearCart = () => {
    setCartItems([]);
  };

  /**
   * cartTotal
   * Computed total price of all items in the cart (price * quantity).
   * useMemo optimizes performance so it only recalculates when cartItems change.
   */
  const cartTotal = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cartItems]);

  /**
   * cartCount
   * Total number of individual items currently in the cart.
   */
  const cartCount = useMemo(() => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  }, [cartItems]);

  // The value object contains everything we want to expose to other components
  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartTotal,
    cartCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
