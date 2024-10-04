import { useState } from 'react';
import { Box, TextField, Button, Typography, Grid } from '@mui/material';
import { useCart } from '../context/CartContext';

function Checkout() {
  const { cartItems, setCartItems } = useCart();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Logica per l'invio dell'ordine
    if (name && address) {
      setOrderPlaced(true);  // Mostra il messaggio di conferma
      setCartItems([]);  // Svuota il carrello
    }
  };

  if (orderPlaced) {
    return (
      <Box sx={{ padding: '40px', textAlign: 'center' }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Grazie per il tuo ordine, {name}!
        </Typography>
        <Typography variant="body1" gutterBottom>
          Il tuo ordine verrà spedito a: {address}
        </Typography>
        <Typography variant="body1">
          Hai ordinato {cartItems.length} prodotti. Ti arriverà una mail con i dettagli.
        </Typography>
      </Box>
    );
  }

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ padding: '40px', maxWidth: '600px', margin: 'auto' }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Checkout
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            label="Nome completo"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Indirizzo di spedizione"
            fullWidth
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ padding: '12px' }}
          >
            Completa l'Ordine
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Checkout;
