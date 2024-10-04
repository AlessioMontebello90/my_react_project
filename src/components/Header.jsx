import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <AppBar position="fixed" sx={{ zIndex: 10, padding: '8px 0' }}>
      <Toolbar>
        <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" component="div" sx={{ fontWeight: '500', fontSize: '1.25rem' }}>
            E-Commerce
          </Typography>
          <Box component="nav">
            <Button color="inherit" component={Link} to="/" sx={{ marginRight: '12px', fontSize: '0.875rem' }}>
              Home
            </Button>
            <Button color="inherit" component={Link} to="/cart" sx={{ fontSize: '0.875rem' }}>
              Cart
            </Button>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
