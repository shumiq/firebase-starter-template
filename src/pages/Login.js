import { Button, Paper, Stack, TextField } from "@mui/material";
import { useRef } from "react";

export default function Login() {
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
          name="email"
          label="Email"
          variant="outlined"
          type={"email"}
          size={"small"}
          margin={"normal"}
          inputRef={(ref) => (formValue.current[0] = ref)}
        />
        <TextField
          name="password"
          label="Password"
          variant="outlined"
          type={"password"}
          size={"small"}
          margin={"normal"}
          inputRef={(ref) => (formValue.current[1] = ref)}
        />
        <Button
          variant={"contained"}
          size={"small"}
          sx={{ mx: "auto", mb: 1 }}
          onClick={handleSubmit}
        >
          Login
        </Button>
      </Stack>
    </Paper>
  );
}
