import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const usuario = usuarios.find(u => u.email === email && u.password === password);

    if (!usuario) {
      alert('Email o contraseña incorrecta');
      return;
    }

    localStorage.setItem('usuarioLogueado', JSON.stringify(usuario));
    alert(`Bienvenido ${usuario.nombre}!`);
    navigate('/home');
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
        <h1 style={{ marginBottom: '20px', color: 'black' }}>Iniciar Sesión</h1>
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column' }}>
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={e => setEmail(e.target.value)} 
            required 
            style={{ padding: '10px', marginBottom: '15px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
          <input 
            type="password" 
            placeholder="Contraseña" 
            value={password} 
            onChange={e => setPassword(e.target.value)} 
            required 
            style={{ padding: '10px', marginBottom: '20px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
          <button type="submit" style={{
            padding: '10px', 
            border: 'none', 
            borderRadius: '5px', 
            background: '#4CAF50', 
            color: '#fff',
            cursor: 'pointer'
          }}>Ingresar</button>
        </form>
        <p style={{ marginTop: '15px' }}>
        <Link to="/Register" style={{ color: '#4CAF50', textDecoration: 'none' }}>Registrate</Link>
        </p>
      </div>
    </div>
  );
}