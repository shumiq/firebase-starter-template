import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import { Link } from "react-router-dom";

export default function Menu({ open, onClose }) {
  return (
    <Drawer open={open} onClose={onClose}>
      <List sx={{ minWidth: "250px" }}>
        <MenuItem
          label={"Home"}
          to={"/"}
          icon={<HomeIcon />}
          onClick={onClose}
        />
        <MenuItem
          label={"Login"}
          to={"/login"}
          icon={<AccountCircleIcon />}
          onClick={onClose}
        />
        <MenuItem
          label={"Stock"}
          to={"/stock"}
          icon={<Inventory2Icon />}
          onClick={onClose}
        />
      </List>
    </Drawer>
  );
}

const MenuItem = ({ icon, label, to, onClick }) => {
  return (
    <ListItem
      disablePadding
      as={Link}
      to={to}
      sx={{ color: "initial" }}
      onClick={onClick}
    >
      <ListItemButton>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={label} />
      </ListItemButton>
    </ListItem>
  );
};
