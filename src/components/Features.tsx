import React, { useState } from "react";
import { Grid, Button, Typography, Card, CardContent } from "@mui/material";
import houseCard from "../media/houseCard.png";
import otherImage from "../assets/img/partner.png"; 

const HorizontalCardList: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [selectedCard, setSelectedCard] = useState(0); // Estado para la card seleccionada
  console.log (selectedCard);

  const handleImageClick = () => {
    setIsVisible(false);
  };

  const handleCardClick = (index: number) => {
    setSelectedCard(index);
    setIsVisible(false);
  };

  const handleReturnClick = () => {
    setIsVisible(true);
  };

  return (
    <>
      <div>
        {isVisible ? (
          <Grid container style={{ height: "100vh" }}>
            <Grid item xs={12} md={6} container justifyContent="center">
              <img
                src={houseCard}
                alt="house"
                style={{ maxWidth: "50%", maxHeight: "50%" }}
                onClick={handleImageClick}
              />
            </Grid>
            <Grid item xs={12} md={6} container justifyContent="center">
              <img
                src={houseCard}
                alt="house"
                style={{ maxWidth: "50%", maxHeight: "50%" }}
                onClick={handleImageClick}
              />
            </Grid>
          </Grid>
        ) : (
          <Grid container style={{ height: "100vh" }}>
            {/* Agrega la imagen adicional a la izquierda */}
            <Grid item xs={12} md={6} container justifyContent="center">
              <img src={otherImage} alt="other" style={{ maxWidth: "50%", maxHeight: "50%" }} />
            </Grid>
            {[1, 2, 3, 4].map((index) => (
              <Grid key={index} item xs={6} md={3} container justifyContent="center">
                <Card
                  style={{ width: "50%", height: "50%", cursor: "pointer" }} // Agrega cursor:pointer
                  onClick={() => handleCardClick(index)} // Maneja el click en la card
                >
                  <CardContent>
                    <Typography variant="h5" component="div">
                      Card {index}
                    </Typography>
                    <Typography variant="body2">Contenido de la tarjeta {index}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
            <Grid item xs={12} container justifyContent="center" alignItems="center">
              <Button onClick={handleReturnClick} variant="outlined">
                <Typography>Volver</Typography>
              </Button>
            </Grid>
          </Grid>
        )}
      </div>
    </>
  );
};

export default HorizontalCardList;
