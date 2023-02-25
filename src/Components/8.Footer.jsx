import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import ShopIcon from "@mui/icons-material/Shop";

export function Footer() {
  return (
    <Paper
    // sx={{
    //     minWidth: "100vw",
    //     minHeight: "70vh",
    //   }}
    >
      <Typography
        sx={{ display: "flex", justifyContent: "center", marginBottom: 3 }}
      >
        2023 DEVEX Argentina
      </Typography>
      <Typography
        sx={{ display: "flex", justifyContent: "center", marginBottom: 3 }}
      >
        Contacto de ventas: Juan Mattesich
      </Typography>

      <Typography
        sx={{ display: "flex", justifyContent: "center", marginBottom: 3 }}
      >
        Contacto de desarrollo web:
      <a href='https://portfolio-elhombrej.vercel.app'>Joaquin Padron</a>
      </Typography>

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={5}
        paddingBottom={5}
      >
        <Grid item>
          <a
            href="https://www.instagram.com/juan.dvex/"
            style={{ color: "white" }}
          >
            <InstagramIcon fontSize="large" />
          </a>
        </Grid>
        <Grid item>
          <a
            href="https://api.whatsapp.com/send/?phone=543388433694&text=Hola+Juan%2C+te+quer%C3%ADa+consultar+sobre+DVEX&type=phone_number&app_absent=0"
            style={{ color: "white" }}
          >
            <WhatsAppIcon fontSize="large" />
          </a>
        </Grid>
        <Grid item>
          <a
            href="mailto:mattessich84@gmail.com?subject=Me&body=Hola Juan, queria consultarte sobre DEVEX!"
            style={{ color: "white" }}
          >
            <MailIcon fontSize="large" />
          </a>
        </Grid>
        <Grid item>
          <a href="tel:543388433694" style={{ color: "white" }}>
            <PhoneIcon fontSize="large" />
          </a>
        </Grid>

        <Grid item>
          <a
            href="https://play.google.com/store/apps/details?id=com.altared.dvex.clientes&hl=en&gl=US"
            style={{ color: "white" }}
          >
            <ShopIcon fontSize="large" />
          </a>
        </Grid>
      </Grid>
    </Paper>
  );
}
