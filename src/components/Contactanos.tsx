import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Container, createTheme, Grid, ThemeProvider } from "@mui/material";
import { WhatsApp } from "../svg/social/SocialSvg";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const faqs = [
  "¿Qué es Influgo?",
  "¿Cuánto cuesta Influgo?",
  "¿Qué requisitos debo cumplir para ser parte de Influgo?",
  "¿Cómo encontrar y colaborar con influencers?",
  "¿Qué beneficios tengo como influencer?",
  "¿Qué beneficios tengo como emprendedor?",
];
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

const Contactanos: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{
            fontWeight: "bold",
            marginTop: "20px",
            marginBottom: "60px",
            fontSize: "64px",
          }}
        >
          ¿En qué podemos ayudarte?
        </Typography>
        {faqs.map((faq, index) => (
          <Accordion key={index} sx={{ marginBottom: "20px", boxShadow: "0" }}>
            <AccordionSummary
              expandIcon={
                <ArrowDownwardIcon
                  sx={{
                    color: "#ffffff",
                    backgroundColor: "#000000",
                    borderRadius: "5px",
                    padding: "20%",
                  }}
                />
              }
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
              sx={{ backgroundColor: "#ffffff", fontSize: "90px" }}
              className="border-none"
            >
              <Typography sx={{ fontWeight: "bold", fontSize: "24px" }}>
                {faq}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {/* Aquí puedes agregar el contenido de cada FAQ */}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          className="my-20"
        >
          <Grid item xs={3}>
            <Typography variant="body1" gutterBottom className="text-[#717177]">
              ¿Aún tienes dudas?
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <a className="buttonHero w-90" href="https://wa.me/XXXXXXXXXXX">
              <img src={WhatsApp} className="icon mr-2" alt="Android" />
              <p className="text text-lg max-lg:text-sm">
                Contáctanos por WhatsApp
              </p>
            </a>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default Contactanos;
