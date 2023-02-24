import { Grid, Paper } from "@mui/material";
import React from "react";

export function Movies() {
  return (
    <Paper
    // sx={{
    //     minWidth: "100vw",
    //     minHeight: "70vh",
    //   }}
>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>Movies</Grid>
      </Grid>
    </Paper>
  );
}
