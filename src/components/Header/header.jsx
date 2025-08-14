import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <header className="main-header">
      <h1 className="logo">Mi Tienda</h1>
      <nav className="nav-buttons">
        <Link to="/home" className="nav-link">PRODUCTOS</Link>
        <Link to="/" className="nav-link">INICIAR SESION</Link>
        <Link to="/register" className="nav-link">REGISTRARSE</Link>
      </nav>
    </header>
  );
}
