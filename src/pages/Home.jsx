import { useEffect, useState } from 'react';
import { getProducts } from '../api/products';
import ProductCard from '../components/ProductCard';
import { Container, Typography, Grid } from '@mui/material';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  return (
    <Container maxWidth="lg" sx={{ padding: '32px' }}>
      <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom>
        Catalogo Prodotti
      </Typography>
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Home;
