import { Box, Grid, Typography } from '@mui/material';
import './Characteristics.css';

type InfoItem = {
  icon: string;
  title: string;
  description: string;
};

type AdditionalInfoProps = {
  sectionTitle: string;
  img: string;
  title: string;
  infoItems: InfoItem[];
};

const AdditionalInfo: React.FC<AdditionalInfoProps> = ({ sectionTitle, title, infoItems, img }) => {
  const leftItems = infoItems.slice(0, 2);
  const rightItems = infoItems.slice(2);

  return (    
    <Box className="additional-info flex items-center flex-col justify-center" >      
        <Typography variant="h6" className="section-title maincolor">
          {sectionTitle}
        </Typography>
        <img src={title} alt="Title" className="title-image" width={"1396px"} height={"80px"}/>
      <br />
      <Grid container className="info-container" marginTop={"20px"}>
        <Grid item xs={12} md={4} className="info-column" >
          {leftItems.map((item, index) => (
            <Box key={index} className="info-item" >
              <img src={item.icon} alt={`Icon ${index + 1}`} className="info-icon" />
              <Typography variant="h6" className="info-title">{item.title}</Typography>
              <Typography variant="body2" className="info-description">{item.description}</Typography>
            </Box>
          ))}
        </Grid>
        <Grid item xs={12} md={4}>
          <img src={img} alt="Phone" className="phone-image" />
        </Grid>        
        <Grid item xs={12} md={4} className="info-column">
          {rightItems.map((item, index) => (
            <Box key={index} className="info-item">
              <img src={item.icon} alt={`Icon ${index + 3}`} className="info-icon" />
              <Typography variant="h6" className="info-title">{item.title}</Typography>
              <Typography variant="body2" className="info-description">{item.description}</Typography>
            </Box>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};
export default AdditionalInfo;
