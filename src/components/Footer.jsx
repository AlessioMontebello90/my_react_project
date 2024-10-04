import { Box, Typography, Container } from '@mui/material';

function Footer() {
  return (
    <Box 
      component="footer" 
      sx={{
        backgroundColor: '#333',
        color: 'white',
        padding: '16px 0',
        textAlign: 'center',
        fontSize: '0.875rem',  // Font più piccolo
      }}
    >
      <Container>
        <Typography variant="body2">
          © 2024 E-Commerce. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
