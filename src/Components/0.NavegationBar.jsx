import { Grid, Paper } from "@mui/material";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import DownloadIcon from "@mui/icons-material/Download";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

export function NavegationBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar color='primary' position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
            <img
              src="../Images/devex-title.png"
              alt="DEVEX"
              width="330px"
              height="100px"
              style={{ borderRadius: "15px" }}
            />
          </Box>
          <Box sx={{ display: { sm: "block", md: "none" } }}>
            <img
              src="../Images/devex-logo.png"
              alt="DEVEX"
              width="100px"
              style={{ borderRadius: "5px" }}
            />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}></Box>

          <Box sx={{ flexGrow: 0  }}>
            {" "}
            <Button
              size="large"
              color="secondary"
              sx={{
                borderRadius: "10px",
                paddingRight: 5,
                display: { xs: "none", sm: "inline" },
              }}
              href="https://play.google.com/store/apps/details?id=com.altared.dvex.clientes&hl=en&gl=US"
            >
              Descarga la app
            </Button>
            <Button
              size="large"
              variant="outlined"
              color="secondary"
              sx={{
                borderRadius: "10px",
                display: { xs: "none", sm: "inline" },
              }}
            >
              Crear cuenta
            </Button>

            <Box sx={{ display: { xs: "inline", sm: "none" }, marginRight:'20px' }}>
              <a
                href="https://play.google.com/store/apps/details?id=com.altared.dvex.clientes&hl=en&gl=US"
                style={{ color: "white" }}
              >
                <DownloadIcon fontSize="large" />
              </a>
            </Box>

            <Box sx={{ display: { xs: "inline", sm: "none" } }}>
              <a href="" style={{ color: "white" }}>
                <AppRegistrationIcon fontSize="large" />
              </a>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
