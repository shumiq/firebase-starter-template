import { Container } from "@mui/material";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "../components/AppBar/Header";
import Home from "./Home";
import Login from "./Login";
import Stock from "./Stock";
import EditStock from "./EditStock";
import useAuth from "../utils/hooks/useAuth";

function App() {
  const { user } = useAuth();
  return (
    <BrowserRouter>
      <Header />
      <Container sx={{ mt: "80px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          {user !== null && (
            <>
              <Route path="/stock/new" element={<EditStock />} />
              <Route path="/stock/:id" element={<EditStock />} />
              <Route path="/stock" element={<Stock />} />
            </>
          )}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
