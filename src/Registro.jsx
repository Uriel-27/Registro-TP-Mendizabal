import React from 'react';

function Registro() {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Registro</h2>
      <form style={styles.form}>
        <input type="text" placeholder="Nombre" style={styles.input} />
        <input type="text" placeholder="Apellido" style={styles.input} />
        <input type="email" placeholder="Email" style={styles.input} />
        <input type="tel" placeholder="Teléfono" style={styles.input} />
        <input type="password" placeholder="Contraseña" style={styles.input} />
        <input type="password" placeholder="Confirmar Contraseña" style={styles.input} />
        <button type="submit" style={styles.button}>Registrarse</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    fontFamily: 'Arial, sans-serif'
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column'
  },
  input: {
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc'
  },
  button: {
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  }
};

export default Registro;