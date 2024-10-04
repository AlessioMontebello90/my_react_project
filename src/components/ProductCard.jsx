import { Link } from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';

function ProductCard({ product }) {
  return (
    <Card sx={{ maxWidth: 345, boxShadow: 3, transition: '0.3s', '&:hover': { boxShadow: 6 } }}>
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 2 }}>
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
