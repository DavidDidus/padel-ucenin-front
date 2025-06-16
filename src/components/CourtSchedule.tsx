import React, { useState } from 'react';

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

// Simulación de reservas por día
const reservasIniciales: { [key: string]: boolean } = {
  'Cancha 1-2025-06-16-10:00 - 11:00': true,
  'Cancha 2-2025-06-16-12:00 - 13:00': true,
  'Cancha 1-2025-06-17-09:00 - 10:00': true,
};

function getToday() {
  const today = new Date();
  return today.toISOString().split('T')[0];
}

const CourtSchedule: React.FC = () => {
  const [fecha, setFecha] = useState(getToday());
  const [reservas] = useState<{ [key: string]: boolean }>(reservasIniciales);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Horarios de Reserva de Canchas</h2>
      <div style={{ marginBottom: '1rem' }}>
        <label>
          Selecciona el día:{' '}
          <input
            type="date"
            value={fecha}
            onChange={e => setFecha(e.target.value)}
            style={{ fontSize: '16px', padding: '4px' }}
          />
        </label>
      </div>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Horario</th>
            {canchas.map(cancha => (
              <th key={cancha} style={{ border: '1px solid #ccc', padding: '8px' }}>{cancha}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {horarios.map(horario => (
            <tr key={horario}>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>{horario}</td>
              {canchas.map(cancha => {
                const key = `${cancha}-${fecha}-${horario}`;
                const reservado = reservas[key];
                return (
                  <td
                    key={cancha}
                    style={{
                      border: '1px solid #ccc',
                      padding: '8px',
                      background: reservado ? '#f8d7da' : '#d4edda',
                      color: reservado ? '#721c24' : '#155724',
                      textAlign: 'center',
                    }}
                  >
                    {reservado ? 'Reservado' : 'Disponible'}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CourtSchedule;