import "./header.css";

export default function Header() {
  return (
    <header className="main-header">
      <h1 className="logo">Mi Tienda</h1>
      <nav className="nav-buttons">
        <button>Inicio</button>
        <button>Productos</button>
        <button>Login</button>
        <button>Registro</button>
      </nav>
    </header>
  );
}