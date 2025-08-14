import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Register() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    if (usuarios.some(u => u.email === email)) {
      alert('Este email ya está registrado');
      return;
    }

    const nuevoUsuario = { nombre, apellido, email, password };
    usuarios.push(nuevoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    alert('Registro exitoso');
    navigate('/'); // Redirige al login correctamente
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: '#f0f2f5'
    }}>
      <div style={{
        padding: '40px',
        borderRadius: '10px',
        background: '#fff',
        boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
        width: '350px',
        textAlign: 'center'
      }}>
        <h1 style={{ marginBottom: '20px', color: 'black' }}>Registro</h1>
        <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column' }}>
          <input placeholder="Nombre" value={nombre} onChange={e => setNombre(e.target.value)} required 
            style={{ padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
          <input placeholder="Apellido" value={apellido} onChange={e => setApellido(e.target.value)} required 
            style={{ padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required 
            style={{ padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
          <input type="password" placeholder="Contraseña" value={password} onChange={e => setPassword(e.target.value)} required 
            style={{ padding: '10px', marginBottom: '20px', borderRadius: '5px', border: '1px solid #ccc' }} />
          <button type="submit" style={{
            padding: '10px', 
            border: 'none', 
            borderRadius: '5px', 
            background: '#4CAF50', 
            color: '#fff',
            cursor: 'pointer'
          }}>Registrarse</button>
        </form>
        <p style={{ marginTop: '15px' }}>
          <Link to="/" style={{ color: '#4CAF50', textDecoration: 'none' }}>Iniciar sesión</Link>
        </p>
      </div>
    </div>
  );
}
