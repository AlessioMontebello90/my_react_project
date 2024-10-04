import { Link } from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';

function ProductCard({ product }) {
  return (
    <Card
      sx={{
        maxWidth: { xs: '100%', sm: 345 },  // Rende la card responsiva
        boxShadow: 3,
        transition: '0.3s',
        '&:hover': {
          boxShadow: 6,
          transform: 'scale(1.03)'  // Leggero effetto di zoom su hover
        },
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.title}
        sx={{ transition: '0.3s', '&:hover': { transform: 'scale(1.1)' } }}  // Zoom sull'immagine
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
          {product.title}
        </Typography>
        <Typography
          variant="h5"
          color="primary"
          sx={{ fontWeight: 'bold', marginBottom: 2 }}
        >
          ${product.price}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          component={Link}
          to={`/product/${product.id}`}
        >
          Vedi Dettagli
        </Button>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
