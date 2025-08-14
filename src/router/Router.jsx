import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import Dashboard from "../views/Dashboard";
import Login from "../views/Login";
import Register from "../views/Register";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product/:id" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}