import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { Login } from "./pages/login";
import { Regstr } from "./pages/regstr";
import { Home } from "./pages/home";

function App() {
  const navigate = useNavigate();

  const token = window.localStorage.getItem("token");
  console.log(token);
  !token ? navigate("/signin") : navigate("/");

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/regstr" element={<Regstr />} />
      </Routes>
    </>
  );
}

export default App;
