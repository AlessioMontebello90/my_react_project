import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Creazione del tema personalizzato di Material-UI
const theme = createTheme({
  palette: {
    background: {
      default: '#f7fafc',
    },
    primary: {
      main: '#1976d2',  // Blu principale di Material-UI
    },
    secondary: {
      main: '#f50057',  // Rosa acceso per il colore secondario
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CartProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />  {/* Reset dei CSS globali con Material-UI */}
        <App />
      </ThemeProvider>
    </CartProvider>
  </BrowserRouter>
);
