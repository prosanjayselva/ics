import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">

      <div className="nav-left">
        <img src={logo} alt="ICS Logo" />
      </div>

      <div className="nav-right">

        {/* MOBILE MENU BUTTON */}
        <div
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* NAVIGATION */}
        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/services" onClick={() => setMenuOpen(false)}>Services</NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
        </nav>

      </div>

    </header>
  );
}

export default Navbar;
