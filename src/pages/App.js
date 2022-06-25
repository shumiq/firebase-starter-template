import { Container } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/AppBar/Header";
import Home from "./Home";
import Login from "./Login";
import Stock from "./Stock";
import EditStock from "./EditStock";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container sx={{ mt: "80px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/stock/new" element={<EditStock />} />
          <Route path="/stock/:id" element={<EditStock />} />
          <Route path="/stock" element={<Stock />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
