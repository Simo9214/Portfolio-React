import { useState } from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <h1>Il Mio Portfolio</h1>
      <button className="burger" onClick={toggleMenu} aria-label="Menu">&#9776;</button>
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/projects" onClick={() => setMenuOpen(false)}>Progetti</Link></li>
        <li><Link to="/cv" onClick={() => setMenuOpen(false)}>CV</Link></li>
        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contatti</Link></li>
        <li><Link to="/testimonianze" onClick={() => setMenuOpen(false)}>Feedback</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
