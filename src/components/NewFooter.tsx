// import Box from '@mui/material/Box';

// export default function NewFooter() {
//   return (

//     <Box component="section" sx={{ p: 2, backgroundColor:'black', color:'white' }}>
//        ©  {new Date().getFullYear()} &nbsp;Influgo. Todos los derechos reservados  &nbsp;
//     </Box>
//   );
// }

import React from "react";
import {
  Box,
  Container,
  createTheme,
  Divider,
  Grid,
  Link,
  ThemeProvider,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/system";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import logoFooter from "../media/logo-footer.png";

const theme = createTheme({
  typography: {
    fontFamily: "Alata",
  },
  palette: {
    primary: {
      main: "#46129A",
      light: "#AC92D3",
    },
    secondary: {
      main: "#A41836",
      light: "#EDD4EA",
    },
  },
});

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#212121",
  color: "#fff",
  padding: theme.spacing(6, 0),
}));

const Logo = styled("img")(({ theme }) => ({
  height: "90px",
  marginBottom: theme.spacing(2),
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: "#fff",
  margin: theme.spacing(0, 2),
  padding: theme.spacing(1, 0),
  fontSize: "15px",
  fontWeight: "bold",
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
}));

const SocialLink = styled(Link)({
  color: "#fff",
  marginLeft: "15px",
  "&:hover": {
    color: "#ccc",
  },
});

const BottomFooterLink = styled(Link)(({ theme }) => ({
  color: "#fff",
  margin: theme.spacing(0, 1),
  fontSize: "14px",
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
}));

const NewFooter: React.FC = () => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <ThemeProvider theme={theme}>
      <FooterContainer>
        <Container maxWidth="lg">
          <Grid container spacing={3} direction="column" className="mb-6">
            <Grid item xs={12}>
              <Box display="flex" justifyContent="center" alignItems="center">
                <Logo src={logoFooter} alt="Influgo Logo" />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexWrap="wrap"
              >
                <FooterLink href="#">Influencers</FooterLink>
                <FooterLink href="#">Emprendedores</FooterLink>
                <FooterLink href="#">Nosotros</FooterLink>
                <FooterLink href="#">Contáctanos</FooterLink>
              </Box>
            </Grid>
          </Grid>
          <Divider className="bg-[#2D2D2D]" />
          <Box textAlign="center" mt={2}>
            <Grid container spacing={3} justifyContent="center">
              <Grid item xs={12}>
                <Box
                  display="flex"
                  flexDirection={isSmallScreen ? "column" : "row"}
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Box
                    display="flex"
                    flexDirection={isSmallScreen ? "column" : "row"}
                    alignItems="center"
                  >
                    <Typography variant="body2" style={{ marginRight: '8px' }}>
                      © 2024 Influgo. Todos los derechos reservados.
                    </Typography>
                    <BottomFooterLink href="#">Términos y condiciones</BottomFooterLink>
                    <BottomFooterLink href="#">Privacidad</BottomFooterLink>
                  </Box>
                  <Box display="flex" justifyContent="center" mt={isSmallScreen ? 2 : 0}>
                    <SocialLink href="#">
                      <FacebookIcon />
                    </SocialLink>
                    <SocialLink href="#">
                      <TwitterIcon />
                    </SocialLink>
                    <SocialLink href="#">
                      <InstagramIcon />
                    </SocialLink>
                    <SocialLink href="#">
                      <LinkedInIcon />
                    </SocialLink>
                    <SocialLink href="#">
                      <YouTubeIcon />
                    </SocialLink>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </FooterContainer>
    </ThemeProvider>
  );
};

export default NewFooter;

