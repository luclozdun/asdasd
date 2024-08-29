import { SetStateAction, useState } from 'react';
import { Container, Box, Grid, Button, Card, CardContent } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import iPhonephoneEx from '../assets/img/characteristicsImg/iPhonephoneEx.png';
import imgEx from '../assets/img/characteristicsImg/ImageimgEx.png';
import icon1 from '../assets/img/characteristicsImg/Iconscrece.png';
import icon2 from '../assets/img/characteristicsImg/Iconsmone.png';
import icon3 from '../assets/img/characteristicsImg/Iconsana.png';
import icon4 from '../assets/img/characteristicsImg/Iconstiem.png';
import Accordion, { AccordionSlots } from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from '@mui/material/Fade';


const influencerFeatures = [
    { icon: <SearchIcon fontSize="large" />, title: 'Busca', description: 'Explora marcas, eventos y colaboraciones' },
    { icon: <ContactMailIcon fontSize="large" />, title: 'Contacta', description: 'Explora marcas, eventos y colaboraciones' },
    { icon: <MonetizationOnIcon fontSize="large" />, title: 'Monetiza', description: 'Explora marcas, eventos y colaboraciones' }
];

const entrepreneurFeatures = [
    { icon: <SearchIcon fontSize="large" />, title: 'Busca', description: 'Explora oportunidades de negocio y colaboraciones' },
    { icon: <ContactMailIcon fontSize="large" />, title: 'Contacta', description: 'Conecta con otros emprendedores y socios' },
    { icon: <MonetizationOnIcon fontSize="large" />, title: 'Monetiza', description: 'Encuentra inversores y socios comerciales' }
];

const influencerFooterItems = [
    { img: icon1,title: 'Crece en redes sociales', description: 'Genera contenido para tus redes sociales con todas las marcas' },
    { img: icon2,title: 'Monetiza tu contenido', description: 'Impulsa tus colaboraciones y generarás ganancias' },
    { img: icon3,title: 'Analiza competidores', description: 'Ve como tus competidores e otros influencers están en el mercado' },
    { img: icon4,title: 'Ahorra tiempo', description: 'Hay variedad de ofertas de marcas listas y esperando para colaborar' },
];

const entrepreneurFooterItems = [
    { img: icon1,title: 'Encuentra inversores', description: 'Conecta con potenciales inversores para tu negocio' },
    { img: icon2,title: 'Expande tu red', description: 'Amplía tu red de contactos y socios comerciales' },
    { img: icon3,title: 'Analiza el mercado', description: 'Obtén insights sobre el mercado y competidores' },
    { img: icon4,title: 'Ahorra tiempo', description: 'Accede a herramientas y recursos que facilitan la gestión de tu negocio' },
];

function Characteristics() {

    const [selection, setSelection] = useState('influencer');

    const handleSelection = (type: SetStateAction<string>) => {
        setSelection(type);
    };

    const features = selection === 'influencer' ? influencerFeatures : entrepreneurFeatures;
    const footerItems = selection === 'influencer' ? influencerFooterItems : entrepreneurFooterItems;

    return (
        <Box
            sx={{
                background: 'linear-gradient(90deg, #ae154e 10%, #1c10bb 90%)',
                border: 'none',
                mt: 10,
                padding: '20px 0',
                margin: '0px'
            }}>
            <Container>
                {/* Header */}
                <Box textAlign="center" my={4}>
                    <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: 'white' }}>
                        Conoce lo que tenemos para ti
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom sx={{ color: 'white' }}>
                        Emprende nuevas alianzas y haz que tu impacto se multiplique
                    </Typography>
                    <Box mt={2}>
                        <Button
                            variant="contained"
                            //color={selection === 'influencer' ? 'primary' : 'default'} 
                            sx={{ mx: 1, backgroundColor: selection === 'influencer' ? '#3f51b5' : '#ffffff', color: selection === 'influencer' ? '#ffffff' : '#000000' }}
                            onClick={() => handleSelection('influencer')}
                        >
                            Soy influencer
                        </Button>
                        <Button
                            variant="contained"
                            //color={selection === 'entrepreneur' ? 'secondary' : 'default'} 
                            sx={{ mx: 1, backgroundColor: selection === 'entrepreneur' ? '#e91e63' : '#ffffff', color: selection === 'entrepreneur' ? '#ffffff' : '#000000' }}
                            onClick={() => handleSelection('entrepreneur')}
                        >
                            Soy emprendedor
                        </Button>
                    </Box>
                </Box>

                {/* Features List */}
                <Grid container spacing={4} justifyContent="center" my={4}>
                    <Grid item xs={6} alignItems="center">
                        <Box sx={{ display: 'flow', justifyContent: 'center', paddingLeft: '150px' }}>
                            {features.map((feature, index) => (
                                <Grid item xs={12} md={4} key={index} textAlign="center">
                                    <Box>
                                        {feature.icon}
                                        <Typography variant="h4" gutterBottom>
                                            {feature.title}
                                        </Typography>
                                        <Typography variant="body1" >
                                            {feature.description}
                                        </Typography>
                                        <br></br>
                                        <br></br>
                                    </Box>
                                </Grid>
                            ))}
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <img src={iPhonephoneEx} alt="Imagen" style={{ width: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                        </Box>
                    </Grid>
                </Grid>

                {/* Details Section */}
                <Box textAlign="center" my={4}>
                    <Typography variant="h5" gutterBottom>
                        Hazte notar y llega a nuevas audiencias
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        {selection === 'influencer'
                            ? 'Influgo te ofrece la oportunidad de aumentar tu visibilidad y conectar con audiencias globales, abriéndote las puertas a colaboraciones y oportunidades de crecimiento.'
                            : 'Nuestra plataforma te ayuda a encontrar y conectar con inversores, socios comerciales y otros emprendedores para hacer crecer tu negocio.'
                        }
                    </Typography>
                    <Grid container spacing={2} justifyContent="center" my={4}>
                        {footerItems.slice(0, 2).map((item, index) => (
                            <Grid item xs={12} md={4} key={index}>
                                <Typography variant="h6" gutterBottom>
                                    {item.title}
                                </Typography>
                                <Typography variant="body2">
                                    {item.description}
                                </Typography>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* Footer */}
                <Box my={4}>
                    <Grid container spacing={4} justifyContent="center">
                        {footerItems.map((item, index) => (
                            <Grid item xs={12} md={3} key={index}>
                                <Box sx={{
                                    position: 'relative',
                                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                    padding: '10px'
                                }}>
                                    <img src={item.img} />                                    
                                    <Typography variant="h6" gutterBottom style={{ color: '#fff' }}>
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" style={{ color: '#fff' }}>
                                        {item.description}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
}

export default Characteristics;
