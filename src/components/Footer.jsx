import { Box, Typography } from '@mui/material';

function Footer() {
  return (
    <Box 
      component="footer" 
      sx={{
        backgroundColor: 'primary.dark',  // Usa il colore scuro definito nel tema
        color: 'white',
        padding: '16px',
        marginTop: 'auto',  // Assicura che il footer stia in fondo
        textAlign: 'center'
      }}
    >
      <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
        © 2024 E-Commerce. All rights reserved.
      </Typography>
      <Typography variant="caption" sx={{ marginTop: '8px', display: 'block' }}>
        Powered by React & Material-UI
      </Typography>
    </Box>
  );
}

export default Footer;
