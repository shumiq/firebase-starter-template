import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Button, Paper, Stack, TextField } from "@mui/material";
import useDatabase from "../utils/hooks/useDatabase";

export default function EditStock() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { get, set, add } = useDatabase("stock");
  const formValue = useRef([]);
  const [data, setData] = useState();

  useEffect(() => {
    if (id)
      get(id).then((d) => {
        if (d) setData(d);
      });
  }, [id]);

  const handleSubmit = () => {
    const value = Object.fromEntries(
      formValue.current.map((input) => [input.name, input.value])
    );
    if (data?.id) set(data.id, value);
    else add(value);
    navigate("/stock");
  };
  return (
    <Paper
      elevation={2}
      sx={{ px: 2, maxWidth: "500px", mx: "auto", textAlign: "center" }}
    >
      {(!id || data) && (
        <Stack direction={"column"}>
          <TextField
            name="id"
            label="id"
            variant="outlined"
            disabled
            size={"small"}
            margin={"normal"}
            defaultValue={data?.id || ""}
            inputRef={(ref) => (formValue.current[0] = ref)}
            sx={{ display: data?.id ? "" : "none" }}
          />
          <TextField
            name="name"
            label="Name"
            variant="outlined"
            size={"small"}
            margin={"normal"}
            defaultValue={data?.name || ""}
            inputRef={(ref) => (formValue.current[1] = ref)}
          />
          <TextField
            name="amount"
            label="Amount"
            variant="outlined"
            type={"number"}
            size={"small"}
            margin={"normal"}
            defaultValue={data?.amount || 0}
            inputRef={(ref) => (formValue.current[2] = ref)}
          />
          <Stack direction={"row"}>
            <Button
              variant={"contained"}
              size={"small"}
              sx={{ mx: "auto", mb: 1 }}
              color={"error"}
              onClick={() => navigate("/stock")}
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
      )}
    </Paper>
  );
}
