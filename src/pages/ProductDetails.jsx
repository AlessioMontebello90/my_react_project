import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProductById } from '../api/products';
import { Grid, Typography, Button, Box, Snackbar, Alert } from '@mui/material';
import { useCart } from '../context/CartContext';
import CircularProgress from '@mui/material/CircularProgress';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();
  const [openSnackbar, setOpenSnackbar] = useState(false);

  useEffect(() => {
    setLoading(true);
    getProductById(id).then((data) => {
      setProduct(data);
      setLoading(false);
    });
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product);
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  if (loading) return <CircularProgress sx={{ display: 'block', margin: 'auto', mt: 4 }} />;

  if (!product) return <Typography variant="h6" textAlign="center">Prodotto non trovato</Typography>;

  return (
    <Box sx={{ padding: '40px 0' }}>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Zoom>
            <img
              src={product.image}
              alt={product.title}
              style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '8px' }}
            />
          </Zoom>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            {product.title}
          </Typography>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            {product.description}
          </Typography>
          <Typography variant="h4" color="primary" sx={{ fontWeight: 'bold', my: 2 }}>
            ${product.price}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleAddToCart}
            sx={{ mt: 2, width: '100%', py: 2 }}
          >
            Aggiungi al Carrello
          </Button>
        </Grid>
      </Grid>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          Prodotto aggiunto al carrello!
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default ProductDetails;
