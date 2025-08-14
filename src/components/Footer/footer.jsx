import { Link } from "react-router-dom";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="main-footer">
      <p>© 2025 Mi Tienda</p>
      <div className="footer-links">
        <Link to="/contacto" className="footer-link">Contacto</Link>
        <Link to="/acerca" className="footer-link">Acerca de</Link>
        <Link to="/soporte" className="footer-link">Soporte</Link>
      </div>
    </footer>
  );
}
