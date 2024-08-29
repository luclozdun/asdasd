import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import EmojiEventsTwoToneIcon from '@mui/icons-material/EmojiEventsTwoTone';
import GroupTwoToneIcon from '@mui/icons-material/GroupTwoTone';
import HandshakeTwoToneIcon from '@mui/icons-material/HandshakeTwoTone';
import SentimentSatisfiedTwoToneIcon from '@mui/icons-material/SentimentSatisfiedTwoTone';

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: 'Alata', // Reemplaza "Nombre de la fuente" con el nombre de la fuente que elegiste.
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


export const Functionality = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box id="Functionality">
                <Container
                    sx={{
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: { xs: 3, sm: 6 },
                        marginBottom: 20
                    }}
                >
                    <Box sx={{
                        width: { sm: '100%', md: '60%' },
                        textAlign: { sm: 'left', md: 'center' },
                    }}
                    >
                        <Typography component="h2" variant="h4" color="#006BFF"
                            sx={{
                                fontWeight: 'semi-bold',
                            }}
                        >
                            ¿Cómo funciona Influgo?
                        </Typography>
                        <Typography component="h1" color="#006BFF"
                            sx={{
                                fontWeight: 'light',
                            }}
                        >
                            Crea experiencias auténticas con unos pocos clics
                        </Typography>
                    </Box>
                    <Container
                        sx={{
                            display: 'flex',
                            //flexWrap: 'wrap', // Allows items to wrap to the next line if necessary
                            padding: theme.spacing(1),
                            textAlign: 'center',
                            backgroundColor: '#cce1ff',
                            borderColor: '#ebf3ff',
                            borderWidth: 6,
                            borderRadius: 10,
                            flexGrow: 1, // Allow the container to grow
                            flexShrink: 1, // Allow the container to shrink
                            flexBasis: 'auto', // Allow the container to adjust its size automatically
                            minWidth: '50%', // Minimum width
                            minHeight: '12vh', // Minimum height
                        }}
                    >
                        <Grid container
                            sx={{
                                color: '#006bff', //text color
                                position: 'relative',
                                alignItems: 'center', // Centers items vertically
                                justifyContent: 'space-around', // Distributes items evenly

                            }}
                        >
                            <Grid item xs={1} md={2}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-around',
                                    alignItems: 'center',
                                }}
                                className="hover:drop-shadow-lg transition-shadow duration-300"
                            >
                                <EmojiEventsTwoToneIcon />
                                <Box
                                    sx={{
                                        //backgroundColor: 'red',
                                        textAlign: 'left',
                                    }}

                                >
                                    <Typography variant='caption'

                                    >Paso 1</Typography>
                                    <Typography>Crea una cuenta</Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={1} md={2.5}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-around',
                                    alignItems: 'center',
                                }}
                                className="hover:drop-shadow-lg transition-shadow duration-300"
                            >
                                <GroupTwoToneIcon />
                                <Box
                                    sx={{
                                        //backgroundColor: 'red',
                                        textAlign: 'left',
                                    }}
                                >
                                    <Typography variant='caption'>Paso 2</Typography>
                                    <Typography>Explora perfiles y cuentas</Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={1} md={2}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-around',
                                    alignItems: 'center',
                                }}
                                className="hover:drop-shadow-lg transition-shadow duration-300"
                            >
                                <HandshakeTwoToneIcon />
                                <Box
                                    sx={{
                                        //backgroundColor: 'red',
                                        textAlign: 'left',
                                    }}
                                >
                                    <Typography variant='caption'>Paso 3</Typography>
                                    <Typography>Haz colaboraciones</Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={1} md={2.5}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-around',
                                    alignItems: 'center',
                                }}
                                className="hover:drop-shadow-lg transition-shadow duration-300"
                            >
                                <SentimentSatisfiedTwoToneIcon />
                                <Box
                                    sx={{
                                        //backgroundColor: 'red',
                                        textAlign: 'left',
                                    }}
                                    className="hover:drop-shadow-lg transition-shadow duration-300"
                                >
                                    <Typography variant='caption'>Paso 4</Typography>
                                    <Typography>Impulsa tus redes y ventas</Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </Container>

            </Box>
        </ThemeProvider>

    );
}

export default Functionality;
