import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import aboutUs from '/src/assets/img/aboutUsImag/princImg.png';
import title from '/src/assets/img/aboutUsImag/title.png';
import './Characteristics/Characteristics.css';

const AboutUs: React.FC = () => {
    return (
        <Container>
            <Box  > 
                <Box textAlign="center" my={5} marginTop={"150px"}>
                    <img src={title} width={"1396px"} height={"112px"}></img>
                    <Typography variant="body1"
                        component="p"
                        my={3}
                        sx={{
                            fontFamily: 'Poppins, sans-serif',
                            fontSize: '25px',
                            fontWeight: 500,
                            lineHeight: '37.5px',
                            letterSpacing: '-0.01em',
                            textAlign: 'center',
                            color: '#717177',
                        }}>
                        Somos Influgo y creemos que el éxito se logra a través de conexiones significativas. 
                        Por eso, ayudamos a influencers y emprendedores a forjar alianzas estratégicas para impulsar su crecimiento.
                    </Typography>
                </Box>

                <Box textAlign="center" mb={5}>
                    <img src={aboutUs} alt="Team" style={{ width: '1396px', height: '613px' }} />
                </Box>

                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <p
                            className='font-semibold text-white px-2 py-2 rounded-full inline gradiente max-lg:text-xs'
                            style={{
                                fontFamily: 'Poppins',
                                fontSize: '20px',
                                fontWeight: 700,
                                lineHeight: '30px',
                                letterSpacing: '-0.01em',
                                textAlign: 'left',
                                paddingLeft: 20,
                                paddingRight: 20
                            }}>
                            Misión
                        </p>
                        <Typography variant="body1" component="p" mt={2} sx={{
                            fontFamily: 'Poppins, sans-serif',
                            fontSize: '29px',
                            fontWeight: 500,
                            lineHeight: '46.8px',
                            letterSpacing: '-0.01em',
                            textAlign: 'left',
                            color: '#000000',
                        }}>
                            Facilitar la conexión entre empresarios e influencers emergentes.
                        </Typography>

                    </Grid>
                    <Grid item xs={12} md={6}>
                        <p
                            className='font-semibold text-white px-2 py-2 rounded-full inline gradiente max-lg:text-xs'
                            style={{
                                fontFamily: 'Poppins',
                                fontSize: '20px',
                                fontWeight: 700,
                                lineHeight: '30px',
                                letterSpacing: '-0.01em',
                                textAlign: 'left',
                                paddingLeft: 20,
                                paddingRight: 20
                            }}>
                            Visión
                        </p>
                        <Typography variant="body1" component="p" mt={2} sx={{
                            fontFamily: 'Poppins, sans-serif',
                            fontSize: '29px',
                            fontWeight: 500,
                            lineHeight: '46.8px',
                            letterSpacing: '-0.01em',
                            textAlign: 'left',
                            color: '#000000',
                        }}>
                            Buscamos liderar la conexión entre emprendedores locales para potenciar su éxito a nivel nacional.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            <br /><br /><br />
        </Container>
    );
};

export default AboutUs;
