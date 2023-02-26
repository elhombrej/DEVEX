//Tv argentina , Deportes, canales infantiles , HBO premium , canales de cine  , Television internacional , Radios , Netflix , Anime ,
import { Grid, Box, Typography } from "@mui/material";
import React from "react";
// import imageBackground from "./Images/devex-logo.jpg";
import Slide from "react-reveal/Slide";

export function Channels() {
  return (
    <Slide bottom>
      <Box sx={{ margin: "5%" }}>
        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Grid item xs={12} sm={12} md={4}>
            <img src="../Images/device-pile.png" alt="Devices" width="100%" />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Typography
              fontWeight="bold"
              sx={{ typography: { xs: "h3", sm: "h2", md: "h2", lg: "h1" } }}
            >
              Disfruta en todos lados.
            </Typography>
            <Typography variant="h5">
              Reproduce todo el contenido en tu telefono, televisor, tablet y
              dispositivos android pagando cualquier plan.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Slide>
  );
}
