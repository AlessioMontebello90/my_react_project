import { AppBar, Toolbar, Typography, Button, Container, Box, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import { useState, useEffect } from 'react';

function Header() {
  const [elevated, setElevated] = useState(false);

  // Effetto dinamico per cambiare l'elevazione dell'AppBar quando si scorre verso il basso
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setElevated(true);
      } else {
        setElevated(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AppBar position="fixed" sx={{ zIndex: 10 }} elevation={elevated ? 4 : 0}>
      <Toolbar>
        <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
            E-Commerce
          </Typography>
          <Box component="nav">
            <IconButton color="inherit" component={Link} to="/" sx={{ marginRight: '16px' }}>
              <HomeIcon />
            </IconButton>
            <IconButton color="inherit" component={Link} to="/cart">
              <ShoppingCartIcon />
            </IconButton>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
