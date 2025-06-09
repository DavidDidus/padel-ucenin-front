import { useState } from 'react';
import type { FormEvent } from 'react';
import '../styles.css';
import RecoveryModal from './RecoveryModal';

const LoginRegister = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showRecovery, setShowRecovery] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(isLogin ? 'Iniciando sesión...' : 'Registrando usuario...');
  };

  return (
    <div className="login-container">
      <h1 className="title">PADEL UCENIN</h1>

      <button className="toggle-button" onClick={() => setIsLogin(!isLogin)}>
        {isLogin ?  'Registrarse' : 'Iniciar sesión'}
      </button>

      <form className="form" onSubmit={handleSubmit}>
        <input type="email" placeholder="Correo electrónico" required />
        <input type="password" placeholder="Contraseña" required />
        {!isLogin && <input type="text" placeholder="Nombre completo" required />}
        <button type="submit" className="submit-button">
          {isLogin ? 'Entrar' : 'Registrarse'}
        </button>
      </form>
      {isLogin && (
        <button
          style={{
            background: 'none',
            border: 'none',
            color: 'blue',
            textDecoration: 'underline',
            cursor: 'pointer',
            marginTop: '10px',
            fontSize: '14px'
          }}
          type="button"
          onClick={() => setShowRecovery(true)}
        >
          ¿Olvidaste tu usuario o contraseña?
        </button>
      )}
      <RecoveryModal open={showRecovery} onClose={() => setShowRecovery(false)} />
    </div>
  );
};

export default LoginRegister;
