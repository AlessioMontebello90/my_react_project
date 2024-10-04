import { Box, Typography } from '@mui/material';

function Footer() {
  return (
    <Box 
      component="footer" 
      sx={{
        backgroundColor: 'gray.800',
        color: 'white',
        padding: '16px',
        marginTop: '32px',
        textAlign: 'center'
      }}
    >
      <Typography variant="body2">
        © 2024 E-Commerce. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
