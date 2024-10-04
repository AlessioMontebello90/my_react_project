import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <AppBar position="fixed" sx={{ zIndex: 10 }}>
      <Toolbar>
        <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
            E-Commerce
          </Typography>
          <Box component="nav">
            <Button color="inherit" component={Link} to="/" sx={{ marginRight: '16px' }}>
              Home
            </Button>
            <Button color="inherit" component={Link} to="/cart">
              Cart
            </Button>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
