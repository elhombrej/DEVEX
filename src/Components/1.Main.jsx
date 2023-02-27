import { Grid, Paper, Typography, Box } from "@mui/material";
import React from "react";
import Zoom from "react-reveal/Zoom";
import mainPhoto from "../../public/Images/main-photo.jpg";
import { makeStyles } from "@mui/styles";
import { style } from "@mui/system";

export function Main() {
  const classes = useStyles();

  return (
    // <Zoom>
    <Box
      sx={{
        minHeight: " 50vh",
        position: "relative",
        // backgroundImage: `url(${mainPhoto})`,
      }}
      className={classes.bgImage}
    >
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{            backgroundColor: "#37474a93"
      }}
      >
        <Grid
          item
          paddingTop={10}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src="./Images/devex-title.png"
            alt="DEVEX"
            width="90%"
          />
        </Grid>
        <Grid
          item
          sx={{
            marginBottom: "5%",
            marginRight: "5%",
            marginLeft: "5%",
          }}
        >
          <Typography
            fontWeight="bold"
            sx={{
              display: "flex",
              typography: {
                xs: "body",
                sm: "h5",
                md: "h5",
                lg: "h4",
                xl: "h3",
              },
              // backgroundColor: "#37474a93",
              borderRadius: "10px",
              justifyContent: "center",
              padding: 0.5,
            }}
          >
            Series, peliculas, Tv y radio en un solo lugar.
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            // margin="5%"
            sx={{
              display: "flex",
              fontSize: { xs: "10px", sm: "15px", md: "15px", lg: "20px" },
              // backgroundColor: "#37474a93",
              borderRadius: "10px",
              justifyContent: "center",
              padding: 0.5,
            }}
            marginBottom="1%"
          >
            ¡Haz hoy tu prueba gratis y disfruta todo el entretenimiento!
          </Typography>
        </Grid>
      </Grid>
    </Box>
    // </Zoom>
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
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
}));
