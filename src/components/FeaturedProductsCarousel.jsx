import Slider from "react-slick";
import { Box, Typography, Button, Card, CardMedia, CardContent, Container } from "@mui/material";
import { Link } from "react-router-dom";

// Array di prodotti in evidenza come esempio
const featuredProducts = [
  { id: 1, title: "Prodotto 1", image: "/images/prod1.jpg", price: 29.99 },
  { id: 2, title: "Prodotto 2", image: "/images/prod2.jpg", price: 39.99 },
  { id: 3, title: "Prodotto 3", image: "/images/prod3.jpg", price: 19.99 },
  { id: 4, title: "Prodotto 4", image: "/images/prod4.jpg", price: 49.99 },
];

function FeaturedProductsCarousel() {
  // Impostazioni del carosello più compatte
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,  // Mostriamo 2 prodotti alla volta sui desktop
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,  // Mostra 1 slide su schermi più piccoli
          slidesToScroll: 1,
        },
      },
    ],
    arrows: true, // Aggiungiamo frecce per navigare
  };

  return (
    <Box sx={{ padding: '20px 0', backgroundColor: '#f8f8f8' }}>
      <Container>
        <Typography variant="h5" textAlign="center" fontWeight="bold" sx={{ mb: 3 }}>
          Prodotti in Evidenza
        </Typography>
        <Slider {...settings}>
          {featuredProducts.map((product) => (
            <Box key={product.id} sx={{ padding: "0 10px" }}>
              <Card sx={{ maxWidth: 240, margin: '0 auto', boxShadow: 2, borderRadius: '8px' }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={product.image}
                  alt={product.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="subtitle1" fontWeight="bold" sx={{ fontSize: '0.875rem' }}>
                    {product.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 2, fontSize: '0.75rem' }}>
                    Prezzo: ${product.price}
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
            </Box>
          ))}
        </Slider>
      </Container>
    </Box>
  );
}

export default FeaturedProductsCarousel;
