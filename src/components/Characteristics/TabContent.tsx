import { useEffect, useRef, useState } from "react";
import ImageDisplay from "./ImageDisplay";
import { Box, List, ListItem, ListItemText, ListItemIcon, Typography, Grid, IconButton } from '@mui/material';
import './Characteristics.css';
import { borderBottom, Container, styled } from "@mui/system";
import AdditionalInfo from "./AdditionalInfo";
import Section from "./Section";
import EventSection from "./EventSection";
import ChevronIcon from '/src/assets/img/characteristicsImg/arrow.png';
import DisabledChevronIcon from '/src/assets/img/characteristicsImg/dArrow.png';
import titleInf from '/src/assets/img/characteristicsImg/title2.png';
import titleEmp from '/src/assets/img/characteristicsImg/title3.png';
import SectitleInf from '/src/assets/img/characteristicsImg/title4.png';
import SectitleEmp from '/src/assets/img/characteristicsImg/title5.png';
import calTitle from '/src/assets/img/characteristicsImg/title6.png';

type Option = {
  title: string;
  description: string;
};

type TabContentProps = {
  options: Option[];
  selectedTab: 'influencer' | 'emprendedor';
};

const PoppinsTypography = styled(Typography)({
  fontFamily: 'Poppins, sans-serif',
  fontSize: '32px',
  fontWeight: '600',
  lineHeight: '48px',
  gap: '100px',
  '@media (max-width: 600px)': {
    fontSize: '24px',
    lineHeight: '36px',
  },
});

const PoppinsTypography2 = styled(Typography)({
  fontFamily: 'Poppins, sans-serif',
  fontSize: '20px',
  fontWeight: '500',
  lineHeight: '30px',
  letterSpacing: '-0.01em',
  '@media (max-width: 600px)': {
    fontSize: '16px',
    lineHeight: '24px',
  },
});

const influencerInfo = {
  sectionTitle: 'Para Influencers',
  title: titleInf,
  img: '/src/assets/img/characteristicsImg/addInfl.png',
  infoItems: [
    {
      icon: '/src/assets/img/characteristicsImg/redInflu.png',
      title: 'Crece en redes sociales',
      description: 'Genera contenido de calidad con las colaboraciones.',
    },
    {
      icon: '/src/assets/img/characteristicsImg/moneInflu.png',
      title: 'Monetiza tu contenido',
      description: 'Convierte tu influencia en oportunidades económicas.',
    },
    {
      icon: '/src/assets/img/characteristicsImg/anaInflu.png',
      title: 'Analiza competidores',
      description: 'Trabaja con marcas y emprendedores confiables.',
    },
    {
      icon: '/src/assets/img/characteristicsImg/tiemInflu.png',
      title: 'Ahorra tiempo',
      description: 'Encuentra una variedad de ofertas de marcas que esperan colaborar.',
    },
  ],
};

const emprendedorInfo = {
  sectionTitle: 'Para Emprendedores',
  title: titleEmp,
  img: '/src/assets/img/characteristicsImg/addEmp.png',
  infoItems: [
    {
      icon: '/src/assets/img/characteristicsImg/colaEmp.png',
      title: 'Colaboración Directa',
      description: 'Contrata fácilmente con influencers relevantes para tu marca.',
    },
    {
      icon: '/src/assets/img/characteristicsImg/mayEmp.png',
      title: 'Mayor Visibilidad',
      description: 'Mejora tu presencia en línea con campañas dirigidas a audiencias específicas.',
    },
    {
      icon: '/src/assets/img/characteristicsImg/efiEmp.png',
      title: 'Eficiencia de Recursos',
      description: 'Gestiona colaboraciones de forma eficiente, ahorrando tiempo y dinero',
    },
    {
      icon: '/src/assets/img/characteristicsImg/segEmp.png',
      title: 'Seguridad e Integridad',
      description: 'Trabaja con total confianza en cada una de tus interacciones',
    },
  ],
};

const influencerCharacteristics = {
  sectionTitle: SectitleInf,
  subtitle: 'Descubre qué define a nuestros influencer',
  characteristics: [
    {
      icon: '/src/assets/img/characteristicsImg/creaInfl.png',
      title: 'Creativo',
      description: 'Genera contenido atractivo y relevante.',
    },
    {
      icon: '/src/assets/img/characteristicsImg/autInfl.png',
      title: 'Auténtico',
      description: 'Mantiene una conexión genuina con su audiencia.',
    },
    {
      icon: '/src/assets/img/characteristicsImg/colaInfl.png',
      title: 'Colaborativo',
      description: 'Dispuesto a trabajar con diversas marcas y emprendedores.',
    },
    {
      icon: '/src/assets/img/characteristicsImg/persInfl.png',
      title: 'Persuasivo',
      description: 'Capaz de influir en las decisiones de compra de su audiencia.',
    },
  ],
};

const emprendedorCharacteristics = {
  sectionTitle: SectitleEmp,
  subtitle: 'Descubre qué define a nuestros emprendedores',
  characteristics: [
    {
      icon: '/src/assets/img/characteristicsImg/adaEmp.png',
      title: 'Adaptativo',
      description: 'Se ajusta a las tendencias del mercado y cambios en la industria.',
    },
    {
      icon: '/src/assets/img/characteristicsImg/visEmp.png',
      title: 'Visionario',
      description: 'Identifica y aprovecha oportunidades de colaboración.',
    },
    {
      icon: '/src/assets/img/characteristicsImg/curEmp.png',
      title: 'Curioso',
      description: 'Busca y selecciona influencers que se alinean con su visión.',
    },
    {
      icon: '/src/assets/img/characteristicsImg/colEmp.png',
      title: 'Comunicativo',
      description: 'Mantiene una comunicación fluida y efectiva con influencers.',
    },
  ],
};

const emprendedorEvents = [
  { day: 'Lun', number: 1, title: 'Crea tu Evento', description: 'Define el nombre, objetivo y preferencias de pago de tu evento.' },
  { day: 'Mar', number: 2, title: 'Define el Perfil', description: 'Configura los detalles del perfil del influencer que buscas.' },
  { day: 'Mié', number: 3, title: 'Publica tu Evento', description: 'Anúncialo en nuestra plataforma para recibir postulaciones.' },
  { day: 'Jue', number: 4, title: 'Elige Influencers', description: 'Selecciona los candidatos más adecuados para tu evento.' }
];

const TabContent: React.FC<TabContentProps> = ({ options, selectedTab }) => {
  const [selectedOption, setSelectedOption] = useState<number>(0);

  const handlePrevious = () => {
    setSelectedOption(prev => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setSelectedOption(prev => Math.min(prev + 1, options.length - 1));
  };

  const isFirstOption = selectedOption === 0;
  const isLastOption = selectedOption === options.length - 1;

  const additionalInfo = selectedTab === 'influencer' ? influencerInfo : emprendedorInfo;
  const characteristics = selectedTab === 'influencer' ? influencerCharacteristics : emprendedorCharacteristics;

  const compAdditionalInfo = useRef<HTMLDivElement>(null);
  const compSection = useRef<HTMLDivElement>(null);
  const compEventSection = useRef<HTMLDivElement>(null);

  const [currentComponent, setCurrentComponent] = useState(0);
  const componentsRefs = [compAdditionalInfo, compSection, compEventSection];



  return (
    <Container>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width={{ xs: '100%', md: '1396px' }}
        height={{ xs: 'auto', md: '701px' }}
        flexDirection={{ xs: 'column', md: 'row' }}
        sx={{
          position: 'relative',
          opacity: 1,
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            marginRight: {
              md: '210px', xs: '0px'
            },
            
          }}>
          <Grid
            item xs={12} md={6}
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ marginTop: { xs: '20px', md: '50px' }, }}
          >
            <List sx={{ width: '100%' }}>
              {options.map((option, index) => (
                <ListItem
                  key={option.title}
                  selected={selectedOption === index}
                  onClick={() => setSelectedOption(index)}
                  sx={{
                    marginBottom: {md: '20px', xs: '0px'}
                  }}
                >
                  <ListItemIcon>
                    <Box
                      sx={{
                        width: { xs: 60, md: 80 },
                        height: { xs: 60, md: 80 },
                        borderRadius: '20%',
                        border: `3px solid`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: 2,
                        borderColor: selectedOption === index ? '#E0E0E0' : '#E0E0E0',
                        background: selectedOption === index
                          ? 'linear-gradient(to right, #6504B1, #C40909, #1B00BF)'
                          //'radial-gradient(72.62% 269.68% at 43.41% 60.56%, #6504B1 21.57%, rgba(70, 4, 177, 0.01) 100%), radial-gradient(45.2% 133.21% at 17.98% 4.13%, #C40909 19.27%, rgba(249, 67, 76, 0.01) 100%), radial-gradient(22.4% 50.06% at 95.63% 91.26%, #1B00BF 5.08%, rgba(0, 117, 255, 0.01) 100%)'
                          : 'white',
                        color: selectedOption === index ? 'white' : 'black',
                        transition: 'background 300ms, color 300ms',
                        '&:hover': {
                          background: 'linear-gradient(to right, #6504B1, #C40909, #1B00BF)',//'radial-gradient(72.62% 269.68% at 43.41% 60.56%, #6504B1 21.57%, rgba(70, 4, 177, 0.01) 100%), radial-gradient(45.2% 133.21% at 17.98% 4.13%, #C40909 19.27%, rgba(249, 67, 76, 0.01) 100%), radial-gradient(22.4% 50.06% at 95.63% 91.26%, #1B00BF 5.08%, rgba(0, 117, 255, 0.01) 100%)',
                          color: 'white',
                        },
                      }}
                    >
                      <Typography
                        variant="h4"
                        fontFamily="Poppins, sans-serif"
                        fontWeight="700"
                        fontSize={{ xs: '24px', md: '32px' }}
                        lineHeight={{ xs: '36px', md: '48px' }}
                        color={selectedOption === index ? 'white' : '#E0E0E0'}
                      >
                        {index + 1}
                      </Typography>
                    </Box>
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Box display="flex" alignItems="center">
                        <PoppinsTypography variant="h4" >
                          {option.title}
                        </PoppinsTypography>
                      </Box>
                    }
                    secondary={
                      <PoppinsTypography2 variant="h5">
                        {option.description}
                      </PoppinsTypography2>
                    }
                  />
                </ListItem>
              ))}
            </List>

          </Grid>
          <Grid
            item xs={12} md={6}
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ marginTop: { xs: '20px', md: '50px' } }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                width: '100%',
                height: '100%',
                top: '50%',
                transform: 'translateY(-50%)',
                overflow: 'hidden',
              }}
            >
              <IconButton
                onClick={handlePrevious}
                disabled={isFirstOption}
                sx={{ borderRadius: '50%' }}
              >
                <img
                  src={isFirstOption ? DisabledChevronIcon : ChevronIcon}
                  alt="Left Arrow"
                  style={{
                    transform: isFirstOption ? 'rotate(0deg)' : 'rotate(180deg)',
                    filter: isFirstOption ? 'grayscale(100%)' : 'none',
                  }}
                />
              </IconButton>

              <ImageDisplay selectedOption={options[selectedOption].title} selectedTab={selectedTab} />

              <IconButton
                onClick={handleNext}
                disabled={isLastOption}
                sx={{ borderRadius: '50%' }}
              >
                <img
                  src={isLastOption ? DisabledChevronIcon : ChevronIcon}
                  alt="Right Arrow"
                  style={{
                    transform: isLastOption ? 'rotate(180deg)' : 'none',
                    filter: isLastOption ? 'grayscale(100%)' : 'none',
                  }}
                />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <br />
      <Box sx={{ overflow: 'hidden', paddingTop: '40px' }} ref={compAdditionalInfo}>
        <AdditionalInfo
          sectionTitle={additionalInfo.sectionTitle}
          title={additionalInfo.title}
          infoItems={additionalInfo.infoItems}
          img={additionalInfo.img}
        />
      </Box>
      <br />
      <Box sx={{ overflow: 'hidden', paddingTop: '40px' }} ref={compSection}>
        <Section
          sectionTitle={characteristics.sectionTitle}
          subtitle={characteristics.subtitle}
          characteristics={characteristics.characteristics}
        />
      </Box>
      <br />
      <Box sx={{ overflow: 'hidden', paddingTop: '40px' }} ref={compEventSection}>
        {selectedTab === 'emprendedor' && (
          <EventSection
            sectionTitle={calTitle}
            subtitle="Descubre qué define a nuestros influencer"
            events={emprendedorEvents}
          />
        )}
      </Box>
    </Container>
  );
};
export default TabContent;
