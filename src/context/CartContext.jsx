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

  // Funzione per aggiungere un prodotto al carrello
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        // Se l'articolo esiste già nel carrello, incrementa la quantità
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      // Se l'articolo non esiste, aggiungilo con quantità 1
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  // Funzione per rimuovere un prodotto dal carrello
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Funzione per decrementare la quantità di un prodotto nel carrello
  const decrementQuantity = (id) => {
    setCartItems((prevItems) => {
      return prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    });
  };

  // Funzione per svuotare completamente il carrello
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, decrementQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Hook personalizzato per accedere al contesto del carrello
export function useCart() {
  return useContext(CartContext);
}
