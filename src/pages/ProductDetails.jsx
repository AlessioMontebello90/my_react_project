import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProductById } from '../api/products';
import { Container, Typography, Button, Grid, Box } from '@mui/material';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(id).then((data) => setProduct(data));
  }, [id]);

  if (!product) return <Typography variant="h6" textAlign="center">Loading...</Typography>;

  return (
    <Container maxWidth="lg" sx={{ padding: '32px' }}>
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        {product.title}
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={6}>
          <Box component="img" src={product.image} alt={product.title} sx={{ width: '100%', objectFit: 'cover' }} />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Typography variant="body1" paragraph>
            {product.description}
          </Typography>
          <Typography variant="h5" fontWeight="bold" mb={4}>
            Prezzo: ${product.price}
          </Typography>
          <Button variant="contained" color="primary" size="large">
            Aggiungi al Carrello
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ProductDetails;
