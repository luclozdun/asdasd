import { Typography, Button, Grid, IconButton, createTheme, ThemeProvider } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import wspEx from '../assets/img/contactImg/wspEx.png';
import imgBack from '../assets/img/contactImg/SectionbckColor.png';

const theme = createTheme({
    typography: {
      fontFamily: 'Alata',
    },
    palette: {
      primary: {
        main: '#46129A',
        light: '#AC92D3',
      },
      secondary: {
        main: '#A41836',
        light: '#EDD4EA',
      },
    },
  });

const backgroundStyle = {
    backgroundImage: `url(${imgBack})`, 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  };

const LandingPageComponent = () => {

    const textColor = '#ffffff'; 

    return (
        <div style={backgroundStyle}>
            <ThemeProvider theme={theme}>
            <Grid container style={{ padding: '1rem' }} spacing={4}>
                <Grid item xs={12} sm={6}>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
                        <div style={{ flex: 1 }} />
                        <div style={{ textAlign: 'center' }}>
                            <Typography variant="h3" gutterBottom style={{color: textColor}}>
                                ¿Necesitas más información sobre su registro?
                            </Typography>
                            <Typography variant="body1" paragraph style={{color: textColor}}>
                                Nuestros asesores estrán encantados de atenderte. Estamos las 24 horas para apoyarte.
                            </Typography>
                            <Button
                                variant="contained"
                                color="primary"
                                href="https://wa.me/1234567890"
                                target="_blank"
                                rel="a"
                            >
                                Contacta con nosotros
                            </Button>
                            <IconButton
                                aria-label="Contactar por Whatsapp"
                                href="https://wa.me/1234567890"
                                target="_blank"
                                rel="a"
                            >
                                <WhatsAppIcon />
                            </IconButton>
                        </div>
                        <div style={{ flex: 1 }} />
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={wspEx} alt="b" style={{ maxWidth: '100%', height: 'auto' }} />
                </Grid>
            </Grid>
            </ThemeProvider>
        </div>
    );
};

export default LandingPageComponent;
