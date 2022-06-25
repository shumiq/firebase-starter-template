import { Button, Paper, Stack, TextField, Typography } from "@mui/material";
import { useRef } from "react";
import useAuth from "../utils/hooks/useAuth";

export default function Login() {
  const formValue = useRef([]);
  const { user, signIn, signOut } = useAuth();
  const handleSubmit = () => {
    const value = Object.fromEntries(
      formValue.current.map((input) => [input.name, input.value])
    );
    signIn(value.email, value.password);
  };
  return (
    <Paper
      elevation={2}
      sx={{ px: 2, maxWidth: "500px", mx: "auto", textAlign: "center" }}
    >
      <Stack direction={"column"}>
        {!user && (
          <>
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
          </>
        )}
        {!!user && (
          <>
            <Typography p={5}>Hello {user.email}</Typography>
            <Button
              variant={"contained"}
              size={"small"}
              sx={{ mx: "auto", mb: 1 }}
              onClick={signOut}
              color={"error"}
            >
              Logout
            </Button>
          </>
        )}
      </Stack>
    </Paper>
  );
}
