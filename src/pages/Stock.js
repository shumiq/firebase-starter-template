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
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import useDatabase from "../utils/hooks/useDatabase";

export default function Stock() {
  const navigate = useNavigate();
  const { snapshot, remove } = useDatabase("stock");
  const handleDelete = (item) => {
    if (item && window.confirm(`Delete ${item.name}?`)) remove(item.id);
  };
  return (
    <>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">name</TableCell>
              <TableCell align="right">amount</TableCell>
              <TableCell width={"80px"}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {snapshot.length > 0 &&
              snapshot.map((item) => (
                <TableRow key={item.id}>
                  <TableCell align="left">{item.name}</TableCell>
                  <TableCell align="right">{item.amount}</TableCell>
                  <TableCell align="center">
                    <IconButton onClick={() => navigate(`/stock/${item.id}`)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => handleDelete(item)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Fab
        color="primary"
        aria-label="add"
        sx={{ position: "fixed", right: 10, bottom: 10 }}
        onClick={() => navigate("/stock/new")}
      >
        <AddIcon />
      </Fab>
    </>
  );
}
