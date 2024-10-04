import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProductById } from '../api/products';
import { Grid, Typography, Button, Box } from '@mui/material';
import { useCart } from '../context/CartContext';
import CircularProgress from '@mui/material/CircularProgress';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);  // Aggiungi stato di caricamento
  const { addToCart } = useCart();

  useEffect(() => {
    setLoading(true);
    getProductById(id).then((data) => {
      setProduct(data);
      setLoading(false);
    });
  }, [id]);

  if (loading) return <CircularProgress sx={{ display: 'block', margin: 'auto', mt: 4 }} />;  // Spinner di caricamento

  if (!product) return <Typography variant="h6" textAlign="center">Prodotto non trovato</Typography>;

  return (
    <Box sx={{ padding: '40px 0' }}>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={product.image}
            alt={product.title}
            sx={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover',
              borderRadius: '8px',
              transition: '0.3s',
              '&:hover': { transform: 'scale(1.05)' }  // Effetto zoom sull'immagine
            }}
          />
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
            onClick={() => addToCart(product)}
            sx={{ mt: 2, width: '100%', py: 2 }}
          >
            Aggiungi al Carrello
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProductDetails;
