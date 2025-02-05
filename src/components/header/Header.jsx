// src/components/header/Header.jsx
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa"; // Import the user icon
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <h1>Haventrace</h1>
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/missingcase" className="nav-link">Missing Case</Link>
          </li>
          <li className="nav-item">
            <Link to="/police" className="nav-link">Police Station</Link>
          </li>
          <li className="nav-item">
            <Link to="/emergency" className="nav-link">Emergency Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="header-user">
        <FaUserCircle className="user-icon" /> {/* User icon */}
      </div>
    </header>
  );
};

export default Header;
