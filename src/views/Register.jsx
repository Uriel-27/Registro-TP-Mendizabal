export default function Register() {
  return (
    <form style={{ display: 'flex', flexDirection: 'column', width: 300, margin: 'auto' }}>
      <h2>Registro</h2>
      <input placeholder="Nombre" />
      <input placeholder="Apellido" />
      <input placeholder="Email" />
      <input placeholder="Teléfono" />
      <input placeholder="Contraseña" type="password" />
      <button>Registrarse</button>
    </form>
  );
}