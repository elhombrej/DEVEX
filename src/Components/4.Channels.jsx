//Tv argentina , Deportes, canales infantiles , HBO premium , canales de cine  , Television internacional , Radios , Netflix , Anime ,
import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import imageBackground from "../Images/devex-logo.jpg";
import Slide from "react-reveal/Slide";

export function Channels() {
  return (
    <Slide bottom>
      <Paper
        sx={{
          minWidth: "100vw",
          minHeight: "70vh",
          // backgroundImage: `url(${imageBackground})`,
        }}
        xs={12}
      >
        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Grid item xs={12} sm={4}>
            <img src="./src/Images/device-pile.png" alt="Devices" />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography fontWeight="bold" variant="h1">
              Disfruta en todos lados.
            </Typography>
            <Typography variant="h5">
              Reproduce todo el contenido en tu telefono, televisor, tablet y
              dispositivos android pagando cualquier plan.
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Slide>
  );
}
