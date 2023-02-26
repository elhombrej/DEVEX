import { Grid } from "@mui/material";
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export function FAQ() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ marginRight: {sm:'5%', md:0}, marginLeft:{sm:'5%', md:0} , marginTop:'5%' }}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={5}
      >
        <Grid
          item
          // sx={{ display: "flex", justifyContent: "center" }}
        >
          <Typography
            sx={{ typography: { xs: "h5", sm: "h2", md: "h2" } }}
            fontWeight="bold"
          >
            ¿Tienes preguntas sobre DEVEX?
          </Typography>
        </Grid>
        <Grid item>
          <Box
            sx={{
              flexGrow: 1,
              bgcolor: "background.paper",
              display: "flex",
              height: "100%",
              width: { xs: "100%", sm: "100%", md: "800px", lg: "800px" },
            }}
          >
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              sx={{ borderRight: 1, borderColor: "divider" }}
            >
              <Tab label="¿Que es DEVEX?" {...a11yProps(0)} />
              <Tab label=" ¿Tiene prueba gratuita DEVEX?" {...a11yProps(1)} />
              <Tab
                label=" ¿En que dispositivos puedo usar DEVEX?"
                {...a11yProps(2)}
              />
              <Tab
                label="¿Como cancelo la subscripcion a DEVEX?"
                {...a11yProps(3)}
              />
              <Tab label="¿Que puedo ver en DEVEX?" {...a11yProps(4)} />
              <Tab
                label="¿Hay contenido para niños en DEVEX?"
                {...a11yProps(5)}
              />
              <Tab label="¿Como renuevo mi subscripcion?" {...a11yProps(6)} />
            </Tabs>
            <Box
              sx={{
                flexGrow: 1,
                bgcolor: "background.paper",
                display: "flex",
                height: "100%",
                width: { xs: "100%", sm: "100%" },
              }}
            >
              <TabPanel value={value} index={0}>
                Devex es una plataforma de straming donde puede disfrutar de
                multiples servicios de Tv, series, peliculas y radio sin
                necesidad de pagar demas.
              </TabPanel>
              <TabPanel value={value} index={1}>
                ¡Si! DEVEX tiene su prueba gratuita para que pruebes todos los
                servicios disponibles sin ingresar ningun tipo de informacion
                previa, solicita una cuenta de prueba contactandose con el
                sector de ventas, la cuenta dura un corto periodo de tiempo y si
                esta satisfecho con el servicio puede elegir un plan
                contactandose.
              </TabPanel>

              <TabPanel value={value} index={2}>
                DEVEX esta disponible en dipositivos compatibles con el sistema
                Android, sean televisores inteligentes, celulares, tablets, o
                dispositivos multimedia.
              </TabPanel>
              <TabPanel value={value} index={3}>
                La subscripcion de DEVEX es prepaga, por lo que al acabarse el
                plazo de su pago ya no tendra acceso a la plataforma y nada se
                le cobrara, solicitar nuevamente el servicio no cuesta ningun
                cargo adicional, solamente el pago del plan a elegir.
              </TabPanel>
              <TabPanel value={value} index={4}>
                DEVEX cuenta con una extensa lista de canales de television por
                cable, series y peliculas de distintos servicios de streaming y
                radio de distintos paises unidos en una sola plataforma.
              </TabPanel>
              <TabPanel value={value} index={5}>
                DEVEX esta completo de canales, series y peliculas para niños de
                todas las edades e incluso canales sobre una sola serie para
                disfrutar en cualquier momento.
              </TabPanel>
              <TabPanel value={value} index={6}>
                <Typography
                variant="h6">
                  Para renovar su subscripcion a DEVEX y poder disprutar de todo
                  el contenido primero debe haber elegido un plan de pago, al
                  finalizar su periodo debe contactarse por cualquiera de los
                  medios de contacto con el asistente de ventas quien se
                  encargara de proveer su nuevo codigo de acceso.
                </Typography>
              </TabPanel>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
