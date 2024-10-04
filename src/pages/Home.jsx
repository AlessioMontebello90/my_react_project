import { useEffect, useState } from 'react';
import { getProducts } from '../api/products';
import ProductCard from '../components/ProductCard';
import FeaturedProductsCarousel from '../components/FeaturedProductsCarousel';
import { Box, Typography, Grid } from '@mui/material';

function Home() {
  const [products, setProducts] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    // Ottieni tutti i prodotti
    getProducts().then((data) => {
      setProducts(data);
      // Seleziona alcuni prodotti come "in evidenza"
      setFeaturedProducts(data.slice(0, 5));  // Mostra i primi 5 prodotti come esempio
    });
  }, []);

  return (
    <Box sx={{ padding: '40px' }}>
      {/* Carosello per i prodotti in evidenza */}
      {featuredProducts.length > 0 && <FeaturedProductsCarousel products={featuredProducts} />}

      {/* Lista di prodotti */}
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Tutti i Prodotti
      </Typography>
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Home;
