import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { Footer } from "./8.Footer";
import { NavegationBar } from "./0.NavegationBar";
import { Main } from "./1.Main";
import { Channels } from "./4.Channels";
import { FAQ } from "./7.FAQ";
import { Movies } from "./5.Movies";
import { Tv } from "./6.Tv";
import { Details } from "./2.Details";
import { PaidPlans } from "./3.PaidPlans";
import Slide from "react-reveal/Slide";
import Zoom from "react-reveal/Zoom";

export function Home({ mode, setMode }) {
  return (
    <Paper
      sx={{
        minHeight: "100vh",
        minWidth: "100vw",
        // overflow: "clip",
      }}
      xs={12}
    >
      <Slide top>
        <NavegationBar />
      </Slide>

      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={15}
      >
        <Grid item>
          <Main />
        </Grid>
        <Grid item>
          <Details />
        </Grid>
        <Grid item>
          <PaidPlans />
        </Grid>
        <Grid item>
          <Channels />
        </Grid>
        {/* <Grid item>
          <Movies />
        </Grid>
        <Grid item>
          <Tv />
        </Grid> */}
        <Grid item>
          <FAQ />
        </Grid>
        <Grid item>
          <Zoom>
            <Footer />
          </Zoom>
        </Grid>
      </Grid>
    </Paper>
  );
}
