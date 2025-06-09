import React, { useState } from 'react';

interface RecoveryModalProps {
  open: boolean;
  onClose: () => void;
}

const RecoveryModal: React.FC<RecoveryModalProps> = ({ open, onClose }) => {
  const [email, setEmail] = useState('');

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Se enviarán instrucciones de recuperación a: ${email}`);
    setEmail('');
    onClose();
  };

   return (
    <div className="recovery-modal-overlay">
      <div className="recovery-modal-content">
        <button
          className="recovery-modal-close"
          onClick={onClose}
          aria-label="Cerrar"
        >
          ×
        </button>
        <h2>Recuperar usuario o contraseña</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Ingresa tu correo electrónico"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            style={{ width: '95%', marginBottom: '1rem', padding: '0.5rem' }}
          />
          <button type="submit" className="submit-button" style={{ width: '100%' }}>
            Enviar instrucciones
          </button>
        </form>
      </div>
    </div>
  );
};

export default RecoveryModal;