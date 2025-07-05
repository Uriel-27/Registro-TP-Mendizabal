export default function Login() {
  return (
    <form style={{ display: 'flex', flexDirection: 'column', width: 300, margin: 'auto' }}>
      <h2>Login</h2>
      <input placeholder="Email" />
      <input placeholder="Password" type="password" />
      <button>Ingresar</button>
    </form>
  );
}