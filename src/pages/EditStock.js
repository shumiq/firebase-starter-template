import { Link, useParams } from "react-router-dom";
import { useRef } from "react";
import { Button, Paper, Stack, TextField } from "@mui/material";

export default function EditStock() {
  const { id } = useParams();
  const formValue = useRef([]);
  const handleSubmit = () => {
    const value = Object.fromEntries(
      formValue.current.map((input) => [input.name, input.value])
    );
    console.log(value);
  };
  return (
    <Paper
      elevation={2}
      sx={{ px: 2, maxWidth: "500px", mx: "auto", textAlign: "center" }}
    >
      <Stack direction={"column"}>
        <TextField
          name="id"
          label="id"
          variant="outlined"
          disabled
          defaultValue={id}
          size={"small"}
          margin={"normal"}
          inputRef={(ref) => (formValue.current[0] = ref)}
          sx={{ display: id ? "" : "none" }}
        />
        <TextField
          name="name"
          label="Name"
          variant="outlined"
          size={"small"}
          margin={"normal"}
          inputRef={(ref) => (formValue.current[1] = ref)}
        />
        <TextField
          name="amount"
          label="Amount"
          variant="outlined"
          type={"number"}
          size={"small"}
          margin={"normal"}
          inputRef={(ref) => (formValue.current[2] = ref)}
        />
        <Stack direction={"row"}>
          <Button
            variant={"contained"}
            size={"small"}
            sx={{ mx: "auto", mb: 1, textDecoration: "none" }}
            onClick={handleSubmit}
            color={"error"}
            as={Link}
            to={"/stock"}
          >
            Cancel
          </Button>
          <Button
            variant={"contained"}
            size={"small"}
            sx={{ mx: "auto", mb: 1 }}
            onClick={handleSubmit}
            color={"success"}
          >
            {id && "Save"}
            {!id && "Create"}
          </Button>
        </Stack>
      </Stack>
    </Paper>
  );
}
