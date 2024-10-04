import { Link } from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'; 

function ProductCard({ product }) {
  return (
    <Card
      sx={{
        maxWidth: 280,  // Ridotto per un layout più compatto
        boxShadow: 1,
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          boxShadow: 4,
          transform: 'scale(1.05)',
        },
        borderRadius: '10px', 
      }}
    >
      <LazyLoadImage
        src={product.image}
        alt={product.title}
        height={160}  // Immagini più compatte
        effect="blur"
        style={{ width: '100%', objectFit: 'cover', borderRadius: '10px 10px 0 0' }} 
      />
      <CardContent sx={{ padding: '12px' }}>
        <Typography gutterBottom variant="subtitle2" fontWeight="bold" sx={{ fontSize: '0.875rem' }}>
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 2, fontSize: '0.75rem' }}>
          ${product.price}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          size="small"
          component={Link}
          to={`/product/${product.id}`}
          sx={{ padding: '6px 0', fontSize: '0.75rem' }}
        >
          Vedi Dettagli
        </Button>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
