import { useEffect, useRef, useState } from 'react';
import { Grid, Typography, Paper, createTheme, ThemeProvider } from '@mui/material';
import valuesTeam from '../assets/img/valuesImg/values_team.png';
import misionIcon from '../assets/img/valuesImg/mision.png';
import visionIcon from '../assets/img/valuesImg/vision.png';
import propositoIcon from '../assets/img/valuesImg/proposito.png';

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



function ValoresSection() {

  const [gridLeftHeight, setGridLeftHeight] = useState('auto');
  const gridLeftRef = useRef<HTMLDivElement>(null); 
  const backgroundColor = '#b976c0';
  const textColor = '#ffffff'; // Blanco

  useEffect(() => {
    if (gridLeftRef.current) {
      const height = gridLeftRef.current.clientHeight;
      setGridLeftHeight(height + 'px');
    }
  }, []);


  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
    <ThemeProvider theme={theme}>
      <Grid container spacing={2} style={{ backgroundColor}}>
        {/* División horizontal */}
        <Grid item xs={6} style={{display: 'flex', flexDirection: 'column', paddingLeft: '50px', paddingBottom: '10px'}} ref={gridLeftRef}>
          {/* División vertical */}
          <Grid container direction="column" spacing={2} style={{flex: 1, alignItems: 'center', paddingTop: '120px'}}>
            {/* Primer bloque */}
            <Grid item container spacing={2} alignItems="center">
              <Grid item xs>
                <Paper elevation={0} style={{ padding: '10px', backgroundColor }}>
                  <Typography variant="h4">Misión</Typography>
                  <br></br>
                  <Typography variant="body1" style={{color: textColor}}>Facilitar la conexión entre empresarios e influencers emergentes, proporcionando una aplicación innovadora que promueva una experiencia única y valiosa para toda la comunidad emprendedora .</Typography>
                </Paper>
              </Grid>
              <Grid item>
                <img src={misionIcon} alt="misionImg" style={{ maxWidth: '100px' }} />
              </Grid>
            </Grid>
            {/* Segundo bloque */}
            <Grid item container spacing={2} alignItems="center">
              <Grid item xs>
                <Paper elevation={0} style={{ padding: '10px', backgroundColor }}>
                  <Typography variant="h4">Visión</Typography>
                  <br></br>
                  <Typography variant="body1" style={{color: textColor}}>Consolidarnos como la plataforma líder de conexión, siendo ampliamente reconocidos por nuestra capacidad para impulsar el crecimiento de emprendimientos locales, contribuyendo así de manera significativa al desarrollo y éxito de la comunidad emprendedora a nivel nacional.
                  </Typography>
                </Paper>
              </Grid>
              <Grid item>
                <img src={visionIcon} alt="visionImg" style={{ maxWidth: '100px' }} />
              </Grid>
            </Grid>
            {/* Tercer bloque */}
            <Grid item container spacing={2} alignItems="center">
              <Grid item xs>
                <Paper elevation={0} style={{ padding: '10px', backgroundColor }}>
                  <Typography variant="h4">Propósito</Typography>
                  <br></br>
                  <Typography variant="body1" style={{color: textColor}}>Empoderar y apoyar el crecimiento y el éxito de la comunidad emprendedora y los influencers emergentes al facilitar colaboraciones efectivas y mutuamente beneficiosas entre ambas partes y contribuir al desarrollo económico y social del país.</Typography>
                </Paper>
              </Grid>
              <Grid item>
                <img src={propositoIcon} alt="propositoImg" style={{ maxWidth: '100px' }} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* División horizontal */}
        <Grid item xs={6} style={{ display: 'flex', alignItems: 'center', height: gridLeftHeight }}>
          <img src={valuesTeam} alt="Imagen" style={{ width: '100%', maxHeight: '100%', objectFit: 'contain' }}/>
        </Grid>
      </Grid>
    </ThemeProvider>
    </div>
  );
}

export default ValoresSection;