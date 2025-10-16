import React, { createContext, useContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // 🔄 Fetch cart from backend on load
  useEffect(() => {
    fetch("http://localhost:5000/api/cart")
      .then(res => res.json())
      .then(data => setCart(data))
      .catch(err => console.error("Failed to load cart:", err));
  }, []);

  // ➕ Add item to cart (DB)
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [
          ...prevCart,
          {
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1,
          },
        ];
      }
    });
  };

  // ➖ Remove item from cart (DB) - decrements quantity by 1
  const removeFromCart = async (cartItemId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/cart/${cartItemId}`, { method: "DELETE" });
      const updatedItem = await response.json();
      
      // Update local state with the response from backend
      setCart(prevCart => 
        prevCart.map(item => 
          item.id === cartItemId ? updatedItem : item
        ).filter(item => item.id) // Remove if item was completely deleted
      );
    } catch (error) {
      console.error("Failed to remove item:", error);
    }
  };

  // 🧹 Clear cart (DB)
  const clearCart = async () => {
    await fetch("http://localhost:5000/api/cart/clear-all", { method: "DELETE" });
    setCart([]);
  };

  // 💰 Calculate total
  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      // Handle both direct price and nested product.price
      const price = item.price || (item.product?.price || 0);
      return total + price * (item.quantity || 1);
    }, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, getTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);