import Slider from "react-slick";
import { Box, Typography, Button, Card, CardMedia, CardContent } from "@mui/material";
import { Link } from "react-router-dom";

// Esempio di array di prodotti in evidenza
const featuredProducts = [
  { id: 1, title: "Prodotto 1", image: "/images/prod1.jpg", price: 29.99 },
  { id: 2, title: "Prodotto 2", image: "/images/prod2.jpg", price: 39.99 },
  { id: 3, title: "Prodotto 3", image: "/images/prod3.jpg", price: 19.99 },
  { id: 4, title: "Prodotto 4", image: "/images/prod4.jpg", price: 49.99 },
];

function FeaturedProductsCarousel() {
  // Impostazioni del carosello
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ padding: "40px 0" }}>
      <Typography variant="h4" textAlign="center" fontWeight="bold" gutterBottom>
        Prodotti in Evidenza
      </Typography>
      <Slider {...settings}>
        {featuredProducts.map((product) => (
          <Box key={product.id} sx={{ padding: "0 10px" }}>
            <Card sx={{ boxShadow: 3 }}>
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.title}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Prezzo: ${product.price}
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
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

export default FeaturedProductsCarousel;
