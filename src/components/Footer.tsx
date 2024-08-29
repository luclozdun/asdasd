import  Box  from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = (): JSX.Element => {
  return (
    <>
   
      <Stack direction="row" spacing={1}>
        <IconButton
          aria-label="delete"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <InstagramIcon />
        </IconButton>
       
    
        <IconButton
          color="secondary"
          aria-label="add an alarm"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <XIcon />
        </IconButton>
        <IconButton
          color="primary"
          aria-label="add to shopping cart"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FacebookIcon />
        </IconButton>
      </Stack>

      <Box component="section" sx={{ p: 2, border: "1px dashed grey" }}>
        This Box renders as an HTML section element.
      </Box>
    </>
  );
};
export default Footer;
