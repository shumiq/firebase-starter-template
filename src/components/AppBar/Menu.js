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
import { useNavigate } from "react-router-dom";
import useAuth from "../../utils/hooks/useAuth";

export default function Menu({ open, onClose }) {
  const { user } = useAuth();
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
          label={user ? user.email : "Login"}
          to={"/login"}
          icon={<AccountCircleIcon />}
          onClick={onClose}
        />
        {user !== null && (
          <MenuItem
            label={"Stock"}
            to={"/stock"}
            icon={<Inventory2Icon />}
            onClick={onClose}
          />
        )}
      </List>
    </Drawer>
  );
}

const MenuItem = ({ icon, label, to, onClick }) => {
  const navigate = useNavigate();
  return (
    <ListItem
      disablePadding
      onClick={() => {
        navigate(to);
        onClick();
      }}
    >
      <ListItemButton>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={label} />
      </ListItemButton>
    </ListItem>
  );
};
