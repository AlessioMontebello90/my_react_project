import { useEffect, useState } from 'react';
import { getProducts } from '../api/products';
import ProductCard from '../components/ProductCard';
import FeaturedProductsCarousel from '../components/FeaturedProductsCarousel';
import { Box, Typography, Grid, Container } from '@mui/material';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  return (
    <Container sx={{ paddingTop: '20px' }}>
      {/* Carosello dei prodotti in evidenza */}
      <FeaturedProductsCarousel />

      <Typography variant="h5" textAlign="center" fontWeight="bold" sx={{ mt: 6, mb: 4 }}>
        Catalogo Prodotti
      </Typography>

      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Home;
