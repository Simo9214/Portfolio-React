import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
    

    return (
        <nav className="navbar">
        <h1> Frontend Portfolio</h1>

        <ul className={"nav-links"}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/progetti">Progetti</Link></li>
        <li><Link to="/cv">CV</Link></li>
        <li><Link to="/feedback">Feedback</Link></li>
        <li><Link to="/contatti">Contatti</Link></li>
    
        </ul>
        </nav>
    );
}

export default Navbar;