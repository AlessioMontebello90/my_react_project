import { useCart } from '../context/CartContext';
import { Grid, Typography, Button, Box, IconButton, Divider, Snackbar, Alert } from '@mui/material';
import { Add, Remove, Delete } from '@mui/icons-material';
import { useState } from 'react';

function Cart() {
  const { cartItems, addToCart, decrementQuantity, removeFromCart } = useCart();
  const [total, setTotal] = useState(0);
  const [openSnackbar, setOpenSnackbar] = useState(false);  // Stato per la notifica
  const [snackbarMessage, setSnackbarMessage] = useState('');  // Messaggio della notifica

  // Calcola il totale ogni volta che cambia il contenuto del carrello
  useState(() => {
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotal(totalPrice);
  }, [cartItems]);

  // Funzione per gestire l'apertura della Snackbar con un messaggio personalizzato
  const handleOpenSnackbar = (message) => {
    setSnackbarMessage(message);
    setOpenSnackbar(true);
  };

  // Funzione per chiudere la Snackbar
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  if (cartItems.length === 0) return <Typography variant="h6" textAlign="center">Il carrello è vuoto</Typography>;

  return (
    <Box sx={{ padding: '40px' }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Il tuo carrello
      </Typography>
      <Grid container spacing={4}>
        {cartItems.map((item) => (
          <Grid key={item.id} item xs={12} sm={6} md={4}>
            <Box sx={{ border: '1px solid #ddd', padding: '16px', borderRadius: '8px' }}>
              <img src={item.image} alt={item.title} style={{ width: '100%', height: 'auto', marginBottom: '16px' }} />
              <Typography variant="h6" gutterBottom>{item.title}</Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Prezzo: ${item.price}
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <IconButton onClick={() => {
                    decrementQuantity(item.id);
                    handleOpenSnackbar(`Quantità di ${item.title} aggiornata a ${item.quantity - 1}`);
                  }} color="primary">
                    <Remove />
                  </IconButton>
                  <Typography variant="body1" sx={{ mx: 2 }}>{item.quantity}</Typography>
                  <IconButton onClick={() => {
                    addToCart(item);
                    handleOpenSnackbar(`Quantità di ${item.title} aggiornata a ${item.quantity + 1}`);
                  }} color="primary">
                    <Add />
                  </IconButton>
                </Box>
                <IconButton onClick={() => {
                  removeFromCart(item.id);
                  handleOpenSnackbar(`${item.title} rimosso dal carrello`);
                }} color="error">
                  <Delete />
                </IconButton>
              </Box>
              <Divider />
            </Box>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ marginTop: '40px', textAlign: 'center' }}>
        <Typography variant="h5" fontWeight="bold">
          Totale: ${total.toFixed(2)}
        </Typography>
        <Button variant="contained" color="primary" size="large" sx={{ marginTop: '16px' }}>
          Procedi al Checkout
        </Button>
      </Box>

      {/* Snackbar per le notifiche */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}  // La notifica scompare dopo 3 secondi
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default Cart;
