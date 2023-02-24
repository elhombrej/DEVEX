import { Button, Card, Grid, Paper, Typography } from "@mui/material";
import React from "react";

export function PaidPlans() {
  return (
    <Paper
      sx={{
        minWidth: "100vw",
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        padding={2}
      >
        <Grid item>
          <Paper
            sx={{
              backgroundColor: "#263238",
              borderRadius: "10px",
            }}
          >
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={3}
              padding={2}
            >
              <Grid item>
                <Typography variant="h4" fontWeight="bold">
                  Plan mensual
                </Typography>
                <ul>
                  <li>
                    {" "}
                    <Typography fontWeight="bold">
                      {" "}
                      Disfruta en todas tus pantallas.{" "}
                    </Typography>
                  </li>
                  <li>
                    {" "}
                    <Typography fontWeight="bold">
                      {" "}
                      Hasta 4 usuarios{" "}
                    </Typography>
                  </li>
                </ul>
              </Grid>
              <Grid item>
                <Typography fontWeight="bold"> 1 mes </Typography>
              </Grid>
              <Grid item>
                <Typography fontWeight="bold"> $ 900,00 </Typography>
              </Grid>

              <Button
                size="large"
                variant="contained"
                color="third"
                sx={{ borderRadius: "10px", margin: 3 }}
              >
                <Typography fontWeight="bold"> ELIGE ESTE PLAN </Typography>
              </Button>
            </Grid>
          </Paper>
        </Grid>
        <Grid item>
          <Paper
            sx={{
              backgroundColor: "#263238",
            }}
          >
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={3}
              padding={2}
            >
              <Grid item>
                <Typography variant="h4" fontWeight="bold">
                  Plan mensual
                </Typography>
                <ul>
                  <li>
                    {" "}
                    <Typography fontWeight="bold">
                      {" "}
                      Disfruta en todas tus pantallas.{" "}
                    </Typography>
                  </li>
                  <li>
                    {" "}
                    <Typography fontWeight="bold">
                      {" "}
                      Hasta 4 usuarios{" "}
                    </Typography>
                  </li>
                </ul>
              </Grid>
              <Grid item>
                <Typography fontWeight="bold"> 1 mes </Typography>
              </Grid>
              <Grid item>
                <Typography fontWeight="bold"> $ 900,00 </Typography>
              </Grid>

              <Button
                size="large"
                variant="contained"
                color="third"
                sx={{ borderRadius: "10px", margin: 3 }}
              >
                <Typography fontWeight="bold"> ELIGE ESTE PLAN </Typography>
              </Button>
            </Grid>
          </Paper>
        </Grid>
        <Grid item>
          <Paper
            sx={{
              backgroundColor: "#263238",
            }}
          >
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={3}
              padding={2}
            >
              <Grid item>
                <Typography variant="h4" fontWeight="bold">
                  Plan mensual
                </Typography>
                <ul>
                  <li>
                    {" "}
                    <Typography fontWeight="bold">
                      {" "}
                      Disfruta en todas tus pantallas.{" "}
                    </Typography>
                  </li>
                  <li>
                    {" "}
                    <Typography fontWeight="bold">
                      {" "}
                      Hasta 4 usuarios{" "}
                    </Typography>
                  </li>
                </ul>
              </Grid>
              <Grid item>
                <Typography fontWeight="bold"> 1 mes </Typography>
              </Grid>
              <Grid item>
                <Typography fontWeight="bold"> $ 900,00 </Typography>
              </Grid>

              <Button
                size="large"
                variant="contained"
                color="third"
                sx={{ borderRadius: "10px", margin: 3 }}
              >
                <Typography fontWeight="bold"> ELIGE ESTE PLAN </Typography>
              </Button>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Paper>
  );
}
