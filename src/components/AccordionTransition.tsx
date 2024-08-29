import * as React from "react";
import Accordion, { AccordionSlots } from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Fade from "@mui/material/Fade";
import { Box } from "@mui/system";

export default function AccordionTransition() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <div>
       <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
       <Box sx={{ py: 10 }}>
        <Box>
          <Typography
            sx={{
              fontSize: "35px",
              color: "#000339",
              fontWeight: "700",
              my: 3,
            }}
          >
            You’ve found a neighborhood you love.
          </Typography>

          <Typography
            sx={{
              fontSize: "16px",
              color: "#5A6473",
              lineHeight: "27px",
            }}
          >
            When you own a home, you commit to living in one location for a
            period of time. We are here to ensure that this will be a memorable
            experience for you.
          </Typography>
        </Box>

        <Accordion
          expanded={expanded}
          onChange={handleExpansion}
          slots={{ transition: Fade as AccordionSlots["transition"] }}
          slotProps={{ transition: { timeout: 400 } }}
          sx={{
            "& .MuiAccordion-region": { height: expanded ? "auto" : 0 },
            "& .MuiAccordionDetails-root": {
              display: expanded ? "block" : "none",
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>Custom transition using Fade</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography>Default transition using Collapse</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* <Container>
          <CustomBox>
            <ImgContainer>
              <img src={houseCard} alt="house" style={{ maxWidth: "100%" }} />
            </ImgContainer>

            <Box>
              <Divider />
              <Typography
                sx={{
                  fontSize: "35px",
                  color: "#000339",
                  fontWeight: "700",
                  my: 3,
                }}
              >
                You’ve found a neighborhood you love.
              </Typography>

              <Typography
                sx={{
                  fontSize: "16px",
                  color: "#5A6473",
                  lineHeight: "27px",
                }}
              >
                When you own a home, you commit to living in one location for a
                period of time. We are here to ensure that this will be a
                memorable experience for you.
              </Typography>
            </Box>
          </CustomBox>

          <TextFlexbox>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <LargeText>2500+</LargeText>
              <SmallText>Homes For Sale</SmallText>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <LargeText>3000+</LargeText>
              <SmallText>Properties Rented</SmallText>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <LargeText>3500+</LargeText>
              <SmallText>Homes Sold</SmallText>
            </Box>
          </TextFlexbox>
        </Container> */}
      </Box>
       </Box>
      
    </div>
  );
}
