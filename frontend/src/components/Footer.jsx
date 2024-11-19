import { Box, Typography, Link, Container } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box 
      component="footer" 
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        py: 2,
        backgroundColor: (theme) => theme.palette.grey[200],
        textAlign: 'center',
        boxShadow: '0 -1px 5px rgba(0,0,0,0.1)',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" color="textSecondary">
          Realizado por Ignacio Gómez
        </Typography>
        <Box sx={{ mt: 1, display: 'flex', justifyContent: 'center', gap: 2 }}>
          <Link href="https://github.com/nachoogomez" target="_blank" underline="hover">
            <GitHubIcon />
          </Link>
          <Link href="https://www.linkedin.com/in/ignaciogomezskamelka/" target="_blank" underline="hover">
            <LinkedInIcon />
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

