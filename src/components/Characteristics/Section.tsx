import React from 'react';
import { Box, Typography } from '@mui/material';
import './Characteristics.css';

type Characteristic = {
  icon: string;
  title: string;
  description: string;
};

type SectionProps = {
  sectionTitle: string;
  subtitle: string;
  characteristics: Characteristic[];
};

const Section: React.FC<SectionProps> = ({ sectionTitle, subtitle, characteristics }) => {
  return (
    <Box className="characteristics-section h-auto flex items-center flex-col justify-center">
      <img src={sectionTitle} width={"1396px"} height={"93px"} alt="Section Title" />
      <br />
      <Typography
        variant="subtitle1"
        sx={{
          fontFamily: 'Poppins, sans-serif',
          fontSize: '25px',
          fontWeight: 500,
          lineHeight: '37.5px',
          letterSpacing: '-0.01em',
          textAlign: 'center',
          color: '#717177',
        }}
      >
        {subtitle}
      </Typography>
      <br />
      <Box
        className="characteristics-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 justify-items-center items-center"
        marginTop={"30px"}
        sx={{
          width: '100%', 
          padding: '16px', 
          boxSizing: 'border-box', 
        }}
      >
        {characteristics.map((char, index) => (
          <Box key={index} className="characteristic-item flex flex-col items-center text-center">
            <Box className="icono mb-4">
              <img src={char.icon} alt={`Icon ${index}`} className="characteristic-icon" />
            </Box>
            <Typography variant="h6" className="characteristic-title font-semibold">
              {char.title}
            </Typography>
            <Typography variant="body2" className="characteristic-description text-sm mt-2 text-gray-600">
              {char.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Section;
