import Slider from "react-slick";
import { Box, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getProducts } from "../api/products";  // Importa la funzione per ottenere i prodotti dall'API

function FeaturedProductsCarousel() {
  const [products, setProducts] = useState([]);

  // Effettua la chiamata all'API quando il componente è montato
  useEffect(() => {
    const fetchProducts = async () => {
      const productsFromAPI = await getProducts();  // Ottiene i prodotti dall'API
      setProducts(productsFromAPI);
    };

    fetchProducts();
  }, []);

  const settings = {
    dots: true,  // Mostra i puntini
    infinite: true,  // Loop infinito
    speed: 500,  // Velocità di transizione
    slidesToShow: 3,  // Mostra 3 immagini alla volta
    slidesToScroll: 1,  // Scorre 1 immagine alla volta
    autoplay: true,  // Abilita autoplay
    autoplaySpeed: 3000,  // Velocità autoplay
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
    arrows: true,  // Mostra frecce
  };

  return (
    <Box sx={{ padding: '40px 0', backgroundColor: '#f8f8f8' }}>
      <Container>
        {/* Titolo del carosello */}
        <Typography variant="h5" textAlign="center" fontWeight="bold" sx={{ mb: 4 }}>
          Prodotti in Evidenza
        </Typography>

        {/* Carosello */}
        <Slider {...settings}>
          {products.map((product) => (
            <Box
              key={product.id}
              sx={{
                padding: "0 10px",
                textAlign: 'center',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              {/* Immagine del prodotto */}
              <img
                src={product.image}  // Usa l'URL dell'immagine restituita dall'API
                alt={product.title}
                style={{
                  width: '250px',  // Larghezza uniforme
                  height: '250px',  // Altezza uniforme
                  objectFit: 'cover',  // Mantiene il rapporto d'aspetto
                  borderRadius: '10px',  // Angoli arrotondati
                  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',  // Ombra leggera
                }}
              />
            </Box>
          ))}
        </Slider>
      </Container>
    </Box>
  );
}

export default FeaturedProductsCarousel;
