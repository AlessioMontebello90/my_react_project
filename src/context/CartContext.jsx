import { createContext, useContext, useState, useEffect } from 'react';

// Crea il contesto del carrello
const CartContext = createContext();

// Provider che avvolge i componenti e gestisce lo stato del carrello
export function CartProvider({ children }) {
  // Inizializza lo stato del carrello con i dati dal localStorage, se disponibili
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Effetto che aggiorna il localStorage ogni volta che cambia il carrello
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

// Hook personalizzato per accedere al contesto del carrello
export function useCart() {
  return useContext(CartContext);
}
