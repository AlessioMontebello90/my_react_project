import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/CartContext';  // Assicurati che il CartProvider sia importato correttamente
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CartProvider>  {/* Avvolge l'applicazione */}
      <App />
    </CartProvider>
  </BrowserRouter>
);
