import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <header>
        <h1 className="logo">ILYAS</h1>
        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/company">The Company</Link>
            </li>
          </ul>
        </nav>
        <Link to="/contact">
          <button>Contact</button>
        </Link>
      </header>
    </div>
  );
}

export default Header;
