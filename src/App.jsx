import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';  
import Header from './components/Header';
import Footer from './components/Footer';
import { Box, Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Definisci il tema personalizzato basato sulla palette di colori
const theme = createTheme({
  palette: {
    primary: {
      main: '#d32f2f',  // Rosso principale
      dark: '#b71c1c',  // Rosso scuro
      light: '#ff6659', // Rosso chiaro
    },
    secondary: {
      main: '#333333',  // Grigio scuro
    },
    background: {
      default: '#f7f7f7', // Sfondo chiaro
    },
    warning: {
      main: '#ffeb3b',   // Giallo per gli accenti
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
    h1: {
      fontSize: '2rem',
      fontWeight: 'bold',
    },
    button: {
      textTransform: 'none',  // Disattiva maiuscolo automatico sui pulsanti
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline aiuta a resettare gli stili di base */}
      <CssBaseline />
      <Box display="flex" flexDirection="column" minHeight="100vh">
        <Header />
        <Container component="main" sx={{ flex: 1, py: 4 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Container>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
