import { useState } from "react";
import { Card, Typography, IconButton, Box } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { styled } from "@mui/material/styles";
import partner from "../assets/img/partner.png";

const teamMembers = [
  { name: "Devin Lane", role: "CEO & Founder", image: partner },
  { name: "Kristine Watson", role: "UI Designer", image: partner },
  { name: "Jacob Jones", role: "Product Designer", image: partner },
  { name: "Jhon Howard", role: "Front-end Developer", image: partner },
  { name: "Laura Smith", role: "Back-end Developer", image: partner },
  { name: "James Brown", role: "Project Manager", image: partner },
  { name: "Emily Davis", role: "Data Scientist", image: partner },
  { name: "Michael Wilson", role: "UX Researcher", image: partner },
  { name: "Sarah Johnson", role: "Marketing Specialist", image: partner },
  { name: "Daniel Lee", role: "Systems Analyst", image: partner },
  { name: "Olivia Taylor", role: "Content Strategist", image: partner },
  { name: "Ethan Martinez", role: "Product Manager", image: partner },
  { name: "Sophia Anderson", role: "Graphic Designer", image: partner },
  { name: "Matthew Thomas", role: "SEO Specialist", image: partner },
  { name: "Ava Garcia", role: "Web Developer", image: partner },
  { name: "William Martinez", role: "Software Engineer", image: partner },
  { name: "Isabella Rodriguez", role: "HR Manager", image: partner },
  { name: "Alexander White", role: "DevOps Engineer", image: partner },
  { name: "Mia Clark", role: "Quality Assurance", image: partner },
  { name: "Jackson Lewis", role: "Business Analyst", image: partner },
];

const StyledCard = styled(Card)(() => ({
  position: "relative",
  overflow: "hidden",
  width: "100%",
  height: "350px",
  borderRadius: "10px",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-5px)",
  },
}));

const InfoBox = styled(Box)(() => ({
  position: "absolute",
  bottom: "15px",
  left: "15px",
  width: "calc(100% - 30px)",
  height: "72px",
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  padding: "12px 15px",
  borderRadius: "10px",
}));

const CarouselComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerPage = 4;
  const totalPages = Math.ceil(teamMembers.length / cardsPerPage);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalPages - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalPages - 1 ? 0 : prevIndex + 1
    );
  };

  const [showCard, setShowCard] = useState(false);
  const onShowClick = () => {
    if (showCard == false) {
      setShowCard(true);
    } else {
      setShowCard(false);
    }
  };

  return (
    <div className="flex flex-col items-center mt-20">
      <button className="buttonHero w-80" onClick={onShowClick}>
        <p className="text text-lg max-lg:text-sm">¿Quieres conocernos más?</p>
      </button>
      {showCard && (
        <Box
          sx={{
            width: "90%",
            maxWidth: "1200px",
            margin: "auto",
            position: "relative",
            paddingTop: 4,
            paddingBottom: 4,
          }}
        >
          <Typography
            variant="h4"
            component="h2"
            align="center"
            gutterBottom
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "50px",
              fontWeight: 700,
              lineHeight: "80px",
              letterSpacing: "-0.01em",
              textAlign: "center",
              color: "#000000",
              marginBottom: 4,
            }}
          >
            Saluda a los miembros de nuestro equipo
          </Typography>

          <Box
            sx={{ display: "flex", overflow: "hidden", position: "relative" }}
          >
            <Box
              sx={{
                display: "flex",
                transition: "transform 0.5s ease-in-out",
                transform: `translateX(-${(currentIndex * 100) / totalPages}%)`,
                width: `${totalPages * 100}%`,
              }}
            >
              {teamMembers.map((member, index) => (
                <Box
                  key={index}
                  sx={{
                    flex: `0 0 ${100 / cardsPerPage}%`,
                    boxSizing: "border-box",
                    padding: "0 15px", // Increased padding for spacing
                  }}
                >
                  <StyledCard>
                    <Box
                      component="img"
                      src={member.image}
                      alt={member.name}
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                    <InfoBox>
                      <Typography
                        variant="subtitle1"
                        component="div"
                        sx={{ fontWeight: "bold", fontSize: "16px" }}
                      >
                        {member.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ fontSize: "14px" }}
                      >
                        {member.role}
                      </Typography>
                    </InfoBox>
                  </StyledCard>
                </Box>
              ))}
            </Box>
          </Box>
          <IconButton
            onClick={goToPrevious}
            sx={{
              position: "absolute",
              top: "50%",
              left: "-50px",
              zIndex: 1,
              bgcolor: "background.paper",
            }}
          >
            <ArrowBackIosIcon />
          </IconButton>
          <IconButton
            onClick={goToNext}
            sx={{
              position: "absolute",
              top: "50%",
              right: "-50px",
              zIndex: 1,
              bgcolor: "background.paper",
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      )}
    </div>
  );
};

export default CarouselComponent;
