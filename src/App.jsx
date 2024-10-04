import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';  
import Header from './components/Header';
import Footer from './components/Footer';
import { Box, Container } from '@mui/material';

function App() {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Header />
      <Container component="main" sx={{ flex: 1, py: 2 }}>  {/* Ridotto padding */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Container>
      <Footer />
    </Box>
  );
}

export default App;
