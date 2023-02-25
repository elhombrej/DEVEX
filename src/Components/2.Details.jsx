import { Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import DownloadIcon from "@mui/icons-material/Download";
import Slide from "react-reveal/Slide";

export function Details() {
  return (
    <Slide bottom>
      <Paper 
      sx={{ margin: "5%" }}
      >
        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Grid item xs={12} sm={4}>
            <Typography sx={{
                typography: { xs: "h3", sm: "h4", md: "h3" },}} fontWeight="bold">
              Descarga la app desde la tienda de Google.
            </Typography>
            <Button
              size="large"
              variant="contained"
              color="third"
              sx={{
                borderRadius: "10px",
                margin: 3,
                display: { xs: "none", sm: "flex" },
              }}
              startIcon={<DownloadIcon />}
              href="https://play.google.com/store/apps/details?id=com.altared.dvex.clientes&hl=en&gl=US"
            >
              <Typography fontWeight="bold"> Descargar DEVEX </Typography>
            </Button>
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            sx={{ display: "flex", justifyContent: "center", marginBottom: 3 }}
          >
            <img
              src="../Images/google-play.png"
              alt="google-play"
              width="50%"
              // style={{margin:3}}
            />
          </Grid>

          <Grid item xs={12} sx={{ display: { xs: "block", sm: "none" } }}>
            <Button
              size="large"
              variant="contained"
              color="third"
              sx={{
                borderRadius: "10px",
                margin: 3,
                display: "flex",
              }}
              startIcon={<DownloadIcon />}
              href="https://play.google.com/store/apps/details?id=com.altared.dvex.clientes&hl=en&gl=US"
            >
              <Typography fontWeight="bold"> Descargar DEVEX </Typography>
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Slide>
  );
}
//hasta 4 perfiles
