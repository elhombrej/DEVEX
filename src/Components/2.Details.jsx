import { Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import DownloadIcon from "@mui/icons-material/Download";
import Slide from "react-reveal/Slide";

export function Details() {
  return (
    <Slide bottom>
      <Paper
      // sx={{
      //     minWidth: "100vw",
      //     minHeight: "70vh",
      //   }}
      //   xs={12}
      >
        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Grid item xs={12} sm={4}>
            <Typography variant="h2" fontWeight="bold">
              Descarga la app desde la tienda de Google.
            </Typography>
            <Button
              size="large"
              variant="contained"
              color="third"
              sx={{ borderRadius: "10px", margin: 3 }}
              startIcon={<DownloadIcon />}
              href="https://play.google.com/store/apps/details?id=com.altared.dvex.clientes&hl=en&gl=US"
            >
              <Typography fontWeight="bold"> Descargar DEVEX </Typography>
            </Button>
          </Grid>
          <Grid item xs={12} sm={4}>
            <img
              src="./src/Images/google-play.png"
              alt="google-play"
              width="300px"
              // style={{margin:3}}
            />
          </Grid>
        </Grid>
      </Paper>
    </Slide>
  );
}
//hasta 4 perfiles
