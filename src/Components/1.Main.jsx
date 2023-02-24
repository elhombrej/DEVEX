import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import Zoom from "react-reveal/Zoom";

export function Main() {
  return (
    <Zoom>
      <Paper
        sx={{
          // minWidth:'100vw' ,
          minHeight: "70vh",
        }}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item paddingTop={20}>
            <Typography
              variant="h1"
              fontWeight="bold"
              sx={{ display: "flex", justifyContent: "center" }}
            >
              Series, peliculas, Tv y radio
            </Typography>
            <Typography
              variant="h1"
              fontWeight="bold"
              sx={{ display: "flex", justifyContent: "center" }}
            >
              en un solo lugar.
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h5" fontWeight="bold">
              ¡Haz hoy tu prueba gratis y disfruta todo el entretenimiento!
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Zoom>
  );
}
