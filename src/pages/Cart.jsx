import { useCart } from '../context/CartContext';
import { Container, Typography, Button, Divider, Box } from '@mui/material';

function Cart() {
  const { cartItems, removeFromCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <Container sx={{ textAlign: 'center', padding: '40px' }}>
        <Typography variant="h5">Il carrello è vuoto</Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ padding: '40px' }}>
      <Typography variant="h4" fontWeight="bold" textAlign="center" mb={4}>
        Il tuo carrello
      </Typography>
      {cartItems.map((item) => (
        <Box key={item.id} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 0' }}>
          <Typography variant="h6">{item.title}</Typography>
          <Typography variant="body1">${item.price}</Typography>
          <Button color="error" onClick={() => removeFromCart(item.id)}>
            Rimuovi
          </Button>
          <Divider />
        </Box>
      ))}
      <Typography variant="h5" fontWeight="bold" mt={4}>
        Totale: ${cartItems.reduce((acc, item) => acc + item.price, 0)}
      </Typography>
    </Container>
  );
}

export default Cart;
