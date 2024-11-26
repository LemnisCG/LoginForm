import { useEffect, useState } from 'react';
import { Button } from './Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorContraseña, setErrorContraseña] = useState('');
  const db = {
    email: 'juan@gmail.com',
    password: 'mamavito',
  };

  useEffect(() => {
    if (email && email !== db.email) {
      setErrorEmail('Email incorrecto');
    } else {
      setErrorEmail('');
    }
  }, [email]);
  useEffect(() => {
    if (contraseña && contraseña !== db.password) {
      setErrorContraseña('Contraseña incorrecto');
    } else {
      setErrorContraseña('');
    }
  }, [contraseña]);
  function handleInputEmail(event) {
    setEmail(event.target.value);
  }
  function handleInputPass(event) {
    setContraseña(event.target.value);
  }
  function validarUsuario(e) {
    e.preventDefault();
    if (email === db.email && contraseña === db.password) {
      alert('Logeado correctamente');
    } else {
      alert('Email o contraseña incorrectos');
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 flex-column">
      <form className="card p-5" action="">
        <h1 className="mb-3">Iniciar Sesión</h1>
        <div className="form-group mb-3">
          <label htmlFor="email">Direccion de correo electrónico</label>
          <input
            className="form-control"
            type="email"
            id="email"
            placeholder="Introducir correo electrónico"
            onChange={handleInputEmail}
            value={email}
          />
          {errorEmail ? <p>{errorEmail}</p> : ''}
        </div>
        <div className="form-group mb-3">
          <label htmlFor="password">Contraseña</label>
          <input
            className="form-control"
            type="password"
            id="password"
            placeholder="Contraseña"
            onChange={handleInputPass}
            value={contraseña}
          />
          {errorContraseña ? <p>{errorContraseña}</p> : ''}
        </div>
        <Button variant="primary" onClick={validarUsuario}>
          Entrar
        </Button>
      </form>
    </div>
  );
}
