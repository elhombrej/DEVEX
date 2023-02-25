import { Grid, Paper, Typography, Box } from "@mui/material";
import React from "react";
import Zoom from "react-reveal/Zoom";
import mainPhoto from "../../public/Images/main-photo.jpg";
import { makeStyles } from "@mui/styles";
import { style } from "@mui/system";

export function Main() {

    const classes = useStyles();

  return (
    <Zoom>
      <Box
        sx={{
          minHeight: "70vh",
          position: "relative",
          // backgroundImage: `url(${mainPhoto})`,
        }}
        className={classes.bgImage}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid
            item
            sx={{
              padding: { xs: 0, sm: 0, md: 20 },
              paddingTop: { xs: 20, sm: 20 },
            }}
          >
            <Typography
              fontWeight="bold"
              margin= "5%"
              sx={{
                display: "flex",
                typography: { xs: "h3", sm: "h2", md: "h2", lg: "h1" },
                backgroundColor: "#37474a93",
                borderRadius: "20px",
              }}
            >
              Series, peliculas, Tv y radio en un solo lugar.
            </Typography>
          </Grid>
          <Grid item>
            <Typography
                margin= "5%"
              sx={{
                display: "flex",
                typography: { xs: "body", sm: "h6" },
                backgroundColor: "#37474a93",
                borderRadius: "10px",
              }}
              fontWeight="bold"
            >
              ¡Haz hoy tu prueba gratis y disfruta todo el entretenimiento!
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Zoom>
  );
}

const useStyles = makeStyles(() => ({
  imageStyle: {
    width: "100%",
    minHeight: "100vh",
    height: "100%",
  },

  bg: {
    backgroundColor: "#ecefef",
  },

  bgImage: {
    backgroundImage: `url(${mainPhoto})`,
margin:'auto'  
  },
}));
