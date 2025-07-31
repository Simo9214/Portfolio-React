import { Link } from 'react-router-dom';
import '../styles/Hero.css';

function Hero() {
  return (
    <section className="hero" id="hero">
      <h2>Ciao! Sono uno studente del corso Frontend</h2>
      <p>Web Developer - Realizzo esperienze web moderne</p>
      <Link to="/projects" className="cta-btn">Guarda i miei progetti</Link>
    </section>
  );
}

export default Hero;