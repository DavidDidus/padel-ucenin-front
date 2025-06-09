import '../styles.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <span role="img" aria-label="logo">🎾</span> PADEL UCENIN
      </div>
      <nav className="nav">
        <a href="#">CANCHA</a>
        <a href="#">EQUIPAMENTO</a>
        <a href="#">MEMBRESIA</a>
      </nav>
    </header>
  );
};

export default Header;
