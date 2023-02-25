import { Button, Card, Paper, Grid, Typography } from "@mui/material";
import React from "react";

export function PaidPlans() {
  return (
    <Paper sx={{ margin: "5%" }}>
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        spacing={5}
      >
        <Grid item xs={12} sm={12} md={12} lg={3}>
          <Card
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
            >
              <Grid item>
                <Typography
                  sx={{
                    typography: { xs: "h2", sm: "h2", md: "h1", lg: "h3" },
                    margin: 3,
                  }}
                  fontWeight="bold"
                >
                  Plan mensual
                </Typography>
              </Grid>
              <Grid item>
                <ul>
                  <li>
                    {" "}
                    <Typography
                      fontWeight="bold"
                      sx={{
                        typography: { xs: "h5", sm: "h5", md: "h4", lg: "h6" },
                        margin: 1,
                      }}
                    >
                      {" "}
                      Disfruta en todas tus pantallas.{" "}
                    </Typography>
                  </li>
                  <li>
                    {" "}
                    <Typography
                      fontWeight="bold"
                      sx={{
                        typography: { xs: "h5", sm: "h5", md: "h4", lg: "h6" },
                        margin: 1,
                      }}
                    >
                      {" "}
                      Hasta 4 usuarios{" "}
                    </Typography>
                  </li>
                </ul>
              </Grid>

              <Grid item>
                <Typography
                  fontWeight="bold"
                  sx={{
                    typography: { xs: "h3", sm: "h3", md: "h4", lg: "h4" },
                  }}
                >
                  {" "}
                  1 mes{" "}
                </Typography>
              </Grid>

              <Grid item>
                <Typography
                  fontWeight="bold"
                  sx={{
                    typography: { xs: "h2", sm: "h2", md: "h2", lg: "h2" },
                  }}
                >
                  {" "}
                  $ 900,00{" "}
                </Typography>
              </Grid>

              <Grid item>
                <Button
                  size="large"
                  variant="contained"
                  color="third"
                  sx={{ borderRadius: "10px", margin: 3, padding: 2 }}
                >
                  <Typography fontWeight="bold" variant="h5">
                    {" "}
                    ELIGE ESTE PLAN{" "}
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={3}>
          <Card
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
            >
              <Grid item>
                <Typography
                  sx={{
                    typography: { xs: "h2", sm: "h2", md: "h1", lg: "h3" },
                    margin: 3,
                  }}
                  fontWeight="bold"
                >
                  Plan de 3 meses
                </Typography>
              </Grid>
              <Grid item>
                <ul>
                  <li>
                    {" "}
                    <Typography
                      fontWeight="bold"
                      sx={{
                        typography: { xs: "h5", sm: "h5", md: "h4", lg: "h6" },
                        margin: 1,
                      }}
                    >
                      {" "}
                      Disfruta en todas tus pantallas.{" "}
                    </Typography>
                  </li>
                  <li>
                    {" "}
                    <Typography
                      fontWeight="bold"
                      sx={{
                        typography: { xs: "h5", sm: "h5", md: "h4", lg: "h6" },
                        margin: 1,
                      }}
                    >
                      {" "}
                      Hasta 4 usuarios{" "}
                    </Typography>
                  </li>
                </ul>
              </Grid>

              <Grid item>
                <Typography
                  fontWeight="bold"
                  sx={{
                    typography: { xs: "h3", sm: "h3", md: "h4", lg: "h4" },
                  }}
                >
                  {" "}
                  1 mes{" "}
                </Typography>
              </Grid>

              <Grid item>
                <Typography
                  fontWeight="bold"
                  sx={{
                    typography: { xs: "h2", sm: "h2", md: "h2", lg: "h2" },
                  }}
                >
                  {" "}
                  $ 900,00{" "}
                </Typography>
              </Grid>

              <Grid item>
                <Button
                  size="large"
                  variant="contained"
                  color="third"
                  sx={{ borderRadius: "10px", margin: 3, padding: 2 }}
                >
                  <Typography fontWeight="bold" variant="h5">
                    {" "}
                    ELIGE ESTE PLAN{" "}
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={3}>
          <Card
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
            >
              <Grid item>
                <Typography
                  sx={{
                    typography: { xs: "h2", sm: "h2", md: "h1", lg: "h3" },
                    margin: 3,
                  }}
                  fontWeight="bold"
                >
                  Plan anual
                </Typography>
              </Grid>
              <Grid item>
                <ul>
                  <li>
                    {" "}
                    <Typography
                      fontWeight="bold"
                      sx={{
                        typography: { xs: "h5", sm: "h5", md: "h4", lg: "h6" },
                        margin: 1,
                      }}
                    >
                      {" "}
                      Disfruta en todas tus pantallas.{" "}
                    </Typography>
                  </li>
                  <li>
                    {" "}
                    <Typography
                      fontWeight="bold"
                      sx={{
                        typography: { xs: "h5", sm: "h5", md: "h4", lg: "h6" },
                        margin: 1,
                      }}
                    >
                      {" "}
                      Hasta 4 usuarios{" "}
                    </Typography>
                  </li>
                </ul>
              </Grid>

              <Grid item>
                <Typography
                  fontWeight="bold"
                  sx={{
                    typography: { xs: "h3", sm: "h3", md: "h4", lg: "h4" },
                  }}
                >
                  {" "}
                  1 mes{" "}
                </Typography>
              </Grid>

              <Grid item>
                <Typography
                  fontWeight="bold"
                  sx={{
                    typography: { xs: "h2", sm: "h2", md: "h2", lg: "h2" },
                  }}
                >
                  {" "}
                  $ 900,00{" "}
                </Typography>
              </Grid>

              <Grid item>
                <Button
                  size="large"
                  variant="contained"
                  color="third"
                  sx={{ borderRadius: "10px", margin: 3, padding: 2 }}
                >
                  <Typography fontWeight="bold" variant="h5">
                    {" "}
                    ELIGE ESTE PLAN{" "}
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Paper>
  );
}
