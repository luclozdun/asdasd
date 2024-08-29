import { Box, Card, CardMedia} from '@mui/material';
import './Characteristics.css';

type ImageDisplayProps = {
    selectedOption: string;
    selectedTab: 'influencer' | 'emprendedor';
};

const ImageDisplay: React.FC<ImageDisplayProps> = ({ selectedOption, selectedTab }) => {
    
    const getImageSrc = (): string => {
        if (selectedTab === 'influencer') {
            switch (selectedOption) {
                case 'Busca': return  '/src/assets/img/characteristicsImg/phone1.png';
                case 'Contacta': return '/src/assets/img/characteristicsImg/phone2.png';
                case 'Crea': return '/src/assets/img/characteristicsImg/phone3.png';
                case 'Monetiza': return '/src/assets/img/characteristicsImg/phone4.png';
                default: return '/src/assets/img/characteristicsImg/phone1.png';
            }
        } else {
            switch (selectedOption) {
                case 'Crea': return '/src/assets/img/characteristicsImg/phone1.png';
                case 'Conéctate': return '/src/assets/img/characteristicsImg/phone2.png';
                case 'Evalúa': return '/src/assets/img/characteristicsImg/phone3.png';
                case 'Crece': return '/src/assets/img/characteristicsImg/phone4.png';
                default: return '/src/assets/img/characteristicsImg/phone1.png';
            }
        }
    };

    return (
        <Box  
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100%"
        textAlign="center"
        >
        <Card>
          <CardMedia
            component="img"
            image={getImageSrc()}
            alt={selectedOption}
          />
        </Card>
      </Box>
    );
}

export default ImageDisplay;