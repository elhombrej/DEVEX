import { Button, Card, Box, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Zoom from "react-reveal/Zoom";
import { postPreference } from "../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import Popover from "@mui/material/Popover";

export function PaidPlans() {
  //form

  const [formState, setFormState] = useState({});

  const submitHandler = (event) => {
    event.preventDefault();
    const config = {
      // Host: "smtp.elasticemail.com",
      // Username: "m-ttech@outlook.com",
      // Password: "802976AB71D012630B3F5702E6DEDFA79E07",
      SecureToken: "cceea927-f2db-498e-a58d-69742655960b",
      To: "m-ttech@outlook.com",
      From: formState.email,
      Subject: "NUEVA COMPRA REALIZADA",
      Body: `${formState.name} pago correctamente el servicio de plan mensual. Su mail a registrar es: ${formState.email}`,
    };
    try {
      console.log(config)
      if (window.Email) {
        window.Email.send(config).then(() => alert('Sucess'));
      }
    } catch (error) {
      console.log(error);
    }
  };
  const changeHandler = (event) => {
    console.log(formState);
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  //popover variables
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  //mercado pago variables

  const dispatch = useDispatch();

  const [isComponentLoaded, setIsComponentLoaded] = useState(false);

  const preferenceId = useSelector((state) => state.myPreference);

  useEffect(() => {
    if (isComponentLoaded) {
      createCheckoutButton(preferenceId);
    }
  }, [preferenceId, isComponentLoaded]);

  const mercadopago = new MercadoPago(
    "TEST-3ee89de9-d50f-41a6-ad97-7af5aeedb414",
    {
      locale: "es-AR", // The most common are: 'pt-BR', 'es-AR' and 'en-US'
    }
  );

  function createCheckoutButton(preferenceIdLocal) {
    // Initialize the checkout
    mercadopago.checkout({
      preference: {
        id: preferenceIdLocal,
      },
      autoOpen: true,
    });
  }

  function handleClickPayment(element) {
    element.preventDefault();
    dispatch(postPreference());
    setIsComponentLoaded(true);
  }

  return (
    <Box sx={{ margin: "5%" }}>
      <Helmet>
        <script src="https://sdk.mercadopago.com/js/v2"></script>
        <script src="https://smtpjs.com/v3/smtp.js"></script>
      </Helmet>
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
                  <div>
                    <Button
                      aria-describedby={id}
                      variant="contained"
                      onClick={handleClick}
                    >
                      Open Popover
                    </Button>
                    <Popover
                      id={id}
                      open={open}
                      anchorEl={anchorEl}
                      onClose={handleClose}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "center",
                      }}
                      transformOrigin={{
                        vertical: "bottom",
                        horizontal: "center",
                      }}
                    >
                      <form
                        className="flex flex-col justify-center items-center"
                        onSubmit={submitHandler}
                      >
                        <input
                          type="text"
                          name="name"
                          placeholder="Your name"
                          value={formState.name || ""}
                          onChange={changeHandler}
                          className="border border-blue-900"
                        />
                        <input
                          type="email"
                          name="email"
                          placeholder="Your email"
                          value={formState.email || ""}
                          onChange={changeHandler}
                          className="border border-blue-900"
                        />
                        <Button variant='contained' type="submit" value="Send mail">Go!</Button>
                      </form>

                      <Button
                        size="large"
                        variant="contained"
                        color="third"
                        onClick={(element) => handleClickPayment(element)}
                        sx={{ borderRadius: "10px", margin: 3, padding: 2 }}
                      >
                        <Typography fontWeight="bold" variant="h5">
                          {" "}
                          PAGAR{" "}
                        </Typography>
                      </Button>
                    </Popover>
                  </div>
                  {/* <div id="#button-checkout"></div> */}
                </Grid>
              </Grid>
            </Card>
          </Zoom>
        </Grid>
      </Grid>
    </Box>
  );
}
