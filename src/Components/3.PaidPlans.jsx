import { Button, Card, Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import Zoom from "react-reveal/Zoom";

export function PaidPlans() {
  return (
    <Box sx={{ margin: "5%" }}>
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        spacing={5}
      >
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Zoom cascade>
            <Card
              sx={{
                backgroundColor: "#263238",
                borderRadius: "10px",
              }}
              elevation={20}
            >
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <Paper sx={{ padding: "15px", borderRadius: "0 0 15px 15px" }}>
                  <Grid item>
                    <Typography
                      sx={{
                        typography: { xs: "h2", sm: "h2", md: "h1", lg: "h3" },
                        marginTop: 2,
                        display: "flex",
                        justifyContent: "center",
                      }}
                      fontWeight="bold"
                    >
                      Plan
                    </Typography>
                    <Typography
                      sx={{
                        typography: { xs: "h2", sm: "h2", md: "h1", lg: "h3" },
                        display: "flex",
                        justifyContent: "center",
                      }}
                      fontWeight="bold"
                    >
                      mensual
                    </Typography>
                  </Grid>
                </Paper>

                <Grid item>
                  <ul>
                    <li>
                      {" "}
                      <Typography
                        fontWeight="bold"
                        sx={{
                          typography: {
                            xs: "h5",
                            sm: "h5",
                            md: "h4",
                            lg: "h6",
                          },
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
                          typography: {
                            xs: "h5",
                            sm: "h5",
                            md: "h4",
                            lg: "h6",
                          },
                          margin: 1,
                        }}
                      >
                        {" "}
                        Hasta 4 usuarios.{" "}
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
                    href="https://api.whatsapp.com/send/?phone=543388433694&text=Hola+Juan%2C+te+quer%C3%ADa+consultar+sobre+el+plan+mensual+de+DEVEX&type=phone_number&app_absent=0"
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
          </Zoom>
        </Grid>
      </Grid>
    </Box>
  );
}
