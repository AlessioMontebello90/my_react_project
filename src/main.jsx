import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { ThemeProvider, createTheme } from '@mui/material/styles';

// Importa gli stili di slick-carousel direttamente qui
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Crea il tema globale
const theme = createTheme({
  typography: {
    fontFamily: '"Roboto", sans-serif',
  },
  palette: {
    primary: {
      main: '#d32f2f',
    },
    secondary: {
      main: '#f44336',
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CartProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </CartProvider>
  </BrowserRouter>
);
