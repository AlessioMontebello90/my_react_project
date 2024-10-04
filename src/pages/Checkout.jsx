import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Container, TextField, Button, Typography, Box } from '@mui/material';

function Checkout() {
  const { cartItems, setCartItems } = useCart();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Order placed by ${name} to ${address}`);
    setCartItems([]);  // Svuota il carrello al termine
  };

  if (cartItems.length === 0) return <Typography variant="h5" textAlign="center">Your cart is empty</Typography>;

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Checkout
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          fullWidth
        />
        <TextField
          label="Address"
          variant="outlined"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
          fullWidth
        />
        <Button type="submit" variant="contained" color="primary" size="large" sx={{ mt: 2 }}>
          Place Order
        </Button>
      </Box>
    </Container>
  );
}

export default Checkout;
