import "./header.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <header
        style={{
          backgroundColor: theme === "dark" ? "#f0f0f0" : "#333",
          color: theme === "light" ? "#000" : "#fff"
        }}
      >
        <h1 className="logo">ILYAS</h1>
        <nav>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/company">The Company</Link></li>
          </ul>
        </nav>
        <div>
          <button onClick={toggleTheme}>
            Switch to {theme === "light" ? "Dark" : "Light"} Theme
          </button>
          <Link to="/contact">
            <button>Contact</button>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Header;
