import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "./Menu";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div">
            Firebase Starter
          </Typography>
        </Toolbar>
      </AppBar>
      <Menu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
