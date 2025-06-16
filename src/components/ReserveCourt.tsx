import React, { useState } from 'react';
import '../Styles/ReserveCourtStyles.css';

const horarios = [
  '08:00 - 09:00',
  '09:00 - 10:00',
  '10:00 - 11:00',
  '11:00 - 12:00',
  '12:00 - 13:00',
  '13:00 - 14:00',
  '14:00 - 15:00',
  '15:00 - 16:00',
  '16:00 - 17:00',
  '17:00 - 18:00',
  '18:00 - 19:00',
  '19:00 - 20:00',
];

const canchas = ['Cancha 1', 'Cancha 2', 'Cancha 3'];

const reservasIniciales: { [key: string]: boolean } = {
  'Cancha 1-2024-04-24-10:00 - 11:00': true,
  'Cancha 2-2024-04-24-12:00 - 13:00': true,
};

const CourtReservation: React.FC = () => {
  const [fecha, setFecha] = useState('2024-04-24');
  const [hora, setHora] = useState(horarios[2]);
  const [seleccion, setSeleccion] = useState<string | null>(null);
  const [reservas] = useState(reservasIniciales);

  const handleCanchaClick = (cancha: string) => {
    const key = `${cancha}-${fecha}-${hora}`;
    if (!reservas[key]) {
      setSeleccion(cancha);
    }
  };

  return (
    <div style={{ maxWidth: 480, margin: '2rem auto', fontFamily: 'Arial, sans-serif' }}>
      {/* Fecha */}
      <div className="rc-box">
        <label style={{ fontWeight: 'bold' }}>📅 Fecha:</label>
        <input
          type="date"
          value={fecha}
          onChange={(e) => {
            setFecha(e.target.value);
            setSeleccion(null);
          }}
          style={{ fontSize: '16px', padding: '4px' }}
        />
      </div>

      {/* Hora */}
      <div className="rc-box">
        <label style={{ fontWeight: 'bold' }}>🕒 Hora:</label>
        <select
          value={hora}
          onChange={(e) => {
            setHora(e.target.value);
            setSeleccion(null);
          }}
          style={{ fontSize: '16px', padding: '4px' }}
        >
          {horarios.map((h) => (
            <option key={h} value={h}>
              {h}
            </option>
          ))}
        </select>
      </div>

      {/* Lista de canchas */}
      <div className="rc-box" style={{ flexDirection: 'column', padding: 0 }}>
        {canchas.map((cancha) => {
          const key = `${cancha}-${fecha}-${hora}`;
          const estaReservada = reservas[key];
          const estaSeleccionada = seleccion === cancha;

          return (
            <div
              key={cancha}
              onClick={() => handleCanchaClick(cancha)}
              className="rc-cancha-item"
              style={{
                backgroundColor: estaSeleccionada ? '#e0f7fa' : 'white',
                cursor: estaReservada ? 'not-allowed' : 'pointer',
                color: estaReservada ? '#ccc' : '#000',
              }}
            >
              <span><b>{cancha}</b></span>
              <span style={{ color: estaReservada ? 'red' : 'green', fontWeight: 600 }}>
                {estaReservada ? 'RESERVADO' : 'DISPONIBLE'}
              </span>
            </div>
          );
        })}
      </div>

      {/* Botón Reservar */}
      <button
        className="rc-reservar-btn"
        style={{
          backgroundColor: seleccion ? '#0a0' : '#888',
          cursor: seleccion ? 'pointer' : 'not-allowed',
        }}
        disabled={!seleccion}
        onClick={() => alert(`¡Reserva confirmada para ${seleccion} el ${fecha} a las ${hora}!`)}
      >
        RESERVAR
      </button>
    </div>
  );
};

export default CourtReservation;