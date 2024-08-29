import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";

import logoImg from "../assets/img/logo.png";
import { Container } from "@mui/system";
import { Drawer } from "@mui/material";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";

const logoStyle = {
  width: "90px",
  height: "auto",
};



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

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [, setSelectedMenuItem] = useState("home");

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: "smooth" });
      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
      setOpen(false);
    }
  };

  const handleClick = (section: string) => {
    scrollToSection(section);
    setSelectedMenuItem(section);
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <AppBar
          id="appbar"
          position="fixed"
          sx={{
            boxShadow:
              theme.palette.mode === "light"
                ? "1px 1.5px 2px -1px rgba(70, 18, 154, 0.15)"
                : "0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)",
            bgcolor:
              theme.palette.mode === "light"
                ? "rgba(255, 255, 255)"
                : "rgba(0, 0, 0)",
            width: "100%", // Ajusta el ancho al 100% de la pantalla
            height: "87px",
            padding: "20px 122.75px",
            gap: "0px",
            justifyContent: "space-between",
            opacity: 1, // Para hacer visible el navbar
            maxWidth: "1920px", // Máximo ancho
            "@media (max-width: 1920px)": {
              padding: "20px 24px", // Ajuste de padding en pantallas más pequeñas
            },
            "@media (max-width: 768px)": {
              height: "auto", // Deja que el navbar crezca si es necesario
              padding: "16px", // Menor padding en dispositivos móviles
            },
          }}
        >
          <Container maxWidth="xl">
            <Toolbar
              variant="regular"
              sx={() => ({
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              })}
            >
              <Box onClick={() => scrollToSection("home")}>
                <img src={logoImg} style={logoStyle} alt="InfluGo!" />
              </Box>
              <Box
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  ml: "-8px",
                  px: 0,
                }}
              >
                {/* Items */}
                <Box
                  sx={{
                    display: { xs: "none", lg: "flex" },
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                  }}
                >
                  <MenuItem
                    onClick={() => handleClick("char")}
                    sx={{
                      py: "6px",
                      px: "12px",
                      "&:hover": {
                        backgroundColor: "white",
                      },
                    }}
                  >
                    {/* <Typography
                      variant="body2"
                      color="text.primary"
                      className="no-underline decoration-purple-600 decoration-2 underline-offset-2 hover:underline hover:text-purple-600"
                    >
                      Influencer
                    </Typography> */}
                    <Typography
                      variant="body2"
                      color="text.primary"
                      className="no-underline decoration-purple-600 decoration-2 underline-offset-2 hover:underline hover:text-purple-600"
                      sx={{
                        fontFamily: 'Poppins',
                        fontSize: '16px',
                        fontWeight: 600,
                        lineHeight: '24px',
                        letterSpacing: '-0.01em',
                        textAlign: 'center',
                        width: '81px',
                        height: '24px',
                        position: 'relative',
                        top: '3px',
                        left: '21px',
                        gap: '0px',
                      }}
                    >
                      Influencer
                    </Typography>
                  </MenuItem>
                  <MenuItem
                    onClick={() => handleClick("char")}
                    sx={{
                      py: "6px",
                      px: "12px",
                      "&:hover": {
                        backgroundColor: "white",
                      },
                    }}
                  >
                    <Typography
                      variant="body2"
                      color="text.primary"
                      className="no-underline decoration-purple-600 decoration-2 underline-offset-2 hover:underline hover:text-purple-600"
                      sx={{
                        fontFamily: 'Poppins',
                        fontSize: '16px',
                        fontWeight: 600,
                        lineHeight: '24px',
                        letterSpacing: '-0.01em',
                        textAlign: 'center',
                        width: '81px',
                        height: '24px',
                        position: 'relative',
                        top: '3px',
                        left: '21px',
                        gap: '0px',
                      }}
                    >
                      Emprendedor
                    </Typography>
                  </MenuItem>
                  <MenuItem
                    onClick={() => scrollToSection("aboutUs")}
                    sx={{
                      py: "6px",
                      px: "12px",
                      "&:hover": {
                        backgroundColor: "white",
                      },
                    }}
                  >
                    <Typography
                      variant="body2"
                      color="text.primary"
                      className="no-underline decoration-purple-600 decoration-2 underline-offset-2 hover:underline hover:text-purple-600"
                      sx={{
                        fontFamily: 'Poppins',
                        fontSize: '16px',
                        fontWeight: 600,
                        lineHeight: '24px',
                        letterSpacing: '-0.01em',
                        textAlign: 'center',
                        width: '81px',
                        height: '24px',
                        position: 'relative',
                        top: '3px',
                        left: '21px',
                        gap: '0px',
                      }}
                    >
                      Nosotros
                    </Typography>
                  </MenuItem>
                  <MenuItem
                    onClick={() => scrollToSection("contact")}
                    sx={{
                      py: "6px",
                      px: "12px",
                      "&:hover": {
                        backgroundColor: "white",
                        borderBottomColor: "red",
                      },
                    }}
                  >
                    <Typography
                      variant="body2"
                      color="text.primary"
                      className="no-underline decoration-purple-600 decoration-2 underline-offset-2 hover:underline hover:text-purple-600"
                      sx={{
                        fontFamily: 'Poppins',
                        fontSize: '16px',
                        fontWeight: 600,
                        lineHeight: '24px',
                        letterSpacing: '-0.01em',
                        textAlign: 'center',
                        width: '81px',
                        height: '24px',
                        position: 'relative',
                        top: '3px',
                        left: '21px',
                        gap: '0px',
                      }}
                    >
                      Contáctanos
                    </Typography>
                  </MenuItem>
                </Box>
              </Box>
              <Button
                onClick={() => scrollToSection("download")}
                sx={{
                  width: { xs: "100%", lg: "207px" },
                  height: "60px",
                  gap: "0px",
                  borderRadius: "20px", 
                  position: "relative",  
                  textTransform: "none",
                  display: { xs: "none", lg: "flex" },
                  justifyContent: "center",
                  alignItems: "center",
                  fontFamily: "Poppins",
                  fontSize: "20px",
                  fontWeight: 700,
                  lineHeight: "30px",
                  letterSpacing: "-0.01em",
                  textAlign: "center",
                  border: `3px solid`,
                  "&:hover": {
                     background: 'linear-gradient(to top, #6504B1, #C40909, #1B00BF)'//'radial-gradient(72.62% 269.68% at 43.41% 60.56%, #6504B1 21.57%, rgba(70, 4, 177, 0.01) 100%), radial-gradient(45.2% 133.21% at 17.98% 4.13%, #C40909 19.27%, rgba(249, 67, 76, 0.01) 100%), radial-gradient(22.4% 50.06% at 95.63% 91.26%, #1B00BF 5.08%, rgba(0, 117, 255, 0.01) 100%)'
                  }
                 
                }}
                className="rounded-tl-[20px]  hover:text-white transition duration-300"
              >
                Descargar
              </Button>


              <Box sx={{ display: { md: "flex", lg: "none" } }}>
                <Button
                  variant="text"
                  aria-label="menu"
                  onClick={toggleDrawer(true)}
                  sx={{ minWidth: "30px", p: "4px", color: "secondary.main" }}
                >
                  <MenuIcon />
                </Button>
                <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                  <Box
                    sx={{
                      minWidth: "60dvw",
                      p: 2,
                      backgroundColor: "background.paper",
                      flexGrow: 1,
                    }}
                  >
                    <MenuItem
                      className="hover:text-purple-600"
                      onClick={() => scrollToSection("home")}
                    >
                      Influencer
                    </MenuItem>
                    <MenuItem
                      className="hover:text-purple-600"
                      onClick={() => scrollToSection("features")}
                    >
                      Emprendedor
                    </MenuItem>
                    <MenuItem
                      className="hover:text-purple-600"
                      onClick={() => scrollToSection("home2")}
                    >
                      Nosotros
                    </MenuItem>
                    <MenuItem
                      className="hover:text-purple-600"
                      onClick={() => scrollToSection("home3")}
                    >
                      Contáctanos
                    </MenuItem>
                  </Box>
                </Drawer>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
    </div>
  );
};

export default Navbar;
