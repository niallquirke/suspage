import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";

import Link from "./Link";

const Navbar = () => {
  return (
    <AppBar
      position="static"
      sx={{ bgcolor: "#fff", boxShadow: 0, borderBottom: "1px solid #dbdbdb" }}
    >
      <Container maxWidth="md">
        <Toolbar disableGutters>
          <Link href="/" underline="none" sx={{ color: "#000", flexGrow: 1 }}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ fontWeight: "bold" }}
            >
              🌍 SusPage
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 0, mr: 2 }}>
            <Tooltip title="Add">
              <IconButton sx={{ p: 0 }}>
                <AddRoundedIcon fontSize="large" />
              </IconButton>
            </Tooltip>
          </Box>
          <Box sx={{ flexGrow: 0, mr: 0 }}>
            <Link href="/profile">
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="Niall Quirke" src="profiler.jpg" />
              </IconButton>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
