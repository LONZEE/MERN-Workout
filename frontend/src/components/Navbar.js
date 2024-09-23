import { Link } from 'react-router-dom';
import logo from '../images/pump.png';

const Navbar = () => {
    return (
        <header>
            <nav className="navbar">
                <Link to="/" className="nav-logo">
                <img src={logo} alt="PUMP Nation Logo" className="nav-logo-img" />
                </Link>
                <div className="nav-menu">
                    <Link to="/api/workouts" className="nav-item">Workouts</Link>
                    <Link to="/cardio" className="nav-item">Cardio</Link>
                    <Link to="/contact" className="nav-item">Graph</Link>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
