import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import LoginRegister from './components/LoginRegister';
import CourtReservation from './components/ReserveCourt'; // Asegúrate de tener este componente
import CourtSchedule from './components/CourtSchedule';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LoginRegister />} />
        <Route path="/booking" element={<CourtReservation />} />
        <Route path="/schedule" element={<CourtSchedule />} />
      </Routes>
    </Router>
  );
}

export default App;
