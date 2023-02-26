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
    <Box sx={{ margin: "5%" }}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={5}
      >
        <Grid
          item
          sx={{ display: "flex", justifyContent: "center", marginBottom: 3 }}
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
              height: 400,
              width: { xs: "100%", sm: "100%" },
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
              <Tab label="¿Cuanto cuesta DEVEX?" {...a11yProps(1)} />
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
              <Tab label=" ¿Tiene prueba gratuita DEVEX?" {...a11yProps(6)} />
            </Tabs>
            <Box
              sx={{
                flexGrow: 1,
                bgcolor: "background.paper",
                display: "flex",
                height: 400,
                width: { xs: "100%", sm: "100%" },
              }}
            >
              <TabPanel value={value} index={0}>
                Devex es una plataforma de straming
              </TabPanel>
              <TabPanel value={value} index={1}>
                ¿Cuanto cuesta DEVEX?
              </TabPanel>
              <TabPanel value={value} index={2}>
                ¿En que dispositivos puedo usar DEVEX?
              </TabPanel>
              <TabPanel value={value} index={3}>
                ¿Como cancelo la subscripcion a DEVEX?
              </TabPanel>
              <TabPanel value={value} index={4}>
                ¿Que puedo ver en DEVEX?
              </TabPanel>
              <TabPanel value={value} index={5}>
                ¿Hay contenido para niños en DEVEX?
              </TabPanel>
              <TabPanel value={value} index={6}>
                ¿Tiene prueba gratuita DEVEX?
              </TabPanel>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
