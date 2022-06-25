import {
  Fab,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Stock() {
  return (
    <>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">id</TableCell>
              <TableCell align="left">name</TableCell>
              <TableCell align="right">amount</TableCell>
              <TableCell width={"80px"}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center">0</TableCell>
              <TableCell align="left">item1</TableCell>
              <TableCell align="right">2</TableCell>
              <TableCell align="center">
                <Link to={"/stock/0"}>
                  <IconButton>
                    <EditIcon />
                  </IconButton>
                </Link>
                <IconButton>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">1</TableCell>
              <TableCell align="left">item351</TableCell>
              <TableCell align="right">5</TableCell>
              <TableCell align="center">
                <Link to={"/stock/1"}>
                  <IconButton>
                    <EditIcon />
                  </IconButton>
                </Link>
                <IconButton>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Link to={"/stock/new"}>
        <Fab
          color="primary"
          aria-label="add"
          sx={{ position: "fixed", right: 10, bottom: 10 }}
        >
          <AddIcon />
        </Fab>
      </Link>
    </>
  );
}
